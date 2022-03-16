import "./style.css";

const searchPop = (props) => {
    return (
        <div className="search-box">
            <button className="search search-button" type="button" aria-label="search">
                <span className="button-container">
                    {/* 🔍搜索标识 */}
                    <svg width="20" height="20" class="search-icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    {/* 搜索文案 */}
                    <span className="button-placeholder">
                        { props.label || 'Search' }
                    </span>
                </span>
                {/* 搜索key */}
                <span className="search-button-keys">
                    <span className="search-button-key">
                        ⌘
                    </span>
                    <span className="search-button-key">
                        K
                    </span>
                </span>
            </button>
        </div>
    )
}

export default searchPop;