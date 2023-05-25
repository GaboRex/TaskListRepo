import React, { useState } from 'react';

const Modal = ({ closeModal, addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nombre de la tarea:', taskName);
    console.log('Fecha:', taskDate);

    setTaskName('');
    setTaskDate('');

    closeModal();
  };

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/2 mx-auto mt-20">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-5">Agregar Tarea</h2>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label className="label-form" htmlFor="taskName">
              Nombre de la tarea:
            </label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
              className="mt-2 px-2 py-1 border border-gray-300 rounded"
            />
          </div>

          <div className="campo">
            <label className="label-form" htmlFor="taskDate">
              Fecha:
            </label>
            <input
              type="date"
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="mt-2 px-2 py-1 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Agregar
            </button>
            <button type="button" onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
