// promise simple example //
var cond = true;
const prom = new Promise((resolve,reject)=>{
    if(cond){
        resolve('test');
    }else{
        reject('error');
    }
});
prom.then((m)=>{
    console.log(m); // test
    return m;
}).then((m)=>{
    console.log(m+m);
}).catch((e)=>{
    console.log(e); // error
});

// Promise.all and Promise.settled // 
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
const promise3 = Promise.reject(new Error('error occured!'));

Promise.all([promise1, promise2, promise3]).then((results)=>{
    console.log('if all promise is success');
    console.log(results);
}).catch((e)=>{
    console.log('if only one of promises is failed');
    console.log(e);
}); // cannot reconize which promise is failed

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    results.forEach((result) => { // show all results
        console.log(result);
    });
});

// async & awaitonly one of promises is failed
const async_promise1 = new Promise((resolve)=>{
    resolve(1);
});
const async_promise2 = new Promise((resolve)=>{
    resolve(1);
}).then(resolve=>{
    return 2;
});
const async_promise3 = new Promise(reject=>{
    reject('reject');
})
const async_promise4 = new Promise(reject=>{
    reject('reject2');
}).catch(reject=>{
    return reject;
});

async function a(){
    try{ 
    let r1 = await async_promise1;
    let r2 = await async_promise2;
    let r3 = await async_promise3;
    let r4 = await async_promise3;
    //let r5 = await Promise.reject(10); // for testing try-catch
    console.log("async await : "+r1);
    console.log("async await : "+r2);
    console.log("async await : "+r3);
    console.log("async await : "+r4);
    }catch(e){
        console.log(e);
    }
}
a();

(async ()=>{
    for await (promise of [async_promise1,async_promise2,async_promise3,async_promise4]){
        console.log("promise array"+promise);
    }
})();
