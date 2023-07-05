import * as XLSX from "xlsx";

export const exportTasksToExcel = (tasks) => {
  const worksheet = XLSX.utils.json_to_sheet(tasks);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  saveAsExcelFile(excelBuffer, "task_list.xlsx");
};

const saveAsExcelFile = (buffer, fileName) => {
  const data = new Blob([buffer], { type: "application/octet-stream" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(data);
  downloadLink.download = fileName;
  downloadLink.click();
};
