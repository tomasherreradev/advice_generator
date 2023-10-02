document.addEventListener('DOMContentLoaded', function(){
    consultarApi();
    cambiarMensaje();
});

async function consultarApi() {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
    
        const apiId = document.querySelector('#id-api');
        apiId.textContent =  `advice #${resultado.slip.id}`;

        const apiText = document.querySelector('#text-api');
        apiText.textContent =  `"${resultado.slip.advice}"`;

    } catch (error) {
        console.log(error)
    }
}


function cambiarMensaje () {
    const btn = document.querySelector('#after');
    btn.addEventListener('click', function() {
        btn.classList.add('animacion');
        consultarApi();

        setTimeout(() => {
            btn.classList.remove('animacion');
        }, 500);
    })
}