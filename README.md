
<p>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/v/vue-svg-filler.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/dm/vue-svg-filler.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/l/vue-svg-filler.svg?style=flat" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-svg-filler"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
</p>

# Vue SVG Filler 🖍 🎨 

Vue component for customize your svg file.

# Demo Page

- [Documentation & Demo Page](https://biigpongsatorn.github.io/#/vue-svg-filler)

# Install

```sh
npm install vue-svg-filler --save
```
or
```sh
yarn add vue-svg-filler
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
│   │    └── bitcoin.svg
│   │    └── palette.svg
│   │    └── frog.svg
│   ├── github.svg
│   └── vuejs.svg
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

## Events
| Name          | Type          | Default  | Description  |
| --------------|:--------------|--------------|--------------|
| click        | Function       | -     | Triggers when click |
| [any].native | event: $event  | -     | Listen to any native event, e.g. `mouseover.native`|

# Contributing
1. Fork this repository.
2. Create new branch with feature name.
3. Run `npm install` and `npm run dev`.
4. Create your feature.
5. Commit and set commit message with feature name.
6. Push your code to your fork repository.
7. Create pull request. 🙂

# Support

```
If you like this project, You can support me with starring ⭐ this repository.
```

# License

[MIT](LICENSE)

Developed with ❤️ and ☕️ 

