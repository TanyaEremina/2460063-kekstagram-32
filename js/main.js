import './modal.js';
import './form.js';

import {setPhotos} from './filter-user.js';
import {drawPhotos} from './miniatures.js';
import {setPicturesData} from './modal.js';
import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAnErrorUponReceipt} from './message.js';


getData()
  .then((photos) => {
    drawPhotos(photos);
    setPicturesData(photos);
    setPhotos(photos);

  })
  .catch(
    (err) => {
      showAnErrorUponReceipt(err.message);
    }
  );

setUserFormSubmit();
