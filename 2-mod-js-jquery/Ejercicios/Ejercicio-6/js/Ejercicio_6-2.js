// JavaScript Document

$(() => {
    // Evento focus cuando el elemento obtiene el foco
    $('input').on('focus', (e) => {
        $(e.target).css({
            background:'#E6E6E6',       
            border:'solid 2px Blue',
        })
    })

    // Evento blur cuando el elemento pierde el foco
    $('input').on('blur', (e) => {
        $(e.target).css({
            background:'#FFFFEE',       
            border:'solid 1px Green',
        })
    })
});