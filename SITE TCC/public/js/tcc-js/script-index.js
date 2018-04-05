// EXIBE EM QUAL PARTE DO SITE ESTAMOS 
function Verify(celula) {
    //LIMPA TODOS OS IDS
    document.querySelector("#chome").classList.remove("navbar-a-active_");
    document.querySelector("#chome").classList.add("navbar-ahover_");

    document.querySelector("#creceitas").classList.remove("navbar-a-active_");
    document.querySelector("#creceitas").classList.add("navbar-ahover_");

    document.querySelector("#cdicas").classList.remove("navbar-a-active_");
    document.querySelector("#cdicas").classList.add("navbar-ahover_");

    document.querySelector("#cnutricionista").classList.remove("navbar-a-active_");
    document.querySelector("#cnutricionista").classList.add("navbar-ahover_");

    document.querySelector("#ceventos").classList.remove("navbar-a-active_");
    document.querySelector("#ceventos").classList.add("navbar-ahover_");

    document.querySelector("#cfaq").classList.remove("navbar-a-active_");
    document.querySelector("#cfaq").classList.add("navbar-ahover_");
    // COLOCA ATIVO A CELULA CLICADA!
    celulaclick=document.querySelector("#"+celula);
    console.log(celulaclick);
    
    celulaclick.classList.remove("navbar-ahover_");
    celulaclick.classList.add("navbar-a-active_");

}


