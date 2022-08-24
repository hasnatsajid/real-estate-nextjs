import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

const Backdrop = ({ toggleFilter }) => {
  return <div className="backdrop" onClick={toggleFilter}></div>;
};

const Overlay = ({ children, heading }) => {
  return (
    <div className="modal">
      <h3 className="header">{heading}</h3>
      <div className="content">{children}</div>
    </div>
  );
};

const Modal = ({ children, toggleFilter, heading }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop toggleFilter={toggleFilter} />, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(<Overlay heading={heading}>{children}</Overlay>, document.getElementById('modal-root'))}
    </>
  );
};

export default Modal;
