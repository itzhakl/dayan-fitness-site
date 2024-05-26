import React, { useState } from 'react';
import { Copyright as CopyrightIcon } from '@mui/icons-material'

type Props = {}

const Copyright = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => setIsOpen(p => !p)}
      className="div">
      <CopyrightIcon className='absolute text-accent p-0 right-0 bottom-0 m-2' />
      {isOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-lg bg-opacity-70 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="gap-8 flex flex-col items-center justify-center rounded-3xl border-2 p-6 bg-secondary">
            <p className="mb-4">כל הזכויות שמורות ©</p>
            <p>פותח על ידי: יצחק לשינסקי</p>
            <p>מתמחה בבניית אתרים, שרתים, ובוטים</p>
            <p>ידע בשפות רבות כולל Python, JavaScript, TypeScript, C ועוד</p>
            <p>ליצירת קשר</p>
            <a target='_blank' href='tel:+972535561849'>053-556-1849</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Copyright