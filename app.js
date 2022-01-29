const catBtn = document.getElementById("cat-btn");
const dogBtn = document.getElementById("dog-btn");
const catResult = document.getElementById("cat-result");
const dogResult = document.getElementById("dog-result");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);


function getRandomCat(){
    fetch("https://thatcopy.pw/catapi/rest/")
    .then(res => res.json())
    .then(data => {
        catResult.innerHTML = `<img src=${data.url} alt='cat' />`;
    });
}

function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        dogResult.innerHTML = `<img src=${data.message} alt='dog' />`;
    });
}