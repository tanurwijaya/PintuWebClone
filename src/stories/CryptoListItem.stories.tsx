import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CryptoListItem} from "../components/table/DesktopTable";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Pintu/Components/Crypto List Item',
    component: CryptoListItem,
} as ComponentMeta<typeof CryptoListItem>;

export const Primary: ComponentStory<typeof CryptoListItem> = () => <CryptoListItem className='w-full' data={{
    color: "#0A68F4", price: {
        latestPrice: '25801941',
        year: '-44.99',
        day: "-6.26",
        month: '12.82',
        week: '-6.05'
    }, logo: "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg", currencySymbol: 'ETH', name: 'Ethereum'
}}/>
