import React, {FC, useState} from 'react';
import TableList from "../components/Table/TableList";
import {useDispatchEx, useSelectorEx} from "../hook/redux";
import {addNote, archiveNote, removeNote, updateNote } from '../redux/slices/notesSlice';
import Modal from "../components/Modal";
import Input from "../components/Input";
import {Formik, FormikHelpers} from "formik";
import Select from "../components/Select";
import {selectNotesCategories, selectNotesCategoriesTable, selectNotesTable} from "../redux/selectors/selectors";

interface IForm {
    name: string;
    category: string;
    content: string
}

const Home:FC = () => {
    let columns = ["", "Name", "Created", "Category", "Content", "Dates"];
    let columnsCategories = ["", "Note category", "Active", "Archived"];
    let categories = useSelectorEx(selectNotesCategories);
    const [modal, setModal] = useState(false);

    let newNotes = useSelectorEx(selectNotesTable);
    let newCategories = useSelectorEx(selectNotesCategoriesTable);

    let dispatch = useDispatchEx();

    let handleEditNote = (id:number,values:any)=>{
        const {name,category,content} = values;
        dispatch(updateNote({
            id,
            name,
            category,
            content,
        }));
    };
    let handleArchiveNote = (id:number)=>{
        dispatch(archiveNote({id}));
    };
    let handleDeleteNote = (id:number)=>{
        dispatch(removeNote({id}));
    };

    let handleCreateNote = (values:any,helper:FormikHelpers<IForm>)=>{
        dispatch(addNote({
            id: Date.now(),
            name: values.name,
            created: new Date(),
            category: values.category,
            content: values.content,
            isArchive: false,
        }));
        helper.resetForm();
        setModal(false);
    };

    return (
        <div className={"container"}>
            <Modal active={modal} title={"Create Note"} onClose={()=>setModal(false)}>
                <Formik initialValues={{
                    name: "",
                    category: "Task",
                    content: "",
                }} onSubmit={handleCreateNote}>
                    {({values, handleChange, handleBlur, handleSubmit}) => (
                        <form className={""} onSubmit={handleSubmit}>
                            <Input className={'border border-black w-full py-2 px-3 my-1'} name={"name"} type={"text"} placeholder={"Name"} onChange={handleChange} onBlur={handleBlur} value={values.name} />
                            <Select  name={"category"} defaultValue={values.category} onChange={handleChange} values={categories}/>
                            <Input className={'border border-black w-full py-2 px-3 my-1'} name={"content"} type={"text"} placeholder={"Content"} onChange={handleChange} onBlur={handleBlur} value={values.content} />
                            <button type={"submit"} className={'px-5 py-2.5 text-white bg-gray-800 rounded-md duration-150 hover:bg-gray-700 active:shadow-lg'}>Create Note</button>
                        </form>
                    )}
                </Formik>

            </Modal>
            <TableList columns={columns} dataSource={newNotes} control={true} handleEdit={handleEditNote} handleArchive={handleArchiveNote} handleDelete={handleDeleteNote}/>
            <button onClick={()=>setModal(true)} className={'px-5 py-2.5 text-white bg-gray-800 rounded-md duration-150 hover:bg-gray-700 active:shadow-lg'}>Create Note</button>
            <TableList columns={columnsCategories} dataSource={newCategories}/>
        </div>
    );
};

export default Home;