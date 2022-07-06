import React from 'react'
import "../styles/Modal.css"

export const Modal = ({setProductsSelected, setClient, setShowModal}) => {

	const handleClick = () => {
		setProductsSelected([])
		setClient('')
		setShowModal(false)
		
	}

	const handleCancel = () => {
		setShowModal(false)
	}
	

		return (
				<div className='modal-container'>
					<div className='card-container'>
						 <h1>¿ Está seguro de eliminar la orden ?  </h1>
							<button className='button-Modal'onClick={handleClick}>Aceptar</button>
							<button className='button-Modal' onClick={() => handleCancel()}> Cancelar</button>
					</div>
				</div>
		)
}
