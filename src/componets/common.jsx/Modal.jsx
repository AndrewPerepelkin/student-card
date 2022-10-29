import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ children, title, onClose }) => {
  return (
    <>
      <div
        className='fixed bg-black/70 top-0 right-0 left-0 bottom-0'
        // onClick={onClose}
      />
      <div className='w-[500px] p-5 rounded bg-white fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center'>
        <h1 className='mb-2 text-center font-bold text-xl'>{title}</h1>
        {children}
        <Link to='/' className='py-2 px-4 border bg-blue-400  hover:bg-blue-500 transition ease-in-out duration-300 self-center' onClick={onClose}>Закрыть</Link>
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