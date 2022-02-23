window.addEventListener('DOMContentLoaded',init)

function init(){
    const btn = document.querySelector('.submit')
    const file = document.querySelector('.file')
    btn.addEventListener('click',async ()=>{
        const data = new FormData()
        console.log(file.files[0])
        data.append('file',file.files[0])
        console.log(data)
        const url = 'http://localhost:3000/file'
        let test = await axios.post(url,data, {headers:{
            'Content-Type': 'multipart/form-data'
        }})
        console.log('done')
    })
}