$(function() {
    const server = 'http://localhost:3306';
    const saintListEndpoint = server + '/saints';
    const $saintListDiv = $('.saints-lists');

    $.getJSON(saintListEndpoint, function(data) {
        data.forEach(saint => {
            console.log(saint);

            const saintText = 'Nombre: ' + saint.name +
                ' MaxHP: ' + saint.initialHP +
                ' ATK: ' + saint.initialATK + 
                ' DEF ' + saint.initialDEF;

            $('<div>').text(saintText).appendTo($saintListDiv);
        });
    });
});