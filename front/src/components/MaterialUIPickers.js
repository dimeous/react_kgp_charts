import styles from './styles.css'
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Box from "@material-ui/core/Box";


export default function MaterialUIPickers() {
    const [selectedDate1, setSelectedDate1] = React.useState(new Date() -  7*60*60*1000);
    const [selectedDate2, setSelectedDate2]= React.useState(new Date() );
    const handleDateChange1 = (date1) => {
        setSelectedDate1(date1);
    };
    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <Box>
                   C:
                </Box>
                <KeyboardDatePicker
                    disableToolbar
                    format="dd/MM/yyyy"
                    id="date-picker-inline"
                    inputProps={{ style: {color: 'white'} }}
                    label="Дата"
                    style={{marginLeft: 1 + 'em'}}
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    inputLabel={{ style: {color: 'white'}}}
                    inputProps={{ style: {color: 'white'}}}
                    id="time-picker"
                    variant="inline"
                    label="Время"
                    format="HH:mm"
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
                По:
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    id="date-picker-inline"
                    label="Дата"
                    inputProps={{ style: {color: 'white'}}}
                    style={{marginLeft: 1 + 'em'}}
                    value={selectedDate2}
                    onChange={handleDateChange2}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                    <KeyboardTimePicker
                        id="time-picker"
                        label="Время"
                        format="HH:mm"
                        value={selectedDate2}
                        inputProps={{ style: {color: 'white'}}}
                        onChange={handleDateChange2}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
            </Grid>
        </MuiPickersUtilsProvider>

);
}
