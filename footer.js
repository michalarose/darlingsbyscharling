window.addEventListener("load", hentFooter);

async function hentFooter() {
    let footerDOM = document.querySelector("#footer");
    let footerHentes = await fetch("footer.html");
    let footer = await footerHentes.text();

    footerDOM.innerHTML = footer;

};
