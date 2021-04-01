import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Statistics from './components/views/Statistics/Statistics';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import TablesEventId from './components/views/TablesEventId/TablesEventId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Statistics} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={TablesEventNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEventId} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
        </Switch>
        
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
