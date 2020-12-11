import React, { useState } from 'react';

const withHoverMenu = (WrappedComponent) => {
    return (props) => {
        const [isPopupOpen, setIsOpen] = useState(false);
        
        let id;
        const openAction = () => {
            clearTimeout(id)
            setIsOpen(true);
        }

        const closeAction = () => {
            id = setTimeout(() => setIsOpen(false), 500);
        }

        return (
            <WrappedComponent   {...props}
                                openAction={openAction}
                                closeAction={closeAction}
                                isPopupOpen={isPopupOpen}/>
        )
    }
}

export default withHoverMenu;