import { fetchUsers } from "./data/provider.js";
import { LoginForm } from "./auth/Login.js";
import { GiffyGram } from "./GiffyGram.js";
import { RegisterForm } from "./auth/Register.js";

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = (localStorage.getItem("gg_user"))

    if (user != undefined) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm() + RegisterForm()
    }
}

fetchUsers()
    .then(renderApp())