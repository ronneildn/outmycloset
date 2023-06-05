import {Fragment, useState, useEffect} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';

import Update from './Update';

import updatesService from '../../services/updatesService';

const UpdateList = (props) => {

    const {classes} = useStyles(props);
    const [moreFilters, setMoreFilters] = useState(false);
    const [updates, setUpdates] = useState([]);
    const [processingUpdates, setProcessingUpdates] = useState(true);

    useEffect(() => {
        if (processingUpdates) {
            getDonations();
        }
    },[processingUpdates])

    const getDonationsHandler =  () => {
        setProcessingUpdates(true);
    }

    const handleFilterToggle = () => {
        setMoreFilters(!moreFilters);
    }

    const getDonations = async () => {
        await updatesService.getUpdates
        .then(function(res){
            console.log(res);
            setUpdates(res);
        },
        function(error){
            enqueueSnackbar('Sorry an error occured getting updates', { autoHideDuration: 3000, variant: "error" });
        })
        .finally(function(){
            setProcessingUpdates(false);
        });
    }

    getDonations();

    return (
        <Fragment>
            <div className={classes.filterContainer}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs>
                        <TextField
                            id="Search"
                            label="Search"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><SearchRoundedIcon/></InputAdornment>,
                            }}
                        />
                    </Grid>
                    {moreFilters &&
                        <Fragment>
                            <Grid item xs={3} md={2}>
                                <TextField
                                    id="month"
                                    select
                                    label="Month"
                                    variant="outlined"
                                    fullWidth
                                    //onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={3} md={2}>
                                <TextField
                                    id="year"
                                    select
                                    label="Year"
                                    variant="outlined"
                                    fullWidth
                                    //onChange={handleChange}
                                />
                            </Grid>
                        </Fragment>
                    }
                    <Grid item >
                        {moreFilters?

                            <FilterAltOffRoundedIcon
                                onClick={handleFilterToggle}
                                className={classes.filterIcon}
                            />:

                            <FilterAltRoundedIcon
                                onClick={handleFilterToggle}
                                className={classes.filterIcon}
                            />
                        }

                    </Grid>
                </Grid>
            </div>

            <div className={classes.listContainer}>
                {
                    updates.map((item, index) => (
                        <div className={classes.updateContainer}>
                            <Update
                                data={item}
                            />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    filterContainer: {

    },
    filterIcon: {
        cursor: "pointer"
    },
    listContainer: {

    },
    updateContainer: {
        margin: "20px 0"
    }
}));


export default UpdateList;

const UPDATESDATA = [
    {
        imgUrl: "http://www.outmycloset.org/img/content/img_truecolors.JPG",
        title: "True Colors",
        subTitle: "OMC at TCLR",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMCATTCR",
        created: "2016-10-12",
        page: true,
        id: "123"
    },
    {
        imgUrl: "http://www.outmycloset.org/img/content/img_miami.jpg",
        title: "OMC Hits Miami",
        subTitle: "#OMCMIAMI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMC2MIA",
        created: "2017-03-29",
        page: true
    },
    {
        imgUrl: "http://www.outmycloset.org/img/content/merch%20web.jpg",
        title: "/ˈinflo͝oənsər/",
        subTitle: "Merch Available",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMC2MIA",
        created: "2020-11-29",
        page: true
    },
    {
        imgUrl: "http://www.outmycloset.org/img/content/img_truecolors.JPG",
        title: "True Colors",
        subTitle: "OMC at TCLR",
        description: "Lorem ipsum dolor sit amet,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMCATTCR",
        created: "2016-10-12",
        page: true
    },
    {
        imgUrl: "http://www.outmycloset.org/img/content/img_miami.jpg",
        title: "OMC Hits Miami",
        subTitle: "#OMCMIAMI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMC2MIA",
        created: "2017-03-29",
        page: true
    },
    {
        imgUrl: "http://www.outmycloset.org/img/content/merch%20web.jpg",
        title: "/ˈinflo͝oənsər/",
        subTitle: "Merch Available",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "http://bit.ly/OMC2MIA",
        created: "2020-11-29",
        page: true
    },
]
