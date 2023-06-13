import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";

export default function FormsTable() {

  function createData(name, visitors, users, info) {
    return { name, visitors, users ,info};
  }

  const rows = [
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
    createData("Mark Wilson", "Scheduled","12/05/22","VIEW"),
  ];

  return <>
   <TableContainer component={Paper} >
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead style={{border:"2px solid black",borderRight:"none",borderLeft:"none",borderTop:"none"}}>
          <TableRow  >
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}}>To Users</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">Status</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">Date</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}
            > 
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="left">{row.name}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">{row.visitors}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">{row.users}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </>;
}
