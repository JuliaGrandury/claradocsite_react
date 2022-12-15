import React from 'react'
import './credits.css'
import Profile from '../assets/profile.jpg'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsVimeo } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const Credits = () => {
    return (
        <section id="credits">
            <h2>Credits</h2>
            <div className="credits__container">
                <div className="left__container">
                    <img src={Profile} alt='Clara'></img>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/claracharrin/'><AiOutlineLinkedin /></a>
                        <a href='https://www.claracharrin.com/'><CgWebsite /></a>
                        <a href='https://www.instagram.com/claracharrin/'><AiOutlineInstagram /></a>
                        <a href='https://vimeo.com/user28765862'><BsVimeo /></a>
                    </div>
                </div>

                <div className="right__container">
                    <p>Clara is a born and raised New Yorker. She is a graduate student in News and Documentary from NYU's School of Journalism.
                        She is passionate about the Balkans, walking and her favorite little cousin.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Credits