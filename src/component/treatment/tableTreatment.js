import React from "react";
import Paper from "@material-ui/core/Paper";
//import Grid from '@material-ui/core/Grid'
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import "./styleTreatment.css";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginLeft: "15%",
  },
  title: {
    fontSize: "18px",
    color: "#3f3f3f",
  },
  textField: {
    width: "80%",
  },
}));

export default function TableTreatment() {
  const classes = useStyles();
  return (
    <div className="container">
      <Paper elevation={1}>
        <div className="text-header-treat martop-10">บันทึกการรักษา</div>
        <FormControl
          className={classes.root}
          size="small"
          style={{ width: "85%" }}
        >
          <FormLabel className={classes.title}>ประเภทโค</FormLabel>
          <Select variant="outlined" native className={classes.textField}>
            <option value=" ">เลือก</option>
            <option>Ten</option>
            <option>Twenty</option>
            <option>Thirty</option>
          </Select>
        </FormControl>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>หมายเลขโค</FormLabel>
          <TextField
            id="input2"
            variant="outlined"
            placeholder="กรอกหมายเลขโค"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>อาการ</FormLabel>
          <TextField
            id="input3"
            variant="outlined"
            placeholder="กรอกหมายอาการ"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>ประเภทการรักษา</FormLabel>
          <TextField
            id="input4"
            variant="outlined"
            placeholder="กรอกประเภทการรักษา"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>วันที่</FormLabel>
          <TextField
            id="input5"
            variant="outlined"
            placeholder="กรอกวันที่"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormControl
          className={classes.root}
          size="small"
          style={{ width: "85%" }}
        >
          <FormLabel className={classes.title}>ติดตามผลอีก</FormLabel>
          <OutlinedInput
            endAdornment={<InputAdornment position="end">วัน</InputAdornment>}
            id="input6"
            variant="outlined"
            placeholder="กรอกจำนวนวันติดตามผล"
            size="small"
            className={classes.textField}
          />
        </FormControl>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>เวลา</FormLabel>
          <TextField
            id="input7"
            variant="outlined"
            placeholder="กรอกเวลา"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>ผู้บันทึก</FormLabel>
          <TextField
            id="input8"
            variant="outlined"
            placeholder="กรอกชื่อผู้บันทึก"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>ชื่อโรค</FormLabel>
          <TextField
            id="input9"
            variant="outlined"
            placeholder="กรอกชื่อโรค"
            size="small"
            className={classes.textField}
          />
        </FormGroup>

        <FormGroup className={classes.root}>
          <FormLabel className={classes.title}>หมายเหตุ</FormLabel>
          <TextField
            id="input10"
            variant="outlined"
            placeholder="กรอกหมายเหตุ"
            size="small"
            className={classes.textField}
          />
        </FormGroup>
      </Paper>
    </div>
  );
}
