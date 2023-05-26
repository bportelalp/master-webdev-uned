// JavaScript Document

/**
 * uso de $(handler) en lugar de $(document).ready(handler). jquery deprecated 3.0 {@link https://api.jquery.com/ready/}
 */
$(() => {
    /**
    * Uso de .on('event', fn) en lugar de .event(fn). jquery deprecated since 3.3 {@link https://api.jquery.com/click-shorthand/}
    */
    $('#donald').on('mouseover', (e) => {
        $(e.target).attr('src', 'img/Donald_2.png')
    })

    $('#donald').on('mouseleave', (e) => {
        $(e.target).attr('src', 'img/Donald_1.png')
    })

    $('#donald').on('click', (e) => {
        $(e.target).attr('src', 'img/Goofi_1.png')
    })

    $('#donald').on('dblclick', (e) => {
        $(e.target).attr('src', 'img/Goofi_2.png')
    })
})