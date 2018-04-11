<template>
  <div id="app">
    <VueSvgFiller src="src/assets/graph.svg" fill="#f00"/>
    <VueSvgFiller src="src/assets/account.svg" fill="#0f0"/>
    <VueSvgFiller src="src/assets/alert.svg" fill="#00f"/>
  </div>
</template>

<script>
import VueSvgFiller from './vue-svg-filler'

export default {
  name: 'app',
  components: {
    VueSvgFiller
  }
}
</script>

<style scoped>
</style>
