<template>
  <div id="app">
    <h1>Default</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/alert.svg"/>
    </div>
    <h1>Chane Fill & Size</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/account.svg" fill="#00f" width="50px" height="50px"/>
    </div>
    <h1>Event @click.native</h1>
    <div class="card">
      <VueSvgFiller src="demo/assets/graph.svg"
        style="cursor: pointer;"
        :fill="svgGraph.fill"
        :width="svgGraph.width"
        :height="svgGraph.height"
        @click.native="randomColor()"/>
      <h2 :style="{ 'color': svgGraph.fill }">{{ svgGraph.fill }}</h2>
      <span>Click icon for change color</span>
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
        fill: '#ff0000',
        width: '100px',
        height: '100px'
      }
    }
  },
  methods: {
    randomColor () {
      this.svgGraph.fill = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
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
