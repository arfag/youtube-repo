// 採点のテンプレートを作成する関数
const GenerateTemeplate = () => {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getActiveSheet();

    // 一行目から三行目までは採点方法等の情報を記述する
    for (let i = 1; i < 31; i++) {
        let idx_range = sheet.getRange(`A${i + 3}`);
        idx_range.setValue(`${i}番`);
    }
}