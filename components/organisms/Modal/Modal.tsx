import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(<div>Hello from modal</div>, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

export default Modal;
