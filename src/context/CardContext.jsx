import React, { createContext, useState } from 'react';

export const CardContext = createContext({
  card: false,
  createCard: () => {},
  deleteCard: () => {}
})

export const CardState = ({ children }) => {
  const [card, setCardl] = useState(false);
  const createCard = () => setCardl(true);
  const deleteCard = () => setCardl(false);

  return (
    <CardContext.Provider value={{card, createCard, deleteCard}}>
      {children}
    </CardContext.Provider>
  )
}