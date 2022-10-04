import React, {FC} from 'react';
import TableItem from "./TableItem";

interface ITableDataSource{
    key: string;
    id?: number;
    data: any[];
    controls: boolean;
    active?: boolean;
}
interface ITableList {
    columns?: string[];
    dataSource?: ITableDataSource[];
    control?: boolean;
    handleEdit?: (id:number,values:any)=>void;
    handleArchive?: (id:number)=>void;
    handleDelete?: (id:number)=>void
}

const TableList:FC<ITableList> = ({columns,dataSource,control, handleEdit = ()=>{}, handleArchive= ()=>{}, handleDelete= ()=>{}}) => {
    return (
        <div className="table w-full border-spacing-y-3 text-white">
            {columns &&
                <div className="table-row my-4">
                    {columns.map((item,index)=>{
                       return <div className={"table-cell bg-gray-700 py-3"} key={index}>{item}</div>
                    })}
                    {control &&
                        <div className="table-cell bg-gray-700 py-3 text-2xl text-right">
                            <i className="fa fa-archive mx-1.5" aria-hidden="true"/>
                            <i className="fa fa-trash mx-1.5" aria-hidden="true"/>
                        </div>
                    }
                </div>
            }
            {dataSource && dataSource.map((item,index)=><TableItem key={item.key} active={item?.active} id={(item.id) ? item.id : index} data={item.data} controls={control} handleEdit={handleEdit} handleArchive={handleArchive} handleDelete={handleDelete}/>)}

        </div>
    );
};

export default TableList;