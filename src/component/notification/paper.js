import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper } from "@material-ui/core";
import NotificationIcaon1 from './../Img/notification_Icon1.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  mar: {
    marginTop: "30px"
  },
  titlehead: {
    fontSize:"22px",
    padding:"10px",
    backgroundColor:"#304ffe",
    color:"#ffffff"
 
  }
}));

export default function PaperNotificaion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.mar}>
      <div className="container">
        <div className={classes.root}>
          <Paper className={classes.titlehead}>
              การเเจ้งเตือน <img src={NotificationIcaon1} width="30px"  height="30px" alt="notification"></img>
          </Paper>

          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                วันที่ 01/01/2020
              </Typography>
              <Typography className={classes.heading}>
              โคหมายเลข: PC 255/1
              </Typography>
              <Typography className={classes.secondaryHeading}>
             เพศ: เมีย
              </Typography>

              
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                   : ทำการบำรุง
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
                <Typography className={classes.heading}>
                วันที่ 01/01/2020
              </Typography>
              <Typography className={classes.heading}>
              โคหมายเลข: PC 256/1
              </Typography>
              <Typography className={classes.secondaryHeading}>
             เพศ: เมีย
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              : ทำการผสมพันธุ์
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                วันที่ 01/01/2020
              </Typography>
              <Typography className={classes.heading}>
              โคหมายเลข: PC 257/1
              </Typography>
              <Typography className={classes.secondaryHeading}>
             เพศ: เมีย
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              : ทำการเหนี่ยวนำ
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    </div>
  );
}
