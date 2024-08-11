import './modal.js';
import './form.js';

import {setPhotos,debouncedGetTheFilterId} from './filter-user.js';
import {drawPhotos} from './miniatures.js';
import {setPicturesData} from './modal.js';
import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import {createAnErrorUponReceipt} from './message.js';


getData()
  .then((photos) => {
    drawPhotos(photos);
    setPicturesData(photos);
    setPhotos(photos);
    debouncedGetTheFilterId();

  })
  .catch(
    (err) => {
      createAnErrorUponReceipt(err.message);
    }
  );

setUserFormSubmit();
