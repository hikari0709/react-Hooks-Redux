import React, { useContext, useState } from 'react';
import OperationLog from './OperationLog';

import AppContext from '../contexts/AppContext';

const OperationLogs = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h2>操作ログ一覧</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (<OperationLog key={`logItem${index}`} operationLog={operationLog} />))}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs;
