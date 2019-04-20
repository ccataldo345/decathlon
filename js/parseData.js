$(function() {
    
    var parseData = [];
    var id = "10";

    $.getJSON('json/result' + id + '.json', function(parseData) {
       $.each(parseData.results, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.Rank + "</td>" + "<td>" + f.Country + "</td>" + "<td>" + f.Athlete + "</td>" + "<td>" + f.Time + "</td>" + "<td>" + f.Points + "</td>" + "</tr>";
           $(tblRow).appendTo("#decathlon tbody");
        });

    });

});
