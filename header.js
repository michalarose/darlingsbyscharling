window.addEventListener("load", hentHeader);

async function hentHeader() {
    let headerDOM = document.querySelector("#header");
    let headerHentes = await fetch("header.html");
    let header = await headerHentes.text();

    headerDOM.innerHTML = header;

}
