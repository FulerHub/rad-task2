import React, {FC} from 'react';

interface ISelect {
    name?: string;
    defaultValue?: string;
    values: string[]
    onChange?: (e:React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select:FC<ISelect> = ({name, defaultValue, onChange, values}) => {
    return (
        <div>
            <select className={'w-full py-2 border border-black'} name={name} value={defaultValue} onChange={onChange}>
                {values &&
                values.map((item,index)=>
                    <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    );
};

export default Select;