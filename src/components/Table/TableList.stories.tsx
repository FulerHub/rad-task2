import * as React from "react";
import "../../index.scss";
import IconType from "../IconType";
import TableList from "./TableList";

export default {
    title: "Table/TableList",
    component: TableList,

}
const columns = ["", "Name", "Created", "Category", "Content", "Dates"];
const data = [{
    key: 1,
    id: 1,
    data: [
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
        },
    ],
    controls: true,
    active: false
}];
const Template = (arg:any) => <TableList {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    columns: columns,
    dataSource: [...data,...data,...data],
};