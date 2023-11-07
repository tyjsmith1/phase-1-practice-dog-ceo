const imageContainer = document.getElementById('dog-image-container')
const breedContainer = document.getElementById("dog-breeds")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
.then(res => res.json())
.then(data => {
    data.message.forEach((imageUrl) => {
        let newImg = document.createElement("img")
        newImg.src = imageUrl
        imageContainer.appendChild(newImg)
    })
})

document.addEventListener("DOMContentLoaded", (e) => {
    fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
        // let newBreed = document.createElement("li")
        // newBreed.value = data.value
        // breedContainer.appendChild(newBreed)
        const breeds = data.message
        for (const breed in breeds) {
            if (breeds.hasOwnProperty(breed)) {
                let newBreed = document.createElement('li')
                newBreed.textContent = breed;
                breedContainer.appendChild(newBreed)
            }
        }
    })
})