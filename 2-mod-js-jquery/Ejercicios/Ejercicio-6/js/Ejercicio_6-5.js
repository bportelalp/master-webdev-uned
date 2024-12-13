$(() => {
    $('.carousel').flickity({

        // enable keyboard navigation
        accessibility: true,
      
        // make the carousel's height fit the selected slide
        adaptiveHeight: true,
      
        // enable auto play
        // set delay time to enable the autoplay
        // e.g. autoPlay: 5000
        autoPlay: 4000,
      
        // 'center', 'left', or 'right'
        // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
        cellAlign: 'center',
        // will contain cells to container
        // so no excess scroll at beginning or end
        // has no effect if wrapAround is enabled
        contain: true,
        // smaller number = easier to flick farther
        friction: 0.2,
        // enable next/prev buttons
        prevNextButtons: true,
      });
})