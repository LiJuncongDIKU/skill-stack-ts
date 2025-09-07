/**
 * 作为一个构建工具，对静态资源的处理是开发者非常关心的。
 * Vite的引入和处理使用类似地址参数的方式，这非常高效和直观，因此特意提出这部分内容。
 * 
 */

// 在生产构建中将会分离出 chunk
import Worker from './shader.js?worker'
const worker = new Worker()

// 资源可以使用 ?raw 后缀声明作为字符串引入。
import shaderString from './shader.glsl?raw'

// 未被包含在内部列表或 assetsInclude 中的资源，可以使用 ?url 后缀显式导入为一个 URL。
import workletURL from 'extra-scalloped-border/worklet.js?url'
CSS.paintWorklet.addModule(workletURL)

// 可以分别使用?inline或?no-inline后缀，明确导入带内联或不带内联的静态资源。
import imgUrl1 from './img.svg?no-inline'
import imgUrl2 from './img.png?inline'