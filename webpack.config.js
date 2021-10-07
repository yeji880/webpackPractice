const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry 지점 두곳으로 설정
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    //번들 파일과 소스코드를 매핑하여 소스코드 중 에러가 발생한 파일, 줄 번호를 알려준다.
    devtool: 'inline-source-map',
    devServer: {
        static: `./dist`,
    },
    plugins: [
        //dist 폴더에 이미 index.html 파일이 있어도 html-webpack-plugin은 새로
        //index.html 파일을 생성하고 기존 파일은 이 새로 생성된 파일로 대체된다.
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //실제로 사용되는 파일만 빌드폴더에 생성되도록 빌드전에 dist 폴더를 정리해주는 옵션
        publicPath: '/',
    },
    mode: 'development',
};