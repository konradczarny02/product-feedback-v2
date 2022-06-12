import { useCallback, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { ModalContext } from '../providers/ModalProvider';
import { useRouter } from 'next/router';

const useRedirect = (route: string) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  const router = useRouter();

  const handleRedirect = useCallback(() => {
    if (!isAuthenticated) {
      handleModalOpen();
    } else {
      router.push(route);
    }
  }, [route, isAuthenticated]);

  return { handleRedirect };
};

export default useRedirect;
