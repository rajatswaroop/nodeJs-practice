/*
Here the callback function is handlePhoto, which is called only when the photo is
downloaded or else it throws any error.
callback =  i will call you later(asynchronous response)
 */


downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
    if (error) console.error('Download error!', error)
    else console.log('Download finished', photo)
}

console.log('Download started')