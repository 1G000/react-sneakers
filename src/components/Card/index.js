import cardStyles from "./Card.module.scss"

function Card(props) {
  const onClickButton = () => {
    alert(props.title)
  }

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="blazergreen" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus"></img>
        </button>
      </div>
    </div>
  )
}

export default Card