import { ReactNode } from 'react';
import classNames from 'classnames';

export default ({ color, small, children }: { color: string; small?: boolean; children: ReactNode }) => (
    <span
        className={classNames(
            color,
            small ? 'text-xs px-1' : 'text-sm px-3 py-0.5',
            'mx-1 inline-flex leading-5 font-medium rounded-full',
        )}
    >
        {children}
    </span>
);