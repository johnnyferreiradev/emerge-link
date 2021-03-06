import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Snackbar from 'components/Snackbar';
import Modal from 'components/Modal';

import StyledPublicLayout from './styles';

function MainLayout({ children }) {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackbar);
  const modal = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch(hideGlobalModal());
  };

  return (
    <StyledPublicLayout>
      <Head>
        <title>Emerge Link</title>
      </Head>

      <Header logoRedirect="/" />
      {children}
      <Footer />

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
    </StyledPublicLayout>
  );
}

export default MainLayout;
