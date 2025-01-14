const __module__ = __modules__["App.vue"] = {}
/* Analyzed bindings: {
  "AntdVueButton": "setup-maybe-ref",
  "TButton": "setup-maybe-ref"
} */
import { defineComponent as _defineComponent } from 'vue'
import { createTextVNode as _createTextVNode, unref as _unref, withCtx as _withCtx, createVNode as _createVNode, resolveComponent as _resolveComponent, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "container" }

import { Button as AntdVueButton } from 'ant-design-vue'
import { Button as TButton } from 'tdesign-vue-next'

const __sfc__ = _defineComponent({
  __name: 'App',
  setup(__props) {

// import { Button as DeltaButton } from '@tencent/delta-component'

return (_ctx,_cache) => {
  const _component_a_button = _resolveComponent("a-button")
  const _component_a_space = _resolveComponent("a-space")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[7] || (_cache[7] = _createTextVNode(" AntdVueButton ")),
    _createVNode(_unref(AntdVueButton), null, {
      default: _withCtx(() => _cache[0] || (_cache[0] = [
        _createTextVNode("AntdVueButton")
      ])),
      _: 1 /* STABLE */
    }),
    _createVNode(_unref(TButton), null, {
      default: _withCtx(() => _cache[1] || (_cache[1] = [
        _createTextVNode("TButton")
      ])),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_space, null, {
      default: _withCtx(() => [
        _createVNode(_component_a_button, { type: "primary" }, {
          default: _withCtx(() => _cache[2] || (_cache[2] = [
            _createTextVNode("Primary")
          ])),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_a_button, null, {
          default: _withCtx(() => _cache[3] || (_cache[3] = [
            _createTextVNode("Secondary")
          ])),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_a_button, { type: "dashed" }, {
          default: _withCtx(() => _cache[4] || (_cache[4] = [
            _createTextVNode("Dashed")
          ])),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_a_button, { type: "outline" }, {
          default: _withCtx(() => _cache[5] || (_cache[5] = [
            _createTextVNode("Outline")
          ])),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_a_button, { type: "text" }, {
          default: _withCtx(() => _cache[6] || (_cache[6] = [
            _createTextVNode("Text")
          ])),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
}

})
__sfc__.__file = "App.vue"
__module__.default = __sfc__