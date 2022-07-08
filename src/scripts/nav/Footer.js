import { getUsers } from "../data/provider.js";
export const footerHTML = () => {

 const users = getUsers()

   let html = `<footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>
            <div class="footer__item">
                Posts by user <select id="userSelection">`
    for (const user of users) {
        html += `<option value="user--${user.id}">${user.name}</option>`  
    }
                    
              html +=  `</select>
            </div>
            <div class="footer__item">
            Show only favorites <input id="showOnlyFavorites" type="checkbox">
            </div>
        </footer>`

 return html
}