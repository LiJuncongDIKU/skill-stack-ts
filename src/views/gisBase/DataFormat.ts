import { Cartesian3, Color, GridMaterialProperty, HeightReference, Entity, HeadingPitchRange, Math, Viewer } from "cesium";

export class GisDataFormat {
  public static baseGraph?: Entity;
  public static drawPrimitive(viewer: Viewer) {
    if (GisDataFormat.baseGraph) {
      viewer.flyTo(GisDataFormat.baseGraph, {
        offset: new HeadingPitchRange(Math.toRadians(0), Math.toRadians(-45), 2500)
      });
      return;
    }
    // 绘制基础的几何图形
    GisDataFormat.baseGraph = viewer.entities.add({
      polygon: {
        hierarchy: Cartesian3.fromDegreesArray([
          113.19233, 23.5236, 113.19533, 23.5236, 113.19533, 23.52036, 113.19233, 23.52036, 113.19233, 23.5236
        ]),
        // height: 2,
        heightReference: HeightReference.CLAMP_TO_TERRAIN,
        material: new GridMaterialProperty()
      },
    });
    viewer.entities.add({
      polygon: {
        hierarchy: Cartesian3.fromDegreesArray([
          113.19533, 23.5236, 113.19833, 23.5236, 113.19833, 23.52036, 113.19533, 23.52036, 113.19533, 23.5236,
        ]),
        height: 8,
        heightReference: HeightReference.CLAMP_TO_TERRAIN,
        material: new GridMaterialProperty({ color: Color.LIGHTCYAN, cellAlpha: 0.8 })
      },
      position: Cartesian3.fromDegrees(113.19533, 23.5236),
      label: {
        backgroundColor: Color.LIGHTCYAN,
        text: '多边形基于地形高度/固定高度',
        fillColor: Color.BLACK,
        showBackground: false,
        heightReference: HeightReference.CLAMP_TO_TERRAIN,
        font: '12px sans-serif',
        pixelOffset: new Cartesian3(0, 0, 50)
      }
    });
    viewer.entities.add({
      name: "glb的模型加载",
      position: Cartesian3.fromDegrees(113.19533, 23.5166),
      model: {
        uri: new URL('../../assets/glb/machine_microscope.glb', import.meta.url).href,
        scale: 2.0,
        minimumPixelSize: 200, // 距离越远，模型最小像素尺寸（避免缩成点）
        heightReference: HeightReference.RELATIVE_TO_GROUND, // 相对地面高度
        color: Color.WHITE
      },
      label: {
        backgroundColor: Color.LIGHTCYAN,
        text: 'glb的模型加载',
        fillColor: Color.BLACK,
        showBackground: true,
        heightReference: HeightReference.CLAMP_TO_TERRAIN,
        pixelOffset: new Cartesian3(10, 10, 50)
      }

    });
    console.log("🚀 ~ GisDataFormat ~ drawPrimitive ~ viewer.entities:", viewer.entities);

    viewer.flyTo(GisDataFormat.baseGraph, {
      offset: new HeadingPitchRange(Math.toRadians(0), Math.toRadians(-80), 1500)
    });
  }
}