let done = true
/*
So the promise is node is also the asynchronous response , which either resolves ior reject based on the condition.
 */
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})