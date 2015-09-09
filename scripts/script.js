$(function(){

        $('#button-search').click(function () {
        getWeatherByCity('us', dataReceived, showError, $('#search').val());
    });
    
    $('#search').bind("keypress", function(e) {
  if (e.keyCode == 13) {               
    e.preventDefault();
    return false;
  }
});

 getWeatherData('us', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
        

    
        $('#city').html(city + ', <b>' + country + '</b>');
         
        $('#big-block-data').html(moment(new Date(data.list[0].dt*1000 - offset)).calendar());
        $('#icon0').html('<img width="170" height="150" src="icons/' + (data.list[0].weather[0].icon) + '.png"/>');
        $('#big-block-grades').html(Math.round(data.list[0].temp.day) + '&deg;C');
        $('#weather-condition').html(data.list[0].weather[0].description);
        
        $('#data1').html(moment(new Date(data.list[1].dt*1000 - offset)).calendar());
        $('#data1-back').html(moment(new Date(data.list[1].dt*1000 - offset)).calendar());
        $('#icon1').html('<img width="70" height="70" src="icons/'+ data.list[0].weather[0].icon +'.png" />');
        $('#grades1').html(Math.round(data.list[1].temp.day) + '&deg;C');
        
        
        $('#data2').html(moment(new Date(data.list[2].dt*1000 - offset)).calendar());
        $('#data2-back').html(moment(new Date(data.list[2].dt*1000 - offset)).calendar());
        $('#icon2').html('<img width="70" height="70" src="icons/'+ data.list[2].weather[0].icon +'.png" />');
        $('#grades2').html(Math.round(data.list[2].temp.day) + '&deg;C');
                    
        
        $('#data3').html(moment(new Date(data.list[3].dt*1000 - offset)).calendar());
        $('#data3-back').html(moment(new Date(data.list[3].dt*1000 - offset)).calendar());
        $('#icon3').html('<img width="70" height="70" src="icons/'+ data.list[3].weather[0].icon +'.png" />');
        $('#grades3').html(Math.round(data.list[3].temp.day) + '&deg;C');
                    
        
        $('#data4').html(moment(new Date(data.list[4].dt*1000 - offset)).calendar());
        $('#data4-back').html(moment(new Date(data.list[4].dt*1000 - offset)).calendar());
        $('#icon4').html('<img width="70" height="70" src="icons/'+ data.list[4].weather[0].icon +'.png" />');
        $('#grades4').html(Math.round(data.list[4].temp.day) + '&deg;C');
                    
        
        $('#data5').html(moment(new Date(data.list[5].dt*1000 - offset)).calendar());
        $('#data5-back').html(moment(new Date(data.list[5].dt*1000 - offset)).calendar());
        $('#icon5').html('<img width="70" height="70" src="icons/'+ data.list[5].weather[0].icon +'.png" />');
        $('#grades5').html(Math.round(data.list[5].temp.day) + '&deg;C');
                    
        
        $('#data6').html(moment(new Date(data.list[6].dt*1000 - offset)).calendar());
        $('#data6-back').html(moment(new Date(data.list[6].dt*1000 - offset)).calendar());
        $('#icon6').html('<img width="70" height="70" src="icons/'+ data.list[6].weather[0].icon +'.png" />');
        $('#grades6').html(Math.round(data.list[6].temp.day) + '&deg;C');
                    
        
        $('#data7').html(moment(new Date(data.list[7].dt*1000 - offset)).calendar());
        $('#data7-back').html(moment(new Date(data.list[7].dt*1000 - offset)).calendar());
        $('#icon7').html('<img width="70" height="70" src="icons/'+ data.list[7].weather[0].icon +'.png" />');
        $('#grades7').html(Math.round(data.list[7].temp.day) + '&deg;C');
                   
        
        $('#data8').html(moment(new Date(data.list[8].dt*1000 - offset)).calendar());
        $('#data8-back').html(moment(new Date(data.list[8].dt*1000 - offset)).calendar());
        $('#icon8').html('<img width="70" height="70" src="icons/'+ data.list[8].weather[0].icon +'.png" />');
        $('#grades8').html(Math.round(data.list[8].temp.day) + '&deg;C');
                   
        
        $('#data9').html(moment(new Date(data.list[9].dt*1000 - offset)).calendar());
        $('#data9-back').html(moment(new Date(data.list[9].dt*1000 - offset)).calendar());
        $('#icon9').html('<img width="70" height="70" src="icons/'+ data.list[9].weather[0].icon +'.png" />');
        $('#grades9').html(Math.round(data.list[9].temp.day) + '&deg;C');
                    
        
        $('#data10').html(moment(new Date(data.list[10].dt*1000 - offset)).calendar());
        $('#data10-back').html(moment(new Date(data.list[10].dt*1000 - offset)).calendar());
        $('#icon10').html('<img width="70" height="70" src="icons/'+ data.list[10].weather[0].icon +'.png" />');
        $('#grades10').html(Math.round(data.list[10].temp.day) + '&deg;C');
            
         

        console.log(data.list);

    };

    function showError(msg){
        $('#error').html('Виникла помилка: ' + msg);
    }

});