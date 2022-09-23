import {createSlice} from "@reduxjs/toolkit";
import {NotesType} from "../../helpers/types";

interface notesState {
    notes: NotesType[];
    categories: string[];
    isLoading: boolean;
    error: string
}

const initialState: notesState = {
    notes: [
        {
            id: 1,
            name: "The theory of evolute",
            created: Date.parse("Sat Apr 21 2022"),
            category: "Idea",
            content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
            isArchive: false,
        },
        {
            id: 2,
            name: "William Gaddis",
            created: Date.parse("Sat Apr 22 2022"),
            category: "Task",
            content: "Power doesn't gonna have a dentist appointment on the 3/5/2021,",
            isArchive: false,
        },
        {
            id: 3,
            name: "Books",
            created: Date.parse("Sat Apr 23 2022"),
            category: "Idea",
            content: "The Learn Startup",
            isArchive: false,
        },
        {
            id: 4,
            name: "Shopping List",
            created: Date.parse("Sat Apr 24 2022"),
            category: "Task",
            content: "Tomatoes,bread",
            isArchive: false,
        },
        {
            id: 5,
            name: "New Feature",
            created: Date.parse("Sat Apr 25 2022"),
            category: "Random Thought",
            content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
            isArchive: false,
        },
        {
            id: 6,
            name: "New Note",
            created: Date.parse("Sat Apr 26 2022"),
            category: "Idea",
            content: "I should create a new note 26.04.2021",
            isArchive: true,
        },
        {
            id: 7,
            name: "Some Note 7",
            created: Date.parse("Sat Apr 27 2022"),
            category: "Random Thought",
            content: "I created a new note",
            isArchive: true,
        },
    ],
    categories: ['Task', 'Random Thought', 'Idea'],
    isLoading: false,
    error: ''
};


const notesSlice = createSlice({
    name:'notesSlice',
    initialState,
    reducers:{
        addNote(state,action){
            state.notes.push(action.payload);
        },
        archiveNote(state,action){
            const {id} = action.payload;
            state.notes = state.notes.map(item=>(item.id === id) ? {
                ...item,
                isArchive: !item.isArchive,
            }: item);
        },
        updateNote(state,action){
            const {id,name,category,content,isArchive} = action.payload;
            state.notes = state.notes.map(item=>(item.id === id) ? {
                ...item,
                name,
                category,
                content
            }: item);
        },
        removeNote(state,action){
            const {id} = action.payload;
            state.notes = state.notes.filter(item => item.id !== id)
        },
        loadNotes(state,action){
            state.notes = action.payload;
        }
    }
});

export const {addNote,updateNote,archiveNote,removeNote,loadNotes} = notesSlice.actions;
export default notesSlice.reducer;