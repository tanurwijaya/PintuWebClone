import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import WalletScreen from "../screens/Wallet";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Pintu/Page/WalletScreen',
    component: WalletScreen,
} as ComponentMeta<typeof WalletScreen>;

export const Primary: ComponentStory<typeof WalletScreen> = () => <WalletScreen/>
