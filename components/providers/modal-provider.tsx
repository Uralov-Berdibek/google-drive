import React from 'react'
import FolderModal from '../modals/folder-modal'

export default function ModalProvider() {
  return (
    <div className='fixed'>
      <FolderModal />
    </div>
  )
}
