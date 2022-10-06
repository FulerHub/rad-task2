import * as React from "react";
import "../index.scss";
import Modal from "./Modal";
import {useState} from "react";

export default {
    title: "Components/Modal",
    component: Modal,

}

const Template = (arg:any) =>{
    const [modal,setModal] = useState(false);
    return <>
        <button onClick={()=>setModal(true)} className={'px-5 py-2.5 text-white bg-gray-800 rounded-md duration-150 hover:bg-gray-700 active:shadow-lg'}>Open Modal</button>
        <Modal {...arg} active={modal}  onClose={()=>setModal(false)} />
        </>
}
export const Default:any = Template.bind({});
Default.args = {
    title: 'Modal',
    children: 'test',
    onClose: ()=>{}
};