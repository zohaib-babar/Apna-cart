import React from 'react'

 export default function(props) {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2'onClick={() => {
            props.resetQuantity()
        }}>Reset</button>
        <div className='col-8 bg-dark text-white text-center .d-flex'>
            {props.totalAmount}
        </div>
        <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
