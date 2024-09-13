import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs} from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Support from "./components/Support";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
return (
	<Router>
	<Sidebar />
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path='/about-us' element={<AboutUs/>} />
			<Route path='/login' element={<Login/>} />
			<Route path='/register' element={<Register/>} />
			<Route path='/contact' element={<Contact/>} />
			<Route path='/support' element={<Support/>} />
		</Routes>
	</Router>
);
}

export default App;
