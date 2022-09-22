import '../../styles/Profile.css'

const ProfileTranslationHistoryItem = ({translation, index, removeTranslation}) => {
    
    
    return (
        <div className="history-item">
            <div className="translation-grid">
                <div className='translation-nr'>{index + 1 + '.'}</div>
                <div className="translation">{translation}</div>
                <button className="x-button" onClick={removeTranslation} value={index}>X</button>
            </div>
        </div>
    )
}

export default ProfileTranslationHistoryItem; 