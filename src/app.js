import { h } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";

// Code-splitting is automated for `routes` directory
import Home from "./routes/home";

const App = () => (
    <article>
        <Header />
        <hr />
        <Router>
            <Home path="/" />
        </Router>
    </article>
);

export default App;
