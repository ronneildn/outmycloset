import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';

import Carousel from '../Presentation/Carousel';
import UpdateItem from './UpdateItem';

const UpdateCarousel = (props) => {

    const {classes} = useStyles(props);
    const theme = useTheme();

    const data = mockData;
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 800, itemsToShow: 3, itemsToScroll: 3 },
    ]

    return (
        <div className={classes.root}>
            <Carousel
                //enableAutoPlay
                enableSwipe
                itemPadding={[0, 10]}
                arrowColor={theme.palette.secondary.foreground}
                breakPoints={breakPoints}
            >
                {
                    data.map((item) => {
                        return(
                            <div key={item.id} className={classes.updateContainer}>
                                <UpdateItem
                                    data={item}
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
        minHeight: 100
    },
    updateContainer: {
        backgroundColor: theme.palette.secondary.foreground,
        padding: 20,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",

        // ":hover": {
        //     backgroundColor: theme.palette.primary.accent,
        // }
    }
}));

const mockData = [
    {
        id: "1",
        imgUrl: "http://www.outmycloset.org/img/content/tq web.jpg",
        title: "The T at The Q",
        subTitle: "A Chic Celebration",
        content: "Out My Closet in partnership with Qommunity Center (THE Q, NYC nightclub ) invited our loved transgender women to a STYLISH SHOPPING SPREE at our POP-UP-SHOP, offering FREE fashion-forward and high quality, clothing, shoes, accessories, cosmetics and refreshments, set in a beautiful backdrop of elegance.",
        link: "https://www.tumblr.com/outmyclosetorg/694884368070639616/the-t-at-the-q-out-my-closet-in-partnership?source=share",
        linkLabel: "Learn More >"
    },
    {
        id: "2",
        imgUrl: "http://www.outmycloset.org/img/content/tq web.jpg",
        title: "The T at The Q",
        subTitle: "A Chic Celebration",
        content: "Featured in our first LIMITED EDITION COLLECTION (only 100) is a stylish reversible t-shirt and tank-top with gold metallic lettering that inverts to a colorful, classic Keith Haring design that is accompanied with our signature metallic tote for purchase individually or as a set.",
        link: "https://www.tumblr.com/outmyclosetorg/694884368070639616/the-t-at-the-q-out-my-closet-in-partnership?source=share",
        linkLabel: "Learn More >"
    },
    {
        id: "3",
        imgUrl: "http://www.outmycloset.org/img/content/tq web.jpg",
        title: "The T at The Q",
        subTitle: "A Chic Celebration",
        content: "Out My Closet in partnership with Qommunity Center (THE Q, NYC nightclub ) invited our loved transgender women to a STYLISH SHOPPING SPREE at our POP-UP-SHOP, offering FREE fashion-forward and high quality, clothing, shoes, accessories, cosmetics and refreshments, set in a beautiful backdrop of elegance.",
        link: "https://www.tumblr.com/outmyclosetorg/694884368070639616/the-t-at-the-q-out-my-closet-in-partnership?source=share",
        linkLabel: "Learn More >"
    },
    {
        id: "4",
        imgUrl: "http://www.outmycloset.org/img/content/tq web.jpg",
        title: "The T at The Q",
        subTitle: "A Chic Celebration",
        content: "Out My Closet in partnership with Qommunity Center (THE Q, NYC nightclub ) invited our loved transgender women to a STYLISH SHOPPING SPREE at our POP-UP-SHOP, offering FREE fashion-forward and high quality, clothing, shoes, accessories, cosmetics and refreshments, set in a beautiful backdrop of elegance.",
        link: "https://www.tumblr.com/outmyclosetorg/694884368070639616/the-t-at-the-q-out-my-closet-in-partnership?source=share",
        linkLabel: "Learn More >"
    },
    {
        id: "5",
        imgUrl: "http://www.outmycloset.org/img/content/tq web.jpg",
        title: "The T at The Q",
        subTitle: "A Chic Celebration",
        content: "Out My Closet in partnership with Qommunity Center (THE Q, NYC nightclub ) invited our loved transgender women to a STYLISH SHOPPING SPREE at our POP-UP-SHOP, offering FREE fashion-forward and high quality, clothing, shoes, accessories, cosmetics and refreshments, set in a beautiful backdrop of elegance.",
        link: "https://www.tumblr.com/outmyclosetorg/694884368070639616/the-t-at-the-q-out-my-closet-in-partnership?source=share",
        linkLabel: "Learn More >"
    },
];

export default UpdateCarousel;
