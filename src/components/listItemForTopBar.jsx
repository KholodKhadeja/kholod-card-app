import React, { Fragment } from 'react';

const ListItemForTopBar = () => {
    return (
        <Fragment>
            
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
        </Fragment>
    );
}

export default ListItemForTopBar;
