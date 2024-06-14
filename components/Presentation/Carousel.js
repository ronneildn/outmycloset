import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import ElasticCarousel from 'react-elastic-carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIosRounded';


const Carousel = (props) => {

    const {classes} = useStyles(props);
    const theme = useTheme();

    const renderArrow = ({ type, onClick, isEdge }) => {
        const classDirection = type === "PREV" ? "left" : "right";
        const pointer = type === "PREV" ?
            <ArrowBackIcon className={classNames(classes.icon, "icon-left-arrow")}/> :
            <ArrowForwardIcon className={classNames(classes.icon, "icon-right-arrow")}/>;

        return (
            <div
                className={classes.buttonContainer}
                style={{
                    color: props.arrowColor?
                        props.arrowColor: theme.palette.primary.foregroundTint,
                }}
                onClick={onClick}
            >
                {pointer}
            </div>
        );
    };


    const renderPagination = ({ pages, activePage, onClick }) => {
        return (
            <div className={classes.paginationContainer}>
                {pages.map(page => {
                    const isActivePage = activePage === page;

                    return (
                        <div
                            className={classNames(
                                classes.page,
                                isActivePage? classes.activePage: null
                            )}
                            key={page}
                            onClick={() => onClick(page)}
                            //active={isActivePage? classes.activePage: null}
                        />
                    );
                })}
            </div>
        );
    };

    const onNextEnd = (currentItem, pageIndex) => {

    }

    return (
        <div className={classes.root}>
            <ElasticCarousel
                renderArrow={renderArrow}
                renderPagination={renderPagination}
                onNextEnd={onNextEnd}
                {...props}
            >
                {props.children}
            </ElasticCarousel>
        </div>
    );
};

const useStyles = makeStyles()((theme, props) => ({
    root: {
        position: "relative",

        // paddingTop: (props) => {
        //     if (props.buttonPosition === 'top') {
        //         return 5;
        //     }
        // },
        //
        // marginTop: (props) => {
        //     if (props.buttonPosition === 'top' && props.noTopPadding) {
        //         return 30;
        //     }
        // },
        //
        "& .rec-carousel-item": {
            display: "flex"
        },
        //
        // "& .rec-item-wrapper": {
        //     height: (props) => props.itemFullHeight?
        //         "100%" : "auto"
        // }
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",

    },

    arrowButton: {
        //background: "red",
        padding: 5,
        // border: `1px solid ${Colors.$secondaryTint}`,
        // backgroundColor: Colors.$secondary,

        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    icon: {
        fontSize: 30,
        color: (props) => false?
            props.arrowColor: theme.palette.primary.main,

        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    paginationContainer: {
        display: "flex",
        flexDirection: "row"
    },
    page: {
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.foregroundTint,
        width: 10,
        height: 10,
        margin: 8,
        cursor: "pointer"
    },
    activePage: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        transition: `background-color 1000ms ease`
    }
}));

export default Carousel;
