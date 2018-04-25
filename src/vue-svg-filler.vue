<template>
  <svg id="vue-svg-filler"
  :viewBox="viewBox"
  :width="widthData"
  :height="heightData"
  :fill="fillData"
  @mouseover="hoverColor ? updateFillSvgElement(hoverColor) : null"
  @mouseleave="hoverColor ? updateFillSvgElement(fill) : null"
  @click="$emit('click')">
    <path :d="dataOfPath"/>
  </svg>
</template>

<script>
export default {
  name: 'vue-svg-filler',
  props: {
    path: {
      type: String,
      required: true
    },
    fill: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    hoverColor: {
      type: String
    }
  },
  data () {
    return {
      dataOfPath: '',
      fillData: '',
      widthData: '',
      heightData: '',
      viewBox: '0 0 24 24'
    }
  },
  mounted () {
    this.createSvgElement()
  },
  watch: {
    path (val) {
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
      const dir = window.location.origin
      const source = this.path.substring(0, 1) === '/' ? `${dir}${this.path}` : `${dir}/${this.path}`
      const request = new XMLHttpRequest()
      request.open('GET', source, true)
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const domParser = new DOMParser()
          const elementSvg = domParser.parseFromString(request.responseText, 'text/xml')
          const tagSvg = elementSvg.getElementsByTagName('svg')[0]
          const pathOfSvg = elementSvg.getElementsByTagName('path')[0]
          if (!pathOfSvg) {
            _errorLog(`No svg path element in your svg file.\nPath : ${source}`)
            return
          }
          console.log(tagSvg)
          this.updateViewBox(tagSvg.getAttribute('viewBox'))
          this.updateSrcSvgElement(pathOfSvg.getAttribute('d'))
          this.updateFillSvgElement(this.fill)
          this.updateWidthSvgElement(this.width)
          this.updateHeightSvgElement(this.height)
        } else {
          _errorLog(`Can't load element from this path.\nPath : ${source}`)
        }
      }
      request.onerror = () => {
        _errorLog(`Can't load element from this path.\nPath : ${source}`)
      }
      request.send()
    },
    updateSrcSvgElement (val) {
      val ? this.dataOfPath = val : _errorLog(`Can't get attribute 'd' from your SVG file.`)
    },
    updateFillSvgElement (val) {
      this.fillData = val
    },
    updateWidthSvgElement (val) {
      this.widthData = val
    },
    updateHeightSvgElement (val) {
      this.heightData = val
    },
    updateViewBox (val) {
      if (val) this.viewBox = val
    },
    _errorLog (log) {
      console.error(`[ERROR] : vue-svg-filler, ${log}`)
    }
  }
}
</script>

<style scoped>
#vue-svg-filler {
  vertical-align: middle;
}
</style>
