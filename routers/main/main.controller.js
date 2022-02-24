
const fs = require('fs')
const {router} = require('./index.js')


const main = (req, res) => {
    res.render('index.html')
}

// const fileTransfer = async (req, res) => {
//     const ipfsAPI = require('ipfs-api')
//     const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})
//     try{
        // console.log(router)
        // const file = req.file.buffer
        // ipfs.files.add(file,(e,r)=>{
        //     if(e){console.log(e)
        //     return}
        //     console.log(r)
        //     console.log(`https://ipfs.io/ipfs/${r[0].hash}`)
        // })
//     res.json({
//         success: true
//     })
//     } catch(e){
//         console.log(e)
//         res.json({
//             success: false,
//             reason: e
//         })
//     }
// }

const fileTransfer = async (req, res) => {
    let {create, globSource} = require('ipfs-http-client')
    const ipfs = await create('https://ipfs.infura.io:5001/')
    try{

        // console.log(req.file)
        const multer = require('multer')
        const path = require('path')
        const upload = multer({
            storage: multer.diskStorage(
                    {
                    destination: function (req, file, callback) {
                        callback(null, './uploads/')
                    },
                    filename: function (req, file, callback) {
                        callback(null, new Date().valueOf() + path.extname(file.originalname))
                    },
                    onError: function (err, next) {
                        console.log('error', err)
                    }
                }
            ),
        })
        let paost = upload.single('file')
        let newFileName
        let newAdd
        paost(req, res, (err)=>{
            if(err){console.log('oops');return}
            else{
                newFileName = res.req.file.filename
                newAdd = res.req.file.filename
            }
        })
        console.log(newFileName)
        // let pathName = path.dirname()
        // path.dirname
        
        // console.log(req.file)
        // console.log(asd)
        // req.file.indexOf('\')
        // const getFile = req.file.buffer
        // if(!asd){
        //     console.log('file not loaded')
        //     return
        // }
        // let zzz = await ipfs.add(globSource('.', newFileName))
        // console.log(zzz)

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