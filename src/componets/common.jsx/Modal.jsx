import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, title, onClose }) => {
  return (
    <>
      <div
        className='fixed bg-black/70 top-0 right-0 left-0 bottom-0'
        onClick={onClose}
      />
      <div className='w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2'>
        <h1 className='mb-2 text-center font-bold text-xl'>{title}</h1>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default Modal;