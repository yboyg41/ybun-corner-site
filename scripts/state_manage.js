let stor = localStorage


document.addEventListener("DOMContentLoaded", () => {
    

    let contentDiv = document.getElementById("content")

    loadPage(stor.getItem("lastState") || "landing")

    function loadPage(id) {
        const elem = document.getElementById(id)
        const elemct = elem.content.cloneNode(true)

        contentDiv.innerHTML = ""
        contentDiv.appendChild(elemct)

    }


    console.log("enrique")

    // the buttons
    const bannerButtons = document.getElementsByClassName("navbar-button")
    const btnArr = Array.from(bannerButtons)

    for (let button of btnArr) {
        button.addEventListener('click', () => {
            loadPage(button.dataset.state)
            stor.setItem("lastState", button.dataset.state)
        })
    }


})