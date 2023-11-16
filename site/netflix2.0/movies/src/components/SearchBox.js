import React from "react";

//renders search inputs
//take the value from props when the a user type something, and function updates and renders the value
const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className= "form-control"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="type of search...">

            </input>
        </div>

    );

};

export default SearchBox;
