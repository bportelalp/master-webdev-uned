// JavaScript Document

$(() => {
    // Ocultar de inicio todas las respuestas
    $('.answer').hide()
    // Aplica la imagen de cerrado a todas las imagenes de los titulos
    $('.main h2 img').attr('src',"img/close.png");

    // Para cada elemento del faq, aplica el evento onclick
    $('.main h2').on('click', (e) => {
        const nextAnswer = $(e.currentTarget).next(); // se toma currentTarget debido al bubbling si el click es sobre img
        if (nextAnswer.is(':hidden')){
            // Despliega y pon el icono de abierdo
            $(nextAnswer).slideDown();
            $(e.currentTarget).find('img').attr('src',"img/open.png");
        }
        else{
            // Contrae y pon el icono de cerrado
            $(nextAnswer).slideUp();
            $(e.currentTarget).find('img').attr('src',"img/close.png");
        }
    })
})