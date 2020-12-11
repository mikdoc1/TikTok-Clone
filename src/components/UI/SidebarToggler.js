import React from 'react';

const Toggler = (props) => {
  let menuClass = 'hamburger-menu';

  if (props.isOpen) {
    menuClass = 'hamburger-menu hamburger-menu-active';
  }
  return (
    <div className={menuClass} onClick={() => (props.isOpen ? props.closeSidebar() : props.openSidebar())}>
      <span className="hamburger-menu-item hamburger-menu-item-1"></span>
      <span className="hamburger-menu-item hamburger-menu-item-2"></span>
      <span className="hamburger-menu-item hamburger-menu-item-3"></span>
    </div>
  );
};

export default Toggler;
