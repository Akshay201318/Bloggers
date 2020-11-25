import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={PostDetails} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
};

export default App;
