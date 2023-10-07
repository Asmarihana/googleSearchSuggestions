import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  googleSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectSearch = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="background">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card">
          <div className="search-input">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="search"
              type="search"
              value={searchInput}
              onChange={this.googleSearch}
              placeholder="Search Google"
            />
          </div>
          <div>
            <ul>
              {searchResult.map(each => (
                <SuggestionItem
                  suggestion={each.suggestion}
                  key={each.id}
                  selectSearch={this.selectSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
