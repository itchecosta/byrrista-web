import React from 'react';

import './global.css';
// import './App.css';
// import './Sidebar.css';
// import './Main.css';

// import BusinessForm from './components/BusinessForm';
// import BusinessItem from './components/BusinessItem';

import Routes from './routes';

function App() {
  //const [business, setBusiness] = useState([]);

  // useEffect(() => {
  //   async function loadBusiness() {
  //     const response = await api.get('/business');

  //     setBusiness(response.data);
  //   }

  //   loadBusiness();
  // }, []);

  // async function handleAddBusiness(data) {
    

  //   setBusiness([...business, response.data]);
  // }

  return (
    <Routes />
  );
}

export default App;
