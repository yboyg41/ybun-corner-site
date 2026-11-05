const url = new URL(window.location)
const langParam = url.searchParams.get("lang")

let locale = {}
let locUrl = "locale/en.json"

switch (langParam) {
    case "en":
        locUrl = "locale/en.json"
        break

    case "jp":
        locUrl = "locale/jp.json"
        break

    default:
        locUrl = "locale/en.json"
        break;
}

async function getLoc(){
    try {
        const response = await fetch(locUrl)
        if (!response.ok) {
            console.log("failed to retrieve locale")
        } else {
            locale = await response.json()
            console.log(locale)
        }
    } catch (error) {
        console.log("failed to fetch")
        
        
    }

}

getLoc()

setInterval(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        let tagI18n = el.dataset.i18n

        if (locale[tagI18n]) {
            el.innerHTML = locale[tagI18n]
        }
        
        
        
    }), 
    2
})
function setLoc(loc) {
    url.searchParams.set('lang', loc)
    history.replaceState({}, "", url)
    window.location.reload()
}

document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.getElementsByClassName("loc-hl")).forEach(el => {
        el.addEventListener('click', () => {
            setLoc(el.innerHTML.toLowerCase())
        })
    })
})




