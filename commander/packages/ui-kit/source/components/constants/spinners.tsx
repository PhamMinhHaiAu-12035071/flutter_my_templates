import { Spinner } from 'cli-spinners';

const checkedSpinner: Spinner = {
  interval: 100,
  frames: ['✅'],
};

const warningSpinner: Spinner = {
  interval: 100,
  frames: ['⚠️'],
};
const errorSpinner: Spinner = {
  interval: 100,
  frames: ['❗️'],
};
const folderSpinner: Spinner = {
  interval: 100,
  frames: ['📂'],
};
const fileSpinner: Spinner = {
  interval: 100,
  frames: ['📝'],
};

const fingerPointingRight: Spinner = {
  interval: 100,
  frames: ['👉'],
};

const circleChecked: Spinner = {
  interval: 100,
  frames: ['◉'],
};

const circleUnchecked: Spinner = {
  interval: 100,
  frames: ['○'],
};

export {
  checkedSpinner,
  warningSpinner,
  errorSpinner,
  folderSpinner,
  fileSpinner,
  fingerPointingRight,
  circleChecked,
  circleUnchecked,
};
