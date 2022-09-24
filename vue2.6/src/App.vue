<script lang="ts">
/* eslint-disable import/first */
export default {
  name: 'App',
}
</script>

<script setup lang="ts">
import { ref, onMounted, nextTick } from '@vue/composition-api'
import WrapperComponent from './component-2.6'

const componentInstance = ref<InstanceType<typeof WrapperComponent> | null>(null)

onMounted(() => {
  nextTick(() => {
    console.log(componentInstance.value?.target)
  })
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
  console.log('click event') // this is not working without this.$listeners vue2.6
  alert('ok')
}
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">

        <WrapperComponent @initialize="initializeFn" @beforeMount="beforeMountFn" @click="clickFn">
          <h1>Vue 2.6 Component</h1>
          <h2>See console</h2>
        </WrapperComponent>

      </div>
    </header>
  </div>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
