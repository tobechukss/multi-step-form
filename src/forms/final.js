import confirm from '../images/icon-thank-you.svg'
import { useEffect, useContext } from 'react'
import { AppContext } from '../context/app.context'
import { useNavigate } from 'react-router-dom'
import './final.css'
const FinalPage = ()=>{
    const navigate = useNavigate()
    const {appState, changeFormOne,changeFormTwo, changeFormThree}= useContext(AppContext)
    useEffect(()=>{
        if(!appState?.formTwo?.planName && !appState?.formTwo?.price){
            navigate('/step-two')
        }else {
            changeFormOne({
                name: "",
                phone: "",
                email: ""
            })
            changeFormTwo({
                planName: "",
                price: "",
                selected: false,
                yearly: false
            })
            changeFormThree([])
        }

    },[])
    return (
        <section className='final-section'>
            <img src={confirm} alt=""/>
            <p className='final-heading'>Thank you!</p>
            <p className='final-description'>Thanks for confirming your sunscription!We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </section>
    )
}

export default FinalPage