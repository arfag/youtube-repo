function myFunction() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  const columns = ["B", "C", "D"];
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 3; j++) {
      const range = sheet.getRange(`${columns[j]}${i + 4}`);
      range.setValue(Math.floor(Math.random() * 3 + 0.9));
    }
  }
}
