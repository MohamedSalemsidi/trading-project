import React, { useEffect, useState } from 'react'
import axios from 'axios';
function TableControl() {
    const [userInformation, setUserInformation] = useState([]);

    useEffect(()=> {
        axios.get('localhost')
    },[])
  return (
    <div>
      <div>
        <h1>Analyse Users Request</h1>
        <table>
            <thead>
                <tr>
                    <th>اسم المستثمر</th>
                    <th> المبلغ</th>
                    <th>نوع الطلب</th>
                    <th>الحالة</th>
                </tr>
            </thead>
            <tbody>
                {userInformation.map((info)=> {
                    <tr>
                        <td>{}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableControl