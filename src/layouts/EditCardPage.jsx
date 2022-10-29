import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import Modal from '../componets/common.jsx/Modal';
import EditMessage from '../componets/EditMessage';
import InputField from '../componets/forms/InputField';
import { CardContext } from '../context/CardContext';
import { validator } from '../utils/validator';

const EditCardPage = () => {
  const { card, createCard, deleteCard } = useContext(CardContext);

  const [initialData, setInitialData] = useState();
  useEffect(() => {
    setInitialData(JSON.parse(localStorage.getItem('data')));
  }, []);
  const [data, setData] = useState({ firstName: '', secondName: '', bYear: '', portfolio: '' });
  const [modal, setModal] = useState(false)
  console.log(initialData);
  useEffect(() => {
    if (card && initialData) {
      setData(initialData);
    }
  }, [card, initialData])
  
  
  const [errors, setErrors] = useState({});

  const onChangeHandler = ({ target }) => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onCreateHandler = () => {
    localStorage.setItem('data', JSON.stringify(data));
    setModal(true);
    createCard();
  }
  const closeModal = () => {
    setModal(false);
  }

  const onDeleteHandler = () => {
    localStorage.removeItem('data');
    setModal(true);
    deleteCard()
  }

  useEffect(() => {
    validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatorConfig = {
    firstName: {
      isRequired: {
        message: 'Поле "Имя" обязательно для заполнения'
      }
    },
    secondName: {
      isRequired: {
        message: 'Поле "Фамилия" обязательно для заполнения'
      },
    },
    bYear: {
        isRequired: {
          message: 'Поле "Год рождения" обязательно для заполнения'
      },
      isYaer: {
        message: 'Поле "Год рождения" заполнено некорректно'
      }
      },
    portfolio: {
      isRequired: {
        message: 'Это поле обязательно для заполнения'
      },
      isURL: {
        message: 'Поле "Портфолио" должно быть ссылкой'
      }

    }
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1 className='mb-2 text-center font-bold text-xl'>{(card ? 'Изменение' : 'Создание') + ' карточки'}</h1>
      <div className="flex flex-col">
        <InputField
        label='Имя'
        name='firstName'
        value={data.firstName}
        placeholder='Введите Ваше имя...'
        onChange={onChangeHandler}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        error={errors.firstName}
        />
      <InputField
        label='Фамилия'
        name='secondName'
        value={data.secondName}
        placeholder='Введите Вашу фамилию...'
        onChange={onChangeHandler}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        error={errors.secondName}
      />
      <InputField
        label='Год рождения'
        name='bYear'
        value={data.bYear}
        placeholder='Введите Ваш год рождения...'
        onChange={onChangeHandler}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        error={errors.bYear}
      />
      <InputField
        label='Портфолио'
        name='portfolio'
        value={data.portfolio}
        placeholder='Введите Ваше имя...'
        onChange={onChangeHandler}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        error={errors.portfolio}
      />
      </div>
      <div className='relative'>
        {card && <Link to='/' className='bg-gray-400 px-4 py-2 border rounded hover:bg-gray-500 mr-2'>Назад</Link>}
        <button disabled={Object.keys(errors).length !== 0} onClick={onCreateHandler} className='bg-blue-400 px-4 py-2 border rounded hover:bg-blue-500'>{card ? 'Редактировать' : 'Создать'}</button>
        {card && <button onClick={onDeleteHandler} className='bg-red-500 px-4 py-2 border rounded hover:bg-red-400 absolute right-0'>Удалить</button>}
      </div>
    {modal &&
    <Modal title='Сохранение карточки студента' onClose={closeModal}>
      <EditMessage />
    </Modal>}
    </div>

  )
}

export default EditCardPage