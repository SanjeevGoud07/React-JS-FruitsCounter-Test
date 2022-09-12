// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMango = () => {
    this.setState(prevState => {
      console.log('He Ate Mango')
      return {mangoes: prevState.mangoes + 1}
    })
  }

  onBanana = () => {
    this.setState(prevState => {
      console.log('He Ate Banana')
      return {
        bananas: prevState.bananas + 1,
      }
    })
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="container">
        <div className="Box">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>

          <div className="FBox">
            <div className="FruitB Mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button className="button" type="submit" onClick={this.onMango}>
                Eat Mango
              </button>
              <div className="FruitB Banana">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png  "
                  alt="banana"
                />
                <button
                  className="button"
                  onClick={this.onBanana}
                  type="submit"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
