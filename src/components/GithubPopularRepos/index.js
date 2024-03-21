import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
// doubt1 i am not getting the data
class GithubPopularRepos extends Component {
  state = {
    isLoading: false,
    listOfRepositories: [],
    isClicked: false,
    activeTabId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getReposData()
  }

  getReposData = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeTabId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    const convertedData = data.popular_repos.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))

    this.setState({
      listOfRepositories: convertedData,
      isLoading: false,
    })
  }

  // doubt2 based upon user selection related items has to display
  updatedLanguageBtn = activeTabId => {
    this.setState({activeTabId}, this.getReposData)
  }

  render() {
    const {isLoading, listOfRepositories, isClicked, activeTabId} = this.state

    return (
      <div className="github-container">
        <h1 className="heading1">Popular</h1>
        <ul className="language-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              updatedLanguageBtn={this.updatedLanguageBtn}
              isClicked={activeTabId === eachLanguage.id}
            />
          ))}
        </ul>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="list-container">
            {listOfRepositories.map(eachRepos => (
              <RepositoryItem
                key={eachRepos.id}
                repositoryDetails={eachRepos}
              />
            ))}
          </ul>
        )}

        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          className="failure-view"
          alt="failure view"
        />
      </div>
    )
  }
}

export default GithubPopularRepos
