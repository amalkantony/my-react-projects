import './App.css';
import TopBar from './common/topBar'
import Footer from './common/footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import UserHome from './main/UserHome.jsx'
import SingleEvent from './main/tabs/SingleEvent.jsx'
import EventMedia from './main/tabs/eventMedia.jsx'
import AddEvent from './main/tabs/AddEvent.jsx'
import CreatedEvent from './main/tabs/CreatedEvent.jsx'
import SearchResult from './main/tabs/SearchResult.jsx'
import Profile from './main/tabs/ProfilePage.jsx'
import Feed from './main/tabs/Feed.jsx'

function App() {
  return (
    <div className="App">
      <TopBar/>

        <Switch>
          <Route path="/feed" component={Feed}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={SearchResult}/>
          <Route path="/event_success" component={CreatedEvent}/>
          <Route path="/add_event" component={AddEvent}/>
          <Route path="/event-media" component={EventMedia}/>
          <Route path="/event" component={SingleEvent}/>
          <Route path="/home" component={UserHome}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        
      <Footer/>
    </div>
  );
}

export default App;