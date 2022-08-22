import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TopMoverItem}  from '../components/TopMovers';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Pintu/Components/TopMoverItem',
    component: TopMoverItem,
} as ComponentMeta<typeof TopMoverItem>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TopMoverItem> = (args) => <TopMoverItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Bitcoin',
};
