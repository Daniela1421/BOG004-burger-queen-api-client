import React from 'react'
import "../styles/Modal.css"

export const Modal = () => {
		return (
				<div className='modal-container'>
					<div className='card-container'>
						 <h1>¿ Está seguro de eliminar la orden ?  </h1>
							<button className='button-Modal'>Aceptar</button>
							<button className='button-Modal'> Cancelar</button>
					</div>
				</div>
		)
}
