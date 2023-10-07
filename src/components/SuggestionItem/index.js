import './index.css'

const SuggestionItem = props => {
  const {suggestion, selectSearch} = props
  const click = () => {
    selectSearch(suggestion)
  }
  return (
    <li className="searches">
      <p>{suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={click}
      />
    </li>
  )
}
export default SuggestionItem
