import React, { useState } from 'react';
import {
  CREATE_EVENT, DELETE_ALL_EVENTS
} from '../actions';

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });

    setTitle('');
    setBody('');
  }

  const deleteAllEvent = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
  }

  const unCreatable = title === '' || body === '';

  return (
    <>
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
    </>
  )
}

export default EventForm;
