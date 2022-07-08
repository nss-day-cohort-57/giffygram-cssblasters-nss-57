export const NavHtml = () => {
    return `
    <nav class="navigation">
    <div class="navigation__item navigation__icon">
    <img src="/images/pb.png" alt="giffyicon" id="logo" />
    </div>
    <div class="navigation__item navigation__name">Giffygram</div>
    <div class="navigation__item navigation__message">
    <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Write Msg" />
    <div class="notification__count">${0}</div>
    </div>
    <div class="navigation__item navigation__logout">
    <button id="logout">Logout</button>
    </div>
    </nav>
    `;
}