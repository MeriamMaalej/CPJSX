import logo from './logo.svg';
import './App.css';
import srcImage from "./image-src.png";


function App() {
  return (
    <div >
      <div style={{border:"solid 1 black" ,maxWidth:100}}></div>
      <h1 className="title red">Your name here</h1> <br></br>
      <img src={srcImage} className="center"></img><br></br>
      <img src= "/téléchargement.jpg" className="center"></img><br></br>
      <video width="320" height="240" controls src="/Welcome Video" className="center"> </video>
    </div>
  );
}

export default App;
