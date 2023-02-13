/** @jsxImportSource react */
import { $, component$ } from '@builder.io/qwik'

import { qwikify$ } from '@builder.io/qwik-react'
// import { Button, Modal } from "@mui/material";
import ReactModal from 'react-modal'

export type ModalStates = 'open' | 'closed'

export interface modalProps {
  children: React.ReactNode
  modalState: ModalStates
  setModalState: Function
  className?: string
}

const AuthModal = qwikify$(({ modalState, className, children }: any) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(16, 16, 16, 0.3)',
      zIndex: '10',
    },

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      margin: '0',
      padding: '0',
      border: 'none',
      zIndex: '90',
      overflow: 'visible',
    },
  }

  return (
    <ReactModal
      isOpen={modalState === 'open'}
      style={customStyles}
      contentLabel='Example Modal'
      preventScroll={true}
      className={className}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
})

export default AuthModal
