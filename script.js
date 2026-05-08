document.addEventListener('DOMContentLoaded', () => {

    // ── Theme toggle ──────────────────────────────────────────
    const temaBtn = document.getElementById('tema-toggle');
    const savedTheme = localStorage.getItem('gconds-theme');
    if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';

    temaBtn?.addEventListener('click', () => {
        const isDark = document.documentElement.dataset.theme === 'dark';
        document.documentElement.dataset.theme = isDark ? '' : 'dark';
        localStorage.setItem('gconds-theme', isDark ? 'light' : 'dark');
    });

    // ── Navbar scroll shadow ──────────────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── Mobile menu ───────────────────────────────────────────
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu    = document.getElementById('nav-menu');

    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ── Intersection Observer — scroll animations ─────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const delay = parseInt(entry.target.dataset.delay || 0, 10);
            setTimeout(() => entry.target.classList.add('visible'), delay * 90);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.animate-on-scroll, .feature-card, .animate-from-left, .animate-from-right').forEach(el => {
        observer.observe(el);
    });

    // ── Image reveal (clip-path / slide / zoom) ───────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            setTimeout(() => entry.target.classList.add('revealed'), 120);
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.img-reveal, .img-reveal-up, .img-reveal-zoom, .img-slide-left').forEach(el => revealObserver.observe(el));

    // ── Fallback: força visibilidade para elementos já na viewport ──
    function revealInViewport() {
        const vh = window.innerHeight;
        document.querySelectorAll('.animate-on-scroll:not(.visible), .feature-card:not(.visible), .animate-from-left:not(.visible), .animate-from-right:not(.visible)').forEach(el => {
            if (el.getBoundingClientRect().top < vh + 80) el.classList.add('visible');
        });
        document.querySelectorAll('.img-reveal:not(.revealed), .img-reveal-up:not(.revealed), .img-reveal-zoom:not(.revealed), .img-slide-left:not(.revealed)').forEach(el => {
            if (el.getBoundingClientRect().top < vh + 80) el.classList.add('revealed');
        });
    }
    window.addEventListener('load', () => setTimeout(revealInViewport, 300));
    window.addEventListener('load', () => setTimeout(revealInViewport, 1200));

    // ── Counter animation ─────────────────────────────────────
    function animateCount(el) {
        const target  = parseInt(el.dataset.count, 10);
        const suffix  = el.dataset.suffix || '';
        const dur     = 2200;
        const start   = performance.now();

        const tick = (now) => {
            const p      = Math.min((now - start) / dur, 1);
            const eased  = 1 - Math.pow(1 - p, 3);
            const val    = Math.round(eased * target);
            el.textContent = val >= 1000
                ? val.toLocaleString('pt-BR') + suffix
                : val + suffix;
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('[data-count]').forEach(el => animateCount(el));
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 });

    // Observe numeros section and hero stats
    document.querySelectorAll('.numeros, .hero-stats').forEach(sec => {
        counterObserver.observe(sec);
    });

    // ── Stat hover — re-trigger counter + ripple ─────────────
    document.querySelectorAll('.hero-stats .stat').forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            const el = stat.querySelector('[data-count]');
            if (el) animateCount(el);
        });

        stat.addEventListener('click', () => {
            const el = stat.querySelector('[data-count]');
            if (el) animateCount(el);
        });
    });

    // ── Active nav link on scroll ─────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === '#' + entry.target.id
                );
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sectionObserver.observe(s));

    // ── Smooth scroll for anchor links ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = navbar.offsetHeight + 12;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ── 3D Tilt on hover ──────────────────────────────────────
    function addTilt(el, intensity = 7) {
        const tiltStrength = parseFloat(el.dataset.tiltIntensity) || intensity;
        el.style.transition = 'transform 0.5s ease';

        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            el.style.transform = `perspective(900px) rotateY(${x * tiltStrength}deg) rotateX(${-y * tiltStrength}deg) scale3d(1.04,1.04,1.04)`;
            el.style.transition = 'transform 0.08s linear';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.transition = 'transform 0.6s ease';
        });
    }

    document.querySelectorAll('.tilt-wrap').forEach(el => addTilt(el));

    // ── Hero image — mouse-follow glow + cards parallax ──────
    const heroWrapper = document.querySelector('.hero-img-wrapper');
    if (heroWrapper) {
        const heroInner = heroWrapper.querySelector('.hero-img-inner');
        const cards     = heroWrapper.querySelectorAll('.hero-card');

        heroWrapper.addEventListener('mousemove', (e) => {
            const r = heroInner.getBoundingClientRect();
            const mx = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
            const my = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
            heroInner.style.setProperty('--mx', mx + '%');
            heroInner.style.setProperty('--my', my + '%');

            const ox = (e.clientX - r.left - r.width  / 2) / r.width;
            const oy = (e.clientY - r.top  - r.height / 2) / r.height;
            cards.forEach(card => {
                card.style.transform = `translate(${-ox * 12}px, ${-oy * 12}px)`;
                card.style.transition = 'transform 0.1s linear';
            });
        });

        heroWrapper.addEventListener('mouseleave', () => {
            cards.forEach(card => {
                card.style.transform = '';
                card.style.transition = 'transform 0.6s ease';
            });
        });
    }

    // ── Parallax scroll on elements with data-parallax ────────
    const parallaxEls = document.querySelectorAll('[data-parallax]');

    function updateParallax() {
        const vh = window.innerHeight;
        parallaxEls.forEach(el => {
            const speed = parseFloat(el.dataset.parallax);
            const rect  = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - vh / 2;
            el.style.setProperty('--parallax-y', `${center * speed}px`);
        });
    }

    if (parallaxEls.length) {
        // Apply via CSS custom property to avoid fighting with tilt transform
        parallaxEls.forEach(el => {
            el.style.transformOrigin = 'center center';
        });

        let rafId = null;
        window.addEventListener('scroll', () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                updateParallax();
                rafId = null;
            });
        }, { passive: true });

        updateParallax();
    }

    // ── Contact form ──────────────────────────────────────────
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Solicitação enviada!';
        btn.style.backgroundColor = '#22c55e';
        btn.style.borderColor     = '#22c55e';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.backgroundColor = '';
            btn.style.borderColor     = '';
            btn.disabled = false;
            form.reset();
        }, 3500);
    });

    // ===== MATRIX CURSOR EFFECT (revertível — remover este bloco para desativar) =====
    const matrixSkipSelector = '.hero-img-wrapper, .sobre-img-frame, .dif-img-frame, .contato-img-wrapper, button, input, textarea, select';
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (!isCoarsePointer) {
        let matrixLastSpawn = 0;
        const matrixSpawnInterval = 110;

        function spawnMatrixSquares(mx, my) {
            const count = 2 + Math.floor(Math.random() * 2);
            for (let i = 0; i < count; i++) {
                const angle    = Math.random() * Math.PI * 2;
                const distance = 90 + Math.random() * 200;
                const x = mx + Math.cos(angle) * distance;
                const y = my + Math.sin(angle) * distance;

                if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) continue;

                const rnd  = Math.random();
                const type = rnd < 0.15 ? 'flash' : rnd < 0.40 ? 'outline' : rnd < 0.60 ? 'bar' : 'filled';

                const size  = type === 'bar'
                    ? { w: 8 + Math.random() * 28, h: 2 + Math.random() * 4 }
                    : { w: 4 + Math.random() * 13, h: 4 + Math.random() * 13 };

                const alpha = (0.18 + Math.random() * 0.28).toFixed(2);
                const peak  = (0.55 + Math.random() * 0.45).toFixed(2);
                const dur   = (1.0  + Math.random() * 0.9).toFixed(2) + 's';
                const rot   = ((Math.random() - 0.5) * 35).toFixed(1) + 'deg';
                const dx    = ((Math.random() - 0.5) * 35).toFixed(1) + 'px';
                const dy    = (8 + Math.random() * 28).toFixed(1) + 'px';

                const p = document.createElement('div');
                p.className = 'matrix-particle ' + type;
                p.style.cssText = `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;width:${size.w.toFixed(1)}px;height:${size.h.toFixed(1)}px;`;
                p.style.setProperty('--alpha', alpha);
                p.style.setProperty('--peak',  peak);
                p.style.setProperty('--dur',   dur);
                p.style.setProperty('--rot',   rot);
                p.style.setProperty('--dx',    dx);
                p.style.setProperty('--dy',    dy);

                document.body.appendChild(p);
                setTimeout(() => p.remove(), parseFloat(dur) * 1000 + 100);
            }
        }

        document.addEventListener('mousemove', (e) => {
            const now = performance.now();
            if (now - matrixLastSpawn < matrixSpawnInterval) return;
            matrixLastSpawn = now;
            if (e.target.closest(matrixSkipSelector)) return;
            spawnMatrixSquares(e.clientX, e.clientY);
        }, { passive: true });
    }
    // ===== FIM MATRIX CURSOR EFFECT =====
});
