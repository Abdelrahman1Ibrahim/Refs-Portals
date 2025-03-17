import Player from "./components/Player.jsx";
import Challenge from "./components/Challenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="Easy" time="1" />
        <Challenge title="NOT EASY" time="5" />
        <Challenge title="HARD " time="10" />
        <Challenge title="VERY HARD" time="15" />
      </div>
    </>
  );
}

export default App;
