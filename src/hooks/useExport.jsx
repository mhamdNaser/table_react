import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

const useExport = (data, columns) => {
  const exportToPDF = () => {
    const filteredColumns = columns.filter((col) => col.name !== "Actions");
    const tableColumn = filteredColumns.map((col) => col.name);
    const tableRows = data.map((row) =>
      filteredColumns.map((col) => {
        return {
          content: col.selector ? col.selector(row) : "", // Get actual cell value
          styles: { cellWidth: "auto" }, // Optionally adjust cell width
        };
      })
    );

    const doc = new jsPDF();
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("table.pdf");
  };

  const exportToExcel = () => {
    const filteredDataForExcel = data.map((item) => {
      const { ACTIONS, ...rest } = item; // افترض أن اسم الخاصية في البيانات هو "ACTIONS"
      return rest;
    });

    const filteredColumns = columns.filter((col) => col.name !== "Actions");
    const worksheet = XLSX.utils.json_to_sheet(
      filteredDataForExcel.map((row) => {
        return filteredColumns.reduce((acc, col) => {
          acc[col.name] = col.selector ? col.selector(row) : ""; // Ensure to get actual cell value
          return acc;
        }, {});
      })
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table");
    XLSX.writeFile(workbook, "table.xlsx");
  };

  return { exportToPDF, exportToExcel };
};

export default useExport;
