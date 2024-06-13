import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome, faShapes } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar ({ setOpen }: Props) {
    return (
        <aside className="fixed top-0 left-0 z-40 w-16 h-screen">
            <div className="h-full px-3 py-4 overflow-y-auto bg-slate-950/50">
                <ul className="h-full font-medium text-zinc-400">
                    <li className={'h-full flex flex-col flex-shrink-0'}>
                        <Tooltip content={'Home'} placement={'right'}>
                            <Link to={'/'} className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faHome} className={'w-5 h-5 transition hover:text-zinc-200 duration-200 py-4'} />
                            </Link>
                        </Tooltip>
                        <Tooltip content={'Projects'} placement={'right'}>
                            <Link to={'/projects'} className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faShapes} className={'w-5 h-5 transition hover:text-zinc-200 duration-200 py-4'} />
                            </Link>
                        </Tooltip>
                        <div className="mt-auto flex items-center justify-center" onClick={() => setOpen(false)}>
                            <FontAwesomeIcon icon={faChevronLeft} className={'w-5 h-5 transition hover:text-zinc-200 duration-200 py-4'} />
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
