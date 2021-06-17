function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log('Making Request to ${location}');
        if(location === '3pillar'){
            resolve('Hi 3 pillar')
        }
        else {
            reject('3Pillar only')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing...')
        resolve('Resolved + ${response}')
    })
}

makeRequest('3pillar').then(response =>{
    console.log('Response Reecived')
    return processRequest(resposne)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

async function doWork(){
const response = await makeRequest('3Pillar')
    console.log('Response Receivd')
}

