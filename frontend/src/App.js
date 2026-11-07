import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import EquipmentPage from './pages/EquipmentPage';
import ReadingInputPage from './pages/ReadingInputPage';
import MaintenancePage from './pages/MaintenancePage';
import UserReportsPage from './pages/UserReportsPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={DashboardPage} />
                <Route path="/equipment" component={EquipmentPage} />
                <Route path="/readings" component={ReadingInputPage} />
                <Route path="/maintenance" component={MaintenancePage} />
                <Route path="/reports" component={UserReportsPage} />
            </Switch>
        </Router>
    );
};

export default App;