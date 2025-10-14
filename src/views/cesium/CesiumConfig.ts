
import {
  Ion, Viewer, Terrain
} from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

declare global {
  interface Window {
    CESIUM_BASE_URL?: string;
  }
}
window.CESIUM_BASE_URL = `/${import.meta.env.VITE_BASE_PATH}/node_modules/cesium/Build/Cesium`;

export class CesiumConfig {
  private static init = false;
  public static initCesium() {
    if (CesiumConfig.init) {
      return;
    }
    CesiumConfig.init = true;
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZDU3OTY4ZC02ODkyLTQyOGItOGU1NC0yMWFjMTk2YzRhZjEiLCJpZCI6MzQ5OTIyLCJpYXQiOjE3NjAzNDE5NDd9.msb1daO4dC5VRVQ3k7IyACsiyS-04ISzw6ttGW1Z7j8';
  }
  public static createViewer(dom: string | Element, params?: Record<string, any>): Viewer {
    const viewer = new Viewer(dom, {
      terrain: Terrain.fromWorldTerrain(),
      ...(params || {}),
    });
    return viewer;
  }
}