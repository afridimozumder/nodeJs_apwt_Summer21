import UserList from './components/UserList';
import {users} from './userData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  const [userList, setUserList] = useState(users);

  const deleteUser = (id)=>{
    const List = userList.filter((user)=>user.id !== id);
    setUserList(List);
  }

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <h1>_Welcome Home!</h1>
        </Route>
        <Route path='/userlist'>
          <div>
            <UserList userList={userList} deleteCallback={deleteUser}/>
          </div>
        </Route>

        <Route path='/create'>
          <CreateUser status='add'/>
        </Route>

        <Route path='/edit/:id' children={<CreateUser status='edit'/>}>
        </Route>
        <Route path='*'>
          <h1>404 NOT FOUND</h1>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
