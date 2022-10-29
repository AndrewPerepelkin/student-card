import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CardContext } from '../context/CardContext';

const StudentCardPage = () => {
  const { card, createCard } = useContext(CardContext);
  const data = (JSON.parse(localStorage.getItem('data')));
  if (data) createCard();
  console.log(data);
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
            <div><span className='font-bold'>Имя: </span>{data.firstName}</div>
            <div><span className='font-bold'>Фамилия: </span>{data.secondName}</div>
            <div><span className='font-bold'>Год рождения: </span>{data.bYear + ` (${getYaers(data.bYear)})`}</div>
            <div>
              <span className='font-bold'>Портфолио: </span>
              <a
                href={data.portfolio}
                className='hover:underline text-gray-600'
               >
              {data.portfolio}</a>
            </div>
          </div>
          <Link role='button' to='/edit' className='bg-blue-400 px-4 py-2 rounded hover:bg-blue-500'>Редактировать</Link>
        </>
      ) : (
        <>
            <div className='mb-5'>Нет данных</div>
            <div><Link role='button' to='/edit' className='bg-blue-400 px-4 py-2 rounded hover:bg-blue-500'>Создать</Link></div>
        </>
      )}
    </div>
  )
}

export default StudentCardPage;