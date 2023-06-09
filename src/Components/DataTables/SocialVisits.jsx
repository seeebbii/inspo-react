import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";

export default function SocialVisits() {

  function createData(name, visitors, users, rate) {
    return { name, visitors, users };
  }

  const rows = [
    createData("Inspo/", 4566,"45.5%"),
    createData("Inspo/Dashboard",3566," 32.5%"),
    createData("Inspo/Forms", 4106," 12.5%"),
    createData("Inspo/Profile", 1566," 44.5%"),
  ];

  return <>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}>
          <TableRow  >
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}>REFERRALS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}} align="center">VISITORS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}} align="center"></TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </>;
}
