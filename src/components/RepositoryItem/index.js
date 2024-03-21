// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {name, avatarUrl} = repositoryDetails
  const {issuesCount, forksCount, starsCount} = repositoryDetails

  return (
    <li className="list-card2">
      <img src={avatarUrl} className="avatar-img" alt={name} />
      <h1 className="name-heading">{name}</h1>

      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="img"
          alt="stars"
        />
        <p className="count-paragraph">{starsCount} stars</p>
      </div>

      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="img"
          alt="forks"
        />
        <p className="count-paragraph">{forksCount} forks</p>
      </div>

      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="img"
          alt="open issues"
        />
        <p className="count-paragraph">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
