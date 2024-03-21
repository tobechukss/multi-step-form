import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/app.context'
import { useNavigate } from 'react-router-dom'
import './form-3.css';
const StepThreeForm = () => {
    const navigate = useNavigate()
    const { appState, changeFormThree } = useContext(AppContext)
    const [yearly, setYearly] = useState(appState?.formTwo?.yearly)


    const plans = [
        {
            addOn: "Online Service",
            sub: "Access to multiplayer games",
            price: yearly ? 10 : 1,
            checked: false
        },
        {
            addOn: "Larger Storage",
            sub: "Extra 1TB of cloud save",
            price: yearly ? 20 : 2,
            checked: false
        },
        {
            addOn: "Customizable Profile",
            sub: "Custom theme on your profile",
            price: yearly ? 20 : 2,
            checked: false
        }
    ]


    const [addOnPlans, setAddOnPlans] = useState(plans)
    useEffect(() => {

        if (!appState?.formTwo?.planName && !appState?.formTwo?.price) {
            navigate('/step-two')
        }
        setYearly(yearly)
        const formthree = appState?.formThree
        if (formthree.length) {
            setAddOnPlans(formthree)
        }


    }, [])

    function checkTheBox(e) {
        const { checked, name } = e?.target
        console.log(checked, name, "plancheck")
        const newPlan = addOnPlans.map((plan) => {
            // if((checked && plan?.addOn === name)||plan.checked){
            //     newAddOns.push({...plan, checked:true})
            // }
            // if(plan?.addOn === name && checked){
            //     newAddOns.push({...plan, checked:true})
            // }else if(plan.checked && plan.addOn !== name){
            //     newAddOns.push(plan)
            // }

            return plan?.addOn === name ? { ...plan, checked } : plan
        })

        setAddOnPlans(newPlan)
        changeFormThree(newPlan)

    }


    const addOnOptions = addOnPlans.map(plan => {
        return <div key={plan?.addOn} className='add-on-option' style={plan.checked ? { border: "1px solid rebeccapurple" } : {}}>
            <input type='checkbox' className='add-on-checkbox' onChange={checkTheBox} name={plan?.addOn}  checked={plan.checked}/>
            <div className='add-on-inner-container'>
                <p className='add-on-title'>{plan?.addOn}</p>
                <p className='add-on-subtitle'>{plan?.sub}</p>
            </div>
            <p className='add-on-price'>+{plan?.price}{yearly ? '/yr' : '/mo'}</p>
        </div>
    })

    return (
        <section className='form-3-section'>
            <p className='form-title'>Pick add-ons</p>
            <p className='form-subtitle'>Add-ons help enhance your gaming experience</p>
            <div className='add-on-container'>
                {addOnOptions}
            </div>

            <div className='bottom-2-nav'>
            <div className='form-2-nav'>
                <p onClick={() => navigate('/step-two')} style={{ cursor: "pointer" }}>Go Back</p>
                <button className='form-2-button' onClick={() => navigate('/step-four')}>Next Step</button>
</div>
            </div>

        </section>
    )
}

export default StepThreeForm