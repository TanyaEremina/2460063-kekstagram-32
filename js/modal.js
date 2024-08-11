import { createCommentList, deleteCommentList } from './comments.js';
import './load-photo.js';

const buttonCancel = document.querySelector('.big-picture__cancel');
let currentLoadCommentsHandler = null;
const fullImage = document.querySelector('.big-picture');
const bodyScroll = document.querySelector('body');
const fullImageUrl = fullImage.querySelector('.big-picture__img');
const showMoreButton = fullImage.querySelector('.social__comments-loader');

let picturesData = [];

const setPicturesData = (data) => {
  const miniatures = document.querySelectorAll('.picture');
  const INITIAL_QUANTITY_COMMENTS = 5;
  const commentsList = document.querySelectorAll('.social__comment');

  picturesData = data;

  miniatures.forEach((picture, index) => {
    picture.addEventListener('click', () => {
      bodyScroll.classList.add('modal-open');
      fullImage.classList.remove('hidden');
      deleteCommentList(commentsList);

      const comments = picturesData[index].comments;
      const copyComments = JSON.parse(JSON.stringify(comments));

      const getTheInitialValueOfComments = () => {
        const numComments = parseInt(picture.querySelector('.picture__comments').textContent, 10);
        return numComments >= INITIAL_QUANTITY_COMMENTS ? INITIAL_QUANTITY_COMMENTS : numComments;
      };
      fullImageUrl.querySelector('img').src = picture.querySelector('.picture__img').src;
      fullImageUrl.querySelector('img').alt = picture.querySelector('.picture__img').alt;
      fullImage.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
      fullImage.querySelector('.social__caption').textContent = picture.querySelector('.picture__img').alt;
      fullImage.querySelector('.social__comment-shown-count').textContent = getTheInitialValueOfComments();
      fullImage.querySelector('.social__comment-total-count').textContent = picture.querySelector('.picture__comments').textContent;

      const loadComments = () => {
        const nextPartComment = copyComments.splice(0, 5);
        createCommentList(nextPartComment);
        let countComments = parseInt(fullImage.querySelector('.social__comment-shown-count').textContent, 10);
        countComments += nextPartComment.length;
        fullImage.querySelector('.social__comment-shown-count').textContent = countComments;
        if (copyComments.length === 0) {
          showMoreButton.classList.add('hidden');
        }
      };
      if (copyComments.length <= INITIAL_QUANTITY_COMMENTS) {
        createCommentList(copyComments);
        showMoreButton.classList.add('hidden');
      } else {
        const firstPartComments = copyComments.splice(0, 5);
        createCommentList(firstPartComments);
        showMoreButton.classList.remove('hidden');
        currentLoadCommentsHandler = loadComments;
        showMoreButton.addEventListener('click', currentLoadCommentsHandler);
      }
    });
  });
};

const closeUserModal = () => {
  const listCurrentComment = document.querySelectorAll('.social__comment');
  deleteCommentList(listCurrentComment);
  fullImage.classList.add('hidden');
  bodyScroll.classList.remove('modal-open');
  showMoreButton.classList.add('hidden');


  if (currentLoadCommentsHandler) {
    showMoreButton.removeEventListener('click', currentLoadCommentsHandler);
  }
};

buttonCancel.addEventListener('click', closeUserModal);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
});

export {setPicturesData};
