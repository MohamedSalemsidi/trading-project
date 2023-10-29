import React, { useState } from 'react'

export default function Capital() {
  const [money, setMoney] = useState(0);
  return (
    <div >
      <h3>رأس المال</h3>
      <div>
        <h2>{money}$</h2>
      </div>
    </div>
  );
}
