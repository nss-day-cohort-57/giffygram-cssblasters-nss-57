import { NavHtml } from "./nav/Navbar.js"
import { PostForm } from "./feed/PostList.js";
export const GiffyGram = () => {

    // Show main main UI
    return `${NavHtml()}
            ${PostForm()}`
}