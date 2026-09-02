document.addEventListener("DOMContentLoaded", () => {
    
    let contentDiv = document.getElementById("content")
    
    if (window.location.hash.slice(1) === "") {
        window.location.hash = "landing"
    }
    
    

    function loadPage(id) {
        const elem = document.getElementById(id)
        const elemct = elem.content.cloneNode(true)

        contentDiv.innerHTML = ""
        contentDiv.appendChild(elemct)

    }


    console.log("enrique")
    loadPage(window.location.hash.slice(1))

    // the buttons
    const bannerButtons = document.getElementsByClassName("navbar-button")
    const btnArr = Array.from(bannerButtons)

    for (let button of btnArr) {
        button.addEventListener('click', () => {
            const targetState = button.dataset.state
            window.location.hash = targetState
        })
    }
    window.addEventListener("hashchange", () => {
        const pathHash = window.location.hash.slice(1)
        loadPage(pathHash)

    })

})