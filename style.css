/* Variáveis de Cores (Baseadas no PDF e referências) */
:root {
    --gray-dark: #2c2d30;
    --gray-medium: #4a4a4a;
    --gray-light: #f4f5f7;
    --white: #ffffff;
    --orange-conds: #ff6b00;
    --yellow-mosaic: #ffc107;
    --blue-mosaic: #00bcd4;
    --purple-mosaic: #8a2be2;
    --pink-mosaic: #ff69b4;
    --orange-mosaic: #ff9800;
    --light-blue-mosaic: #03a9f4;
    --green-whatsapp: #25d366;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--white);
    color: var(--gray-dark);
    overflow-x: hidden;
}

/* Tipografia Comum */
h1, h2, h3 { font-weight: 700; margin-bottom: 15px; }
p { line-height: 1.6; }

/* Placeholder para Imagens (Remover quando adicionar as imagens reais) */
.placeholder-img {
    background-color: rgba(0,0,0,0.1);
    border: 2px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-medium);
    font-style: italic;
    text-align: center;
    padding: 20px;
}

/* --- Navegação e Dropdown --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-links li { position: relative; }
.nav-links a {
    text-decoration: none;
    color: var(--gray-dark);
    font-weight: 600;
    transition: var(--transition);
}

.nav-links a:hover { color: var(--orange-conds); }

/* --- Estilos do novo botão de Login e Header --- */
.nav-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.btn-outline {
    background-color: transparent;
    color: var(--orange-conds);
    border: 2px solid var(--orange-conds);
    padding: 8px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: var(--transition);
}

.btn-outline:hover {
    background-color: var(--orange-conds);
    color: var(--white);
}

.menu-toggle {
    display: none;
    font-size: 1.8rem;
    color: var(--gray-dark);
    cursor: pointer;
}

