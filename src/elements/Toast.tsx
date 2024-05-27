import { ReactNode } from "react";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon: IconDefinition;
    text: string | ReactNode;
    color?: string | undefined;
}

export default ({ text, icon, color }: Props) => (
    <div className={'flex items-center w-full max-w-xs p-4 text-gray-500 rounded-lg bg-slate-800'}>
    <div className={classNames(color, 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg')}>
        <FontAwesomeIcon icon={icon} />
    </div>
    <div className={'ms-3 text-sm font-normal'}>{text}</div>
</div>
)