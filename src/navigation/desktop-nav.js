import './desktop-nav.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/app.context'
import { NavLink, useLocation } from "react-router-dom"


const DesktopNav = () => {
    const { appState, changeStep } = useContext(AppContext)
    const circleStyles = {
        backgroundColor: "lightblue"
    }
    const location = useLocation()

    const [step, setStep] = useState(appState.step)


    useEffect(()=> {
        setStep(location.pathname)
        changeStep(location.pathname)
    },[location.pathname])
    return (
        <section className='desktop-section'>
            <nav className='desktop-nav'>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <div className='section-tab'>
                        <div className={`circle`} style={step === "/" ? circleStyles : {}}>
                            <p style={step ===  "/" ? circleStyles : { color: "aliceblue" }}>1</p>
                        </div>

                        <div className='step-section'>
                            <p className='step'>Step 1</p>
                            <p className='section-title'>Your Info</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/step-two" style={{ textDecoration: "none" }}>
                    <div className='section-tab'>
                        <div className='circle' style={step ==="/step-two" ? circleStyles : {}}>
                            <p style={step === "/step-two" ? circleStyles : { color: "aliceblue" }}>2</p>
                        </div>
                        <div className='step-section'>
                            <p className='step'>Step 2</p>
                            <p className='section-title'>Select Plan</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="step-three" style={{ textDecoration: "none" }}>
                    <div className='section-tab'>
                        <div className='circle' style={step === "/step-three" ? circleStyles : {}}>
                            <p style={step === "/step-three" ? circleStyles : { color: "aliceblue" }}>3</p>
                        </div>
                        <div className='step-section'>
                            <p className='step'>Step 3</p>
                            <p className='section-title'>ADD-ONS</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="step-four" style={{ textDecoration: "none" }}>
                    <div className='section-tab'>
                        <div className='circle' style={step === "/step-four" ? circleStyles : {}}>
                            <p style={step === "/step-four" ? circleStyles : { color: "aliceblue" }}>4</p>
                        </div>
                        <div className='step-section'>
                            <p className='step'>Step 4</p>
                            <p className='section-title'>SUMMARY</p>
                        </div>
                    </div>
                </NavLink>

            </nav>

            <nav className='mobile-nav'>
                <div className='mobile-section'>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className='nav-circle' style={step === "/" ? circleStyles : {}}>
                   <p style={step ===  "/step-one" ? circleStyles : { color: "aliceblue" }}>1</p>
                </div>
                </NavLink>

                <NavLink to="step-two" style={{ textDecoration: "none" }}>
                <div className='nav-circle'  style={step === "/step-two" ? circleStyles : {}}>
                <p style={step ===  "/step-two" ? circleStyles : { color: "aliceblue" }}>2</p>
                </div>
                </NavLink>

                <NavLink to="/step-three" style={{ textDecoration: "none" }}>
                <div className='nav-circle' style={step === "/step-three" ? circleStyles : {}}>
                <p style={step ===  "/step-three" ? circleStyles : { color: "aliceblue" }}>3</p>
                </div>
                </NavLink>

                <NavLink to="/step-four" style={{ textDecoration: "none" }}>
                <div className='nav-circle' style={step === "/step-four" ? circleStyles : {}}>
                <p style={step ===  "/step-four" ? circleStyles : { color: "aliceblue" }}>4</p>
                </div>
                </NavLink>
                </div>
            
            </nav>

        </section>
    )
}

export default DesktopNav