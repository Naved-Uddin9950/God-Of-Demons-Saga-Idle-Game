import { toast } from 'react-toastify';

export const notify = (config = { message: '', type: 'info' }) => {
  const { message, type } = config;

  toast.dismiss();
  toast[type](message);
};
