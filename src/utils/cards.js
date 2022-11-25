export const getCardList = () => {
  try {
    return JSON.parse(localStorage.getItem('myKeyCards')) || [];
  } catch {
    console.error('Не удалось получить список карточек');
    return [];
  }
};

export const setCardList = (post) => {
  localStorage.setItem('myKeyCards', JSON.stringify(post));
};

export const clearCards = () => {
  localStorage.removeItem('myKeyCards');
};
