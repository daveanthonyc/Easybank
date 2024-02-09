import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarItem from './components/NavbarItem/NavbarItem'
import mockups from '../images/image-mockups.png'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

import logo from '../images/logo.svg'
import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'
import CardImage from './components/CardImage/CardImage'
import moneyImg from '../images/image-currency.jpg'
import foodImg from '../images/image-restaurant.jpg'
import planeImg from '../images/image-plane.jpg'
import confettiImg from '../images/image-confetti.jpg'
import fbLogo from '../images/icon-facebook.svg'
import ytLogo from '../images/icon-youtube.svg'
import twitterLogo from '../images/icon-twitter.svg'
import pinterestLogo from '../images/icon-pinterest.svg'
import instaLogo from '../images/icon-instagram.svg'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
        <Navbar>
            <NavbarItem link="">Home</NavbarItem>
            <NavbarItem link="">About</NavbarItem>
            <NavbarItem link="">Blog</NavbarItem>
            <NavbarItem link="">Careers</NavbarItem>
            <NavbarItem link="">Contact</NavbarItem>
        </Navbar>

        <main>

            <section className='background-section section-spacer'>
                <div className='centered-div flex-between custom-height background-contents'>
                    <div className='title-paragraph'>
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                        <Button>Request Invite</Button>
                    </div>
                    <div className='mockup-div'>
                        <img src={mockups} alt="" />
                    </div>
                </div>
            </section>

            <section className='section-spacer'>
                <div className='centered-div '>
                    <div className='title-paragraph'>
                        <h2>Why choose Easybank?</h2>
                        <p>We leverage Open banking to turn your bank account into a financial hub. Control your finances like never before</p>
                    </div>
                </div>
            </section>

            <section className='section-spacer flex-between centered-div gap'>
                <Card title='Online Banking' imgSrc={online}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</Card>
                <Card title='Simple Budgeting' imgSrc={budgeting}>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</Card>
                <Card title='Fast Onboarding' imgSrc={onboarding}>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</Card>
                <Card title='Open API' imgSrc={api}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</Card>
            </section>

            <section className='section-spacer centered-div'>
                <h2>Latest Articles</h2>
                <div className='flex-between gap'>
                    <CardImage title='Receive money in in any currency with no fees' author='Claire Robinson' imgsrc={moneyImg} alt='Money'>The world is becoming smaller and the we're becoming more mobile. So why should you be forced to receive money from only a single...</CardImage>
                    <CardImage title='Treat yourself without worrying about money' author='Wilson Hutton' imgsrc={foodImg} alt='Food'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</CardImage>
                    <CardImage title='Take your Easybank card wherever you go' author='Wilson Hutton' imgsrc={planeImg} alt='Plane'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</CardImage>
                    <CardImage title='Our invite-only Beta accounts are now live!' author='Claire Robinson' imgsrc={confettiImg} alt='Confetti'>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</CardImage>
                </div>
            </section>

        </main>

        <footer className='main-footer'>
            <div className='section-spacer centered-div flex-between'>
                <div>
                    <div className='vert-grid-gap'>
                        <a href="" className="logo-link color-reverse">
                            <img src={logo} alt="logo" className="" />
                        </a>
                        <div className='flex-between gap-sm'>
                            <a href=""><img src={fbLogo} alt="" /></a>
                            <a href=""><img src={ytLogo} alt="" /></a>
                            <a href=""><img src={twitterLogo} alt="" /></a>
                            <a href=""><img src={pinterestLogo} alt="" /></a>
                            <a href=""><img src={instaLogo} alt="" /></a>
                        </div>
                    </div>
                </div>

                <nav>
                    <ul className='nav-ul'>
                        <NavLink to={""}>About us</NavLink>
                        <NavLink to={""}>Contact</NavLink>
                        <NavLink to={""}>Careers</NavLink>
                        <NavLink to={""}>Support</NavLink>
                        <NavLink to={""}>Privacy Policy</NavLink>
                    </ul>
                </nav>

                <div className='vert-grid-gap'>
                    <Button>Request Invite</Button>
                    <span>&#169; Easybank. All Rigts Reserved</span>
                </div>
            </div>
        </footer>
    </>
  )
}

export default App
