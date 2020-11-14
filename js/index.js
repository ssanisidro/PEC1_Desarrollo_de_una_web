const inicio = 'esta la PEC1 de Sergio Sanisidro García';
console.log(`Hola, ${inicio}`);

window.addEventListener('load', () => {


    // primera frase
    let slide = 1;

    // total frases
    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;

    // enseña la primera frase
    showSlide(1);

    next = document.querySelector(".siguiente");
    prev = document.querySelector(".anterior")

    /* evento botón siguiente frase */
    next.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        if (slide > total) { slide = 1; }
        showSlide(slide);
    })

    /* evento boton anterior frase */
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })

    /**
     * show slides
     * 
     * @param {number} n 
     * @return {null}
     * 
     */
    function showSlide(n) {
        n--; // decrecemos 1
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }

})

// código extraido de https://blog.artegrafico.net/creacion-de-un-slider-responsive-desde-cero-con-javascript-y-css