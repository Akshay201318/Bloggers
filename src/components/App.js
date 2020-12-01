import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import signup from './signUp';
import Login from './login';
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signUp" component={signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/post/:id" component={PostDetails} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
};

export default App;
