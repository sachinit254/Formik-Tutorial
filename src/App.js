import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./EmailPasswordValidation/index";
import SignupForm from "./CustomValidation/index";
import YupForm from "./YupValidation/index";
import GetFieldProps from "./ReducingBoilerplate/index"
import FormikContext from "./LeveragingReactContext/index";
import UseFieldForm from "./useField/index"
import ValidationSchemaExample from "./Validation/validationSchema";
import FieldLevelValidation from "./Validation/FieldLevelValidation";
import TriggeringValidation from "./Validation/TriggeringValidation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/yupsignup" element={<YupForm />} />
          {/* <Route path="/practice" element={<GetFieldProps />} /> */}
          {/* <Route path="/practice" element={<FormikContext />} /> */}
          {/* <Route path="/practice" element={<UseFieldForm />} /> */}
          {/* <Route path="/practice" element={<ValidationSchemaExample />} /> */}
          {/* <Route path="/practice" element={<FieldLevelValidation />} /> */}
          <Route path="/practice" element={<TriggeringValidation />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
