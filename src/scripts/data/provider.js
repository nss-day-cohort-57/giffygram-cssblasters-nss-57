const apiURL = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    messages: [],
    users: [],
    posts: [],
    likes: [],
    messages: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    gifs: {}
}

// Users Functions

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

// Posts Functions

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                // Store the external state in application state
                applicationState.posts = posts
            }
        )
}

export const sendPost = (post) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }


    return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const getGifs = () => {
    return applicationState.gifs.map(gif => ({...gif}))
}

export const getPosts = () => {
    return applicationState.users.map(post => ({...post}))
}

// Messages Functions

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                // Store the external state in application state
                applicationState.messages = messages
            }
        )
}

export const sendMessage = (message) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    }


    return fetch(`${API}/messages`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchMessage = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (message) => {
                // Store the external state in application state
                applicationState.messages = message
            }
        )
}

export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}

// Likes Functions 

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                // Store the external state in application state
                applicationState.likes = likes
            }
        )
}

export const sendLike = (like) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(like)
    }


    return fetch(`${apiURL}/likes`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getLikes = () => {
    return applicationState.likes.map(like => ({...like}))
}
