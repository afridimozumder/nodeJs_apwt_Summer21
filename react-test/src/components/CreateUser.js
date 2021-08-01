import {useParams} from 'react-router-dom';

const CreateUser = ({status})=>{
    const {id:eid} = useParams();
    return(
        <>
            <h1>{status==='add'?'Create':'Edit'} User Page..! {eid}</h1>
            Name: <input type='text' name='name'/> <br/>
            ID: <input type='text' name='id'/><br/>
            Dept: <input type='text' name='dept'/><br/>
            <input type='submit' value={status==='add'?'Create':'Edit'}/>
        </>
    );
}

export default CreateUser;