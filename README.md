# `vue-demi` component

`vue-demi` point is to create package that comptaible with Vue **2.6** (+ @vue/composition-api), Vue **2.7** and Vue **3**

---

Suppose I want to create a wrapper component from a vanilla JavaScript package and Ofc I'm using `vue-demi` **Package Aliasing** for changing Vue entry

Assume that package uses CustomEvents 

`src/lib.ts` sample lib that use CustomEvents

`src/component-2.6.ts`

`src/component-2.7.ts`

`src/component-3.2.ts`

---

I think `isVue2` or `isVue3` is good handle this kinda Vue API because there will be no type error if you change Vue entry with vue-demi

```ts
const modelValueProp = isVue3 ? 'modelValue' : 'value'
const updateModelValue = isVue3 ? 'update:modelValue' : 'input'
```

If I use `isVue` for `$this.listener` or `listener` or `useListener`,

`listener` and `useListener` is only available in `2.7` so type error will show up when switch entry with `vue-demi`
```ts
import { defineComponent, h ref, isVue3 } from 'vue-demi'
defineComponent({
  name: 'WrapperComponent',
  setup(props, { attrs, slots, listeners }) {
    const target = ref<HTMLElement | null>(null)

    return (() => {
      if(isVue3) {
        return h('div', { ref: target, attrs }, slots.default && slots.default())
      } else {
        return h('div', { ref: target, on: listeners, attrs }, slots.default && slots.default())
      }
    })
  },
})
```




