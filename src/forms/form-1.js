import { useNavigate } from "react-router-dom"
import "./form-1.css"
import { useState, useContext } from "react"
import { AppContext } from "../context/app.context"
const StepOneForm = () => {
    const { appState, changeFormOne } = useContext(AppContext)
    const formState = {
        name: appState.formOne.name,
        phone: appState.formOne.phone,
        email: appState.formOne.email
    }

    const errorState = {
        name: false,
        phone: false,
        email: false,
    }
    const [formOne, setFormOne] = useState(formState)
    const [errorForm, setErrorForm] = useState(errorState)
    const navigate = useNavigate()
    const validateForm = (name, value) => {
        switch (name) {
            case 'name':
                if (typeof name === "string" && value?.length < 50) return true
                return false
            case 'email':
                const pattern = value.match(/^\w+@(\w+\.)+(\w+)$/)
                console.log("pattern",pattern, value)
                if(pattern) return true
                return false
            case 'phone':
                const phonePattern = String(value).match(/^(234|\+234|0)\d{10}$/)
                //match(/(234|0|\+234)+|ef/)
                //const phonePattern = value.match(/^(\+234 | 234 | 0)\d{10}$/)
                console.log(phonePattern, "phonepatt")
                if(phonePattern) return true
                return false

            default:
                return false
        }
    }
    const updateForm = (e) => {
        const { name, value } = e.target
        const validate = validateForm(name, value)
        if (validate) {

            setErrorForm((errform) => ({ ...errform, [name]: false }))
            setFormOne(prevContent => ({ ...prevContent, [name]: value }))
            changeFormOne({ ...formOne, [name]: value })
        } else {
            setFormOne(prevContent => ({ ...prevContent, [name]: value }))
            setErrorForm((errform) => ({ ...errform, [name]: true }))
        }

    }
    const handleSubmit = () => {
        navigate('/step-two')
    }
    return (
        <section className="form-1">
            <p className="form-title">Personal info</p>
            <p className="form-subtitle">Please provide your name, email address, and phone number.</p>
            <form>

                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" required value={formOne?.name} onChange={updateForm} />
                {errorForm?.name && <p  className="input-error">Name must be a string</p>}

                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" name="email" required value={formOne?.email} onChange={updateForm} />
                {errorForm?.email && <p  className="input-error">Enter valid email address</p>}

                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" name="phone" required value={formOne?.phone} onChange={updateForm} />
                {errorForm?.phone && <p className="input-error">Enter valid nigerian number</p>}

                <button type="button" onClick={handleSubmit} disabled={errorForm?.name ||errorForm?.email || errorForm?.phone || !formOne?.name ||!formOne?.email || !formOne?.phone ? true : false} className="form-1-button">
                    Next Step
                </button>


            </form>
        </section>
    )
}

export default StepOneForm