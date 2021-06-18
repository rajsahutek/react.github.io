import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avatarstyle bg-light-purple dib ma4 pa2 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;