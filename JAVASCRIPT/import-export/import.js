const john = require('./export');
console.log(john(10,2));

const {addition} = require('./export')
console.log(addition(10,20));



import math from './export.js'; 
console.log(math.add(5, 3));
console.log(math.sub(5, 3)); 

import {sub,add} from './export.js'; 
console.log(sub(4, 5));
console.log(add(4, 5));

