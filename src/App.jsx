import React, { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (taskName, taskDate) => {
    
    console.log('Nombre de la tarea:', taskName);
    console.log('Fecha:', taskDate);

    closeModal();
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={openModal}>Abrir Modal</button>
      {isModalOpen && (
        <Modal closeModal={closeModal} addTask={handleAddTask} />
      )}
    </div>
  );
};

export default App;
