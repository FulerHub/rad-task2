import React, {FC} from 'react';

interface ITableItemControls {
    handleEdit: ()=>void;
    handleArchive: ()=>void;
    handleDelete: ()=>void
}

const TableItemControls:FC<ITableItemControls> = ({ handleEdit, handleArchive, handleDelete}) => {
    return (
        <div className="table__td table__bar">
            <i onClick={handleEdit} className="fa fa-pencil edit" aria-hidden="true"/>
            <i onClick={handleArchive} className="fa fa-archive archive" aria-hidden="true"/>
            <i onClick={handleDelete} className="fa fa-trash delete" aria-hidden="true"/>
        </div>
    );
};

export default TableItemControls;