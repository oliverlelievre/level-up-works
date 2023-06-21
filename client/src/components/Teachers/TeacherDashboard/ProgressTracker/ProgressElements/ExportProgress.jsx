import { FileDownloadRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import * as FileSaver from "file-saver"; //Node based modules npm file-saver
import * as XLSX from "xlsx"; // npm xlsx
import React from "react";

// This component allows the user to export the data from the endpoint as a spreadsheet

const ExportProgress = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";  

  const exportData = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Progress Report"); 

    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Student ID",
          "Student Name",
          "Projects Completed",
          "Total Projects",
          "Completed Project IDs",
          "Completed Project Names",
          "Dates of Submissions",
        ],
      ],
      {
        origin: "A1",
      }
    );

    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  // IconButton is a button with an icon for this function to export by clicking on the button

  return (
    <IconButton
      sx={{
        textAlign: "right",
        textTransform: "uppercase",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#6C6C6C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      onClick={(e) => exportData(apiData, fileName)}
    >
      <FileDownloadRounded />
      <Typography variant="body1" sx={{ ml: "auto" }}>
        Export As Spreadsheet
      </Typography>
    </IconButton>
  );
};

export default ExportProgress;
