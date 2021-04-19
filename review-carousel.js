import { data } from "./data.js"

class User {
    constructor(username, imageUrl, job, excerpt) {
        this.username = username,
        this.imageUrl = imageUrl,
        this.job = job,
        this.excerpt = excerpt
    }
}

const carouselArr = []

data.forEach(element => {
    carouselArr.push(new User(element.username, element.imageUrl, element.job, element.body.excerpt))
});

const displayUser = index => {
    document.querySelector('#author').innerHTML = carouselArr[index].username,
    document.querySelector('#person-img').src = carouselArr[index].imageUrl,
    document.querySelector('#job').innerHTML = carouselArr[index].job,
    document.querySelector('#info').innerHTML = carouselArr[index].excerpt
}

let currIndex = 0

window.onload = displayUser(currIndex)

document.addEventListener('click', function(event){
    if (event.target.id == 'surprise-Me') {
        let currIndex = Math.floor(Math.random() * carouselArr.length)
        displayUser(currIndex)
    } else if (event.target.classList.contains('bi-arrow-left-circle')) {
        if (currIndex == 0) {
            currIndex = carouselArr.length
        }
        displayUser(currIndex-=1)
    } else if (event.target.classList.contains('bi-arrow-right-circle')) {
        if (currIndex == carouselArr.length-1) {
            currIndex = -1
        }
        displayUser(currIndex+=1)
    }
})