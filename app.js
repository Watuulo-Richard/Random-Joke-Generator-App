const randomJokeContainer = document.getElementById('randomJokeSection')
const randomJokeBtn = document.getElementById('randomJokeBtn')

const API = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

async function fetchJokes() {
    const response = await fetch(API)
    const fetchedJokes = await response.json()
    console.log(fetchedJokes.joke)
    displayJokesOnUI(fetchedJokes.joke)
    // const randomJoke = fetchedJokes[Math.floor(Math.random()*fetchedJokes.length)]
    // console.log(randomJoke)
}

fetchJokes()
function displayJokesOnUI(fetchedJokes){
    randomJokeContainer.innerHTML = ''
    const jokesTemplate = `
        <div class="randomJokeImageContainer">
            <img src="./Images/man-with-mustache-is-laughing-has-yellow-hat-his-head.png" alt="">
        </div>
        <div class="randomJokeText">
            <p>${fetchedJokes}</p>
        </div>
        <button type="button" id="randomJokeBtn" class="randomJokeBtn">Generate A Joke</button>
    `
    randomJokeContainer.insertAdjacentHTML('beforeend', jokesTemplate)
    const randomJokeBtn = document.getElementById('randomJokeBtn')
    randomJokeBtn.addEventListener('click', fetchJokes)
}

window.addEventListener('load', fetchJokes)