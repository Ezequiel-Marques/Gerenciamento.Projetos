import { useEffect } from "react";
import { Outlet, useNavigation, useRouteError } from "react-router-dom";
import LoaderFullScreen from "./Uteis/Loader";
import './bootstrap.min.css';

export default function App() {
    const navigation = useNavigation();

    //const erro = useRouteError();

    //useEffect(() => {
    //    console.log(erro);
    //}, [erro]);

    return (
        <main className="container">
            <LoaderFullScreen active={navigation.state === "loading"} />
            <Outlet/>
        </main>
    );
}