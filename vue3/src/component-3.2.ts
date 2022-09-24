import { defineComponent, h, onBeforeMount, onMounted, ref, isVue3 } from 'vue-demi'
import Lib from './lib'

// Vue wrapper for the library
export default defineComponent({
  name: 'WrapperComponent',
  emits: {
    beforeMount: () => true,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const target = ref<HTMLElement | null>(null)

    onBeforeMount(() => {
      emit('beforeMount')
    })

    onMounted(() => {

      // vanilla js lib that use CustomEvent
      new Lib(target.value!)

    })

    expose({ target })

    return (() => {

      // @events and CustomEvents working without attrs in Vue 3
      return h('div', { ref: target, }, slots.default && slots.default())
    }) as unknown as { target: typeof target }

    // return (() => {
    //   if(isVue3) {
    //     return h('div', { ref: target, attrs }, slots.default && slots.default())
    //   } else {
    //     return h('div', { ref: target, on: listeners, attrs }, slots.default && slots.default())
    //   }
    // })
  },
})

