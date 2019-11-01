import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma4 bg-yellow dib pa4 tc grow shadow-5">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
            <h1 className=""> {props.name} </h1>
            <p> {props.work} </p>
        </div>
    )
}
export default Avatarlist;