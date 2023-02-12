import Modal from '@mui/material/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Fragment, useState} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const ImageModal = (props) => {

    const {classes} = useStyles(props);
    const {isShowing, toggleImage, closeModal, image} = props.imageModal;

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            open={isShowing}
            onClose={handleClose}
            onBackdropClick={handleClose}
        >
            <div className={classes.root}>
                <div className={classes.contentContainer}>
                    <div onClick={handleClose}>
                        <div className={classes.close}>
                            <CloseRoundedIcon
                            />
                        </div>
                    </div>
                    <img
                        src={image}

                    />
                </div>
            </div>

        </Modal>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 1 0%",

    },
    contentContainer: {
        backgroundColor: theme.palette.secondary.background,
        margin: 20,
        padding: 20,
        borderRadius: 5,
        position: "relative"
    },
    close: {
        borderRadius: "50%",
        width: 30,
        height: 30,
        backgroundColor: theme.palette.secondary.foreground,
        color: theme.palette.secondary.foregroundTint,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 10,
        top: 10,
        cursor: "pointer",

        ":hover": {
            color: theme.palette.secondary.background,
        }

    }
}));

export default ImageModal;
