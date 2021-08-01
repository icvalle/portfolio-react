import React from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import projectModals from './projectModals';

export default function App() {
    return (
      <div>
          <Modal projectModals={projectModals} />
          <Header />
          <Footer />
      </div>
    );
}