import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import { useEffect, useState, useContext, useMemo } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from '../context/app.context'
import "./form-2.css"
const StepTwoForm = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const monthlyplanOptions = [
        {
            planName: "Arcade",
            price: 9,
            icon: arcade,
            selected: false
        },
        {
            planName: "Advanced",
            price: 12,
            icon: advanced,
            selected: false

        },
        {
            planName: "Pro",
            price: 15,
            icon: pro,
            selected: false
        },

    ]

    const yearlyplanOptions = [
        {
            planName: "Arcade",
            price: 90,
            icon: arcade,
            selected: false,
        },
        {
            planName: "Advanced",
            price: 120,
            icon: advanced,
            selected: false

        },
        {
            planName: "Pro",
            price: 150,
            icon: pro,
            selected: false
        },

    ]
    const [planOptions, setPlanOptions] = useState(monthlyplanOptions)
    const { appState, changeFormTwo, changeFormThree } = useContext(AppContext)
    const [checkedState, setCheckedState] = useState(false)
    const [planSelected, setPlanSelected] = useState(false)
    useMemo(()=> {
        setCheckedState(appState?.formTwo?.yearly)
    },[])
    
    useEffect(() => {
        if(!appState?.formOne?.name && !appState?.formOne?.phone && !appState?.formOne?.email){
            navigate('/')
        }
        const getCurrentPlan = (planName, check) => {
            if (check) {
                const newPlanOptions = yearlyplanOptions.map(newplan => {
                    return newplan.planName === planName ? { ...newplan, selected: true } : { ...newplan, selected: false }
                })
                console.log(newPlanOptions,"newPlanOptionsYearly")

                setPlanOptions(newPlanOptions)
            } else {
                //edit
                const newPlanOptions = monthlyplanOptions.map(newplan => {
                    return newplan.planName === planName ? { ...newplan, selected: true } : { ...newplan, selected: false }
                })
                console.log(newPlanOptions,"newPlanOptionsMonthly")
                setPlanOptions(newPlanOptions)
            }

        }
        if (appState?.formTwo?.planName) {


            getCurrentPlan(appState?.formTwo?.planName, appState?.formTwo?.checked)
            setPlanSelected(true)
        }else {

        if (checkedState) {
            setPlanOptions(yearlyplanOptions)
            
        } else {
            setPlanOptions(monthlyplanOptions)
        }
        }
    }, [checkedState, location.pathname])

    function handleSwitch(e) {
        const { checked } = e.target
        setCheckedState(checked)
        changeFormTwo({
            planName:"",
            yearly: "",
            price: ""
        })
        changeFormThree([])
    }

    // useEffect(() => {
    //     if (checkedState) {
    //         setPlanOptions(yearlyplanOptions)
    //     } else {
    //         setPlanOptions(monthlyplanOptions)
    //     }

    // }, [checkedState, location.pathname])
    const selectPlan = (planName) => {
        const plan = planOptions.find(plan => plan.planName === planName)
        const newPlanOptions = planOptions.map(newplan => {
            return newplan.planName === plan.planName ? { ...newplan, selected: true } : { ...newplan, selected: false }
        })

        setPlanOptions(newPlanOptions)
        changeFormTwo({
            planName: plan.planName,
            yearly: checkedState,
            price: plan.price
        })
        setPlanSelected(true)
    }
    console.log(planOptions, "planOptions")

    const plans = planOptions.map(plan => {
        return <div key={plan?.planName} className="card" onClick={() => { selectPlan(plan.planName) }} style={plan.selected ? { border: "1px solid orange" } : {}}>
            <img src={plan?.icon} alt="" className='icon' />
            <div className='plan-container'>
                <p className='plan-name'>{plan.planName}</p>
                <p className='plan-price'>${plan.price}/{checkedState ? "yr" : "mo"}</p>
                {checkedState && <p className='freemium'>2 months free</p>}
            </div>


        </div>
    })
    return (

        <section className='form-2-section'>
            <p className='form-title'>Select your plan</p>
            <p className='form-subtitle'>You have the option of monthly or yearly billing</p>
            <div className='container'>
                {plans}
            </div>

            <div className='switch-container'>
                <p>Monthly</p>
                <label className='switch'>
                    <input type='checkbox' checked={checkedState} onChange={handleSwitch}/>
                    <span className='slider'></span>
                </label>
                <p>Yearly</p>
            </div>

<div className='bottom-2-nav'>
<div className='form-2-nav'>
                <p onClick={()=>navigate('/')}>Go Back</p>
                <button className='form-2-button' disabled={planSelected?false:true} onClick={()=>navigate('/step-three')}>Next Step</button>

            </div>
</div>
           


        </section>

    )
}

export default StepTwoForm