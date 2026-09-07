function calculateGrade() {
  // Get student's name
  let name = document.getElementById("studentName").value;

  // Get marks for all 8 subjects
  let webTechnology = Number(document.getElementById("webTechnology").value || 0);
  let statistics = Number(document.getElementById("statistics").value || 0);
  let computerArchitecture = Number(document.getElementById("computerArchitecture").value || 0);
  let entrepreneurship = Number(document.getElementById("entrepreneurship").value || 0);
  let oop = Number(document.getElementById("oop").value || 0);
  let dataStructure = Number(document.getElementById("dataStructure").value || 0);
  let msOffice = Number(document.getElementById("msOffice").value || 0);
  let databaseManagement = Number(document.getElementById("databaseManagement").value || 0);

  let total = webTechnology + statistics + computerArchitecture + entrepreneurship + oop + dataStructure + msOffice + databaseManagement;

  // Calculate average
  let average = total / 8;

  // Determine grade
  let grade;
  if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  let status;
  if (average >= 50) {
    status = "PASS";
  } else {
    status = "FAIL";
  }

  // Display result
  document.getElementById("result").innerHTML =
    "<h2>Result</h2>" +
    "<p><strong>Student:</strong> " + name + "</p>" +
    "<p><strong>Total:</strong> " + total + " / 800</p>" +
    "<p><strong>Average:</strong> " + average.toFixed(2) + "%</p>" +
    "<p><strong>Grade:</strong> " + grade + "</p>" +
    "<p><strong>Status:</strong> " + status + "</p>";
}
