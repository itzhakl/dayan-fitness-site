import React from 'react';
import { Copyright as CopyrightIcon } from '@mui/icons-material'

type Props = {}

const Copyright = (props: Props) => {
  return (
    <CopyrightIcon className='relative p-0 right-0 bottom-0 m-2'>
      <p>© נבנה על ידי יצחק לשינסקי</p>
      <a href='tel:+972535561849'>053-556-1849</a>
    </CopyrightIcon>
  )
}

export default Copyright