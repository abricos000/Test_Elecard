export const getRemovedCardList = () => {
  try {
    return JSON.parse(localStorage.getItem('myKey')) || [];
  } catch {
    console.error('Не удалось получить список удалённых карточек');
    return [];
  }
};

export const setRemovedCard = (post) => {
  const prevList = getRemovedCardList();
  localStorage.setItem('myKey', JSON.stringify([...prevList, post]));
};

export const clearRemovedCards = () => {
  localStorage.removeItem('myKey');
};
