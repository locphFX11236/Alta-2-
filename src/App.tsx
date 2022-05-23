import { Provider } from 'react-redux';

import './App.css';
import Main from './component/main';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); // Gọi store để gắn vào các component con

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App text-center">
          <Main />
        </div>
      </Provider>
    </div>
  );
}

export default App;
