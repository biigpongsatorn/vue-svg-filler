<template>
  <div id="app">
    <h1>Simple</h1>
    <div class="card">
      <svg-filler path="static/account.svg"/>
    </div>
    <h1>Custom Fill & Size</h1>
    <div class="card">
      <svg-filler path="static/alert.svg" fill="#f00" width="50px" height="50px"/>
    </div>
    <h1>@click.native</h1>
    <div class="card">
      <svg-filler path="static/icon/graph.svg"
        style="cursor: pointer;"
        :fill="svgGraph.fill"
        :width="svgGraph.width"
        :height="svgGraph.height"
        @click.native="svgGraph.fill = randomColor()"/>
      <h2 :style="{ 'color': svgGraph.fill }">{{ svgGraph.fill }}</h2>
      <span>Click icon for change color</span>
    </div>
    <h1>Hover</h1>
    <div class="card">
      <svg-filler path="static/icon/bell-ring.svg"
        hover-color="#000"
        :fill="svgBell.fill"
        :width="svgBell.width"
        :height="svgBell.height"/>
      <div>Hover me !</div>
    </div>
  </div>
</template>

<script>
// For test development environment.
import SvgFiller from '../src/vue-svg-filler'

// For test buit file.
// import SvgFiller from '../dist/vue-svg-filler.min.js'

export default {
  name: 'app',
  data () {
    return {
      svgGraph: {
        fill: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`,
        width: '150px',
        height: '150px'
      },
      svgBell: {
        fill: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`,
        width: '150px',
        height: '150px'
      }
    }
  },
  methods: {
    randomColor () {
      return `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
    }
  },
  components: {
    SvgFiller
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
#app {
  width: 300px;
  margin: 0 auto;
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
