import { defineComponent, h, onBeforeMount, onMounted, ref, useListeners } from 'vue-demi'
import Lib from './lib'

// Vue wrapper for the library
export default defineComponent({
  name: 'WrapperComponent',
  emits: {
    beforeMount: () => true,
  },
  setup(props, { slots, emit, attrs, listeners, expose }) {
    const target = ref<HTMLElement | null>(null)

    onBeforeMount(() => {
      emit('beforeMount')
    })

    onMounted(() => {

      // vanilla js lib that use CustomEvent
      new Lib(target.value!)

    })

    expose({
      target,
    })

    return (() => {
      return h('div', { ref: target, on: listeners }, slots.default && slots.default())
    }) as unknown as { target: typeof target }
  },
})

