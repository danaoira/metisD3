import helloWorld from './hello-world';
import anotherFunction from './hello-world';

helloWorld();
console.log(helloWorld === anotherFunction);

// import {count, inc} from './module';
// assert.equal(count, 0);
// inc();
// assert.equal(count, 1);