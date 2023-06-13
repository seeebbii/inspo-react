import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";
import boxThreeImg from "../../assets/Images/boxThreeImg.png";

export default function ApprovalsTable({type}) {

  function createData(name, date, users, rate) {
    return { name, date, users, rate };
  }  
   
  const rows = [
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Dashboard","3/6/2023", 551," 32.5%"),
    createData("Inspo/Forms", "3/6/2023", 130," 12.5%"),
  ];

  return <>
   <TableContainer style={{marginTop:"-20px"}}  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{borderRight:"none",borderLeft:"none"}}>
          <TableRow  >
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}></TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">TYPE</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">STATUS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">DATE</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"11px"}} align="center">INFO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border:"none" } }}
            >
              <TableCell   style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  component="th" scope="row">
              <div style={{ display: "flex",marginBottom:"0px" }}>
                     <img
                       src={boxThreeImg}
                       style={{ borderRadius: "8px" }}
                       width={40}
                       height={40}
                     />
                     <div style={{ marginLeft: "8px" }}>
                       <p
                         style={{
                           fontSize: "11px",
                           fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                         }}
                       >
                         Esthera Jackson <br />{" "}
                         <span
                           style={{
                             fontSize: "11px",
                             fontFamily: STRINGS.FONTS.HELVITICA,
                           }}
                         >
                           Hi! I need more informations...
                         </span>
                       </p>
                     </div>
                   </div>
              </TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">
            {type == "conceptApproval"?"CONCEPT":type}
                </TableCell>
              <TableCell    style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">
              {type != "conceptApproval"? <div style={{display:"flex",justifyContent:"center"}}>
               <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"7px", height:"40px",width:"80px",backgroundColor:"#A9FF74"}}>
                     <span style={{fontSize:"11px",fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}>ACCEPT</span>       
                </div>
                <div style={{width:"5px"}}></div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"7px", height:"40px",width:"80px",backgroundColor:"#FF0000"}}>
                     <span style={{fontSize:"11px",fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}>DENY</span>       
                </div>
               </div>:
               <div style={{display:"flex",justifyContent:"center"}}>

               <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"7px", height:"40px",width:"150px",backgroundColor:"#A9FF74"}}>
                     <span style={{fontSize:"11px",fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}>ACCEPT</span>       
                </div>
                </div>
               
               }

                </TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">{row.date}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD}}  align="center">VIEW</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </>;
}
