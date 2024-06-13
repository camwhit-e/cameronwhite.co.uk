import { useState } from 'react';
import classNames from 'classnames';
import useWindowSize from '../helpers/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

interface Props {
    children: React.ReactNode;
}

export default function Wrapper ({ children }: Props) {
    const { width } = useWindowSize();
    const [open, setOpen] = useState<boolean>(width > 768);

    return (
        <div className={'min-h-screen relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900'}>
            {!open && (
                <button onClick={() => setOpen(!open)} type="button" className="fixed bottom-0 left-0 p-3 bg-black rounded-lg m-3">
                    <FontAwesomeIcon icon={faListDots} fixedWidth />
                </button>
            )}
            {open && <Sidebar setOpen={setOpen} />}
            <div className={classNames('p-4 lg:pl-32 lg:pr-16 lg:pt-16 z-40')}>
                {children}
            </div>
        </div>
    );
}
