/*
 * @Description: 
 * @version: 
 * @Author: Miracle_Sir
 * @Date: 2022-03-10 16:23:29
 * @LastEditors: Miracle_Sir
 * @LastEditTime: 2022-03-18 10:22:45
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
      <SearchPop></SearchPop>
  );
}

export default App;
