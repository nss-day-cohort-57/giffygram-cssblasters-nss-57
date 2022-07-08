import { sendPost } from "../data/provider.js";
let posting = false

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("miniMode")) {
        posting = true

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
    else if (clickEvent.target.id.startsWith("newPost__cancel")) {
        posting = false
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    } 
    else if (clickEvent.target.id === "saveButton") {
        // Get what the user typed into the form fields
        const gifTitle = document.querySelector("#title").value
        const gifImage = document.querySelector("#gif").value
        const gifComment = document.querySelector("#comment").value
        const gifDate = new Date().toLocaleString().split(',')[0]
        // Make an object out of the user input
        const dataToSendToAPI = {
            title: gifTitle,
            Url: gifImage,
            commment: gifComment,
            date: gifDate
        }

        // Send the data to the API for permanent storage
        sendPost(dataToSendToAPI)
    }
})




//formHTML for user gif post input data
export const PostForm = () => {
    let html = ""
    if (posting != true) {
        html = ` <div class= "miniMode" id="miniMode">Have a gif to post?</div> `
    } else {
        html = `
        <div class="newPost">
            <form>
                <fieldset id="title">
                    <input type="text" name="postTitle" class ="newPost__input" placeholder="Title" />
                </fieldset>
                <fieldset id="gif">
                    <input type="text" name="postURL"class="newPost__input" placeholder="URL of gif" />
                </fieldset>
                <fieldset id="comment">
                    <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story of your gif..."rows=10 col=50></textarea>
                </fieldset>
            </form>
            <button id="newPost__submit">Save</button>
            <button id="newPost__cancel">Cancel</button>
        </div>
    `
    } return html
}



//click event will look for click of save btn and save to transient state obj in provider.js
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newPost__submit") {

        // Get what the user typed into the form fields
        const gifTitle = document.querySelector(`[name="postTitle"]`).value
        const gifImage = document.querySelector(`[name="postURL"]`).value
        const gifComment = document.querySelector(`[name="postDescription"]`).value
        const gifDate = new Date().toLocaleString().split(',')[0]
        // Make an object out of the user input
        const dataToSendToAPI = {
            title: gifTitle,
            Url: gifImage,
            commment: gifComment,
            date: gifDate
        }

        // Send the data to the API for permanent storage
        sendPost(dataToSendToAPI)
    }
})


