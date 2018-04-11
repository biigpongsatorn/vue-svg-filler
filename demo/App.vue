<template>
  <div id="app">
    <h1>Default</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/alert.svg"/>
    </div>
    <h1>Chane Fill</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/account.svg" :fill="svgAccount.fill" @click="svgAccount.fill = '#a4a4a4'"/>
      <br>
      <span>Click me for change color</span>
    </div>
    <h1>Chage Fill & Size</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/graph.svg" :fill="svgGraph.fill" :width="svgGraph.width" :height="svgGraph.height"/>
    </div>
  </div>
</template>

<script>
import VueSvgFiller from '../src/vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgGraph: {
        fill: '#f00',
        width: '100px',
        height: '100px'
      },
      svgAccount: {
        fill: '#0f0'
      }
    }
  },
  components: {
    VueSvgFiller
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.card {
  float: left;
  width: 100%;
  padding: 25px;
  border: 1px solid #ccc;
  text-align: center;
  margin-bottom: 25px;
}
</style>
