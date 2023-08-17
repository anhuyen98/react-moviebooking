import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingMovieActions } from '../Store/bookingMovie/slice'
import cn from 'classnames'


const Result = ({ notify }) => {
  const { selected, totalSeat } = useSelector(state => state.bookingMovie)
  const dispatch = useDispatch()
  return (
    <div className='Result'>
      <h2 className='font-bold text-2xl mt-5'>Choose seats</h2>
      <div className='w-3/4 flex justify-evenly m-auto my-5'>
        <div className='flex items-center'>
          <span className='Seat w-8 h-8 m-2 inline-block pointer-events-none'></span>
          <span>Available</span>
        </div>
        <div className='flex items-center'>
          <span className='Seat w-8 h-8 m-2 inline-block Selected pointer-events-none'></span>
          <span>Selected</span>
        </div>
        <div className='flex items-center'>
          <span className='Seat w-8 h-8 m-2 inline-block Reserved pointer-events-none'></span>
          <span>Reserved</span>
        </div>

      </div>
      <table className='table-auto truncate w-3/4 rounded-t-xl m-auto'>
        <thead className={cn({ maxChoose: totalSeat >= 13 })}>
          <tr className=''>
            <th className='p-3 bg-slate-800 text-gray-100 font-semibold'>Seats</th>
            <th className='p-3 bg-slate-800 text-gray-100 font-semibold'>Price</th>
            <th className='p-3 bg-slate-800 text-gray-100 font-semibold'>Delete</th>
          </tr>
        </thead>
        <tbody className={cn({ maxChoose: totalSeat >= 13 })}>
          {
            selected.map(seat => {
              return <tr key={seat.soGhe}>
                <td className='p-3' style={{ backgroundColor: '#959da6' }}>{seat.soGhe}</td>
                <td className='p-3' style={{ backgroundColor: '#959da6' }}>
                  {
                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(seat.gia)
                  }
                </td>
                <td className='p-3' style={{ backgroundColor: '#959da6' }}>
                  <button className='bg-red-500 text-white border-red-500 rounded w-6 h-6 leading-6' onClick={() => {
                    dispatch(bookingMovieActions.setSelected(seat))
                  }}>X</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <p className='p-3 bg-slate-800 text-gray-100 m-auto w-3/4 rounded-b-xl font-semibold'>Total :
        <span className='ml-2'>
          {
            new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              selected.reduce((total, seat) => {
                return total += seat.gia
              }, 0))
          }
        </span>
      </p>
      <button className='font-semibold btnBook border-yellow-300 bg-yellow-300 text-yellow-950 p-4 rounded-md mt-8'
        onClick={() => {
          dispatch(bookingMovieActions.setReserved());
          notify()
        }}>Book Now</button>
    </div>
  )
}

export default Result