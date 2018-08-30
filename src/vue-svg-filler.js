export default {
  name: 'vue-svg-filler',
  render (c) {
    return c('svg', {
      style: { 'vertical-align': 'middle' },
      attrs: {
        viewBox: this.viewBox,
        width: this.width,
        height: this.height,
        fill: this.fillColor,
        stroke: this.strokeColor
      },
      on: {
        mouseover: () => this.mouseHoverEvent('over'),
        mouseleave: () => this.mouseHoverEvent('leave'),
        click: (event) => this.$emit('click', event)
      }
    }, [c('path', { attrs: { d: this.dataOfPath } })])
  },
  props: {
    path: {
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
    },
    hoverColor: {
      type: String
    },
    stroke: {
      type: String,
      default: 'none'
    },
    hoverStrokeColor: {
      type: String
    }
  },
  data () {
    return {
      viewBox: '0 0 24 24',
      dataOfPath: '',
      fillColor: '#000',
      strokeColor: 'none'
    }
  },
  mounted () {
    this.createSvgElement()
  },
  watch: {
    fill (val) {
      this.updateFillColor(val)
    },
    stroke (val) {
      this.updateStrokeColor(val)
    },
    path () {
      this.createSvgElement()
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
          this.viewBox = tagSvg.getAttribute('viewBox')
          this.updateSrcSvgElement(pathOfSvg.getAttribute('d'))
          this.updateFillColor(this.fill)
          this.updateStrokeColor(this.stroke)
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
    updateFillColor (val) {
      this.fillColor = val
    },
    updateStrokeColor (val) {
      this.strokeColor = val
    },
    mouseHoverEvent (event) {
      if (event === 'over') {
        if (this.hoverColor) this.updateFillColor(this.hoverColor)
        if (this.hoverStrokeColor) this.updateStrokeColor(this.hoverStrokeColor)
      } else {
        if (this.hoverColor) this.updateFillColor(this.fill)
        if (this.hoverStrokeColor) this.updateStrokeColor(this.stroke)
      }
    },
    _errorLog (log) {
      console.error(`[ERROR] : vue-svg-filler, ${log}`)
    }
  }
}