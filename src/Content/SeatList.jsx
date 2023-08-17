import React from 'react'
import Seat from './Seat'
import classnames from 'classnames'

const SeatList = ({data}) => {
  console.log(data)
  return (
    <div className='SeatList m-auto w-3/4'>
      {
        data.map((seatRow) => {
          return (
            <div key={seatRow.hang} className='flex justify-center items-center'>
              <p className='seatRow w-8 h-8 leading-8 m-2 font-semibold'>{seatRow.hang}</p>
              {
                seatRow.danhSachGhe.map((seat) => {
                  return <Seat className={classnames({
                    disable: !seatRow.hang
                  })} key={seat.soGhe} seat={seat}/>
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default SeatList