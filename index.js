const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
    const options = Object.assign({}, moduleOptions)

    this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        fileName: 'nuxt-agile.js',
        ssr: false,
        options
    })
}