import React from 'react';
import { Screen, Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate';

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
                        onRight={()=>{ Actions.employeeCreate()}}
                        key='employeeList' 
                        component={EmployeeList} 
                        title='Employees'>
                    </Scene>
                    <Scene                      
                        key='employeeCreate' 
                        component={EmployeeCreate} 
                        title='New Employee'>
                    </Scene>

                </Scene>
            
            </Scene> 
        </Router>
    );
}

export default RouterComponent;