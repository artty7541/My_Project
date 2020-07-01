import React from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function PaperDrug() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [lock, setLock] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const hadelDisable = (event) => {
    setLock(false);
  };
  const hadelEable = (event) => {
    setLock(true);
  };
  return (
    <div className="container martop-10">
      <Paper elevation={3}>
        <div className="text-header">ตั้งค่าระบบยา</div>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="ยา" {...a11yProps(0)} style={{ outline: "none" }} />
            <Tab label="วัคซีน" {...a11yProps(1)} style={{ outline: "none" }} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Paper elevation={0}>
              <Grid className="mar pad10">
                <TextField
                  type="text"
                  disabled={lock ? true : ""}
                  className="textField-width300px"
                  id="outlined0"
                  label="ชื่อยา"
                  size="small"
                />{" "}
                <TextField
                  type="text"
                  disabled={lock ? true : ""}
                  className="textField-width300px"
                  id="outlined1"
                  label="ปริมาณยา(มิลลิลิตร)"
                  size="small"
                />
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </Grid>

              <Grid container>
                <Grid>
                  <Button
                    onClick={() => hadelDisable()}
                    style={{ outline: "none", marginLeft: "350%" }}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                    startIcon={<SaveIcon />}
                  >
                    แก้ไข
                  </Button>{" "}
                </Grid>
                <Grid>
                  <Button
                    onClick={() => hadelEable()}
                    style={{ outline: "none", marginLeft: "350%" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                    startIcon={<SaveIcon />}
                  >
                    บันทึก
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper elevation={0}>
              <Grid className="mar pad10">
                <TextField
                  type="text"
                  disabled={lock ? true : ""}
                  className="textField-width300px"
                  id="outlined2"
                  label="ชื่อวัคซีน"
                  size="small"
                />{" "}
                <TextField
                  type="text"
                  disabled={lock ? true : ""}
                  className="textField-width300px"
                  id="outlined3"
                  label="ปริมาณวัคซีน(มิลลิลิตร)"
                  size="small"
                />
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </Grid>

              <Grid container>
                <Grid>
                  <Button
                    onClick={() => hadelDisable()}
                    style={{ outline: "none", marginLeft: "350%" }}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                    startIcon={<SaveIcon />}
                  >
                    แก้ไข
                  </Button>{" "}
                </Grid>
                <Grid>
                  <Button
                    onClick={() => hadelEable()}
                    style={{ outline: "none", marginLeft: "350%" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                    startIcon={<SaveIcon />}
                  >
                    บันทึก
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
        </div>
      </Paper>
    </div>
  );
}
