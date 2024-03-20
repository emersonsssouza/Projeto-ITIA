//Script do Menu para SmartPhone
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

//Script da Animação das imagens automaticas 
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;
function mudaImagem() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }
    box.style.transform = `translateX(${-contador * 1700}px)`
}
setInterval(mudaImagem, 4000);
console.log("ok");

//Script das caixas de curso para Smartphone
document.addEventListener("DOMContentLoaded", function () {
    const cursos = document.querySelectorAll(".curso");
    let currentIndex = 0;

    function showCurso(index) {
        cursos.forEach(curso => {
            curso.style.display = "none"; // Oculta todos os cursos
        });
        cursos[index].style.display = "block"; // Mostra o curso atual
    }

    showCurso(currentIndex); // Mostra o primeiro curso ao carregar a página

    document.getElementById("prevButton").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            showCurso(currentIndex);
        }
    });

    document.getElementById("nextButton").addEventListener("click", function () {
        if (currentIndex < cursos.length - 1) {
            currentIndex++;
            showCurso(currentIndex);
        }
    });
});

//Script da Animação das caixas com evento de Click no button
document.addEventListener("DOMContentLoaded", function () {
    const cursos = document.querySelectorAll(".curso");
    let currentIndex = 0;

    function showCurso(index) {
        const currentCurso = cursos[currentIndex];
        const nextCurso = cursos[index];

        // Oculta o curso atual
        currentCurso.classList.add('hidden');
        // Mostra o próximo curso
        nextCurso.classList.remove('hidden');

        // Atualiza o índice atual
        currentIndex = index;
    }
    // Mostra o primeiro curso ao carregar a página
    showCurso(currentIndex);
    // Adiciona evento de clique para o botão anterior
    document.getElementById("prevButton").addEventListener("click", function () {
        if (currentIndex > 0) {
            showCurso(currentIndex - 1);
        }
    });
    // Adiciona evento de clique para o botão próximo
    document.getElementById("nextButton").addEventListener("click", function () {
        if (currentIndex < cursos.length - 1) {
            showCurso(currentIndex + 1);
        }
    });
});

//Script da Animação do Menu Fas Fas-bars
let m = document.querySelector('#menu-btn');
let n = document.querySelector('.header .navbar');

m.onclick = () => {
    m.classList.toggle('fa-times');
    n.classList.toggle('active');
    n.classList.toggle('animate-slide');
};
window.onscroll = () => {
    m.classList.remove('fa-times');
    n.classList.remove('active');
};


