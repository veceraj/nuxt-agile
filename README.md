# nuxt-agile
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-agile/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-agile)
[![](https://img.shields.io/npm/l/nuxt-agile.svg?style=flat-square&logo=github)](https://github.com/veceraj/nuxt-agile/blob/master/LICENSE) 
[![npm](https://img.shields.io/npm/dt/nuxt-agile.svg?style=flat-square)](https://npmjs.com/package/nuxt-agile)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt module for vue-agile, see [vue-agile](https://github.com/lukaszflorczak/vue-agile) for more details.

Does not support SSR

## Installation
- Add `nuxt-agile` dependency using yarn or npm to your project

```bash
//yarn
yarn add nuxt-agile

//npm
npm i nuxt-agile
```

- Add `nuxt-agile` to `modules` section of `nuxt.config.js`

```js
{
    modules: [
        'nuxt-agile',
    ]
}
```

## Usage

```vue
<client-only>
    <agile>
        <div class="slide">
            slide1
        </div>
        <div class="slide">
            slide2
        </div>
        <div class="slide">
            slide3
        </div>
    </agile>
</client-only>
```
