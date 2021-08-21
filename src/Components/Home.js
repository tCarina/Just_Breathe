import { Switch, Route } from "react-router-dom";
import About from "./About";
import NavBar from "./Navbar";
import Techniques from "./Techniques";

export default function Home() {
    return (
        <div> <NavBar />
            HOME PAGE


            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/techniques">
                    <Techniques />
                </Route>
            </Switch>

        </div>
    );
}
