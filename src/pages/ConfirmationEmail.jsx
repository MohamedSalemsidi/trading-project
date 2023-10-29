import React, { useState } from 'react'
import Input from '../compnents/Input'

function ConfirmationEmail() {
  const [config , setConfig] = useState('');
  const fun = (e)=> {
    console.log(e.target.value);
  }
  return (
    <div className='confirmation'>
      <h3>أدخل الرمز المرسل للتحقق من البريد</h3>
        <Input type='number' placeholder='رمز تأكيد البريد' />
        <button >تأكيد</button>
    </div>
  )
}

export default ConfirmationEmail