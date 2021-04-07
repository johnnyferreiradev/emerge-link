import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { getToken } from 'services/auth';

import Header from 'components/Header';
import Snackbar from 'components/Snackbar';
import Modal from 'components/Modal';

import StyledMainLayout from './styles';

function MainLayout({ children, isPrivate }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const snackbar = useSelector((state) => state.snackbar);
  const modal = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch(hideGlobalModal());
  };

  useEffect(() => {
    if (!getToken()) {
      router.push('/login');
    }
  }, []);

  return (
    <StyledMainLayout className="main-layout">
      <Head>
        <title>Emerge Link</title>
      </Head>

      <Header isPrivate={isPrivate} />
      {children}

      {snackbar.showSnackbar && (
        <Snackbar
          message={snackbar.message}
          snackbarTheme={snackbar.theme}
          timeout={snackbar.timeout}
        />
      )}

      {modal.showGlobalModal && (
        <Modal large={modal.large} onClose={handleModalClose}>
          {modal.modalContent}
        </Modal>
      )}
    </StyledMainLayout>
  );
}

export default MainLayout;
