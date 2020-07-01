import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import "./styleReport.css"
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
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
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps=(index)=> {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TableReport() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className="container">
    <Paper>
       <div className="text-header-report martop-10">ออกรายงาน</div>
    <div className={classes.root}>
    
      <Tabs
       indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        className="width"
      >
        <Tab label="จำนวนโคภายในฟาร์ม" {...a11yProps(0)} style={{outline:"none"}} />
        <Tab label="จำนวนโคแต่ละสายพันธุ์" {...a11yProps(1)} style={{outline:"none"}} />
        <Tab label="จำนวนการเกิดและการแท้ง" {...a11yProps(2)} style={{outline:"none"}} />
        <Tab label="จำนวนการเกิดโรค" {...a11yProps(3)} style={{outline:"none"}} />
      </Tabs>
      <TabPanel value={value} index={0}   className="container-fluid text-center  " >
      <Grid container>
                <Grid className="pad">
                  <Button
                    id="b1"
                    style={{ outline: "none", marginLeft: "320%", width:"100px"}}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                
                  >
                    PDF
                  </Button>{" "}
                </Grid>
                <Grid className="pad">
                  <Button
                    id="b2"
                    style={{ outline: "none", marginLeft: "320%", width:"100px" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                  
                  >
                    EXCEL
                  </Button>
                </Grid>
              </Grid>
       <Button id="bt1" color="primary" variant="contained" style={{outline:"none",marginTop:"5%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={1}   className="container-fluid text-center  " >
      <Grid container>
                <Grid className="pad">
                  <Button
                    id="b1"
                    style={{ outline: "none", marginLeft: "320%", width:"100px"}}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                
                  >
                    PDF
                  </Button>{" "}
                </Grid>
                <Grid className="pad">
                  <Button
                    id="b2"
                    style={{ outline: "none", marginLeft: "320%", width:"100px" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                  
                  >
                    EXCEL
                  </Button>
                </Grid>
              </Grid>
       <Button id="bt1" color="primary" variant="contained" style={{outline:"none",marginTop:"5%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={2}   className="container-fluid text-center  " >
      <Grid container>
                <Grid className="pad">
                  <Button
                    id="b1"
                    style={{ outline: "none", marginLeft: "320%", width:"100px"}}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                
                  >
                    PDF
                  </Button>{" "}
                </Grid>
                <Grid className="pad">
                  <Button
                    id="b2"
                    style={{ outline: "none", marginLeft: "320%", width:"100px" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                  
                  >
                    EXCEL
                  </Button>
                </Grid>
              </Grid>
       <Button id="bt1" color="primary" variant="contained" style={{outline:"none",marginTop:"5%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={3}   className="container-fluid text-center  " >
      <Grid container>
                <Grid className="pad">
                  <Button
                    id="b1"
                    style={{ outline: "none", marginLeft: "320%", width:"100px"}}
                    variant="contained"
                    color="secondary"
                    className="textField-width"
                
                  >
                    PDF
                  </Button>{" "}
                </Grid>
                <Grid className="pad">
                  <Button
                    id="b2"
                    style={{ outline: "none", marginLeft: "320%", width:"100px" }}
                    variant="contained"
                    color="primary"
                    className="textField-width"
                  
                  >
                    EXCEL
                  </Button>
                </Grid>
              </Grid>
       <Button id="bt1" color="primary" variant="contained" style={{outline:"none",marginTop:"5%"}} >ออกรายงาน</Button>
      </TabPanel>
    </div> </Paper></div>
  );
}

