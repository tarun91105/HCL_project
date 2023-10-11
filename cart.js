import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Cart = props => {
  const {item} = props
  const {no, name, busType, rating, btime, dtime, cost} = item
  return (
    <Link className="link" to="/seating">
      <div className="bus">
        <div>
          <div className="no-plate">
            <p className="no">.{no}.</p>
          </div>
          <div className="time">
            <p className="btime">{btime}</p>
            <p className="dtime">{dtime}</p>
          </div>
          <div className="nam-loc">
            <p className="name">{name}</p>
            <FontAwesomeIcon className="loc" icon={faLocationDot} />
          </div>
          <p className="type">{busType}</p>
        </div>
        <div>
          <div className="rating">
            <p>{rating}</p>
            <FontAwesomeIcon className="star" icon={faStar} />
          </div>
          <div className="cost-cont">
            <img
              className="img"
              src="https://previews.123rf.com/images/piterk/piterk1610/piterk161000157/70335170-the-indian-rupee-symbol-sign-line-icon-on-background.jpg"
              alt="cost"
            />
            <p className="cost">{cost}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Cart