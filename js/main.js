$(function(){
    $('.banner-section_slider').slick({
        dots: true,
        speed:300,
        prevArrow: `
        <button class="banner-section_slider-btn banner-section_slider-btnprev ">
        <img src="./images/arrowLeft.svg">
    </button>`,
        
    nextArrow: `
    <button class="banner-section_slider-btn banner-section_slider-btnnext ">
    <img src="./images/arrowRight.svg">
</button>`

    });

    $(`.search_tabs-item`).on(`click`, function (e) {
        e.preventDefault();
        $(`.search_tabs-item`).removeClass(`search_tabs-item-active`);
        $(`.search_content-item`).removeClass(`search_content-item-active`);

        $(this).addClass(`search_tabs-item-active`);
        $($(this).attr(`href`)).addClass(`search_content-item-active`);

    });

})