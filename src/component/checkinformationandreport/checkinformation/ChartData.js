import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
class ChartData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
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
            label: "test01",
            data: [12, 19, 3, 5, 2, 3],
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
      },
      chartData2: {
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
      },
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={1}>
                <Doughnut
                  data={this.state.chartData}
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
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={1}>
                <Bar
                  data={this.state.chartData2}
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
    );
  }
}

export default ChartData;
