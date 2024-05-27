import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Props {
    items: string[];
};

export default ({ items }: Props) => (
    <div className={'text-sm lg:text-lg text-gray-400 mt-3 font-mono'}>
        <a href={'/'}>
            Home
        </a>
        {items.map((item) => (
            <>
                <FontAwesomeIcon icon={faChevronRight} className={'mx-2 w-3 h-3 mb-0.5 text-blue-500'} />
                <span className={classNames('text-gray-300')}>{item}</span>
            </>
        ))}
    </div>
)