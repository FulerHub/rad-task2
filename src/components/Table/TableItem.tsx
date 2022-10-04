import React, {FC, useState} from 'react';
import Input from "../Input";
import TableItemControls from "./TableItemControls";
import {Formik} from "formik";
import Select from "../Select";


interface ITableItemData {
    name: string;
    type?: string;
    selectValues?: string[];
    value: string;
    edit: boolean
}

interface ITableItem {
    id: number;
    data: ITableItemData[];
    controls?: boolean;
    active?: boolean;
    handleEdit: (id:number,values:any)=>void;
    handleArchive: (id:number)=>void;
    handleDelete: (id:number)=>void
}

const TableItem:FC<ITableItem> = ({ id, data, controls, active=false, handleEdit, handleArchive, handleDelete }) => {
    let [edit, setEdit] = useState(false);
    let handleEditEx = (handleSubmit:()=>void = ()=>{})=>{
        setEdit(!edit);
        handleSubmit();
    };

    let newData:any= {};
    data.forEach((item)=>{
        newData[item.name] = item.value;
    });
    return (
        <>
            {edit ?
                <Formik initialValues={newData} onSubmit={(values) => handleEdit(id,values)}>
                {({values, handleChange, handleBlur, handleSubmit}) => (
                    <form className={"table-row my-3 p-3"} onSubmit={handleSubmit}>
                        {
                            data.length > 0 &&
                            data.map((item,index)=>
                                <div key={index} className={"table-cell align-middle bg-gray-200 p-2 text-gray-700"}>
                                {!item.edit ? item.value :
                                    (item.type === "select") ?
                                        <Select name={item.name} defaultValue={values[item.name]} onChange={handleChange} values={item.selectValues as string[]}/>
                                        : <Input name={item.name} type={"text"} placeholder={item.name} onChange={handleChange} onBlur={handleBlur} value={values[item.name]} />}
                                </div>
                            )
                        }
                    {controls && <TableItemControls handleEdit={()=>handleEditEx(handleSubmit)} handleArchive={()=>handleArchive(id)} handleDelete={()=>handleDelete(id)} />}
                    </form>
                )}
                </Formik>
                :
                <div className={`table-row my-3 ${active ? "opacity-70" : ""}`}>
                    {data.length > 0 && data.map((item,index)=><div key={index} className={"table-cell align-middle bg-gray-200 p-2 text-gray-700"}>{item.value}</div>)}
                    {controls && <TableItemControls handleEdit={()=>handleEditEx()} handleArchive={()=>handleArchive(id)} handleDelete={()=>handleDelete(id)} />}
                </div>
            }
        </>
    );
};

export default TableItem;