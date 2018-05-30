window.addEventListener("load", hentHeader);

async function hentHeader() {
    let headerDOM = document.querySelector("#header");
    let headerHentes = await fetch("header.html");
    let header = await headerHentes.text();

    headerDOM.innerHTML = header;

}
$(window).scroll(function () {

    if ($(this).scrollTop() > 50) {
        $('.logo').fadeOut();
    } else {
        $('.logo').fadeIn();
    }
});

$(window).ready(function () {
    setTimeout(function () {
        $(".container_drop").click(function () {
            $(".container_drop").toggleClass("change");
            $(".dropdown").slideToggle();
        });
    });
});
