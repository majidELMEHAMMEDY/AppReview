
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({onChange,value}) {
  // The first commit of Material-UI
  
  return (
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardDatePicker
        style={{ border: "1px solid gray",borderRadius:"5px",margin:"0px", }}
        variant="inline"
        format="dd/mm/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
       
      />
    </Grid>
  </MuiPickersUtilsProvider>
       
      
  );
}