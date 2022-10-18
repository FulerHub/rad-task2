import React, {FC} from 'react';

interface ITableItemControls {
    handleEdit: ()=>void;
    handleArchive: ()=>void;
    handleDelete: ()=>void
}

const TableItemControls:FC<ITableItemControls> = ({ handleEdit, handleArchive, handleDelete}) => {
    return (
        <div className="table-cell align-middle bg-gray-200 py-2 text-2xl text-right w-28 text-gray-700 ">
            <i onClick={handleEdit} className="mx-1.5 fa fa-pencil edit cursor-pointer hover:text-green-400" aria-hidden="true"/>
            <i onClick={handleArchive} className="mx-1.5 fa fa-archive archive cursor-pointer hover:text-orange-500" aria-hidden="true"/>
            <i onClick={handleDelete} className="mx-1.5 fa fa-trash delete cursor-pointer hover:text-red-600" aria-hidden="true"/>
        </div>
    );
};

export default TableItemControls;