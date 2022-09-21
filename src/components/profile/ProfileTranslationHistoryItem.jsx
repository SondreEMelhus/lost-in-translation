const ProfileTranslationHistoryItem = ({translation, index, removeTranslation}) => {
    
    
    return (
        <div className="history-item">
            <div className="translation-grid">
                <div className='translation-nr'>{index + 1 + '.'}</div>
                <div>{translation}</div>
                <button onClick={removeTranslation} value={index}>X</button>
            </div>
        </div>
    )
}

export default ProfileTranslationHistoryItem; 