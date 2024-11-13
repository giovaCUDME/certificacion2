const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('respuesta: ', resultado);
    })
})

function contacto(){
    alert("+569 7895 3462")
}
