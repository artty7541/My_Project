import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styleCheckup.css";
import SaveIcon from "@material-ui/icons/Save";
import { FormGroup } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  fonts: {
    fontSize: "18px"
  }
});

function createData(name, calories, fat, carbs, protein, date) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4),
  createData("Eclair", 262, 16.0, 24, 6.0, 5),
  createData("Cupcake", 305, 3.7, 67, 4.3, 6),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 7)
];

export default function SimpleTable() {
  const classes = useStyles();
  const [item, setItem] = React.useState("");
  const handleChange = event => {
    setItem(event.target.value);
  };
  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <div className="text-header-checkup">บันทึกการตรวจท้อง</div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  >
          <TableRow>
            <TableCell align="left"  className={classes.fonts}>
              ลำดับ
            </TableCell>
            <TableCell align="center"  className={classes.fonts}>
             หมายเลขโค
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
             วันที่ผสม
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
             หมายเลขน้ำเชื้อ
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
        วันที่ตรวจวันคลอด
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
              เวลา
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
             ผล
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
           วันกลับสัด
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
            วันคลอด
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
        หมายเหตุ
            </TableCell>
            <TableCell align="center" className={classes.fonts}>
            บันทึก
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center"> {row.fat}</TableCell>
              <TableCell align="center">
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell align="center">
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell align="center">
                <FormGroup>
                  <FormControl size="small">
                    <Select
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={item}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">ท้อง</MenuItem>
                      <MenuItem value="no">ไม่ท้อง</MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
              </TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell align="center">
                {" "}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ outline: "none" }}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
