import {useState} from "react";
import {loginThunk} from "../../redux/app/thunks";
import {logOutAction} from "../../redux/app/actions";
import {useDispatch} from "react-redux";

export const Login = () => {
    const dispatch = useDispatch();
    const [fields, setFields] = useState({
        email: '',
        password: '',
    });

    const onFieldsChange = ({target: {name, value}}) => {
        setFields(prev => ({...prev, [name]: value}))
    }

    const logInHandler = () => {
        dispatch(loginThunk(fields.email, fields.password));
    }

    const logOutHandler = () => {
        localStorage.removeItem('token');
        dispatch(logOutAction());
    }
    return <div>
        <input placeholder='email' name='email' value={fields.email} onChange={onFieldsChange}/>
        <input placeholder='password' type='password' name='password' value={fields.password}
               onChange={onFieldsChange}/>
        <button type='button' onClick={logInHandler}>Log In</button>
        <button type='button' onClick={logOutHandler}>Log Out</button>
    </div>
}