import {
  Container,
  Card,
  Box,
  Table,
  TableBody,
  TableRow,
  Typography,
  TableCell,
  Toolbar,
  Divider

} from "@mui/material";
import React from "react";

export default function InstructionList( { instructions } ) {
  return (
    <Card sx={{ backgroundColor: "#fcf9f4"}}>
      <Box sx={{ minWidth: 1050 }}>
        <Toolbar>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h4"
            color="primary"
            id="tableTitle"
            component="div"
          >
            Instructions
          </Typography>
        </Toolbar>
        <Divider />
        <Table title="Instructions">
          <TableBody>
            {instructions.map((instruct, idx) => (
              <TableRow hover key={'row'+idx}>
                <TableCell key={'cell'+idx+'1'} width="10%">
                  <Typography
                    key={'typo'+idx+'1'}
                    variant="h5"
                    color="primary"
                  >
                    {'Step '+(idx+1)}
                  </Typography>
                </TableCell>
                <TableCell key={'cell'+idx+'2'} width="15%">
                  <Typography
                    key={'typo'+idx+'2'}
                    variant="h6"
                    color="secondary"
                  >
                    {instruct.title}
                  </Typography>
                </TableCell>
                <TableCell key={'cell'+idx+'3'} align="left">
                  {
                    instruct.contents.map((content, idx) => (
                      <React.Fragment key={'frag'+idx}>
                        {idx !== 0 && <Divider key={'divid'+idx}/>}
                        <Typography key={"content"+idx} variant="body1" width="75%" >
                          {content}
                        </Typography>
                      </React.Fragment>
                    ))
                  }
                  {/* <Typography variant="body1" width="75%" >
                    {instruct.contents.join(' ')}
                  </Typography> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
    // <Container key={index} maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "0.5em" }}>
    //     <Typography key={"step" + String(index)} variant="h4">Step{index + 1}</Typography>
    //     <Typography key={"instuction" + String(index)} variant="h5">{instruction}</Typography>
    // </Container>
  )
};