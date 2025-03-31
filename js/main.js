//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjetita = document.querySelector("#tarjeta");
tarjetita.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let logo_youtube = document.querySelector("#logo");
logo_youtube.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");
//3- Quitarle al titulo la clase que le está dando un formato feo
let antiguo__titulo_feo = document.querySelector(".titulo-feo");
antiguo__titulo_feo.removeAttribute("class");

//4- Chequear si el link a youtube posee o no el atributo href
let link_ref_bool = document.querySelector("#link_youtube");
console.log(link_ref_bool.hasAttribute("href"));

//5- Obtener el href del link a wikipedia y mostrarlo por consola
link_ref_wiki = document.querySelector("#link_wikipedia");
console.log(link_ref_wiki.getAttribute("href"));
