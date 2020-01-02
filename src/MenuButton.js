import React from 'react';

const drawerToggleButton = props => {
    let drawerClasses = ['menu-btn'];
    if (props.show) {
      drawerClasses = ['menu-btn close'];
    }
    return (
    <button className={drawerClasses} onClick={props.click}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
    </button>
    )
};

export default drawerToggleButton;