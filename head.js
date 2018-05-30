window.addEventListener("load", hentHead);

async function hentHead() {
    let headDOM = document.querySelector("#head");
    let headHentes = await fetch("head.html");
    let head = await headHentes.text();

    headDOM.innerHTML = head;

}
