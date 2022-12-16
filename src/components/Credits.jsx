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
                    <div className='social__icons'>
                        <a href='https://www.linkedin.com/in/claracharrin/'><AiOutlineLinkedin size={25}/></a>
                        <a href='https://www.claracharrin.com/'><CgWebsite size={25}/></a>
                        <a href='https://www.instagram.com/claracharrin/'><AiOutlineInstagram size={25}/></a>
                        <a href='https://vimeo.com/user28765862'><RiVimeoLine size={25}/></a>
                    </div>
                </div>

                <div className="right__container">
                    <p>Clara is a born and raised New Yorker. She is a graduate student in News and Documentary from NYU's School of Journalism.
                        She is passionate about the Balkans, walking and her favorite little cousin. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Credits