import { useState } from 'react';
import classNames from 'classnames';
import useWindowSize from '../helpers/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots, faHome, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface Props { 
    children: React.ReactNode;
}

export default ({ children }: Props) => {
    const { width } = useWindowSize();
    const [open, setOpen] = useState<boolean>(width > 768);

    return (
        <div className={'min-h-screen relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900'}>
            {!open && (
                <button onClick={() => setOpen(!open)} type="button" className="fixed bottom-0 left-0 p-3 bg-black rounded-lg m-3">
                    <FontAwesomeIcon icon={faListDots} fixedWidth />
                </button>
            )}
            {open && (
                <aside className="fixed top-0 left-0 z-40 w-16 h-screen transition-transform">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-slate-950/50">
                        <ul className="h-full font-medium text-zinc-400">
                            <li className={'h-full flex flex-col flex-shrink-0'}>
                                <a href="#" className="flex items-center justify-center">
                                    <FontAwesomeIcon icon={faHome} className={'w-5 h-5 transition hover:text-zinc-200 duration-200 py-4'} />
                                </a>
                                <div className="mt-auto flex items-center justify-center" onClick={() => setOpen(false)}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={'w-5 h-5 transition hover:text-zinc-200 duration-200 py-4'} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}
            <div className={classNames('p-4', open && 'ml-16')}>
                {children}
            </div>
        </div>
    );
};
