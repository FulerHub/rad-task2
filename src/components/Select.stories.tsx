import * as React from "react";
import "../index.scss";
import Select from "./Select";

export default {
    title: "Components/Select",
    component: Select,

}

const Template = (arg:any) => <Select {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    values: ['Example 1','Example 2','Example 3']
};
