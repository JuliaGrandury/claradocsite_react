import React from 'react'
import './credits.css'
import Profile from '../assets/profile.jpg'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiVimeoLine } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const Credits = () => {
    return (
        <section id="credits">
            <h2>Credits</h2>
            <div className="container credits__container">
                <div className="left__container">
                    <img src={Profile} alt='Clara'></img>
                    {/* <div className='social__icons'>
                        <a href='https://www.linkedin.com/in/claracharrin/'><AiOutlineLinkedin size={25}/></a>
                        <a href='https://www.claracharrin.com/'><CgWebsite size={25}/></a>
                        <a href='https://www.instagram.com/claracharrin/'><AiOutlineInstagram size={25}/></a>
                        <a href='https://vimeo.com/user28765862'><RiVimeoLine size={25}/></a>
                    </div> */}
                </div>

                <div className="right__container">
                    <p>Clara is a born and raised New Yorker. She graduated from Bocconi University with a 
                        Bachelor of Science in International Economics & Management and more recently graduated
                        from NYU's School of Journalism with a degree in News and Documentary.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Credits