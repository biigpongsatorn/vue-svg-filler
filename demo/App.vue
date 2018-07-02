<template>
  <div id="app">
    <h1>Simple</h1>
    <div class="card">
      <svg-filler path="static/github.svg"/>
    </div>
    <h1>Custom Fill & Size</h1>
    <div class="card">
      <svg-filler path="static/icon/bitcoin.svg" fill="#FF9900" width="50px" height="50px"/>
    </div>
    <h1>Click</h1>
    <div class="card">
      <svg-filler path="static/icon/palette.svg"
        :fill="svgPalette.fill"
        stroke="#f00"
        hover-stroke-color="#0f0"
        :width="svgPalette.width"
        :height="svgPalette.height"
        @click="svgPalette.fill = randomColor()"/>
      <h2 :style="{ 'color': svgPalette.fill }">{{ svgPalette.fill }}</h2>
      <span>Click icon for change color</span>
    </div>
    <h1>Hover</h1>
    <div class="card">
      <svg-filler path="static/vuejs.svg"
        :hover-color="svgVuejs.hoverColor"
        :fill="svgVuejs.fill"
        :width="svgVuejs.width"
        :height="svgVuejs.height"/>
      <div>Hover me !</div>
    </div>
  </div>
</template>

<script>
// For test development environment.
// import SvgFiller from '../src/vue-svg-filler'

// For test buit file.
import SvgFiller from '../dist/vue-svg-filler.min.js'

export default {
  name: 'app',
  data () {
    return {
      svgPalette: {
        fill: this.randomColor(),
        width: '150px',
        height: '150px'
      },
      svgVuejs: {
        fill: '#42b883',
        width: '150px',
        height: '150px',
        hoverColor: '#35495e'
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
  cursor: pointer;
  float: left;
  width: 100%;
  padding: 25px;
  border: 1px solid #ccc;
  text-align: center;
  margin-bottom: 25px;
}
</style>
