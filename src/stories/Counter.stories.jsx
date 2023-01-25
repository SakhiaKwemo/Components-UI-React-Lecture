import Counter from "../Components/Counter";

import {storiesOf} from '@storybook/react'

export default {
    title: 'Counter',
    component: Counter,
  };

const Template = (args) => <Counter {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {
    heading: "Hello how are you", 
    color1: "red", 
    color2: "white"
};

export const WithoutHeading = Template.bind({});
WithoutHeading.args = {};

// storiesOf('Counter')
//     .add('With Heading', () => {
//         return <Counter heading = "Hello how are you"/>
//     })
//     .add('Without Heading', () => {
//         return <Counter/>
//     })