import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import TextField from "@material-ui/core/TextField";

import "date-fns";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from "@material-ui/core";


//เปลี่ยนตัวหนังสือ  บรรทัด310

export default function TableInduction({ posts, loading }) {
  const rows = posts;
  /*-----------------------------------------------------------------------------*/



  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  //เรรียงค่าอะไรสักอย่าง
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  // headCells คอลัม หัวตาราง
  const headCells = [
    { id: "1", numeric: false, disablePadding: true, label: "เลือก" },
    { id: "2", numeric: false, disablePadding: false, label: "หมายเลข" },
    { id: "3", numeric: false, disablePadding: false, label: "โรงเรือน" },
    { id: "4", numeric: false, disablePadding: false, label: "คอก" },
    { id: "5", numeric: false, disablePadding: false, label: "ฝูง" }
  ];
  //รับ prop มา ทำหัวตาราง
  function EnhancedTableHead(props) {
    const {

      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
    } = props;




    //return นี้ทำ หัวตาราง
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              // check box หัวตาราง  indeterminateต้อง 0 ถึง จำนวนแถว
              indeterminate={numSelected > 0 && numSelected < rowCount}
              // สั่งให้เชคปุ่ม จำนวนแถว มากว่า 0 และ จำนวนที่เลือกเท่ากับ จำนวนแถว
              checked={rowCount > 0 && numSelected === rowCount}
              //เมื่อมีการเปลี่ยนแลง เรียงใช้ onSelectAllClick เพื่อใช้ฟังชันใน onSelectAllClickอีกที
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {headCells.map(headCell => (
            //map headCells ชื่อหัวตาราง และจัดหน้า
            <TableCell
              key={headCell.id}
              //numeric จริง ชิดขวา เท็จ ชิดซ้าย
              align={headCell.numeric ? "right" : "left"}
              //disablePadding จิง เท็จ
              padding={headCell.disablePadding ? "none" : "default"}
              //จริง,เท็จ      calories=== headCell.id //แต่ของของเราไม่ใช่
              sortDirection={orderBy === headCell.id ? order : false}
            >

              {headCell.label /* ชื่อตาราง */}



            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  };

  const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.light, 0.85)
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark
        },
    title: {
      flex: "1 1 100%"
    }
  }));

  const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="primary" component="div">
            {numSelected} selected
          </Typography>
        ) : (
            <Typography
              className={classes.title}
              variant="h6"
              id="tableTitle"
              component="div"
            >
             <h4> รายการ</h4>
          </Typography>
          )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
  };

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    FormWidth: {
      width: "100%"
    },
    paperNoti: {
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "5f5f5f",
    },
    pad:{
       paddingLeft:"2%",
       paddingRight:"2%",
       paddingTop:"2%",
    },
    marForm:{
      marginTop:"4%"
    },
    marTextField:{
      marginTop:"2%"
    },
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // เรียงลำดับ
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  //checkBox  ทั้งหมด
  const handleSelectAllClick = event => {
    //ถ้ามีการ คลิกเชค
    if (event.target.checked) {
      //map row    idเก็บ ไว้ใน newSelecteds

      const newSelecteds = rows.map(n => n.id);
      //console.log(newSelecteds) ;
      setSelected(newSelecteds);
      return;
    }

    //ถ้าไปก็ set array is empty
    setSelected([]);
  };

  const handleClick = (event, id) => {
    //หา ค่าที่เข้ามาว่าอยู่ในindex ไหน
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };
  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  /*-----------------------------------รายการยา(ยังไม่ได้แก้)-------------------------------------------*/
  const [medic, setMedic] = useState([
    {
      item: "",

    }
  ]);
  const addtable = event => {
    setMedic([
      ...medic,
      {
        item: "",

      }
    ]);
  };
  const handleChange = (event, index) => {
    medic.splice(index, 1, { item: event.target.value })
  };
  const deleteItem = (index) => {
    const result = medic.filter(results => results !== medic[index]);
    console.log(result);
    setMedic(result);

  }

  /*------------------------------------------------------------------------------*/


  const showTable = () => {
    return medic.map((medics, index) => (
      <form className={classes.marTextField} key={index}  >
        
        <FormControl size="small" style={{ width: "95%" }} >
          <FormLabel >รายการยา</FormLabel>
          <Select

            variant="outlined"
            native
            value={medic.item}
            onChange={event => handleChange(event, index)}
          >
            <option value=" " >เลือก</option>
            <option>Ten</option>
            <option>Twenty</option>
            <option>Thirty</option>
          </Select>
        </FormControl>

        <IconButton
          aria-label="delete"
          color="secondary"
          style={{ marginTop: "15px", outline: "none" }}
          onClick={() => deleteItem(index)}
        >
          <DeleteIcon />
        </IconButton>
      </form>
    ));
  };
  if (loading) {
    return (
      <div className="container-fluid text-center" style={{marginTop:"17%"}}>
      <CircularProgress size={40}/><h3>
        Loading.....</h3>
        </div>
    );
  }

  return (
    <div className="container">
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3} style={{ marginTop: "20px" }} >
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                //เรียงใช้ หัวตาราง ส่ง prop ไปที่ EnhancedTableHead()
                //ส่ง  classes  เป็นค่าuseStyleไป EnhancedTableHead()
                classes={classes}
                //ส่งขนาf index array ไป EnhancedTableHead()
                numSelected={selected.length}
                //ส่งคำสั่งstate order 'asc' เรียงค่า (มากไปน้อย) ไป EnhancedTableHead()
                order={order}
                //ส่งstate calories  ไป EnhancedTableHead()
                orderBy={orderBy}
                //เรียกใช้ handleSelectAllClick เมื่อมีการ checkedBox บนหัวตาราง
                onSelectAllClick={handleSelectAllClick}
                //เรียกใช้  handleRequestSort(Event,  กับproperty)
                onRequestSort={handleRequestSort}
                //ส่ง จำนวน index ใน  rows[{},{}]
                rowCount={rows.length}
              />
              <TableBody
              /* ----------------------------ตัวตาราง--------------------------- */
              >
                {//ส่ง Array Rows กับ call back getComparator()
                  //แสดงข้อมูลและการจัดการต่างๆทีละแถว
                  stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          //เมื่อมีการคลิกในแถว  หรือ check box จะเรียกใช้handleClick เพื่อไปเก็บไว้ใน serSelected([]);
                          onClick={event => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected} //คลิกเลืองตรงตารา
                          tabIndex={-1}
                          key={row.id /*keyyyyyyyyyyyyy*/}
                        >
                          <TableCell
                            padding="checkbox"
                          /*ส่วนของcheckBox แต่ละแถว*/
                          >
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ "aria-labelledby": labelId }}
                              color="primary"
                            />
                          </TableCell>

                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.id}
                          </TableCell>
                          <TableCell align="left">{row.userId}</TableCell>
                          <TableCell align="left">{row.userId}</TableCell>
                          <TableCell align="left">{row.userId}</TableCell>
                          <TableCell align="left">{row.userId}</TableCell>


                        </TableRow>
                      );
                    })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div ><TablePagination
            //ปุ่มเปลี่ยนห้นา

            rowsPerPageOptions={[5, 10, 15, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          /></div>

        </Paper >
        <FormControlLabel
          control={
            <Switch
              checked={dense}
              onChange={handleChangeDense}
              color="primary"
            />
          }
          label="ย่อตาราง"
        />
      </div>

      <Paper elevation={3} className={classes.pad}>
        <h4  style={{ paddingTop: "15px" }}>บันทึกการจัดการเหนี่ยวนำ</h4>
        <FormGroup className={classes.marForm}>
          <FormLabel >ชื่อผู้บันทึก</FormLabel>
          <TextField id="input1" variant="outlined" placeholder="กรอกหมายเลขโค" size="small" />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel >ผู้ปฏิบัติการ</FormLabel>
          <TextField id="input2" variant="outlined" placeholder="กรอกหมายเลขโค" size="small" />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel >วันที่</FormLabel>
          <TextField id="input3" variant="outlined" type="date" size="small" />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel >เวลา</FormLabel>
          <TextField id="input4" variant="outlined" type="time" size="small" defaultValue="00:00" />
        </FormGroup>
        {showTable()}
<div className={classes.marTextField}>
        <div className="container-fluid text-center" >
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            style={{ margin: "10px", outline: "none" }}
          >
            <AddIcon onClick={addtable} />
          </Fab>
        </div></div>
        <Grid container className={classes.marTextField}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}><Paper elevation={3} className={classes.paperNoti}>
            เริ่มการผสมพันธุ์ วันที่ dd/mm/yy
        </Paper></Grid>
          <Grid item xs={2}></Grid></Grid>

        <div className="container-fluid text-center">
          <div className={classes.marTextField}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "250px", margin: "10px", outline: "none" }}
            onClick={() => console.log(medic)}
          >
            บันทึก
        </Button>
      </div>  </div>
      </Paper>
    </div>
  );
}
