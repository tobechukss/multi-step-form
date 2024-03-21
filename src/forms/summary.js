import { useState, useEffect, useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AppContext } from "../context/app.context"
import "./summary.css"
const Summary = () => {
    const { appState } = useContext(AppContext)
    const [addOns, setAddOns] = useState([])
    const [formPrice]=useState(appState?.formTwo?.price)
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!appState?.formTwo?.planName && !appState?.formTwo?.price) {
            navigate('/step-two')
        }
        let currentPrice = Number(formPrice)
        if (appState?.formThree && appState?.formThree?.length > 0) {
            console.log("summary", appState?.formThree)
            const checkedAddOns = []
            for (let addon of appState?.formThree) {
                if(addon.checked) {
                    checkedAddOns.push(addon)
                    currentPrice = currentPrice+ Number(addon.price)
                    setPrice(currentPrice)
                }
                
            }

            setAddOns(checkedAddOns)
           
        }
       
    }, [location.pathname])

    const [plan, setPlans] = useState({
        planName: appState.formTwo.planName,
        yearly: appState?.formTwo?.yearly,
        price: appState.formTwo.price
    })

    console.log(plan, "plan")

    const addOnList = addOns.map((add_on, index) => {
        return <div className="add-on-list" key={`${add_on.price}${index}`}>
            <div className="add-on-left">
                        <p className="add-on-planname">{(add_on?.addOn)}</p>
                    </div>
                    <div className="add-on-right">
                        +${add_on?.price}/{plan.yearly ? 'yr' : 'mo'}
                    </div>
        </div>
    })

    return (
        <section className="summary">
            <p className="form-title">Finishing up</p>
            <p className="form-subtitle">Double-check everything looks okay before confirming</p>
            <div className="summary-table">
                <div className="summary-sub-section">
                    <div className="summary-left">
                        <p className="sumary-planname">{(plan.planName)}({plan.yearly ? "Yearly" : "Monthly"})</p>
                        <a href="/step-two">Change</a>
                    </div>
                    <div className="summary-right">
                        ${plan.price}/{plan.yearly ? 'yr' : 'mo'}
                    </div>
                </div>
                {addOnList.length > 0 && <div className="line"></div>}
                {addOnList.length > 0 && <div className="">
                    {addOnList}
                    
                    </div>}

            </div>
            <div className="totals">
                <div className="totals-section">
                <div className="totals-left">
                        Total (per {plan.yearly ? 'year' : 'month'})
                    </div>
                    <div className="totals-right">
                        ${price}/{plan.yearly ? 'yr' : 'mo'}
                    </div>
   
                </div>
          
            </div>

           <div className="summary-nav">

            <div className='form-2-nav'>
                <p onClick={()=>navigate('/step-three')} style={{cursor:"pointer"}}>Go Back</p>
                <button className='form-2-button' onClick={()=>navigate('/final')}>Confirm</button>

            </div>
           </div>

            <div>

            </div>

        </section>
    )
}

export default Summary