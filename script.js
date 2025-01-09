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
    {name: "כפתור 1", link: "https://forms.office.com/r/9GppyZmPLV", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 2", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 3", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 4", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 5", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 6", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 7", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 8", link: "#", timeIsOpen: "10:00 - 12:00"},
    {name: "כפתור 9", link: "#", timeIsOpen: "10:00 - 12:00"}
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