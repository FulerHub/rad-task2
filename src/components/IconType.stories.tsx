import * as React from "react";
import "../index.scss";
import '../assets/vendor/font-awesome/css/font-awesome.min.css';
import IconType from "./IconType";

export default {
    title: "Components/IconType",
    component: IconType,

}

const Template = (arg:any) => <IconType {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    type: 'Task'
};
