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
    <>
    <div>
    <form className="contact-form flex flex-col px-10 md:px-20 justify-between space-y-4 font-mono" onSubmit={sendEmail}>
    <h1 className="text-5xl pb-6">Want to get in contact?</h1>
      <span className="flex flex-row "><input type="hidden" name="contact_number" />
      <label className="pr-4">Name:</label>
      <input className="bg-red-50"type="text" name="user_name" />
      </span>
      <span className="flex flex-row">  
      <label className="pr-1.5">Email: </label>
      <input className="bg-red-50" type="email" name="user_email" />
      </span>
      <label>Message: </label>
      <textarea className="bg-red-50" name="message" />
      <input className="md:w-1/3 self-center flex justify-center bg-red-50 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-100 shadow-lg cursor-pointer transition ease-in duration-300"type="submit" value="Send" />
    </form>
    </div>
    </>
  );
}

export default Contact