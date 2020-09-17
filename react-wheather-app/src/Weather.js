import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    FormControl
} from '@material-ui/core';
import classes from '*.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexiGrow: 1,
        color: "black"
    },
    appLogo: {
        width: "160px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    layout: {
        marginTop: "100px"
    },
    card: {
        minWidth: 600,
        minHeight: 600
    },
    wi: {
        color: "#673ab7"
    },
    atmospheric: {
        fontSize: "28px",
        padding: "5px"
    },
    recommendation: {
        fontFamily: "Montserrat, sans-serif",
        padding: "20px 0px 10px 0px",
        fontSize: "26px",
        textAlign: "center"
    },
    buttons: {
        color: "black"
    },
    list: {
        width: 400
    },
    fullList: {
        width: "auto"
    },
    aboutImg: {
        padding: "30px 150px 0px 150px",
        width: "100px"
    },
    aboutText: {
        fontFamily: "Montserrat",
        padding: "30px"
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    search: {
        marginTop: "100px"
    },
    error: {
        color: "red",
        padding: "10px"
    }
}));

return (
    <div className={classes.search}>
        <Grid container align-items="flex-end">
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <FormControl>
                    <Input
                        id="search-city"
                        error={hasError}
                        placeholder="Enter your city name"
                        onChange={e => {
                            setSearching((isSearching = true));
                            setSearchTerm(e.target.value);
                        }}
                    />
                    {props.error && (<Typography className={classes.error}>{props.error}</Typography>)}
                </FormControl>
            </Grid>
        </Grid>
    </div>
)
const NavBar () => {
    return (
        <div className={classes.root}>
        // style={{ background: "transparent", boxShadow: "none" }}
            <AppBar className={classes.AppBar}>
                <Toolbar>
                    <img src={logo} className={classes.appLogo} alt="logo" />
                    <Grid justify="space-between" container></Grid>
                    <TemporaryDrawer />
                    <Button>
                        <a
                            href="https://github.com/denniskigen/react-weather"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
    )
}