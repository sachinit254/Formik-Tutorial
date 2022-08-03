import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./EmailPasswordValidation/index";
import SignupForm from "./CustomValidation/index";
import YupForm from "./YupValidation/index";
import ArrayExample from './Arrays/index'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/yupsignup" element={<YupForm />} />
          <Route path="/practice" element={<ArrayExample />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
