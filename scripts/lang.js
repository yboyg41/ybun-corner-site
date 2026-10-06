const langParam = url.searchParams.get("lang")

let locale

async function getLoc(){
    try {
        const response = await fetch("locale/jp.json")
        if (!response.ok) {
            console.log("failed to retrieve locale")
        } else {
            locale = await response.json()
            console.log(locale)
        }
    } catch (error) {
        console.error(error.message)
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
    1
})