import './App.css'
import Card from './assets/Components/Card'

function App() {
  return (
    document.body.style.backgroundColor="grey",
    <>
      <h1>Resorts Lite</h1>
        <hr></hr>
      <div className='card-container'>

        <Card image="src/assets/images/1.jpg"
        location="Indonesia"
        resort="Gili Air Hotel"
        review={4.8}
        price="$589"/>
                <Card image="src/assets/images/2.jpg"
        location="Seychelles"
        resort="Hilton Resort"
        review={4.2}
        price="$629"/>
                <Card image="src/assets/images/3.jpg"
        location="US Virgin Islands"
        resort="Goa Resort"
        review={3.5}
        price="$485"/>
                <Card image="src/assets/images/4.jpg"
        location="Bahamas"
        resort="Kuredu Resort"
        review={4.1}
        price="$729"/>
                <Card image="src/assets/images/5.jpg"
        location="Mauritius"
        resort="Trou D'eau Douce"
        review={4.9}
        price="$877"/>
                <Card image="src/assets/images/6.jpg"
        location="Bermuda"
        resort="Staniel Cay Hotel"
        review={3.2}
        price="$365"/>

      </div>
    </>
  )
}

export default App
