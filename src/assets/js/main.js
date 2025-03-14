'use strict'

/* Minha visão sobre esse projeto é voltada para POSIÇÃO.
Para cada conteúdo prensente em cada tab, eles precisam estar "dentros um dos outros".
Ou seja, um position: absolute; e a cada click em cada tab, deactive o anterior e active o que foi clicado.
*/

function showTab(index) {
    let tabContents = document.getElementsByClassName('tab-content');
    for(let i=0 ; i<tabContents.length ; i++) {
        tabContents[i].classList.remove("active");
    }
    tabContents[index].classList.add("active");
}