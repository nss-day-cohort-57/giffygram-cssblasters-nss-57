import { sendUser, getUsers } from "../data/provider.js";

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerButton") {
        let foundUser = null
        const userState = getUsers()

        const newName = document.querySelector("input[name='newName']").value
        const newEmail = document.querySelector("input[name='newEmail']").value
        const newPassword = document.querySelector("input[name='newPassword']").value

        const newUser = {
            name: newName,
            email: newEmail,
            password: newPassword
        }

        sendUser(newUser)
      
    }
})

export const RegisterForm = () => {
    return `
        <div class="registerForm">
            <form>
                <fieldset>
                    <label for="name">Name:</label>
                    <input type="text" name="newName" autofocus placeholder="Full Name" />
                </fieldset>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="newEmail" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="newPassword" placeholder="Password" />
                </fieldset>
            </form>
            <button id="registerButton">Register</button>
        </div>
    `
}