import React from 'react'
import { CSSTransition } from 'react-transition-group';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './topbar.scss'

const Link = ({ idx, href, text, activePage, setActivePage, setLinkClick }) => {
  const newActivePage = [false, false, false, false]
  newActivePage[idx] = true

  return (
    <a
      href={href} 
      onClick={() => {
        setActivePage(newActivePage)
        setLinkClick(true)
        setTimeout(() => setLinkClick(false), 1000)
      }}
      className={`${activePage[idx] ? 'active' : ''}`}
    >
      {text}
    </a>
  )
}

const Socials = ({ isPhone }) => {
  if (isPhone) return null

  return (
    <div className='socials'>
      <a href='https://github.com/MedericCar' title='Github'>
        <i class="fab fa-github"></i>
      </a>
      <a href='mailto: carriatmederic@gmail.com' title='Mail'>
        <i class="far fa-envelope"></i>
      </a>
      <a href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'>
        <i class="fab fa-linkedin"></i>
      </a>
      <a href='TODO' title='Resume'>
        <i class="far fa-file"></i>
      </a>
    </div>
  )

}

//FIXME: can refacto
export default function Topbar({ toShow, activePage, setActivePage, setLinkClick, isPhone }) {

  return (
    <CSSTransition
      in={toShow}
      timeout={400}
      classNames='topbar'
    >
      <div className='topbar'>
        <div className='wrapper'>
          
          <div className='left'>
            <a href='#intro'><h1 color='secondary'><b className='blue'>MC</b></h1></a>
          </div>

          <Socials isPhone={isPhone}/> 

          <div className='right'>
            <Link
              idx={0} 
              href='#intro'
              text='Home'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
            />
            <Link
              idx={1} 
              href='#experience'
              text='About'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
            />
            <Link
              idx={2} 
              href='#projects'
              text='Projects'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
            />
            <Link
              idx={3} 
              href='#contact'
              text='Contact'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
