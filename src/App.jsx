import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskDashboard from './components/TaskDashboard';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

const App=()=> {
  return (
    <ErrorBoundary>
    <Provider store={store}>
      <div className="App">
        <TaskDashboard />
      </div>
    </Provider>
     </ErrorBoundary>
  );
}

export default App;
