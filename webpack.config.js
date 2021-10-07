const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {//모듈이 실행될 때 html 파일의 <head>에 문자열화 된 css가 <style>태그로 삽입됩니다. 
                //dist 폴더의 index.html 을 실행시키고 브라우저에서 페이지 검사를 하면 head태그 안에
                //style 태그가 추가된 걸 볼 수 있습니다.
                test: /\.css$/i,
                //아래 로더 순서 유지 되어야 한다.
                use: ['style-loader', 'css-loader'],
            },
            {//웹팩5부터는 내장된 asset modules를 사용하여 이미지도 시스템에 쉽게 통합할 수 있다.
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {//폰트 파일 처리
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            //csv, tsv, xml 같은 데이터들도 로드할 수 있다.
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            }
        ]
    }
};