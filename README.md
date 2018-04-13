
<p align="center">
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/v/vue-svg-filler.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/dm/vue-svg-filler.svg?style=flat" alt="NPM downloads"></a>
</p>

# vue-svg-filler 🎨

> Vue component for custom your svg file from `static` folder.

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
### Directory structure

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
<img src="./demo/assets/ex1.png"/>

```html
<svg-filler path="static/account.svg"/>
```

## Custom fill & size
<img src="./demo/assets/ex2.png"/>

```html
<svg-filler path="static/alert.svg" fill="#f00" width="50px" height="50px"/>
```

## Event @click.native
<img src="./demo/assets/ex3.png"/>

```html
<template>
  <div>
    <svg-filler path="static/graph.svg"
      :fill="svgGraph.fill"
      :width="svgGraph.width"
      :height="svgGraph.height"
      @click.native="svgGraph.fill = randomColor()"/>
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
<img src="./demo/assets/ex4.png"/>

```html
<template>
  <div>
    <svg-filler path="static/icon/bell-ring.svg"
      style="cursor: pointer;"
      :fill="svgBell.fill"
      :width="svgBell.width"
      :height="svgBell.height"
      @mouseover.native="svgBell.fill = randomColor()"/>
    <h2 :style="{ 'color': svgBell.fill }">{{ svgBell.fill }}</h2>
    <span>Hover me !</span>
  </div>
</template>

<script>
import SvgFiller from 'vue-svg-filler'

export default {
  name: 'app',
  data () {
    return {
      svgBell: {
        fill: '#6777eb',
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

# Options

## Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| path         | String        | -        | Path of your svg file in `/static`  |
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
