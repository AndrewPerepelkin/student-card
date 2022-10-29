import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentCardPage = () => {
  const [card,] = useState(false);
  const getYaers = (year) => {
    const years = ((new Date()).getFullYear() - year).toString();
    if (years.endsWith('1')) return years + ' год';
    else if (
      (Number(years) < 10 || Number(years) > 20) &&
      (years.endsWith('2') ||
        years.endsWith('3') ||
        years.endsWith('4'))) return years + ' года';
    else return years + ' лет'
   }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1 className='mb-2 text-center font-bold text-xl'>Карточка студента</h1>
      {card ? (
        <>
          <div className='mb-5'>
            <div><span className='font-bold'>Имя: </span>{localStorage.getItem('firstName')}</div>
            <div><span className='font-bold'>Фамилия: </span>{localStorage.getItem('secondName')}</div>
            <div><span className='font-bold'>Год рождения: </span>{localStorage.getItem('bYear') + ` (${getYaers(localStorage.getItem('bYear'))})`}</div>
            <div>
              <span className='font-bold'>Портфолио: </span>
              <a href={localStorage.getItem('portfolio')}>
              {localStorage.getItem('portfolio')}</a>
            </div>
          </div>
          <Link role='button' to='/edit' className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Редактировать</Link>
        </>
      ) : (
        <>
            <div className='mb-5'>Нет данных</div>
            <div><Link role='button' to='/edit' className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Создать</Link></div>
        </>
      )}
    </div>
  )
}

export default StudentCardPage;