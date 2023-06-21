import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);
	const [accessType, setAccessType] = useState('');

	const handleModalOpen = (type) => {
		setOpenModal(true);
		setAccessType(type);
	};

	const handleModalClose = () => {
		setOpenModal(false);
	};

	const value = {
		openModal,
		handleModalOpen,
		handleModalClose,
		accessType,
	};

	return (
		<ModalContext.Provider value={value}>
			{children}
		</ModalContext.Provider>
	);
};
