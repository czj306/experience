/*
 * @Description: 搜索栏展示
 * @version: 
 * @Author: Miracle_Sir
 * @Date: 2022-03-16 16:57:42
 * @LastEditors: Miracle_Sir
 * @LastEditTime: 2022-03-18 17:22:39
 */
import SearchPopSearch from "./search"
import SearchPopModal from "./modal"
import { useEffect, useState } from "react"

const SearchPop = (props) => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <SearchPopSearch onClick={handleClick}></SearchPopSearch>
            { visible && <SearchPopModal onClick={handleClick}/> }
        </div>
    )
}

export default SearchPop;