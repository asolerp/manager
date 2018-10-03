import React from 'react';
import { Screen, Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList.js'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key = 'root' hideNavBar>
                <Scene key = 'auth'>
                    <Scene key = 'login' component = {LoginForm} title = 'Please Login' initial></Scene>
                </Scene>
                <Scene key = 'main'>
                    <Scene 
                    rightTitle='Add' 
                    onRight={()=>{ console.log('right!')}}
                    key='employeeList' 
                    component={EmployeeList} 
                    title='Employees'></Scene>
                </Scene>
            
            </Scene> 
        </Router>
    );
}

export default RouterComponent;