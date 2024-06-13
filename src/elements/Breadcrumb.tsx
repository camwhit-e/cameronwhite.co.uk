import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
    items: string[];
}

export default function Breadcrumb ({ items }: Props) {

    return (
        <div className={'text-sm lg:text-lg text-gray-400 mt-3 font-mono'}>
            <Link to={'/'}>
                Home
            </Link>
            {items.map((item, index) => (
                <>
                    <FontAwesomeIcon icon={faChevronRight} className={'mx-2 w-3 h-3 mb-0.5 text-blue-400'} />
                    <span className={index === items.length - 1 ? 'text-gray-300' : 'text-gray-400'}>
                        {item}
                    </span>
                </>
            ))}
        </div>
    );
}
