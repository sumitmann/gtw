gtwApp.directive('collapsible', function () {
    return {
        link:  function(scope, element, attrs) {
        element.on('click', function(){
            if ($(element).hasClass('navbar-toggler') && !$(element).hasClass('layout-toggler')) {
                $('body').toggleClass('open_nav')
            }
        })
    }
    };
});

gtwApp.directive('navdd', function () {
    return {
        link:  function(scope, element, attrs) {
            element.on('click', function(){
                $(element).parent().toggleClass('open_dd').siblings('.open_dd').removeClass('open_dd');
            });
			}
    };
});