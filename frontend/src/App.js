import { useEffect } from "react";
import { getUserInfo } from "./api/index";

const getData  = async () => {
  return await getUserInfo();
}

const App = () => {
  useEffect(() => getData(), [])
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
