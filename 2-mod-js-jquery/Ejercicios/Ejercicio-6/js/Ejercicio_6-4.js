// JavaScript Document

/**
 * Aplica el efecto de css sobre el elemento
 * @param {HTMLElement} htmlElement Elemento sobre el que aplicar el css
 * @param {Boolean} apply True para el efecto hover, False para el efecto unhover
 */
function applyColorHover(htmlElement, apply) {
    if (apply)
        $(htmlElement).css({
            backgroundColor: 'Blue'
        })
    else
        $(htmlElement).css({
            backgroundColor: '#555555'
        })
}

/**
 * Cambia la visibilidad del submenú
 * @param {HTMLElement} htmlParent Elemento principal que contiene el submenu
 * @param {Boolean} show True para mostrar, false para ocultar
 */
function handleVisibilitySubmenu(htmlParent, show) {
    if (show)
        $(htmlParent).find('ul').show();
    else
        $(htmlParent).find('ul').hide();

}


$(() => {
    $('#nav li ul').hide();

    /**
     * Usar .on en lugar de .hover {@link https://api.jquery.com/hover/}
     */
    $('#nav li')
        .on('mouseenter', (e) => {
            applyColorHover(e.currentTarget, true);
            handleVisibilitySubmenu(e.currentTarget, true);
        })
        .on('mouseleave', (e) => {
            applyColorHover(e.currentTarget, false);
            handleVisibilitySubmenu(e.currentTarget, false);
        });
});

