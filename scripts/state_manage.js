let state = "portf"

document.addEventListener("DOMContentLoaded", () => {
    

    let contentDiv = document.getElementById("content")


    function loadPage(id) {
        const elem = document.getElementById(id)
        const elemct = elem.content.cloneNode(true)
        contentDiv.appendChild(elemct)

    }




    // the buttons
    const bannerButtons = document.getElementsByClassName("navbar-buttons")

    Array.from(bannerButtons).forEach(button => {
        console.log(state)        
    });
    
    
    
    
    
    
    
    
    
    
    
    loadPage(state)
})