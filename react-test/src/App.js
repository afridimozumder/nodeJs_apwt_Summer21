import UserList from './components/UserList';
import {users} from './userData';
import {useState, useEffect} from 'react';
import CreateUser from './components/CreateUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useFetch } from './components/useFetch';

function App() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const [userList, setUserList] = useState([]);
  useFetch(url, setUserList);


/*   const getData=(url)=>{
    return fetch(url)
        .then(Response=>Response.json())
        .then(json=>json);
  }

  useEffect(()=>{
    getData(url).then(data=>setUserList(data));
  }, []); */

  const deleteUser = (id)=>{
    const List = userList.filter((user)=>user.id !== id);
    setUserList(List);
  }



  const addUser = (user)=>{
    setUserList([...userList, user]);
  }

  const editNewUser = (user)=>{
    //deleteUser(id);
    setUserList([...userList, user]);
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
          <CreateUser status='add' addNewUser={addUser}/>
        </Route>

        <Route path='/edit/:id' editNewUser={editNewUser} children={<CreateUser status='edit'/>} deleteCallback={deleteUser}>
        </Route>
        <Route path='*'>
          <h1>404 NOT FOUND</h1>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
