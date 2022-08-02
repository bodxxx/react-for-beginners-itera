import './App.css';

const myData = {
  name: "Bohdan",
  age: 23,
  desc: "I am front-end dev.",
  contacts: "@kargee"
}

const Footer = () => (
  <footer>
    <p>This is my footer 😇</p>
  </footer>
)

const App = () => (
  <div className="App">
     <h1>Hi there!</h1>
     <div className="bio">
        <p>My name is <span>{myData.name}</span></p>
        <p>I am <span>{myData.age}yo.</span></p>
        <p>My specialisation: <span>{myData.desc}</span></p>
        <p>Contact me here: <span><a href="https://t.me/kargee" target="_blank">{myData.contacts}</a></span></p>
     </div>
     <Footer/>
  </div>
)

export default App;
