import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';
import './styleCalve.css';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  fonts:{
    fontSize:"30px"
  }
  
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableCalve() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
       <div className="text-header-clave">บันทึกการตรวจท้อง</div>
      <Table className={classes.table} aria-label="simple table">
     
        <TableHead >
        
          <TableRow >
            <TableCell align="left"><div className="fs">ลำดับ</div></TableCell>
            <TableCell align="center"><div className="fs">หมายเลขโค</div></TableCell>
            <TableCell align="center"><div className="fs">วันที่ผสม</div></TableCell>
            <TableCell align="center"><div className="fs">วิธีผสม</div></TableCell>
            <TableCell align="center"><div className="fs">หมายเลขน้ำเชื้อ</div></TableCell>
            <TableCell align="center"><div className="fs">วันที่คลอด</div></TableCell>
            <TableCell align="center"><div className="fs">เวลา</div></TableCell>
            <TableCell align="center"><div className="fs">กำหนดการรักษา</div></TableCell>
            <TableCell align="center"><div className="fs">กำหนดการบำรุง</div></TableCell>
            <TableCell align="center"><div className="fs">หมายเหตุ</div></TableCell>
            <TableCell align="center"><div className="fs">บันทึก</div></TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">
                {row.fat}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center"> {row.fat}</TableCell>
              <TableCell align="center"> {row.fat}</TableCell>
              <TableCell align="center"><TextField  variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField   variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField   variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField   variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" size="small" /></TableCell>
              <TableCell align="center"> <Button
        variant="contained"
        color="primary"
        size="small"
     style={{outline:"none"}}
        startIcon={<SaveIcon />}
      >
        Save
      </Button></TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
