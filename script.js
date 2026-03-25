document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Menu Mobile ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Abre/fecha o menu e os botões
            navMenu.classList.toggle('active');
            navActions.classList.toggle('active');
            
            // Opcional: Anima o ícone sanduíche para um "X"
            // Você precisaria de CSS extra para isso.
        });
    }

    // --- Lógica existente do Intersection Observer para Animações na Rolagem ---
    // Esta parte adiciona a classe 'visible' aos elementos que têm 'animate-on-scroll'
    const observerOptions = {
        root: null, // Usa a viewport como área de referência
        rootMargin: '0px',
        threshold: 0.15 // 15% do elemento precisa estar visível para disparar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible'
                entry.target.classList.add('visible');
                // Pára de observar o elemento depois de revelar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Encontra todos os elementos com a classe animate-on-scroll
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Diz ao observer para observar cada um deles
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
