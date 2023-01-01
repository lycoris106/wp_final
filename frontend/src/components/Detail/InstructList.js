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

export default function Instruction( { instructions } ) {
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
        <Table title="Instructions">
          <TableBody>
            {instructions.map((instruct, idx) => (
              <TableRow hover key={'instruct'+idx}>
                <TableCell width="10%">
                  <Typography
                    variant="h5"
                    color="primary"
                  >
                    {'Step '+(idx+1)}
                  </Typography>
                </TableCell>
                <TableCell width="15%">
                  <Typography
                    variant="h6"
                    color="secondary"
                  >
                    {instruct.title}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  {
                    instruct.contents.map((content, idx) => (<>
                      {idx !== 0 && <Divider/>}
                      <Typography key={"content"+idx} variant="body1" width="75%" >
                        {content}
                      </Typography>
                    </>))
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