import React from 'react'
import './Contact.css'

//define Contact component
const Contact = () => {
  return (
    //structure for Contact
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <p>Feel free to contact me if you have any questions!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <p>Email: eoargeuta02@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <p>Cell: +562-618-0662</p>
                    </div>
                    <div className="contact-detail">
                        <p>LinkedIn: Elizabeth Orellana Argueta</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact