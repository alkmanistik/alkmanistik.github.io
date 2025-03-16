import {Link} from "react-router";
import {workPaths} from "../../utils/constants.ts";

export default function NavBar() {
    return (
        <div className="fixed top-0 right-0 left-0 z-10 navbar bg-base-100">
            <div className="ps-4">
                <Link className="text-base font-bold sm:text-lg md:text-xl xl:text-2xl" to="/home">Alkmanistik's website</Link>
            </div>
            <div className="flex grow justify-end px-2 pr-4">
                <div className="flex items-stretch">
                    <Link className="btn btn-ghost rounded-field sm:text-lg" to="/home">Главная</Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-field sm:text-lg">Работы</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                            {
                                workPaths.map((workPath, index) => (
                                    workPath.workName != "" ?
                                        <li key={index}><Link to={workPath.workHref}>{workPath.workName}</Link></li> :
                                        <li key={index}></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
