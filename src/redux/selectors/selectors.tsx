import {RootState} from "../store";
import IconType from "../../components/IconType";
import {getDateFromText} from "../../helpers/scripts";
import {createSelector} from "reselect";
import * as React from "react";

export const selectNotes = (state:RootState) => state.notes.notes;
export const selectNotesCategories = (state:RootState) => state.notes.categories;

export const selectNotesTable = createSelector(selectNotes,selectNotesCategories, (notes,categories)=>{
    return notes.map((item)=>{
        return {
            key: `note${item.id}`,
            id: item.id,
            data: [
                {
                    name: 'img',
                    value: <IconType type={item.category}/>,
                    edit: false
                },
                {
                    name: 'name',
                    value: item.name,
                    edit: true
                },
                {
                    name: 'created',
                    value: new Date(item.created).toDateString(),
                    edit: false
                },
                {
                    name: 'category',
                    value: item.category,
                    type: 'select',
                    selectValues: categories,
                    edit: true
                },
                {
                    name: 'content',
                    value: item.content,
                    edit: true
                },
                {
                    name: 'dates',
                    value: getDateFromText(item.content),
                    edit: false
                },
            ],
            controls: true,
            active: item.isArchive
        }
    }).sort((x:any,y:any)=>Number(x.active) - Number(y.active))
});

export const selectNotesCategoriesTable = createSelector(selectNotes,selectNotesCategories, (notes,categories)=>{
    return categories.map((item,index)=>{
        return {
            key: `cat${index}`,
            id: index,
            data: [
                {
                    name: 'img',
                    value: <IconType type={item}/>,
                    edit: false
                },
                {
                    name: 'name',
                    value: item,
                    edit: false
                },
                {
                    name: 'active',
                    value: notes.filter(note=>(note.category === item && !note.isArchive)).length,
                    edit: false
                },
                {
                    name: 'archive',
                    value: notes.filter(note=>(note.category === item && note.isArchive)).length,
                    edit: false
                },
            ],
            controls: true
        }
    }).sort((x:any,y:any)=>(x.active === y.active)? 0 : x ? -1 : 1);
});