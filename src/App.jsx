import { useEffect, useState } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Loader from "./reusable-components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);
  }, []);

  return (
    <main className="main">
      <Loader className={isLoading ? "" : "loaded"} />
      <Homepage />
    </main>
  );
}

export default App;
