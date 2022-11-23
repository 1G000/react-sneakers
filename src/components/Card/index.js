import React from "react"
import cardStyles from "./Card.module.scss"

function Card({ price, title, imageUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    onPlus({ price, title, imageUrl })
    setIsAdded(!isAdded)
  }

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="blazergreen" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={cardStyles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        ></img>
      </div>
    </div>
  )
}

export default Card
