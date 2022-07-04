export const showElementById = (id) => {
  let element = document.getElementById(id);
  element.style.visibility = 'visible';
};

export const hideElementById = (id) => {
  let element = document.getElementById(id);
  element.style.visibility = 'hidden';
};
