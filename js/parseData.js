
$(function() {
    
    var parseData = [];
	var path = window.location.pathname;
	var page = path.split("/").pop();   // get page url
	var id = page.match(/\d+/g).map(Number);	// get number in url

    $.getJSON('json/result' + id + '.json', function(parseData) {
       $.each(parseData.results, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.Rank + "</td>" + "<td>" + f.Country + "</td>" + "<td>" + f.Athlete + "</td>" + "<td>" + f.Time + "</td>" + "<td>" + f.Result + "</td>" + "<td>" + f.Points + "</td>" + "</tr>";
           $(tblRow).appendTo("#decathlon tbody");
        });

    });

});
