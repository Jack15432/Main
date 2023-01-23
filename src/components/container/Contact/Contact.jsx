
import React, { useRef } from "react";
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v504m9o",
        "template_c7z2llh",
        form.current,
        "rDxVQ8x8NELU4kPZQ"
      )
      e.target.reset()
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h1>Just Say Hi</h1>
          <h3 className='contact_text'>Don't hesitate, communicate with us today!</h3>
          <p>Don't miss out on the best service and solution for your needs. Contact us today and let our team of experts assist you in finding the perfect fit for your requirements. Don't hesitate, call or email us now and experience the difference.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="row">
            <input type="text" placeholder='First Name' />
            <input name="name" type="text" placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input name="reply_to" type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea name="project" placeholder='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
          <button className="button ">Send</button>

            
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact