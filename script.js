//your JS code here. If required.
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function generateRandomTime() {
  return Math.floor(Math.random() * 3000) + 1000; // Between 1 and 3 seconds in milliseconds
}

const promises = [
  delay(generateRandomTime()).then(() => 'Promise 1'),
  delay(generateRandomTime()).then(() => 'Promise 2'),
  delay(generateRandomTime()).then(() => 'Promise 3'),
];

Promise.all(promises)
  .then(results => {
    const table = document.getElementById('resultTable');
    table.innerHTML = ''; // Clear the loading row

    results.forEach((result, index) => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      
      cell1.textContent = result;
      cell2.textContent = (generateRandomTime() / 1000).toFixed(3); // Convert milliseconds to seconds
    });

    const totalTime = results.reduce((acc, curr) => acc + generateRandomTime(), 0) / 1000;
    const totalRow = table.insertRow();
    const totalCell1 = totalRow.insertCell(0);
    const totalCell2 = totalRow.insertCell(1);
    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime.toFixed(3);

  })
  .catch(error => console.error(error));