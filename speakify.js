// Não poder selecionar e botão direito bloqueado
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());

// Abrir modal
window.addEventListener("load", function() {
    const button = document.querySelector("#credits-btn");
    const modal = document.querySelector("#credits");
    const buttonClose = document.querySelector("#credits-close");
    
    const donateModal = document.querySelector("#donate");
    const donateClose = document.querySelector("#donate-close");

    // Mostrar donateModal ao carregar a página
    requestAnimationFrame(() => {
        donateModal.classList.add('open'); // Adiciona a classe para a animação
        donateModal.showModal(); // Mostra o modal
    });

    button.onclick = function () {
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modal.classList.add('open'); 
            modal.showModal();
            modal.style.pointerEvents = 'auto'; // Habilita interações
        });
    };

    buttonClose.onclick = function () {
        modal.classList.remove('open');
        modal.style.pointerEvents = 'none'; // Desabilita interações
        setTimeout(() => {
            modal.close(); 
        }, 300); 
    };

    donateClose.onclick = function () {
        donateModal.classList.remove('open'); 
        setTimeout(() => {
            donateModal.close(); 
        }, 300); 
    };
});
