//Ubah uppercase string email jadi lowercase:
//-dengan built-in method
//--tanpa built-in method
//Tampilkan list email yang sudah diubah ke dalam bentuk array
//Handling fetch data dengan then-catch dan async-await

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
// Menggunakan then-catch
.then(response => response.json())
.then(data => console.log(data.map(item => item.email.toLowerCase())))
.catch(err=> {
    console.log(err)
})

// Menggunakan async-await
const retrieveData = async ()=>{
    try {
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        const emailofUser = data.map(item => item.email.toLowerCase())
        console.log(emailofUser)
    } catch(error){
        console.log(error)
}}
retrieveData()

