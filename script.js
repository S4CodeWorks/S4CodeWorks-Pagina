document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const scrollToTopBtn = document.createElement('button');

    // Inicializa o menu como fechado ao carregar a página
    navMenu.classList.remove('open'); 

    // Navegação suave ao clicar nos links
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth',
            });

            // Fecha o menu após clicar em um link (dispositivos móveis)
            navMenu.classList.remove('open');
        });
    });

    // Abre/fecha o menu ao clicar no ícone
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuToggle.classList.toggle('open'); // Para animar o ícone
    });

    // Cria o botão de scroll para o topo
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.textContent = '↑';
    document.body.appendChild(scrollToTopBtn);

    // Exibe o botão quando o usuário rola para baixo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Ao clicar no botão, vai para o topo
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});