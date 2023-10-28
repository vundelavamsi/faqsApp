// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    console.log(isActive)
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button type="button" onClick={this.onToggleIsActive} className="button">
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq

    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
