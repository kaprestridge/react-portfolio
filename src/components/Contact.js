import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_746dj2n', 'template_bgb3f8r', e.target, 'user_qBpXogvJ32PcBieN5Abb9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact