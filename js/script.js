var textArea = document.getElementById('text-area'),
    dropMenu = document.getElementById('drop-menu');
    

$(function eventsList() {
    
    var parseData = [];
    var result = '<a href="result10.php">';
    
    $.getJSON('json/events.json', function(parseData) {
       $.each(parseData.events, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.id + "</td>" + "<td>" + result + f.name + "</a>" + "</td>" + "</tr>";
           $(tblRow).appendTo("#events tbody");
        });

    });

});



textArea.innerText += eventsList;
