$(function () {
    // portfolio filter
    $(window).load(function(){'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.syftet-flex-row');
        $portfolio.isotope({
            itemSelector : '.portfolio-item',
            layoutMode : 'masonry'
        });

        $portfolio_selectors.on('click', function(){
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    });
})