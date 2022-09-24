import { defineComponent, h, onBeforeMount, onMounted, ref } from 'vue-demi'
import Lib from './lib' // a sample library that uses CustomEvent

// Vue wrapper for the library
export default defineComponent({
  name: 'WrapperComponent',
  emits: {
    'before-mount': () => true,
  },
  setup(props, { emit, listeners, slots }) {
    const target = ref<HTMLElement | null>(null)

    onBeforeMount(() => {
      emit('before-mount')
    })

    onMounted(() => {

      // vanilla js lib that use CustomEvent
      new Lib(target.value!)
      
    })

    return {
      target
    }
    // return (() => {
    //   return h('div', { ref: 'target' }, slots.default && slots.default())
    // })
  },
  render() {
    /**
     * see {@link https://v2.vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components}
     * native events and CutomEvent binding to component in Vue 2.6 with $listeners
     * 
     * just remove this.$listeners and test App.vue events and CustomEvents will not work
     */
    return h('div', { ref: 'target', on: this.$listeners, }, [
      h('div', this.$slots.default),
    ])
  },
  // expose ref ?
  // methods: {
  //   target: () => {
  //     return this?.$refs.target
  //   }
  // }
})

