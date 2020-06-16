import React from 'react';

const Toggler = (props) => {
        return (                       
                <div className="toggler" onClick={() => props.sideDrawerToggle()}>
                        <span className={props.isOpen ? "toggler__opened_1" : "toggler__closed_1"}></span>
                        <span className={props.isOpen ? "toggler__opened_2" : "toggler__closed_2"}></span>
                        <span className={props.isOpen ? "toggler__opened_3" : "toggler__closed_3"}></span>    
                </div>
        )
}

export default Toggler