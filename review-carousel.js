import { data } from "./data.js"

const userJob = () => {
    data.forEach(user => 
        user.job
    )
}

document.querySelector('#author').innerHTML = data[0].username

document.querySelector('#person-img').src = data[0].imageUrl

document.querySelector('#job').innerHTML = data[0].job

document.querySelector('#info').innerHTML = data[0].body.excerpt