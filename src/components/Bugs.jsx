import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bugs } from '../store/selectors'
import { bugResolved } from '../store/Bugs';

export default function Bugs() {
  const dispatch = useDispatch();
  const listOfbugs = useSelector(bugs);

  return (
    <ul>
      {listOfbugs.map(bug => {
        return (
          <li key={bug.id}>
            {`${bug.description}: ${bug.resolved}`}
            <button onClick={() => dispatch(bugResolved({bugId: bug.id}))}>{bug.resolved ? 'Reject' : 'Resolve'}</button>
          </li>
        )
      })}
    </ul>
  )
}
