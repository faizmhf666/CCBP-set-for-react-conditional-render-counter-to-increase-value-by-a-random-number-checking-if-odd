// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    type: 'Even',
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
    this.setState(prevState =>
      prevState.count % 2 === 0 ? {type: 'Even'} : {type: 'Odd'},
    )
  }

  render() {
    const {count, type} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Count {count}</h1>
        <p className="type">Count is {type}</p>
        <button type="button" className="btn" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="end-para">*increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
