import {Router, Route, Link, Switch } from "react-router-dom";

const Home = (props) => {
    return (
    <div><p>This is the home page</p>
        <Link to="/concept-selection">Create your assignment</Link>
    </div>
    )
}

export default Home