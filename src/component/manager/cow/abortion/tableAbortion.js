import React from "react";
import Paper from "@material-ui/core/Paper";
import "./styleAbor.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup, FormLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  }
}));
export default function TableAbortion() {
  const classes = useStyles();
  const [item, setItem] = React.useState("");

  const handleChange = event => {
    setItem(event.target.value);
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {" "}
      <Paper elevation={3}>
        <div className="text-header-ab">บันทึกโคแท้ง</div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>หมายเลขโค</FormLabel>
            </FormGroup>
            <TextField
              placeholder="กรอกหมายเลขโค"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>ท้องครั้งที่</FormLabel>
            </FormGroup>
            <TextField
              disabled
              value="0"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>วันที่ผสม</FormLabel>
            </FormGroup>
            <TextField
              type="date"
              disabled
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>วิธีผสม</FormLabel>
            </FormGroup>
            <TextField
              disabled
              value="-"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>หมายเลขน่ำเชื้อ</FormLabel>
            </FormGroup>
            <TextField
              disabled
              value="-"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>จำนวนการแท้ง</FormLabel>
            </FormGroup>
            <TextField
              disabled
              value="0"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
        </Grid>
        <div className="row">
          <div className="pad-l-20">กรอกข้อมูลการแท้ง</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>วันที่แท้ง</FormLabel>
            </FormGroup>
            <TextField
              type="date"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>ผู้บันทึก</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>สาเหตุ</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>หมายเหตุ</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
        </Grid>
        <div className="row">
          <div className="pad-l-20">กรอกข้อมูลการรักษา</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>ติดตามการรักษา (วัน)</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel>ผู้ปฏิบัติการ</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-width"
              id="outlined1"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel>ยาที่ใช้</FormLabel>
              <FormControl className={classes.formControl} size="small">
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item}
                  onChange={handleChange}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Paper elevation={1}>1</Paper>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => console.log(item)}
              style={{ outline: "none" }}
              variant="contained"
              color="primary"
              className="textField-width "
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Paper>
    </div>
  );
}
