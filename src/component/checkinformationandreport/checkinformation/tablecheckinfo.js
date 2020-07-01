import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./styleCheckinfo.css";
import { Doughnut, Bar } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
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

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
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
            <Tab
              label="จำนวนโคภายในฟาร์ม"
              {...a11yProps(0)}
              style={{ outline: "none" }}
            />
            <Tab
              label="จำนวนโคแต่ละสายพันธุ์"
              {...a11yProps(1)}
              style={{ outline: "none" }}
            />
            <Tab
              label="จำนวนการเกิดและการแท้ง"
              {...a11yProps(2)}
              style={{ outline: "none" }}
            />
            <Tab
              label="จำนวนการเกิดโรค"
              {...a11yProps(3)}
              style={{ outline: "none" }}
            />
          </Tabs>
          <TabPanel
            value={value}
            index={0}
            className="container-fluid text-center  "
          >
            <div className="container-fluid">
              <Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Doughnut
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: true,
                            position: "bottom",
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Bar
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: false,
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            className="container-fluid text-center  "
          >
              <div className="container-fluid">
              <Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Doughnut
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: true,
                            position: "bottom",
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Bar
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: false,
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            className="container-fluid text-center  "
          >
              <div className="container-fluid">
              <Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Doughnut
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: true,
                            position: "bottom",
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Bar
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: false,
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel
            value={value}
            index={3}
            className="container-fluid text-center  "
          >
              <div className="container-fluid">
              <Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Doughnut
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: true,
                            position: "bottom",
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Paper elevation={0} className="pad-10">
                      <Bar
                        data={{
                          labels: [
                            "บรามัน",
                            "แองกัส",
                            "พื้นเมือง",
                            "ชาโรเล่",
                            "ควาย",
                            "เฮียฟอร์ด",
                          ],
                          datasets: [
                            {
                              data: [12, 19, 3, 5, 30, 3],
                              backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 159, 64)",
                              ],
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          title: {
                            display: true,
                            text: "โคภายในฟาร์ม",
                            fontSize: 25,
                          },
                          legend: {
                            display: false,
                          },
                          layout: {
                            padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
        </div>{" "}
      </Paper>
    </div>
  );
}
