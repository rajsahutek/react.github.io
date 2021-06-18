import React from "react";

function Header({name,title}){
    return(
        <div style={{background:"yellow",padding: 20, width:400}}>
            <h1>{title}</h1>
            <h1>Learn code with {name}</h1>
            <p>This is header componets for learing purpose.</p>
        </div>
    );
}

export default Header;
