function toggleMobileMenu() {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("active");
        }

        // Função para rolar suavemente para uma seção
        function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                const menu = document.getElementById("mobileMenu");
                menu.classList.remove("active");
            }
        }

        // Fechar menu mobile ao clicar em um link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const menu = document.getElementById('mobileMenu');
                menu.classList.remove('active');
            });
        });

        // Adicionar sombra ao header quando scrollar
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });