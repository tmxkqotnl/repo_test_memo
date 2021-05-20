 // 간단한 콜백
const addSumCallBack = (a, b, callback) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number")
      callback("a and b must be number");
    callback(undefined, a + b);
  }, 3000);
};

const logSum = (err, sum) => {
  if (err) /* throw new Error(err) */ console.error(err);
  console.log(sum);
};

addSumCallBack(10, 20, logSum);
addSumCallBack(10, "error", logSum); // a and b must be number

// 간단한 promise
const addSumPromise = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") rej('a and b must be number');
      res(a+b)
    }, 3000);
  }).then((sum)=>{
    console.log(sum);
  }).catch(err=>{
    console.log(err);
  });
};

addSumPromise(10, 20); // 30
addSumPromise(10, "error"); // a and b must be number
