import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const App = props => {
  return (
    <div className="container-fuild">
      <h1>イベント作成フォーム</h1>
      <form name="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">イベント内容</label>
          <textarea type="text" className="form-control" id="formEventBody"/>
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h2>イベント一覧</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>イベント内容</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default App;
