
<p align="center">
  <a href="https://npmjs.com/package/vue-svg-filter"><img src="https://img.shields.io/npm/v/vue-svg-filter.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-svg-filter"><img src="https://img.shields.io/npm/dm/vue-svg-filter.svg?style=flat" alt="NPM downloads"></a>
</p>

# vue-svg-filler 🎨

> Vue component for change fill color and size of svg form your path.

# Install

```sh
npm install vue-svg-filler --save
```
# Usage
```javascript
import svgFiller from 'vue-svg-filler'

Vue.component('svg-filler', svgFiller)
```
🚨 Note : `src` must be full path e.g.  `src/assets/icon.svg` or `static/icon.svg`, Can't use `../` or `./`
```html
<svg-filler src="PATH/OF/YOUR/SVG/FILE.svg"/>
```

# Example

## Default
<img src="./demo/assets/ex1.png"/>

```html
<template>
  <div>
    <svg-filler src="demo/assets/account.svg"/>
  </div>
</template>
```

## Custom fill & size
<img src="./demo/assets/ex2.png"/>

```html
<template>
  <div>
    <svg-filler src="demo/assets/alert.svg" fill="#f00" width="50px" height="50px"/>
  </div>
</template>
```

## Event @click.native
<img src="./demo/assets/ex3.png"/>

```html
<template>
  <div>
    <svg-filler src="demo/assets/graph.svg"
      :fill="svgGraph.fill"
      :width="svgGraph.width"
      :height="svgGraph.height"
      @click.native="randomColor()"/>
    <h2 :style="{ 'color': svgGraph.fill }">{{ svgGraph.fill }}</h2>
    <span>Click icon for change color</span>
  </div>
</template>

<script>
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgGraph: {
        fill: '#c2f91d',
        width: '150px',
        height: '150px'
      }
    }
  },
  methods: {
    randomColor () {
      this.svgGraph.fill = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
    }
  },
  components: {
    SvgFiller
  }
}
</script>
```

# Options

## Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| src         | String        | -        | Path of your svg file   |
| width       | String        | 24px     | Width |
| height      | String        | 24px     | Height |
| fill        | String        | #000     | Svg color |

## Events
| Name          | Type          | Description  |
| --------------|:--------------|--------------|
| [any].native | event: $event  | Listen to any native event, e.g. `click.native`|

# Run demo in local.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
# License

[MIT](LICENSE)

Developed with ❤️ and ☕️
