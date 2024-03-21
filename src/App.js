import './App.css';
import DesktopLayout from './layout/desktop-layout';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import StepOneForm from './forms/form-1';
import StepTwoForm from './forms/form-2';
import StepThreeForm from './forms/form-3';
import Summary from './forms/summary';
import FinalPage from './forms/final';


function App() {
  return (
    <BrowserRouter>
      <DesktopLayout>
        <Routes>
          <Route path="/" element={<StepOneForm />} />
          <Route path="/step-two" element={<StepTwoForm />} />
          <Route path="/step-three" element={<StepThreeForm />} />
          <Route path="/step-four" element={<Summary />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>

      </DesktopLayout>
    </BrowserRouter>

  );
}

export default App;
