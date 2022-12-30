import {
  Container,
  Card,
  Box,
  Table,
  TableBody,
  TableRow,
  Typography,
  TableCell,
  Toolbar

} from "@mui/material";

export default function Instruction( { instructions } ) {
    return (
        <Card>
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
            <Table title="Average Expense Ratio">
              <TableBody>
                {instructions.map((instruct, idx) => (
                  <TableRow hover key={'instruct'+idx}>
                    <TableCell width="10%">
                      <Typography
                        variant="h5"
                        color="secondary"
                      >
                        {'Step '+idx}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography width="90%" >
                        {instruct}
                      </Typography>
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