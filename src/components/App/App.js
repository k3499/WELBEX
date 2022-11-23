import './App.css'
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

function App() {
  return (
    <div className="wrapper">
      <div className='background__purple-light'></div>
      <div className='background__purple-ball'></div>
      <div className='background__red-ball'></div>
      <div className='background__red-light'></div>
      <div className='background__red-ball-small'></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
