

export const PostForm = () => {
    return `
        <div class="postForm">
            <form>
                <fieldset id="title">
                    <label for="name">Name:</label>
                    <input type="text" name="title" autofocus placeholder="Title" />
                </fieldset>
                <fieldset id="gif">
                    <label for="gif"></label>
                    <input type=":/http" name="gif" autofocus placeholder="URL of gif" />
                </fieldset>
                <fieldset id="comment">
                    <label for="comment"></label>
                    <input type="comment" name="newComment" placeholder="Comment under your gif..." />
                </fieldset>
            </form>
            <button id="saveButton">Save</button>
            <button id="cancelButton">Cancel</button>
        </div>
    `
}

const mainContainer = document.querySelector("#container")

// click event will look for click of send btn and save to transient state obj in json
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {

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
        sendGif(dataToSendToAPI)

    }

    //mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

})
