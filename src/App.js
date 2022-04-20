import './Style.css';
import myWonderfulImage from "./imageInSrc.jpg"

function App() {
  return (
 <>
  <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
  <h1 className="title red">Wajih Belhadj</h1>
  <br />
  <img src={myWonderfulImage} alt="jsx-a11y/alt-text"/>
  <br />
  <img src="/imageInPublic.jpg" alt="jsx-a11y/alt-text"/>
  </div>
  <video width="320" height="240" controls>
  <source src="myVideo.mp4" type="video/mp4" />
  </video>
 </>
  );
}

export default App;
