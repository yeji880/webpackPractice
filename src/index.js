import _ from 'lodash'; //array, collection, date 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게 하는 데 사용된다.
import './style.css';
import Logo from './logo.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
//json 파일을 import 할 때는 위와 같은 디폴트 import 만 경고없이 사용할 수 있다.
//ex) import { foo } from './data.json' 같은 형식은 스펙에서 허용하지 않으므로 경고가 노출된다.

console.log(toml.title); //output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // lodash 사용
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 원래 있던 div 에 이미지를 추가합니다.
    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());