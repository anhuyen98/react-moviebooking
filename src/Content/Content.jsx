import React from 'react'
import './style.scss'
import data from './data.json'
import SeatList from './SeatList'
import Result from './Result'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = () => {
  const notify = () => {
    toast.success('🎫 Bạn đã đặt vé thành công', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  return (
    <div className='Content'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className='transition-all rounded-xl bg-slate-100/75 shadow-2xl hover:shadow-slate-950 text-slate-950 absolute top-48 left-1/2 -translate-x-1/2 w-2/3 z-50'>
        <div className='bgContent container text-center p-10 flex flex-col'>
          <div className='relative'>
            <div className="screen px-20">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill" />
              </svg>
            </div>
            <h1 className='mt-5 text-2xl font-bold'>Screen</h1>
          </div>
          <div className='mt-6'>
            <SeatList data={data} />
          </div>
          <Result notify={notify} />
        </div>
      </div>
    </div>

  )
}

export default Content