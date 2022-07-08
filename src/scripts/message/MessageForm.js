import { getUsers } from "../data/provider.js"

let chosenButton = false

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", event => {
    if (event.target.id === "directMessageIcon") {
        chosenButton = true
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const chooseRecipient = () => {
    const recipients = getUsers()
    let html = ``
    if (chosenButton !== false) {
        html += `<div class="directMessage">
        
        <h3>Direct Message</h3>
        <select id="recipient">
        <option value="0">Choose a recipient...</option>
        `

    const arrayOfOptions = recipients.map( (recipient) => {
            return `<option value="messageRecipient--${recipient.id}">${recipient.id}</option>
            </select>
            `
        }
    )
    html += arrayOfOptions.join("")


    html += `<div>
    <label for="userText">Message:</label>
            <label class="label" for="userText"></label>
            <input type="text" name="userText" placeholder="Message to User" class="message__input" />
            </div>
        
        <button id="directMessage__submit" class="button">Save</button>
        <button id="directMessage__cancel" class="button1">Cancel</button>
        <button id="directMessage__close" class="button2">X</button>
        </div>`
        
    }
    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save") {
        // Get what the user typed into the form fields
        const text = document.querySelector("input[name='userText']").value
        const recipientId = parseInt(document.querySelector("#recipient").value)
        // Make an object out of the user input
        const dataToSendToAPI = {
            userText: text,
            recipientId,
            user: (localStorage.getItem("gg_user"))    
        }

        // Send the data to the API for permanent storage
        sendMessage(dataToSendToAPI)
    }
})