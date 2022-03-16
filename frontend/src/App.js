/*
 * @Description: 
 * @version: 
 * @Author: Miracle_Sir
 * @Date: 2022-03-10 16:23:29
 * @LastEditors: Miracle_Sir
 * @LastEditTime: 2022-03-16 19:52:01
 */
import { useEffect } from "react";
import { getUserInfo } from "./api/index";

import SearchPop from "./components/react/searchPop";

const getData  = async () => {
  return await getUserInfo();
}

const App = () => {
  useEffect(() => getData(), [])
  return (
    <div>
      <SearchPop></SearchPop>
    </div>
  );
}

export default App;
