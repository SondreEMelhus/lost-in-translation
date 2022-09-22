/**Component used to represent a translation from the users translation history */
const ProfileTranslationHistoryItem = ({translation, index, removeTranslation}) => {
    
    //Renders a translation with a uniqe index, translation in plain text and a remove button
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