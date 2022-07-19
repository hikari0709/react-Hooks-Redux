import React from 'react';
import Event from "./Event";

const Events = ({ state, dispatch }) => {
  return (
    <>
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
    </>
  )
}

export default Events;