/* --- Responsividade (Mobile) --- */
@media (max-width: 900px) {
    /* Navbar e Menu Mobile */
    .menu-toggle {
        display: block;
    }
    
    .navbar {
        flex-wrap: wrap;
        padding: 15px 20px;
    }

    .nav-menu {
        display: none; /* Escondido por padrão no mobile */
        width: 100%;
        order: 3;
        background-color: var(--white);
        padding: 20px 0;
    }

    .nav-menu.active {
        display: block;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        text-align: center;
        background-color: var(--gray-light);
        margin-top: 10px;
        display: none; /* Pode ser expandido via JS se desejar */
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .nav-actions {
        display: none;
        width: 100%;
        order: 4;
        flex-direction: column;
        margin-top: 15px;
        padding-bottom: 15px;
    }

    .nav-actions.active {
        display: flex;
    }

    .nav-actions a {
        width: 100%;
        text-align: center;
    }

    /* Ajustes Gerais das Seções para Mobile */
    .hero {
        flex-direction: column;
        padding: 40px 20px;
        text-align: center;
        min-height: auto;
    }

    .hero-image {
        margin-left: 0;
        margin-top: 40px;
        width: 100%;
    }

    .input-group {
        flex-direction: column;
        background-color: transparent;
        padding: 0;
    }

    .input-group input {
        width: 100%;
        margin-bottom: 10px;
        padding: 15px;
        border: 1px solid #ccc;
    }

    .input-group button {
        width: 100%;
        padding: 15px;
    }

    .sobre {
        flex-direction: column;
        padding: 40px 20px;
        text-align: center;
    }

    .sobre-image {
        width: 100%;
        margin-top: 30px;
    }

    .mosaic {
        flex-direction: column;
    }

    .mosaic-left {
        padding: 40px 20px;
        text-align: center;
    }

    .mosaic-right {
        grid-template-columns: 1fr; /* 1 coluna no celular */
    }

    .produtos {
        padding: 40px 20px;
    }

    .produtos-grid {
        flex-direction: column;
    }

    footer {
        flex-direction: column;
        text-align: center;
        gap: 30px;
        padding: 40px 20px;
    }

    .footer-social {
        margin-top: 20px;
    }
}

:root {
    --orange-conds: #ff6a00; /* Laranja da Conds */
    --gray-dark: #333333;
    --gray-medium: #888888;
    --gray-light: #f4f4f4;
    --white: #ffffff;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-shadow: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--gray-dark);
    line-height: 1.6;
    background-color: var(--white);
    overflow-x: hidden; /* Evita rolagem horizontal */
}

/* --- Botões Gerais --- */
.btn-primary {
    background-color: var(--orange-conds);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid var(--orange-conds);
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background-color: #e56000;
    border-color: #e56000;
}

/* --- Navbar (Inalterado, apenas responsividade adicionada) --- */
.navbar {
    background-color: var(--white);
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.logo {
    font-size: 1.5rem;
    color: var(--orange-conds);
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--gray-dark);
    font-weight: 500;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-links a:hover {
    color: var(--orange-conds);
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--white);
    list-style: none;
    padding: 10px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: var(--transition);
    min-width: 180px;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li a {
    padding: 8px 20px;
    display: block;
    font-weight: normal;
}

.dropdown-menu li a:hover {
    background-color: var(--gray-light);
}

/* --- Estilos do novo botão de Login e Header --- */
.nav-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.btn-outline {
    background-color: transparent;
    color: var(--orange-conds);
    border: 2px solid var(--orange-conds);
    padding: 8px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: var(--transition);
}

.btn-outline:hover {
    background-color: var(--orange-conds);
    color: var(--white);
}

.menu-toggle {
    display: none;
    font-size: 1.8rem;
    color: var(--gray-dark);
    cursor: pointer;
}

/* --- Estilos para Novas Seções (Harmoniosos e Profissionais) --- */

/* Generic Utility */
.img-responsive {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Diferenciais Section (Page 11) */
.diferenciais {
    padding: 80px 10%;
}

.diferenciais-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.diferenciais-image {
    flex: 1;
}

.diferenciais-text {
    flex: 1;
    text-align: left;
}

.diferenciais-text h2 {
    font-size: 2.5rem;
    color: var(--gray-dark);
}

.diferenciais-text p {
    color: var(--gray-medium);
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.diferenciais-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.diferenciais-list li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    color: var(--gray-dark);
    font-weight: 500;
    font-size: 1.05rem;
}

.diferenciais-list li i {
    color: var(--orange-conds);
    font-size: 1.4rem;
}

/* Contato Section (Page 12) */
.contato {
    padding: 80px 10%;
    background-color: var(--white);
}

.contato-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.contato-form {
    flex: 1;
    text-align: left;
}

.contato-form h2 {
    font-size: 2.5rem;
    color: var(--gray-dark);
}

.contato-form p {
    color: var(--gray-medium);
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.contato-form form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contato-form form input {
    width: 100%;
    padding: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background-color: var(--gray-light);
}

.contato-form form input:focus {
    border-color: var(--orange-conds);
    outline: none;
    box-shadow: 0 0 8px rgba(255,107,0,0.2);
    background-color: var(--white);
}

.contato-image {
    flex: 1;
}

/* Simplificação do Footer */
footer {
    padding: 40px 10%;
    background-color: var(--gray-dark);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-logo {
    text-align: left;
}

.footer-logo p {
    color: var(--gray-medium);
    font-size: 0.9rem;
}

.footer-social {
    display: flex;
    gap: 20px;
    font-size: 1.3rem;
}

.footer-social a {
    color: var(--white);
    transition: var(--transition);
}

.footer-social a:hover {
    color: var(--orange-conds);
}

/* --- Ajustes Responsivos para Novas Seções --- */
@media (max-width: 900px) {
    .diferenciais {
        padding: 60px 20px;
    }
    
    .diferenciais-container,
    .contato-container {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }

    .diferenciais-text,
    .contato-form {
        text-align: center;
    }

    .diferenciais-text h2,
    .contato-form h2 {
        font-size: 2rem;
    }
    
    .diferenciais-image,
    .contato-image {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }

    .diferenciais-list {
        display: inline-block;
        text-align: left;
    }

    .contato {
        padding: 60px 20px;
    }
    
    footer {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    .footer-logo {
        text-align: center;
    }
}

/* --- Ajustes para os Cards de Perfis --- */
.produto-card .produto-info i {
    transition: var(--transition);
}

.produto-card:hover .produto-info i {
    transform: scale(1.1);
}

/* --- Ajuste para Section Invertida (Preços) --- */
.sobre[style*="row-reverse"] {
    background: linear-gradient(135deg, var(--gray-light) 0%, #e0e0e0 100%);
    color: var(--gray-dark);
}

.sobre[style*="row-reverse"] h2,
.sobre[style*="row-reverse"] p {
    color: var(--gray-dark);
}

@media (max-width: 900px) {
    .sobre[style*="row-reverse"] {
        flex-direction: column !important;
    }
}

/* --- Estilos Gerais de Imagens --- */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* --- Seção Hero --- */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 10% 0 10%;
    margin-top: 80px; /* Espaço para a navbar */
}

.hero-content {
    flex: 1;
    max-width: 500px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--gray-dark);
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: var(--gray-medium);
}

.hero-image {
    flex: 1;
    margin-left: 50px;
}

.hero-image img {
    width: 100%;
    /* Opcional: Adicionar sombra nas imagens da capa */
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.input-group {
    display: flex;
    gap: 10px;
    background-color: var(--gray-light);
    padding: 5px;
    border-radius: 30px;
    border: 1px solid #eee;
}

.input-group input {
    border: none;
    background: transparent;
    padding: 10px 20px;
    flex: 1;
    font-size: 1rem;
    border-radius: 25px;
}

.input-group input:focus {
    outline: none;
    background: #fff;
}

/* --- Seção Sobre --- */
.sobre {
    padding: 100px 10%;
    display: flex;
    align-items: center;
    gap: 50px;
    background-color: var(--gray-light);
}

.sobre-content {
    flex: 1;
}

.sobre h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.sobre-image {
    flex: 1;
}

.sobre-image img {
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* --- Mosaico de Imagens (Serviços) --- */
.mosaic {
    display: flex;
    gap: 30px;
    padding: 100px 10%;
}

.mosaic-left {
    flex: 2; /* Ocupa 2/3 */
}

.mosaic-left img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.mosaic-right {
    flex: 1; /* Ocupa 1/3 */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-content: stretch;
}

.mosaic-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: var(--transition);
}

.mosaic-item:hover img {
    transform: scale(1.05); /* Efeito de zoom no hover */
}

/* --- Seção Produtos --- */
.produtos {
    padding: 100px 10%;
    text-align: center;
}

.produtos h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
}

.produtos-grid {
    display: flex;
    gap: 30px;
}

.produto-card {
    flex: 1;
    background: var(--white);
    padding: 40px 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    transition: var(--transition);
}

.produto-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.produto-card i {
    font-size: 3rem;
    color: var(--orange-conds);
    margin-bottom: 20px;
}

.produto-card h3 {
    margin-bottom: 15px;
}

/* --- Rodapé --- */
footer {
    padding: 50px 10%;
    background-color: var(--gray-dark);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer .logo {
    color: var(--white);
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: var(--gray-medium);
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--white);
}

.footer-social {
    display: flex;
    gap: 20px;
    font-size: 1.2rem;
}

.footer-social a {
    color: var(--white);
    transition: var(--transition);
}

.footer-social a:hover {
    color: var(--orange-conds);
}

/* --- Animação de Rolagem (Intersection Observer) --- */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
}

.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Responsividade (Mobile) --- */
@media (max-width: 1024px) {
    .navbar { padding: 15px 30px; }
    .hero { padding: 0 5%; }
    .hero h1 { font-size: 2.5rem; }
    .sobre { padding: 70px 5%; gap: 30px; }
    .mosaic { padding: 70px 5%; gap: 20px; }
    .produtos { padding: 70px 5%; }
}

@media (max-width: 900px) {
    /* Navbar e Menu Mobile */
    .menu-toggle {
        display: block;
    }
    
    .navbar {
        flex-wrap: wrap;
        padding: 15px 20px;
    }

    .nav-menu {
        display: none; /* Escondido por padrão no mobile */
        width: 100%;
        order: 3;
        background-color: var(--white);
        padding: 20px 0;
    }

    .nav-menu.active {
        display: block;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        text-align: center;
        background-color: var(--gray-light);
        margin-top: 10px;
        display: none; /* Pode ser expandido via JS se desejar */
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .nav-actions {
        display: none;
        width: 100%;
        order: 4;
        flex-direction: column;
        margin-top: 15px;
        padding-bottom: 15px;
    }

    .nav-actions.active {
        display: flex;
    }

    .nav-actions a {
        width: 100%;
        text-align: center;
    }

    /* Ajustes Gerais das Seções para Mobile */
    .hero {
        flex-direction: column;
        padding: 40px 20px;
        text-align: center;
        min-height: auto;
    }

    .hero-image {
        margin-left: 0;
        margin-top: 40px;
        width: 100%;
    }

    .input-group {
        flex-direction: column;
        background-color: transparent;
        padding: 0;
    }

    .input-group input {
        width: 100%;
        margin-bottom: 10px;
        padding: 15px;
        border: 1px solid #ccc;
    }

    .input-group button {
        width: 100%;
        padding: 15px;
    }

    .sobre {
        flex-direction: column;
        padding: 40px 20px;
        text-align: center;
    }

    .sobre-image {
        width: 100%;
        margin-top: 30px;
    }

    .mosaic {
        flex-direction: column;
    }

    .mosaic-left {
        padding: 40px 20px;
        text-align: center;
    }

    .mosaic-right {
        grid-template-columns: 1fr; /* 1 coluna no celular */
    }

    .produtos {
        padding: 40px 20px;
    }

    .produtos-grid {
        flex-direction: column;
    }

    footer {
        flex-direction: column;
        text-align: center;
        gap: 30px;
        padding: 40px 20px;
    }

    .footer-social {
        margin-top: 20px;
    }
}

/* --- Ajustes Reais de Imagens (Substituindo Placeholders) --- */
img {
    max-width: 100%;
    display: block;
}

.hero-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    object-fit: cover;
}

.sobre-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.woman-img {
    width: 100%;
    height: 350px;
    object-fit: cover; /* Faz a foto da mulher preencher o espaço sem distorcer */
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Novo estilo para os Cards de Produto */
.produto-card {
    flex: 1;
    background-color: var(--white);
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    overflow: hidden; /* Mantém a imagem dentro das bordas arredondadas */
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    text-align: left;
}

.produto-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.produto-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid var(--orange-conds);
}

.produto-info {
    padding: 20px;
}

.produto-info h3 {
    color: var(--gray-dark);
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.produto-info p {
    color: var(--gray-medium);
    font-size: 0.95rem;
}

/* Lógica do Mini Menu (Dropdown) */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--white);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    list-style: none;
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: var(--transition);
    border-radius: 5px;
    overflow: hidden;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li a {
    display: block;
    padding: 12px 20px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
}

.dropdown-menu li a:hover { background-color: var(--gray-light); }

/* --- Botões --- */
.btn-primary {
    background-color: var(--orange-conds);
    color: var(--white);
    padding: 10px 24px;
    border: none;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: var(--transition);
}
.btn-primary:hover { background-color: #e65c00; transform: scale(1.05); }

/* --- Hero Section (SEO Rocket Style em tons de Cinza) --- */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 50px;
    background: linear-gradient(135deg, var(--gray-dark) 0%, var(--gray-medium) 100%);
    color: var(--white);
    min-height: 80vh;
}

.hero-content { flex: 1; max-width: 600px; }
.hero-content h1 { font-size: 3rem; margin-bottom: 30px; }
.hero .subtitle { color: var(--orange-conds); font-weight: bold; margin-bottom: 10px; }

.input-group {
    display: flex;
    background: var(--white);
    padding: 8px;
    border-radius: 50px;
    gap: 10px;
}
.input-group input {
    border: none;
    outline: none;
    padding: 10px 15px;
    flex: 1;
    border-radius: 25px;
}
.hero-image { flex: 1; height: 400px; margin-left: 50px; border-radius: 20px; }

/* --- Sobre a Conds --- */
.sobre {
    display: flex;
    align-items: center;
    padding: 80px 50px;
    background-color: var(--gray-dark);
    color: var(--white);
    gap: 50px;
}
.sobre-text { flex: 1; }
.sobre-image { flex: 1; height: 300px; border-radius: 10px; }

/* --- Mosaico Section --- */
.mosaic {
    display: flex;
    background-color: var(--gray-light);
}

.mosaic-left {
    flex: 1;
    background-color: var(--yellow-mosaic);
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}
.woman-placeholder { height: 350px; width: 100%; border-radius: 10px; margin-bottom: 20px; background-color: rgba(255,255,255,0.3); border-color: #fff;}
.mosaic-left h2 { font-size: 3rem; color: var(--white); text-shadow: 2px 2px 4px rgba(0,0,0,0.1); }

.mosaic-right {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.mosaic-item {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    font-weight: 600;
    transition: var(--transition);
}
.mosaic-item i { font-size: 2.5rem; margin-bottom: 15px; }
.mosaic-item:hover { transform: scale(1.02); z-index: 10; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

/* Cores do Mosaico */
.color-blue { background-color: var(--blue-mosaic); }
.color-purple { background-color: var(--purple-mosaic); }
.color-pink { background-color: var(--pink-mosaic); }
.color-orange { background-color: var(--orange-mosaic); }
.color-yellow { background-color: var(--yellow-mosaic); color: var(--gray-dark); }
.color-light-blue { background-color: var(--light-blue-mosaic); }

/* --- Produtos --- */
.produtos { padding: 80px 50px; text-align: center; background-color: var(--white); }
.produtos-grid {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 40px;
}
.produto-card { flex: 1; height: 250px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }

/* --- Rodapé --- */
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 50px;
    background-color: var(--gray-dark);
    color: var(--white);
}
.btn-whatsapp {
    display: inline-block;
    background-color: var(--green-whatsapp);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
    transition: var(--transition);
}
.btn-whatsapp:hover { background-color: #1ebe57; }
.footer-social i { font-size: 1.5rem; margin-left: 15px; cursor: pointer; transition: var(--transition); }
.footer-social i:hover { color: var(--orange-conds); }

/* --- Classes do Efeito de Scroll (JS) --- */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
