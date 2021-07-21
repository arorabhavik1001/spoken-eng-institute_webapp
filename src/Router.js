import {Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Beginner from './Components/Begcourse';
import Intcourse from './Components/Intcourse';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/style.css';
import './css/style.css.map';
import './css/vendor/bootstrap.min.css';
import './css/vendor/animate.min.css';
import './css/vendor/font-awesome.min.css';
import './css/vendor/magnific-popup.css';

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/curriculum/beginner" component={Beginner} />
            <Route exact path="/curriculum/intermediate" component={Intcourse} />
        </BrowserRouter>
    )
}

export default Router;