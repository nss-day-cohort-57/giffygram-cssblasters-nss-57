import { chooseRecipient } from "./message/MessageForm.js"
import { NavHtml } from "./nav/Navbar.js"
import { PostForm } from "./feed/PostList.js";
export const GiffyGram = () => {

    // Show main main UI
    return `${NavHtml()}
            ${chooseRecipient()}
            ${PostForm()}`
}