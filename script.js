function toggleMobileMenu() {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("active");
        }

        
        function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                const menu = document.getElementById("mobileMenu");
                menu.classList.remove("active");
            }
        }

        
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const menu = document.getElementById('mobileMenu');
                menu.classList.remove('active');
            });
        });

       
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

            const text = // Animação de digitação com "Olá," colorido
const text = '<span>Olá, </span>eu sou o Guilherme Da Silva Teodoro';;
let index = 0;

function typeWriter() {
    const element = document.getElementById("typing");

    // Vai revelando o texto aos poucos, incluindo as tags HTML
    element.innerHTML = text.substring(0, index);

    if (index < text.length) {
        index++;
        setTimeout(typeWriter, 80);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);
;
            let index = 0;

            function typeWriter() {
                const typingElement = document.getElementById("typing");
                if (index < text.length) {
                    typingElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 80); // 
                }
            }

            document.addEventListener("DOMContentLoaded", typeWriter);
