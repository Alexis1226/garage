import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ height: '100%' }}>
        <Router />
      </div>
    </BrowserRouter>
  );
}
export default App;
