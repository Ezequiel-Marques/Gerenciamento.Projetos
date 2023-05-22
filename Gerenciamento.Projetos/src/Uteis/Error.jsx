//import { Navigate } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { useRouteError } from "react-router-dom";
//import { faRotateLeft } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
//import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
//
//export default function Error() {
//    const error = useRouteError();
//
//    if (error.response?.status === 401) {
//        return <Navigate to={"/"}/>
//    }
//
//    return (
//        <div className="h-100 d-flex justify-content-center align-middle font-weight-bold mt-4">
//            <Link to={-1} className="btn btn-danger my-auto mr-5">
//                Retornar <FontAwesomeIcon icon={faRotateLeft} fixedWidth />
//            </Link>
//            <div className="my-auto ">
//                {
//                    error.response?.data ??
//                    "Algum erro interno aconteceu na API!"
//                }
//            </div>
//        </div>
//    );
//}