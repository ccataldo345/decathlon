<?php
include "header.php";
?>

  <h4>1500m</h4>
  
  <table id="decathlon" class="table table-hover">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Rank</th>
        <th onclick="sortTable(1)">Country</th>
        <th onclick="sortTable(2)">Athlete</th>
        <th onclick="sortTable(3)">Time</th>
        <th onclick="sortTable(4)">Points</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>

<p>* Click on table headers to sort results</p>

</div>

<script src="js/parseData.js"></script>
<script src="js/sortTable.js"></script>

</body>
</html>
