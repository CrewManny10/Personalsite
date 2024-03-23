
import './App.css';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';
import EmailList from './componets/EmailList';
import EmailPreview from './componets/EmailPreview';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        <Sidebar />
        <div className='content'>
          <EmailList />
          <EmailPreview />
        </div>
      </div>
    </div>

  );
};

export default App;
