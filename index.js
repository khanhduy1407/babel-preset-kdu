import KduJSX from 'babel-plugin-transform-kdu-jsx'
import JsxEventModifiers from 'babel-plugin-jsx-event-modifiers'
import JsxKModel from 'babel-plugin-jsx-k-model'
import JsxKduFunctional from 'babel-plugin-jsx-kdu-functional'

export default {
  plugins: [
    JsxEventModifiers,
    JsxKModel,
    JsxKduFunctional,
    KduJSX
  ]
}
