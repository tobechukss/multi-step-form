import DesktopNav from "../navigation/desktop-nav"
import { AppProvider } from "../context/app.context"
import './desktop-layout.css'
const DesktopLayout = ({ children }) => {
    return (
        <>
            <AppProvider>
                <DesktopNav />
                <div className="app-section">
                    <div className="children-section">
                        {children}
                    </div>
                </div>
            </AppProvider>
        </>
    )
}

export default DesktopLayout