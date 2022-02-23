const ipfsAPI = require('ipfs-api')
const fs = require('fs')

const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})


const main = (req, res) => {
    res.render('index.html')
}

const fileTransfer = async (req, res) => {
    try{
        const file = req.file.buffer
        ipfs.files.add(file,(e,r)=>{
            if(e){console.log(e)
            return}
            console.log(r)
            console.log(`https://ipfs.io/ipfs/${r[0].hash}`)
        })
    res.json({
        success: true
    })
    } catch(e){
        console.log(e)
        res.json({
            success: false,
            reason: e
        })
    }
}


module.exports = {
    main,
    fileTransfer,
}