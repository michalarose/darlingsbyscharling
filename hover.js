var $infographic = $('.infographic');


$infographic.on('mouseenter focus', function () {
    $infographic.get(0).play();
});

$infographic.on('mouseout blur', function () {
    $infographic.get(0).pause();
});
