
    // Selección de elementos
    const qrIcon = document.getElementById('qr-icon');
    const modal = document.getElementById('qr-modal');
    const closeBtn = modal.querySelector('.close');

    // Mostrar el modal al hacer clic en el icono
    qrIcon.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Cerrar el modal al hacer clic en la "X"
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    //DESDE ACA

    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-images img');
    const totalImages = images.length;

    // Función para cambiar la imagen
    function changeImage() {
        const offset = -currentIndex * 100; // Desplazar las imágenes
        document.querySelector('.slider-images').style.transform = `translateX(${offset}%)`;
    }

    // Función para pasar a la siguiente imagen
    function nextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Regresar a la primera imagen
        }
        changeImage();
    }

    // Función para pasar a la imagen anterior
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Volver a la última imagen
        }
        changeImage();
    }

    // Agregar eventos a los botones
    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);