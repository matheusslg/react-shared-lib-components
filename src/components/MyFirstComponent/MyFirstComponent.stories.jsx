import React from 'react';

import MyFirstComponent from './MyFirstComponent';

export default {
  title: 'Components/MyFirstComponent',
  component: MyFirstComponent
};

const Template = (args) => <MyFirstComponent {...args} />;

export const Default = Template.bind({});