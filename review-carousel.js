const url = "https://comp2132.herokuapp.com/posts"

let postArr = []

async function getData() {
    const resposnse = await fetch(url)
    const resposnseJSON = await resposnse.json()

    postArr = resposnseJSON

    // JSON.stringify(postArr)
    console.log(JSON.stringify(postArr))
    
}

getData()