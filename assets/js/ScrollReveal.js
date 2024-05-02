window.revelar = ScrollReveal({ reset: false });

/* Topo do Site */
ScrollReveal().reveal('.img-topo-site',{
    duration: 2000, /* duração do efeito */
    distance: '90px',
    delay: 500, /* tempo de atraso para começar o efeito */    
});
ScrollReveal().reveal('.txt-topo-site',{
    duration: 2000,
    distance: '90px'    
});

/* Swiper */
ScrollReveal().reveal('.swiper-wrapper, .flex-intro',{
    origin: "bottom",
    duration: 2000,
    distance: '200px',

});
/* Serviços */
ScrollReveal().reveal('.servicos',{
    duration: 2000,
    distance: '200px',   
});

/* Quem Somos */
ScrollReveal().reveal('.missao, .valores, .texto-visao, .carrossel',{
    origin: "bottom",
    duration: 2000, /* duração do efeito */
    distance: '90px',
    delay: 500, /* tempo de atraso para começar o efeito */    
});


/* Cookie */
ScrollReveal().reveal('.cookies',{
    origin: "bottom",
    duration: 3000, /* duração do efeito */
    distance: '90px',
    delay: 800, /* tempo de atraso para começar o efeito */    
});
