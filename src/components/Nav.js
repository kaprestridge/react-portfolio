import React from 'react'
import logo from '../img/kp-logo.png'
import {Link} from 'react-scroll'
import Contact from './Contact'
import Modal from 'react-modal'

const Nav = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const closeModal = () => {
      setIsOpen(false);
    }
  
    const openModal = () => {
      setIsOpen(true);
    }
    return(
        <>
        <nav className="h-20 z-50 bg-olive text-red-50 flex flex-row flex-wrap items-center fixed w-screen">
            <Link to="about" spy={true} smooth={true}>
                <img src={logo} alt="Kathryn's logo" className="h-20 cursor-pointer"></img>
            </Link>
            <Link  to= "projects" spy={true} smooth={true} className="cursor-pointer">Projects</Link>
            <Link onClick={openModal} className="m-2 cursor-pointer">Contact</Link>
        </nav>
        <div className="h-full w-full flex flex-col items-center justify-center">
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact"
        className =" mx-10 md:mx-40 my-40 bg-olive py-20 shadow-2xl rounded-md "
        >
            <Contact />
        </Modal>
        </div>
    </>
    )
}




export default Nav