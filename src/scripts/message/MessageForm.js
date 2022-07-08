import { getUsers, getMessages, deleteMessage } from "../data/provider.js"

mainContainer.addEventListener("click", click => {
    if (event.target.id === "directMessageIcon") {


        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const chooseRecipient = () => {
    const recipients = getUsers()

    let html = "<h2>Recipient:</h2>"

    html += '<select id="recipient">'
    html += '<option value="0">Choose a recipient...</option>'

    const arrayOfOptions = recipients.map( (recipient) => {
            return `<option value="messageRecipient--${recipient.id}">${recipient.id}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

export const recipientText = () => {
    let html = `<h2>Message:</h2>
    <div class="field">
            <label class="label" for="userText">Message to User</label>
            <input type="text" name="userText" class="input" />
        </div>
        
        <button id="directMessage__submit" class="button">Save</button>
        <button id="directMessage__cancel" class="button1">Cancel</button>
        <button id="directMessage__close" class="button2">X</button>`
        return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save") {
        // Get what the user typed into the form fields
        const text = document.querySelector("input[name='userText']").value
        const recipientId = parseInt(document.querySelector("#recipient").value)
        // Make an object out of the user input
        const dataToSendToAPI = {
            userText: text,
            recipientId,    
        }

        // Send the data to the API for permanent storage
        sendMessage(dataToSendToAPI)
    }
})