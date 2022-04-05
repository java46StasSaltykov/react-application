import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return <><Timer zone={'New-York Time'} timezone={'America/New_York'}/>
           <Timer zone={'Jerusalem Time'} timezone={'Asia/Jerusalem'}/>
           <Timer zone={'London Time'} timezone={'Europe/London'}/>
           <Timer zone={'Berlin Time'} timezone={'Europe/Berlin'}/>
        </>
}

export default App;
