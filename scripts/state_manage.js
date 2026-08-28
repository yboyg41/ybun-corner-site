
document.addEventListener("DOMContentLoaded", () => {
    let state = "landing"

    let contentDiv = document.getElementById("content")


    function loadPage(id) { 
        const elem = document.getElementById(id)
        const elemct = elem.content.cloneNode(true)
    
        contentDiv.appendChild(elemct)

    }




    // the buttons

    
    
    
    
    
    
    
    
    
    
    
    loadPage(state)
})