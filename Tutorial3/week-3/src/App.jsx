import './App.css'
import ClickerWithProps from './Components/ClickerWithProps';
import EmptyForm from './Components/EmptyForm';
import ListingContainer from './Components/ListingContainer';
import data from "./data/data"


function App() {
  return (<>
      <h1>Resorts Lite</h1>
      <ListingContainer item={data} />
      <EmptyForm />
      <ClickerWithProps message={"This is a clicker Message!"} btnText={"ClickHere!"}/>
    </>
  )
}

export default App
