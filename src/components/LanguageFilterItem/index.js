// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updatedLanguageBtn, isClicked} = props
  const {id, language} = languageDetails

  const onClickLanguageBtn = () => {
    updatedLanguageBtn(id)
  }

  const activeTabBtnStatus = isClicked ? 'active-btn' : ''

  return (
    <li className="list-card">
      <button
        type="button"
        className={`language-btn ${activeTabBtnStatus}`}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
