import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles({
    root: {

    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
                        showLabels
            className={classes.root}
        >
            <Link href="http://asutp-srv1/khp/" >
                <BottomNavigationAction label="КХП. Углеподготовка" icon={<ApartmentIcon />} />
            </Link>
        </BottomNavigation>
    );
}
