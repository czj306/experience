/*
 * @Description: 搜索弹窗
 * @version: 
 * @Author: Miracle_Sir
 * @Date: 2022-03-17 14:51:49
 * @LastEditors: Miracle_Sir
 * @LastEditTime: 2022-03-18 17:22:59
 */
import "./style.css";

const SearchModal = (props) => {

    // 阻止点击弹窗关闭
    const onStopClick = (e) => {
        e.stopPropagation();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('====================================');
        console.log('values');
        console.log('====================================');
        // props.onSubmit()
    }
    
    return (
        <div className="search-modal-bg" onClick={props.close}>
            <div className="search-modal" onClick={onStopClick}>
                <header className="search-bar">
                    <form className="search-form" onSubmit={onSubmit}>
                        <label className="search-input-label" htmlFor="search-input" id="search-label">
                            <svg width="20" height="20" className="search-icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </label>
                        <input className="search-input" aria-autocomplete="both" aria-labelledby="search-label" id="search-input" autoComplete="off" autoCorrect="off" autoCapitalize="off" enterKeyHint="search" spellCheck="false" autoFocus={true} placeholder="Search" maxLength="64" type="search"></input>
                    </form>
                </header>
                <div className="search-dropdown">
                    <div className="search-start-screen">
                        body
                    </div>
                </div>
                <footer className="search-footer">
                    <ul className="search-commands">
                        <li>
                            <span className="search-commands-key">
                                <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>
                            </span>
                            <span className="search-label">to select</span>
                        </li>
                        <li>
                            <span className="search-commands-key">
                                <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>
                            </span>
                            <span className="search-commands-key">
                                <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>
                            </span>
                            <span className="search-label">to navigate</span>
                        </li>
                        <li>
                            <span className="search-commands-key">
                                <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>
                            </span>
                            <span className="search-label">to close</span>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

const SearchPopModal = (props) => {
    
    // 关闭弹窗
    const close = () => {
        // 点击蒙层是否允许关闭，默认允许
        if (!props.hasOwnProperty('maskClosable') || props.maskClosable) {
            props.onClick()
        }
    }

    const onSubmit = (e) => {

    }

    // 展示弹窗
    return <SearchModal close={close} onSubmit={onSubmit}/>;    
}

export default SearchPopModal;