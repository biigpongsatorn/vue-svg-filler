
<p align="center">
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/v/vue-svg-filler.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/dm/vue-svg-filler.svg?style=flat" alt="NPM downloads"></a>
</p>

# vue-svg-filler 🖍 

> 🎨 Vue component for customize your svg file.

# Demo

[Vue SVG Filler Demo Page](https://vue-svg-filler.netlify.com/)

# Install

```sh
npm install vue-svg-filler --save
```
# Usage
```javascript
import SvgFiller from 'vue-svg-filler'

Vue.component('svg-filler', SvgFiller)
```
## 🚨 Please note that ! 

1. Your `svg` file must only contain in `/static` directory
2. `path` must be full path e.g. `static/icon.svg` or `/static/icon/file.svg` , Can't use `../` or `./`

```html
<svg-filler path="static/PATH/OF/YOUR/FILE.svg"/>
```
### Example directory structure

```
my-project
├── ...
│
├── src
├── static
│   ├── icon
│   │    └── graph.svg
│   ├── account.svg
│   └── alert.svg
│
└── ...
```

# Example

## Simple usage
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex1.png"/>

```html
<svg-filler path="static/github.svg"/>
```

## Custom fill & size
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex2.png"/>

```html
<svg-filler path="static/icon/bitcoin.svg" fill="#FF9900" width="50px" height="50px"/>
```

## Click
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex3.png"/>

```html
<template>
  <div>
    <svg-filler path="static/icon/palette.svg"
      :fill="svgPalette.fill"
      :width="svgPalette.width"
      :height="svgPalette.height"
      @click="svgPalette.fill = randomColor()"/>
    <h2 :style="{ 'color': svgPalette.fill }">{{ svgPalette.fill }}</h2>
    <span>Click icon for change color</span>
  </div>
</template>

<script>
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgPalette: {
        fill: '#c2f91d',
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
```

## Hover
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex4.png"/>

```html
<template>
  <div>
    <svg-filler path="static/vuejs.svg"
      :hover-color="svgVuejs.hoverColor"
      :fill="svgVuejs.fill"
      :width="svgVuejs.width"
      :height="svgVuejs.height"/>
    <div>Hover me !</div>
  </div>
</template>

<script>
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgVuejs: {
        fill: this.randomColor(),
        width: '150px',
        height: '150px',
        hoverColor: this.randomColor()
      }
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
| path         | String        | -        | Path of your svg file in `/static`  |
| width       | String        | 24px     | Width |
| height      | String        | 24px     | Height |
| fill        | String        | #000     | Fill color |
| hover-color        | String        | -     | Fill color when hover on icon |
| click        | Function        | -     | Triggers when click |

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
