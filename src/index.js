//json 파일을 import 할 때는 위와 같은 디폴트 import 만 경고없이 사용할 수 있다.
//ex) import { foo } from './data.json' 같은 형식은 스펙에서 허용하지 않으므로 경고가 노출된다.

function getComponent() {
    const element = document.createElement('div');

    //lodash를 동적으로 가져와 청크를 분리
    return import('lodash')
    .then(({ default: _ }) => {
        const element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}
/*
default가 필요한 이유는 webpack 4 이후로 CommonJS 모듈을 가져올 때 더 이상 
module.exports 값 으로 해석되지 않으며 대신 CommonJS 모듈에 대한 인공 네임 스페이스 객체를 생성하기 때문입니다. 
무슨 뜻이냐하면 module.exports 를 {default: 값} 이렇게 객체와 사용해야지 객체 형태가 아닌 것과 함께 사용하면 문제가 발생한다는 뜻.
*/

getComponenet().then((component) => {
    document.body.appendChild(component);
})