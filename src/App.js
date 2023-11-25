import './App.css';
import Content1 from './components/content/Content1';
import Content2 from './components/content2/Content2';
import Content3 from './components/content3/Content3';
import Content4 from './components/content4/Content4';
import Content5 from './components/content5/Content5';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Studymaterial from './components/studyMaterial/Studymaterial';
import Result from './components/results/Result';
import Teachers from './components/teachers/Teachers';
import Inspire from './components/inspire/Inspire';
import Feedback from './components/FeedbackCard/Feedback';
import Footer from './components/footer/Footer';
import CustomerCare from './components/customerCare/CustomerCare';
import HeaderFooter from './components/header/HeaderFooter';


function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <HeaderFooter/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Content4/>
    <Content5/>
    <Studymaterial/>
    <Result/>
    <Teachers/>
    <Inspire/>
    <Feedback/>
    <Footer/>
    <CustomerCare/>
    
    </div>
  )
}

export default App;
