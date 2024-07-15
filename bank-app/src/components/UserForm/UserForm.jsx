import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, createUser, updateUser } from '../../api';
import styles from './UserForm.module.css';

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    birthDate: '',
    job: '',
    cards: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchUser(id);
    }
  }, [id]);

  const fetchUser = async (id) => {
    try {
      const response = await getUserById(id);
      if (response) {
        setUser(response);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser(user);
      } else {
        await createUser(user);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCardChange = (index, e) => {
    const { name, value } = e.target;
    const newCards = [...user.cards];
    newCards[index][name] = value;
    setUser((prevUser) => ({
      ...prevUser,
      cards: newCards,
    }));
  };

  const addCard = () => {
    setUser((prevUser) => ({
      ...prevUser,
      cards: [
        ...prevUser.cards,
        { id: 0, number: '', fullName: '', expDate: '', cvc: '' },
      ],
    }));
  };

  const removeCard = (index) => {
    const newCards = [...user.cards];
    newCards.splice(index, 1);
    setUser((prevUser) => ({
      ...prevUser,
      cards: newCards,
    }));
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <label>
        Имя:
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Фамилия:
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Отчество:
        <input
          type="text"
          name="patronymic"
          value={user.patronymic}
          onChange={handleChange}
        />
      </label>
      <label>
        Дата рождения:
        <input
          type="date"
          name="birthDate"
          value={user.birthDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Место работы:
        <input
          type="text"
          name="job"
          value={user.job}
          onChange={handleChange}
        />
      </label>
      <div>
        <h3>Карты</h3>
        {user.cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <label>
              Номер счета:
              <input
                type="text"
                name="number"
                value={card.number}
                onChange={(e) => handleCardChange(index, e)}
              />
            </label>
            <label>
              ФИО латиницей:
              <input
                type="text"
                name="fullName"
                value={card.fullName}
                onChange={(e) => handleCardChange(index, e)}
              />
            </label>
            <label>
              Срок действия карты:
              <input
                type="text"
                name="expDate"
                value={card.expDate}
                onChange={(e) => handleCardChange(index, e)}
              />
            </label>
            <label>
              CVC:
              <input
                type="text"
                name="cvc"
                value={card.cvc}
                onChange={(e) => handleCardChange(index, e)}
              />
            </label>
            <button type="button" onClick={() => removeCard(index)}>
              Удалить карту
            </button>
          </div>
        ))}
        <button type="button" onClick={addCard}>
          Добавить карту
        </button>
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default UserForm;
