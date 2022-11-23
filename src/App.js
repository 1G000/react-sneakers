import React from "react"
import "./App.css"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch("https://637e0089cfdbfd9a63a3cd07.mockapi.io/items")
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      {/* или так: {cartOpened && <Drawer onClose={() => setCartOpened(false)} /> } */}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price + " руб."}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в избранное")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
