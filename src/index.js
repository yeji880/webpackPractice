//json 파일을 import 할 때는 위와 같은 디폴트 import 만 경고없이 사용할 수 있다.
//ex) import { foo } from './data.json' 같은 형식은 스펙에서 허용하지 않으므로 경고가 노출된다.

function getComponent() {
    const element = document.createElement('div');
    //import() 는 promise를 반환하므로 async-await 함수와 함께 사용할 수 있다.
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
}

getComponenet().then((component) => {
    document.body.appendChild(component);
})