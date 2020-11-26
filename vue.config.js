module.exports = {
    //跨域设置
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.iceasy.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
