const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/test.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/build")
    },
    mode: "none",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true } //코드 최적화 옵션, 이 옵션이 켜져있으면 번들링 된 코드가 최적화 되어 한 줄로 보인다.
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({//html-webpack-plugin은 웹팩이 html 파일을 읽어서 html 파일을 빌드할 수 있게 해준다.
            template: './public/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html' // output으로 출력할 파일은 index.html 이다.    
        })
      ]
};