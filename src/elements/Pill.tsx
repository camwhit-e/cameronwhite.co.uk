import { ReactNode } from 'react';
import classNames from 'classnames';

const Pill = ({ color, small, children }: { color: string; small?: boolean; children: ReactNode }) => (
    <span
        className={classNames(
            color,
            small ? 'text-xs px-1 py-px' : 'text-sm px-3 py-0.5',
            'mx-1 inline-flex leading-5 font-medium rounded-full',
        )}
    >
        {children}
    </span>
);

export default Pill;
