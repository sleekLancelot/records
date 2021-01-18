import './App.css';
import Records from './components/Records';

import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layouts/Alert';
import SearchBar from './components/layouts/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <Alert />
        <Records />
      </div>
    </Provider>
  );
}

export default App;
