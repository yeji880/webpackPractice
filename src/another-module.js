import _ from 'lodash';
//index.js에서도 lodash 모듈을 가져오고 있다.
//이 번들에서도 lodash 모듈을 가져오고... entry로 코드 스플리팅 접근을 하면
//이렇게 중복되는 모듈을 양쪽 번들에서 모두 포함하게 되는 문제가 발생한다.
console.log(_.join(['Another', 'module', 'loaded!'], ' '));
