import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange targetTime={1} title={'Easy'} />
        <TimerChallange targetTime={5} title={'Not easy'} />
        <TimerChallange targetTime={10} title={'Getting tough'} />
        <TimerChallange targetTime={15} title={'pros only'} />
      </div>
    </>
  );
}

export default App;
