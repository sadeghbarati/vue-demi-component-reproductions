<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import WrapperComponent from './component-3.2'

const componentInstance = ref<InstanceType<typeof WrapperComponent> | null>(null)

onMounted(() => {
  // nextTick(() => {
  //   console.log(componentInstance.value?.target)
  // })
})

// CustomEvent initialize
function initializeFn({ detail }: CustomEvent) {
  console.log('emit from CustomEvent javascript')
  console.log(detail)
}

// emit vue
function beforeMountFn() {
  console.log('emit from Vue')
}

function clickFn() {
  console.log('click event')
  alert('ok')
}
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper">
  
        <WrapperComponent @initialize="initializeFn" @before-mount="beforeMountFn" @click="clickFn">
          <h1>Vue 3.2 Component</h1>
          <h2>See console</h2>
        </WrapperComponent>
  
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
