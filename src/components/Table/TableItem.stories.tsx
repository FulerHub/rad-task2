import * as React from "react";
import "../../index.scss";
import TableItem from "./TableItem";
import IconType from "../IconType";

export default {
    title: "Table/TableItem",
    component: TableItem,

}
const data = [
    {
        name: 'img',
        value: <IconType type={'Task'}/>,
        edit: false
    },
    {
        name: 'name',
        value: 'Example Name',
        edit: true
    },
    {
        name: 'created',
        value: new Date(Date.now()).toDateString(),
        edit: false
    },
    {
        name: 'category',
        value: 'Example 1',
        type: 'select',
        selectValues: ['Example 1','Example 2','Example 3'],
        edit: true
    },
    {
        name: 'content',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        edit: true
    },
    {
        name: 'dates',
        value: '04.10.2022',
        edit: false
    }
];
const Template = (arg:any) => <TableItem {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    id:1,
    data: data,
    controls: false,
    active: false
};