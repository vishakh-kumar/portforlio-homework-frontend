import "./App.css";
import { Route, Switch } from "react-router-dom";

//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Import Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
    const URL = "https://express-and-react-backend.herokuapp.com/";
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects URL={URL} />
                </Route>
                <Route path="/about">
                    <About URL={URL} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
