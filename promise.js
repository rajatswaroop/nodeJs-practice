let done = true
/*
Promise = Real Life behaviour of Promising. Either the promise is rejectd or resolved.

So the promise is node is also the asynchronous response , which either resolves ior reject based on the condition.

Promise was launched to replace callback hll problem, which is further replacd by Asunc/Await.(Thanks to the faster evolving javascript.)
 */
let p = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'I am felling great about Node js'
        resolve(workDone)
    } else {
        const why = 'Alright Java is multiThreaded.....'
        reject(why)
    }
})

p.then((message) => {
console.log('Keep Learning Node js----->'+message)
}).catch((message) => {
    console.log('Java has different benefits'+message)
})
