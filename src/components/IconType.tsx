import React, {FC} from 'react';

interface ICategoryIcon {
    type: string
}

const IconType:FC<ICategoryIcon> = ({type}) => {
    return (
        <div className="icon-item">
            {type === 'Task' && <i className="fa fa-shopping-cart" aria-hidden="true"/>}
            {type === 'Idea' && <i className="fa fa-lightbulb-o" aria-hidden="true"/>}
            {type === 'Random Thought' && <i className="fa fa-bullhorn" aria-hidden="true"/>}
        </div>
    );
};

export default IconType;