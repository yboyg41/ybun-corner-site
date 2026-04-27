async function loadCommonEl(url) {
    try {
        const resp = await fetch(url, {cache: "force-cache"})
        if (!resp.ok) throw new Error("HTTP ", resp.status)
        const html = await resp.text()
        
        let tempHTML = html + document.body.innerHTML
        
        document.body.innerHTML = tempHTML

    } catch (e){
        console.error("failed to load: ", e)
    }
}

async function loadCommonCSS(url) {
    const linkEl = document.createElement("link")
    linkEl.rel = "stylesheet"
    linkEl.href = url

    document.head.appendChild(linkEl)
}

document.addEventListener("DOMContentLoaded", () => {
    loadCommonEl("/scripts/common_el.html")
    loadCommonCSS("/scripts/common_css.css")
})