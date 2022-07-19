import React, { useReducer, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers/';

import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    });

    setTitle('');
    setBody('');
  }

  const deleteAllEvent = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  const unCreatable = title === '' || body === '';

  return (
    <div className="container-fluid">
      <h1>イベント作成フォーム</h1>
      <form name="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">イベント内容</label>
          <textarea type="text" className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length === 0}>全てのイベントを削除する</button>
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
          {state.map((event, index) => (<Event key={`eventItem${index}`} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
