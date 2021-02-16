import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/blogs/:id" component={BlogDetails} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
