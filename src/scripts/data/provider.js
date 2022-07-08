const apiURL = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    gifs: {}
}


export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                // Store the external state in application state
                applicationState.users = users
            }
        )
}

export const sendUser = (user) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }


    return fetch(`${apiURL}/users`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

// Gif functions
export const fetchGifs = () => {
    return fetch(`${apiURL}/gifs`)
        .then(response => response.json())
        .then(
            (gifs) => {
                // Store the external state in application state
                applicationState.gifs = gifs
            }
        )
} 

export const sendGif = (gif) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gif)
    }

    return fetch(`${apiURL}/gifs`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const getGifs = () => {
    return applicationState.gifs.map(gif => ({...gif}))
}