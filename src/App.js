import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import GradeFourToEight from "./Pages/Routes/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Routes/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Routes/LearningProgram/GradeThree";
import LearningProgram from "./Pages/Routes/LearningProgram/LearningProgram";

function App() {
  return (
    <div>
      <Home/>

      <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>

      <Routes>
        <Route path="/home" element={<LearningProgram/>} >
          <Route path="gradeThree" element={<GradeThree/>}/>
          <Route path="gradeEight" element={<GradeFourToEight/>}/>
          <Route path="gradeTwelve" element={<GradeNineToTwelve/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
