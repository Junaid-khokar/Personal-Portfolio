document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        // Sticky navbar on scroll script
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }

        // Scroll-up button show/hide script
        if (window.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add("show");
        } else {
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });

    // Slide-up script
    document.querySelector('.scroll-up-btn').addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    document.querySelectorAll('.navbar .menu li a').forEach(function(elem) {
        // Applying smooth scroll on menu items click
        elem.addEventListener("click", function() {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Toggle menu/navbar script
    document.querySelector('.menu-btn').addEventListener("click", function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // Typing text animation script
    var index = 0;
    var text = "Web Developer ";
    var typingElement = document.querySelector(".typing");
    var typingElement2 = document.querySelector(".typing-2");

    function type() {
        typingElement.textContent = typingElement.textContent+text[index % text.length];
        typingElement2.textContent = typingElement2.textContent+text[index % text.length];
        index++;
        if(typingElement.textContent == "Web Developer " && typingElement2.textContent == "Web Developer ")
        {
            typingElement.textContent = "";
            typingElement2.textContent = "";
        }
        setTimeout(type, 100); // Change typing speed here (in milliseconds)
    }

    type();
});
