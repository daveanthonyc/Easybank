import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarItem from './components/NavbarItem/NavbarItem'
import mobileBg from '../images/bg-intro-mobile.svg'
import desktopBg from '../images/bg-intro-desktop.svg'
import mockups from '../images/image-mockups.png'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'

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
            </section>
        </main>

        <footer>

        </footer>
    </>
  )
}

export default App
