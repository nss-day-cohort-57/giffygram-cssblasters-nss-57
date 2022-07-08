import { NavHtml } from "./nav/Navbar.js"
import { PostForm } from "./feed/PostList.js";
import { footerHTML } from "./nav/Footer.js";
export const GiffyGram = () => {

    // Show main main UI
    return `${NavHtml()}
            ${PostForm()}
            ${footerHTML()}`
}