
<p>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/v/vue-svg-filler.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/dm/vue-svg-filler.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/vue-svg-filler"><img src="https://img.shields.io/npm/l/vue-svg-filler.svg?style=flat" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-svg-filler"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
</p>

# Vue SVG Filler 🖍 🎨 

Vue component for customize your svg file.

# Demo Page

[Documentation & Demo Page](https://biigpongsatorn.github.io/#/vue-svg-filler)

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
2. The `path` must be a relative path e.g. `static/icon.svg` or `/static/icon/file.svg` , Can't use `../` or `./`

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

## Customize fill & size
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex2.png"/>

```html
<svg-filler path="static/icon/bitcoin.svg" fill="#FF9900" width="50px" height="50px"/>
```

## Fill & stroke
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex3.png"/>

```html
<template>
  <div>
    <svg-filler path="/static/vue-svg-filler/icon/palette.svg" class="cs-pointer" :fill="svgPalette.color" :width="svgPalette.width" :height="svgPalette.height" @click="svgPalette.color = randomColor()"/>

    <svg-filler path="/static/vue-svg-filler/icon/palette.svg" class="cs-pointer" :stroke="svgPalette.color" fill="none" :width="svgPalette.width" :height="svgPalette.height" @click="svgPalette.color = randomColor()"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      svgPalette: {
        color: this.randomColor(),
        width: '150px',
        height: '150px'
      }
    }
  },
  methods: {
    randomColor () {
      let length = 6
      let chars = '0123456789ABCDEF'
      let hex = '#'
      while (length--) hex += chars[(Math.random() * 16) | 0]
      return hex
    }
  }
}
</script>
```

## Hover
<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-svg-filler/HEAD/static/example/ex4.png"/>

```html
<template>
  <div>
    <svg-filler path="/static/vuejs.svg" fill="#42b883" width="150px" height="150px":hover-color="#35495e"/>
    <div>Hover me !</div>
  </div>
</template>
```

# Options

## Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| path         | String        | -        | Path of your svg file in `/static`  |
| width       | String        | 24px     | Width |
| height      | String        | 24px     | Height |
| fill        | String        | #000     | Fill color |
| hover-color        | String        | -     | Fill color when hover icon |
| stroke        | String        | none     | Stroke color |
| hover-stroke-color        | String        | -     | Stroke color when hover icon |

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

