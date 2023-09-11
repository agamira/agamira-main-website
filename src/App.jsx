import { Button } from "./components";
import "./assets/sass/main.scss";

function App() {
  return (
    <>
      <Button disabled={true} className={"btn"}>
        Get Started
      </Button>
    </>
  );
}

export default App;
