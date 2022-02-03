const dog_url = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".images");

const load = document.querySelector(".load");

document.querySelector(".btn").addEventListener("click", addDoggo);

function addDoggo(){
    load.classList.add("loading");
    const promise = fetch(dog_url);
    promise
    .then(function(response){
        const prPromise = response.json();
        return prPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement("img");
        img.src = processedResponse.message;
        load.classList.remove("loading");
        doggos.appendChild(img);
    });
}