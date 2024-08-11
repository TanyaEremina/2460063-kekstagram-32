const createElement = (avatar, name, message) => `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35"><p class="social__text">${message}</p>`;
const createCommentList = (arrayComments) =>{
  const newListComments = document.querySelector('.social__comments');
  arrayComments.forEach((comment) =>{
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const {avatar, name, message} = comment;
    commentElement.innerHTML = createElement(avatar, name, message);
    newListComments.appendChild(commentElement);
  });
};
const deleteCommentList = (listComments) => {
  for(let i = 0; i <= listComments.length - 1; i++){
    listComments[i].remove();
  }
};

export {createCommentList,deleteCommentList};


