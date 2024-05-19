const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    transpileDependencies: ['avue-plugin-ueditor'],

    productionSourceMap: false,

    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },

    chainWebpack: (config) => {
        console.log('NODE_ENV: ', process.env.NODE_ENV)
        // 生产环境
        if (process.env.NODE_ENV === 'production') {
            // 忽略打包
            config.externals({
                'vue': 'Vue',
                'element-ui': 'ELEMENT',
            })
        }
        // 开发环境
        else {
            config.externals({
                'vue': 'Vue',
            })
        }
        config.resolve.alias
            .set('@', resolve('packages'))
            .set('@components', resolve('packages/components'))
            .set('@utils', resolve('packages/utils'))
            .set('@mixins', resolve('packages/mixins'))

        const output = config.output.store.get('path')
        if (output.includes('lib')) config.plugin('optimize')
            .use(webpack.optimize.LimitChunkCountPlugin, [{
                maxChunks: 1
            }])
    },

    devServer: {
        open: true,
        port: 8000
    },

    css: {
        extract: false
    }
}
