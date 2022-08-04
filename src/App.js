import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppThunk} from "./redux/app/thunks";
import {Login} from "./pages/login/Login";
import styles from './App.module.css';

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
        <div className={styles.App}>
            <main>
                <Login/>
                <div>loader: {isFetching.toString()}</div>
                <div>error: {error}</div>
                <div>init: {isInitialized}</div>
                <div>userId: {userId}</div>
            </main>
            <footer>
                <span className={styles.copyright}>Developed by Oleg Yanusik</span>
            </footer>
        </div>
    );
}

export default App;
