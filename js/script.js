
var textArea = document.getElementById('text-area');

$(function eventsList() {
 
    var parseData = [];
    var resPartA = '<a href="result';
    var resPartB = '.php">';
    var evId;
    console.log(evId);
    
    $.getJSON('json/events.json', function(parseData) {
       $.each(parseData.events, function(i, f) {
		  evId = f.id;
		  var tblRow = "<tr>" + "<td>" + f.id + "</td>" + "<td>" + resPartA + f.id + resPartB + f.name + "</a>" + "</td>" + "</tr>";
          $(tblRow).appendTo("#events tbody");
          
        });

    });  

});

textArea.innerText += eventsList;
