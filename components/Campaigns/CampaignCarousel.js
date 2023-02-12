import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import Carousel from '../Presentation/Carousel';
import {ShowImageModal} from '../../services/imageModalService';

const CampaignCarousel = (props) => {

    const {classes} = useStyles(props);
    const theme = useTheme();

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 200, itemsToShow: 2, itemsToScroll: 2 },
        { width: 400, itemsToShow: 4, itemsToScroll: 4 },
    ]

    const imageClickHandle = (image) => {
        props.imageModal.toggleImage(image);
    }

    return (
        <div className={classes.root}>
            <Carousel
                enableSwipe
                infinite
                breakPoints={breakPoints}
            >
                {
                    props.images.map((item) => {
                        return(
                            <div
                                key={item._id}
                                className={classes.imageContainer}
                                onClick={() => imageClickHandle(item)}
                            >
                                <Image
                                    className={classes.image}
                                    alt="Campaign image"
                                    src={item}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
    imageContainer: {

    },
    image:{
        borderRadius: 5,
        cursor: "pointer"
    }
}));

export default CampaignCarousel;
