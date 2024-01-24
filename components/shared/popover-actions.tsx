import { FileUp, Folder, FolderUp } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'

export default function PopoverActions() {
  return (
    <>
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"  role="button cursor-pointer'>
        <Folder className="w-4 h-4" />
        <span>New Folder</span>
      </div>
      <Separator />
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"  role="button cursor-pointer'>
        <FileUp className="w-4 h-4" />
        <span>File Upload</span>
      </div>
      <Separator />
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"  role="button cursor-pointer'>
        <FolderUp className="w-4 h-4" />
        <span>Folder Upload</span>
      </div>
    </>
  )
}
