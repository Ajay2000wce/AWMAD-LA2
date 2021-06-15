import React  from 'react';
import img1 from './bg1.png';
import img2 from './bg2.png';
import img3 from './bg3.png';
import './App.css';

// import ReactDOM from 'react-dom';
class App extends React.Component {
  render() {
    return (
      <div >
        <h1>Show Images</h1>
        <img src={img1} alt="Image1" height={300} width={250}/>
        <img src={img2} alt="Image1" height={300} width={250}/>
        <img src={img3} alt="Image1" height={300} width={250}/>
        
      </div>
    );
  }
}


export default App;
