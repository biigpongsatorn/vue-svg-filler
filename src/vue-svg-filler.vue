<template>
  <div>
    <svg ref="svg-template"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 24 24"
      :style="{ 'fill': fillData, 'width': widthData, 'height': heightData }">
      <path :d="dataOfPath"/>
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
    },
    width: {
      type: String,
      default: '24px'
    },
    height: {
      type: String,
      default: '24px'
    }
  },
  data () {
    return {
      dataOfPath: '',
      fillData: '#000',
      widthData: '24px',
      heightData: '24px'
    }
  },
  mounted () {
    this.createSvgElement()
  },
  watch: {
    src (val) {
      this.createSvgElement()
    },
    fill (val) {
      this.updateFillSvgElement(val)
    },
    width (val) {
      this.updateWidthSvgElement(val)
    },
    height (val) {
      this.updateHeightSvgElement(val)
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
          this.updateFillSvgElement(this.fill)
          this.updateWidthSvgElement(this.width)
          this.updateHeightSvgElement(this.height)
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
    updateFillSvgElement (val) {
      this.fillData = val
    },
    updateWidthSvgElement (val) {
      this.widthData = val
    },
    updateHeightSvgElement (val) {
      this.heightData = val
    }
  }
}
</script>

<style scoped>
</style>
