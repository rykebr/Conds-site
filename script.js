document.addEventListener('DOMContentLoaded', () => {
    
    // Configura o Intersection Observer
    const observerOptions = {
        root: null, // usa a viewport do navegador
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Deixa de observar depois que já apareceu uma vez (opcional)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que possuem a classe 'animate-on-scroll'
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});