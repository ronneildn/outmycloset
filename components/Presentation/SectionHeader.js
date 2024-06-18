import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";

const SectionHeader = (props) => {
    const { classes } = useStyles(props);

    return (
        <div className={classNames(classes.root, props.className)}>
            <h2>{props.title}</h2>
            <div>{props.subTitle}</div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        marginBottom: 20,
    },
}));

export default SectionHeader;
