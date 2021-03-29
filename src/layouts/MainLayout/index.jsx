import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { getToken } from 'services/auth';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Snackbar from 'components/Snackbar';
import Modal from 'components/Modal';

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
    <div className="main-layout">
      <Head>
        <title>Emerge Link</title>
      </Head>

      <Header isPrivate={isPrivate} />
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
    </div>
  );
}

export default MainLayout;
