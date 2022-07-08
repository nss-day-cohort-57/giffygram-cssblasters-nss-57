import { getUsers } from "../data/provider.js"

export const chooseRecipient = () => {
    const recipients = getUsers()

    let html = "<h2>Recipient</h2>"

    html += '<select id="recipient">'
    html += '<option value="0">Choose a recipient</option>'

    const arrayOfOptions = recipients.map( (recipient) => {
            return `<option value="${recipient.id}">${recipient.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
