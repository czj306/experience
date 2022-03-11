import { useEffect } from "react";
import { getUserInfo } from "./api/index";

async function getData () {
  return await getUserInfo();
}

function App() {
  useEffect(() => getData(), [])
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
