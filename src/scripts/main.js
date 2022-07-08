import { fetchUsers, fetchPosts, fetchMessages, fetchLikes } from "./data/provider.js";
import { LoginForm } from "./auth/Login.js";
import { GiffyGram } from "./GiffyGram.js";
import { RegisterForm } from "./auth/Register.js";

const mainContainer = document.querySelector(".giffygram")

export const renderApp = () => {
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => fetchLikes())
        .then(() => fetchMessages())
        .then(() => {
    
    const user = (localStorage.getItem("gg_user"))

    if (user != undefined) {
        mainContainer.innerHTML = GiffyGram()
    } else {
        mainContainer.innerHTML = LoginForm() + RegisterForm()
    }
})
}

renderApp()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)