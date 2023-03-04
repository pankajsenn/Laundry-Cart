import './App.css';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import ZeroOrderPage from './Components/ZeroOrderPage/ZeroOrderPage';
import CreateOrder from './Components/CreateOrder/CreateOrder';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateOrderPage from './Components/CreateOrderPage/CreateOrderPage';
import OrderHistorySummary from './Components/OrderSummary/OrderSummary';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
