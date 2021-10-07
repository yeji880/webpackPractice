const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry 지점 두곳으로 설정
    entry: {
        /*
        dependOn 속성과 shared 속성으로 두 청크 사이에 모듈을 공유
        단일 HTML 페이지에서 여러 엔트리 포인트를 사용하는 경우 optimization.runtimeChunk: 'single'
        도 필요합니다. 이 속성을 주지 않을 경우 문제(https://bundlers.tooling.report/)가 발생할 수 있습니다.
        
        webpack은 하나의 페이지에 여러 엔트리 포인트를 허용하지만, 가능하다면 
        entry: { page: ['./analytics', './app'] }처럼 여러 개의 import가 
        포함된 엔트리 포인트 사용을 피해야 합니다. 이는 async 스크립트 태그를 사용할 때 최적화에 용이하며 일관된 
        순서로 실행할 수 있도록 합니다.
        */
        index: './src/index.js',
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
    },
    mode: 'development',
};