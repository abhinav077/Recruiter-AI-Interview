fetch('text_results')
  .then(response => response.json())
  .then(data => {
    var tableContainer = document.getElementById("myTable");

    // Create a table element
    var table = document.createElement("table");

    // Create the table headings row
    var headingsRow = document.createElement("tr");

    // Add headings for 'Question', 'Your Answer', and 'Similarity'
    var questionHeading = document.createElement("th");
    var questionHeadingText = document.createTextNode("Question");
    questionHeading.appendChild(questionHeadingText);
    headingsRow.appendChild(questionHeading);

    var userAnswerHeading = document.createElement("th");
    var userAnswerHeadingText = document.createTextNode("Your Answer");
    userAnswerHeading.appendChild(userAnswerHeadingText);
    headingsRow.appendChild(userAnswerHeading);

    var similarityHeading = document.createElement("th");
    var similarityHeadingText = document.createTextNode("Similarity");
    similarityHeading.appendChild(similarityHeadingText);
    headingsRow.appendChild(similarityHeading);

    table.appendChild(headingsRow);

    // Loop through the data and create table rows
    for (var i = 0; i < data.length; i++) {
      var rowData = data[i];

      // Create a table row
      var row = document.createElement("tr");

      // Add cells for 'Question', 'Your Answer', and 'Similarity'
      var questionCell = document.createElement("td");
      var questionText = document.createTextNode(rowData[0]);
      questionCell.appendChild(questionText);
      row.appendChild(questionCell);

      // Add user's answer instead of preferred answer
      var userAnswerCell = document.createElement("td");
      var userAnswerText = document.createTextNode(rowData[2]); // Assuming the user's answer is in the third column
      userAnswerCell.appendChild(userAnswerText);
      row.appendChild(userAnswerCell);

      var similarityCell = document.createElement("td");
      var similarity = parseFloat(rowData[3]);
      var similarityPercentage = (similarity * 100).toFixed(2) + '%';
      var similarityText = document.createTextNode(similarityPercentage);
      similarityCell.appendChild(similarityText);
      row.appendChild(similarityCell);

      // Append the row to the table
      table.appendChild(row);
    }

    // Append the table to the container div element
    tableContainer.appendChild(table);
  })
  .catch(error => console.error(error));
