import React from 'react';
import Welcome from './views/home';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function ChatApp() {
 

  return (
    <HashRouter>
    
      <Routes>
        <Route path="/" exact element={<Welcome />}>
        </Route>
      </Routes>
    
    </HashRouter>
  )
}

export default function App() {
  return (
   
      <ChatApp />
    
  )
}