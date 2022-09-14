import './App.css';
// link css 구문대신 app.css 파일 가져오는 구문
import MyCalendar from './components/MyCalendar';

function App() {
  // const SIZE = 3

  // const rand = Number(SIZE * Math.random())

  // console.log(rand);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={require('./zyo2.jpg')} className="App-logo" alt="logo" />
        <MyCalendar/>
      </header>
    </div>
  );
}

export default App;
