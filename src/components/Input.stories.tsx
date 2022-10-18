import * as React from "react";
import "../index.scss";
import Input from "./Input";

export default {
    title: "Components/Input",
    component: Input,

}

const Template = (arg:any) => <Input {...arg}/>;
export const Default:any = Template.bind({});
Default.args = {
    type: 'text',
    name: '',
    placeholder: 'Write text...'
};


//<Input name={'ss'} type={'text'} placeholder={'TEst'}/>// Template.bind({});//<TableList columns={columns} dataSource={[...data,...data,...data]}/>
