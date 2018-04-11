<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="240" height="240" viewBox="0 0 240 240">
      <path :d="dataOfPath" :fill="colorOfFill"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'vue-svg-filler',
  props: {
    src: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      dataOfPath: '',
      colorOfFill: '#000'
    }
  },
  mounted () {
    this.createSvgElement()
  },
  watch: {
    src (val) {
      this.updateSrcSvgElement(val)
    },
    fill (val) {
      this.updateColorSvgElement(val)
    }
  },
  methods: {
    createSvgElement () {
      const request = new XMLHttpRequest()
      request.open('GET', this.src, true)
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const domParser = new DOMParser()
          const elementSvg = domParser.parseFromString(request.responseText, 'text/xml')
          const pathOfSvg = elementSvg.getElementsByTagName('path')[0]
          if (!pathOfSvg) {
            console.error(`[ERROR] : vue-svg-filler, No svg path element in your svg file.`)
            return
          }
          this.updateSrcSvgElement(pathOfSvg.getAttribute('d'))
          this.updateColorSvgElement(this.fill)
        } else {
          console.error(`[ERROR] : vue-svg-filler, Can't load src.`)
        }
      }
      request.onerror = () => {
        console.error(`[ERROR] : vue-svg-filler, Can't load src.`)
      }
      request.send()
    },
    updateSrcSvgElement (val) {
      this.dataOfPath = val
    },
    updateColorSvgElement (val) {
      this.colorOfFill = val
    }
  }
}
</script>

<style scoped>
</style>
