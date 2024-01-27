import './components/Main/Main'
import './components/Header/Header'

const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById('result-playlists')

function requestAPI(searchTerm){
    const url = `http://localhost:8080/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResult(result))
}

function displayResult(result){
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    })

    resultArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden')
        resultArtist.classList.add('hidden')
        return;
    }
    requestAPI(searchTerm)
})