import { chunk, merge } from "lodash-es";
const parts = chunk([1, 2, 3, 4], 2); // [[1,2],[3,4]]
console.log(parts);
const obj = merge({ a: 1 }, { b: 2 }); // {a:1,b:2}
console.log(obj);

import fp from "lodash/fp.js";
const add1 = fp.map((x) => x + 1);
console.log(add1([1, 2, 3])); // [2, 3, 4]
const result = add1({ add1 });
console.log(result);
