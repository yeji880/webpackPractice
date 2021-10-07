import _ from 'lodash'; //array, collection, date 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게 하는 데 사용된다.

//json 파일을 import 할 때는 위와 같은 디폴트 import 만 경고없이 사용할 수 있다.
//ex) import { foo } from './data.json' 같은 형식은 스펙에서 허용하지 않으므로 경고가 노출된다.

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // lodash 사용
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());