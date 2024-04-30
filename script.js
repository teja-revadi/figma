
 var columnData = [
    ["Benchmark_apac_2022_1", "Benchmark_emea_2022_2", "Benchmark_apac_2022_3", "Benchmark_emea_2022_4", "Benchmark_apac_2022_5", "Benchmark_emea_2022_6", "Benchmark_apac_2022_7", "Benchmark_emea_2022_8", "Benchmark_apac_2022_9", "Benchmark_emea_2022_10", "Benchmark_apac_2022_11", "Benchmark_emea_2022_12"],
    ["APAC", "EMEA", "APAC", "EMEA", "APAC", "EMEA", "APAC", "EMEA", "APAC", "EMEA", "APAC", "EMEA"],
    ["22%", "22%", "22%", "22%", "23%", "23%", "23%", "23%", "24%", "24%", "24%", "24%"],
    ["20%", "20%", "20%", "20%", "21%", "21%", "21%", "21%", "22%", "22%", "22%", "22%"],
    ["18%", "18%", "18%", "18%", "19%", "19%", "19%", "19%", "20%", "20%", "20%", "20%"],
    ["17%", "17%", "17%", "17%", "18%", "18%", "18%", "18%", "19%", "19%", "19%", "19%"],
    ["16%", "16%", "16%", "16%", "17%", "17%", "17%", "17%", "18%", "18%", "18%", "18%"],
    [35, 35, 35, 35, 37, 37, 37, 37, 39, 39, 39, 39]
  ];
  

  var numRows = columnData[0].length;

  var tbody = document.querySelector('#here');

  for (var i = 0; i < numRows; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < columnData.length; j++) {
      var cell = document.createElement('td');
      if (j == 0){
        cell.style.color = "#1E40AF";
      }

      cell.textContent = columnData[j][i];
      
      row.appendChild(cell);
    }

    tbody.appendChild(row);

   
  }