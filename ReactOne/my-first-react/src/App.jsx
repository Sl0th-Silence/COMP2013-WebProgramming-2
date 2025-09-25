import './App.css'
import Card from './Components/Card'

function App() 
{ return (
  <>
  <h1>Diamond World</h1>
  <div className='main-container'>
    <Card sale={true}name="Princess"price="$1,350" image="src\assets\images\SingleDiamondRing.jpg"/>
    <Card name="Swan"price="$3,244"image="src\assets\images\SwirlDiamondRing.jpg"/>
    <Card sale={true}name="Collection"price="$4,500"image="src\assets\images\EaringSet.jpg"/>
  </div>
  </>
  )}

export default App

