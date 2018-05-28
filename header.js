window.addEventListener("load", hentHeader);

async function henHeader() {
    let headerDOM = document.querySelector("#header");
    let headerHentes = await fetch("header.html");
    let header = await headerHentes.text();

    headerDOM.innerHTML = header;
}
