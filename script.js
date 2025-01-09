const buttonsContainerElement = document.getElementById("buttonsContainer");
const popupWindow = document.getElementById("popup");
const popupTitleElement = document.getElementById("popup-title");
const iframeElement = document.getElementById("popup-iframe");
const closePopupBtn = document.getElementById("close-btn");


function createButtonElement(name, link, timeIsOpen) {
    const btnElement = document.createElement("button");
    btnElement.innerText = name;
    btnElement.classList.add("btn-link");

    const pElement = document.createElement("p");
    pElement.textContent = timeIsOpen;
    pElement.classList.add("p-times")

    btnElement.addEventListener('click', () => openPopupWindow(name, link))

    buttonsContainerElement.appendChild(btnElement);
}

const buttonsList = [
    {name: "נשקייה", link: "https://forms.office.com/r/b4fngmSSf4", timeIsOpen: "10:00 - 12:00"},
    {name: "בונקר", link: "https://forms.office.com/r/nEahdNF5Ez", timeIsOpen: "10:00 - 12:00"},
    {name: "נקודת גדר צפונית", link: "https://forms.office.com/r/ZNqHfmzCuw", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת ש.ג. ראשי", link: "https://forms.office.com/r/sJ04DACwU9", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת נשקייה", link: "https://forms.office.com/r/wkJtvG0SdW", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת בונקר", link: "https://forms.office.com/r/6wEsMQNW7z", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת ש.ג. דרומי", link: "https://forms.office.com/r/R0STUyAML3", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת מערבי", link: "https://forms.office.com/r/Dde878EG14", timeIsOpen: "10:00 - 12:00"},
    {name: "עמדת מזרחי", link: "https://forms.office.com/r/HeJHCf4ssL", timeIsOpen: "10:00 - 12:00"}
]

buttonsList.forEach((button) => {
    createButtonElement(button.name, button.link, button.timeIsOpen);
})




/* טיפול בחלון קופץ */
function openPopupWindow(title, link) {
    popupWindow.style.display = "flex";
    popupTitleElement.textContent = title;
    iframeElement.src = link;
}

// close popup window
closePopupBtn.addEventListener('click', () => {
    popupWindow.style.display = "none"
})
