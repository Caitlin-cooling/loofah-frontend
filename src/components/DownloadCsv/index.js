import React from "react";
import XLSX from "xlsx";

export const DownloadCsv = () => {
  const downloadCsvHandler = () => {
    const workbook = XLSX.utils.book_new();

    const createSkillsCells = [
      { A: "skill1", B: "A" },
      { A: "skill2", B: "B" },
      { A: "skill3", B: "C" }
    ];

    const worksheet = XLSX.utils.json_to_sheet(createSkillsCells, {
      skipHeader: true
    });

    XLSX.utils.book_append_sheet(workbook, worksheet, "Skills");

    XLSX.writeFile(workbook, "TEST.xlsx");
  };
  return (
    <div>
      <button onClick={downloadCsvHandler}>Download Csv</button>
    </div>
  );
};
