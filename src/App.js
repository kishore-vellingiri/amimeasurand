import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginPage/loginPage";
import DashboardPage from "./Dashboard/DashBoard";
import AddWaterPage from "./WaterAdder/addWaterPage";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/dashboard/:id' element={<DashboardPage/>}></Route>
      <Route path='/addwaterpage' element={<AddWaterPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
