import React, { useState } from 'react';
import Login from './components/login/LoginForm';

const App: React.FC = () => {

  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = (isLogged: boolean) => {
    setIsLogged(isLogged);
  }

  return (
    <div className="App">
      {!isLogged && <Login handleLogin={toggleLogin} />}
    </div>
  );
}

export default App;
