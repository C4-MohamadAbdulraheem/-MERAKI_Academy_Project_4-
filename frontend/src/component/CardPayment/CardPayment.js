import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CardPayment.css"
import Swal from 'sweetalert2'

const CardPayment = () => {
    const navigation = useNavigate()
    return (
        <div className="main-visa">
          
        <div className='visa-card'>
        <label for="chk" aria-hidden="true">
        Invoice
      </label>
           
            <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder=" Credit Card Number xxxx xxxx xxxx xxxx" className='card'/><br/>
            <input type="text" placeholder='Name on the card' className='card'/><br/>
            
            <div className='card-details'>
            <input type="month" id="start" name="start"
       min="2022-05" value="2022-05" className='card-2' placeholder="yy-mm"/>
            {/* <input type="month"  placeholder='Expiry Date' className='card-2'/><br/> */}
                
            <input type="text" placeholder='CVV' className='card-2'/><br/>
            </div>

                 <div className='card-pay-butn'>
                <button className="pay-now-button" onClick={()=>{Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#82B440',
                        cancelButtonColor: '#262626',
                        confirmButtonText: 'Yes proceed with payment'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Paid',
                            'Your Payment is Done.',
                            'success'
                          )
                          navigation("/products")
                        }
                      })}}>Pay Now</button><br/>
                
                <button className="pay-now-button"onClick={(e)=>{
                Swal.fire({
                    title: 'Are you sure yo wont to cancel the order?',
                    // text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, cancel it!'
                  }).then((result) => {
                    if (result.isConfirmed) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your order has been cancelled ',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigation("/products")
                    }
                  })
                }}> Cancel Order</button>
              </div>

            
            
        </div>
        </div>
    )
}

export default CardPayment