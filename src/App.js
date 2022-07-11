import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppThunk} from "./redux/app/thunks";
import {Login} from "./pages/login/Login";

function App() {
    const dispatch = useDispatch();
    const {isFetching, error, isInitialized, userId} = useSelector(state => state.app);

    useEffect(() => {
        dispatch(initializeAppThunk());
    }, [dispatch]);

    if (!isInitialized) {
        return null;
    }

    return (
        <div className="App">
            <Login/>
            <div>loader: {isFetching.toString()}</div>
            <div>error: {error}</div>
            <div>init: {isInitialized}</div>
            <div>userId: {userId}</div>
        </div>
    );
}

export default App;
