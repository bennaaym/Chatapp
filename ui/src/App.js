import './assets/css/global.css';
import {Switch,Route,useLocation} from 'react-router-dom';
import Home from './components/home/Home';
import Chat from './components/chat/Chat';
import Form from './components/form/Form';
import ChatContextProvider from './context/ChatContext';
import {AnimatePresence} from 'framer-motion';
const App = () => {
  const location = useLocation();
  return (
      <ChatContextProvider>
        <div className="App overflow-hidden">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route exact path="/" component={Home}/>
                <Route path ="/start" component={Form}/>
                <Route path ="/chat-room/:id" component={Chat}/>
            </Switch>
          </AnimatePresence>
        </div>
      </ChatContextProvider>
  );
}

export default App;
