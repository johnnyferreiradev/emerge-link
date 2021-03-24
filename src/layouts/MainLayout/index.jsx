import React from 'react';

import Header from '../../components/Header';

// import profileImage from '../../assets/images/default-profile.png';
// import Container from '../../styles/pages/Home';

function MainLayout({ children }) {
  return (
    <div className="teste">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
