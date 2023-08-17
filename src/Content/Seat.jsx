import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingMovieActions } from '../Store/bookingMovie/slice'
import classnames from 'classnames'

const Seat = ({ seat, className }) => {
  const dispatch = useDispatch()
  const { selected, reserved } = useSelector(state => state.bookingMovie)
  return (
    <div className={classnames('Seat w-8 h-8 leading-8 m-2', className,
      {
        Selected: selected.find((s) => s.soGhe === seat.soGhe),
        Reserved: reserved.find((s) => s.soGhe === seat.soGhe)
      }
    )} onClick={() => {
      dispatch(bookingMovieActions.setSelected(seat))
    }}>{seat.soGhe}</div>
  )
}

export default Seat