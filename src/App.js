import "./App.css"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999 },
  { name: "Мужские Кроссовки Nike Air Max 270", price: 15600 },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
