import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    width: 200
  },
  textField2: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 50
  }
}));

function DateFormat(date) {
    const [year, month, day] = date.split('-');
    return `民國${year - 1911}年 - ${month}月 - ${day}號`;
}

export default function DatePicker() {
  const classes = useStyles();
  const [Date, setSelectDate] = useState(" ");

  return (
    <form className={classes.container} noValidate>
      <TextField 
        label="阿公店開店日選擇"
        value={Date}
        className={classes.textField}
      />

      <TextField        
        id="date"    
        label=" "          
        type="date"              
        className={classes.textField2} 
        onChange={event => {
            setSelectDate(DateFormat(event.target.value))
        }}       
        InputLabelProps={{          
            shrink: true,        
        }}      
      />    

    </form>
  );
}