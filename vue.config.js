module.exports = {
    //跨域设置
    devServer: {
        proxy: {
            '/': {
                target: 'https://www.iceasy.com',
                changeOrigin: true
            }
        }
    }
}
