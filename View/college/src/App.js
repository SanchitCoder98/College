import React, { Component } from 'react';

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";

import Readonly from './components/SchedulerComponent/example'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './layout/layout.css';
import './App.css';

 
class App extends Component {

  render() {
      return (
        <div>
            <Readonly/>
        </div>
      );
  }
}

export default App;
