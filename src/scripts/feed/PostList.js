import { sendGif } from "../data/provider.js";

//formHTML for user gif post input data
export const PostForm = () => {
    if()
    return `
        <div class="newPost">
            <form>
                <fieldset id="title">
                    <input type="text" name="postTitle" class ="newPost__input" placeholder="Title" />
                </fieldset>
                <fieldset id="gif">
                    <input type="text" name="postURL"class="newPost__input" placeholder="URL of gif" />
                </fieldset>
                <fieldset id="comment">
                    <textarea name="postDiscription" class="newPost__input newPost__description" placeholder="Story of your gif..."rows=10 col=50></textarea>
                </fieldset>
            </form>
            <button id="newPost__submit">Save</button>
            <button id="newPost__cancel">Cancel</button>
        </div>
    `
}

// const mainContainer = document.querySelector("#container")

// //click event will look for click of save btn and save to transient state obj in provider.js
// mainContainer.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveButton") {

//         // Get what the user typed into the form fields
//         const gifTitle = document.querySelector("#title").value
//         const gifImage = document.querySelector("#gif").value
//         const gifComment = document.querySelector("#comment").value
//         const gifDate = new Date().toLocaleString().split(',')[0]
//         // Make an object out of the user input
//         const dataToSendToAPI = {
//             title: gifTitle,
//             Url: gifImage,
//             commment: gifComment,
//             date: gifDate
//         }

//         // Send the data to the API for permanent storage
//         sendGif(dataToSendToAPI)
//     }
//     mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
// })
