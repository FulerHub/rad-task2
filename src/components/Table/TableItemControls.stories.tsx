import * as React from "react";
import "../../index.scss";
import TableItemControls from "./TableItemControls";

export default {
    title: "Table/TableItemControls",
    component: TableItemControls,

}

const Template = (arg:any) => <TableItemControls {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    handleEdit: ()=>{},
    handleArchive: ()=>{},
    handleDelete: ()=>{}
};