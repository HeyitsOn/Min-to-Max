function countNumbers() {
  let minNumber = parseInt(document.getElementById('min').value);
  let maxNumber = parseInt(document.getElementById('max').value);

  if (isNaN(minNumber) || isNaN(maxNumber)) {
      alert("Enter valid numbers for both min and max.");
      return;
  }

  let result = "";
  for (let i = minNumber; i <= maxNumber; i++) {
      result += i + " ";
  }

  document.getElementById('result').innerHTML = `Counted numbers: ${result}`;
}