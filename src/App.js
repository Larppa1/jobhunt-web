import './App.css';

export default function App() {
  setInterval(() => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('App').style.backgroundColor = '#' + randomColor
  }, 250)

  return (
    <div id="App">
      <h1 className="tempTitle">Coming soon...</h1>
    </div>
  );
}
