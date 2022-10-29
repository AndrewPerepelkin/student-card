import React, {useState, useEffect} from 'react'
import Modal from '../componets/common.jsx/Modal';
import EditMessage from '../componets/EditMessage';
import InputField from '../componets/forms/InputField';
import { validator } from '../utils/validator';

const EditCardPage = ({card}) => {
  let initialData;

  // const initialData = JSON.parse(localStorage.getItem('data'));
  const [data, setData] = useState({ firstName: '', secondName: '', bYear: '', portfolio: '' });
  const [modal, setModal] = useState(false)
  console.log(initialData);
  // if (initialData) 
  
  const [errors, setErrors] = useState({});

  const onChangeHandler = ({ target }) => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
    // localStorage.setItem(target.name, target.value);
  };

  const onCreateHandler = () => {
    localStorage.setItem('data', JSON.stringify(data));
    setModal(true)
  }
  const closeModal = () => { setModal(false) }

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
      <h1 className='mb-2 text-center font-bold text-xl'>Создание карточки</h1>
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
      <div><button disabled={Object.keys(errors).length !== 0} onClick={onCreateHandler} className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Создать</button></div>
    {modal &&
    <Modal title='Create a New Product' onClose={closeModal}>
      <EditMessage />
    </Modal>}
    </div>

  )
}

export default EditCardPage