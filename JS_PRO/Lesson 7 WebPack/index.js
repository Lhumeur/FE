//import lodash from "lodash"; // const lodash = require("lodash"); тоже самое

import map from "lodash/map";

const arr = [1, 2, 3, 4];

//console.log(lodash.map(arr, item => item * 2));

console.log(map(arr, item => item * 2));