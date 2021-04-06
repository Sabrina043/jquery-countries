function getCountries(){
    console.log('#1');

$.ajax({
    url: 'https://restcountries.eu/rest/v2/name/france',
    success: function(data, statuts, response) {
        console.log('#2');
        console.log(data[0].name);
        console.log(data[0].capital);
    }
});

console.log('#3');
}