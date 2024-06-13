import { Link } from "react-router-dom";

const Footer = () => {
    if (location.pathname === '/') return;

    return (
        <div className={'w-full max-w-screen-xl mx-auto p-4 md:pt-12'}>
            <div className={'sm:flex sm:items-center sm:justify-between'}>
                <Link to={'/'}>
                    <span className={'self-center text-xl font-semibold whitespace-nowrap text-gray-400 font-mono'}>
                        <span className={'text-blue-400/75'}>Cameron</span>
                        <span className={'text-gray-200/75'}>White</span>
                        .co.uk
                    </span>
                </Link>
                <ul className={'flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-500'}>
                    <li>
                        <a href="https://github.com/cmrxnn" className={'hover:underline me-4 md:me-6'}>GitHub</a>
                    </li>
                    <li>
                        <a href="mailto:mail@cameronwhite.co.uk" className={'hover:underline'}>Email</a>
                    </li>
                </ul>
            </div>
            <hr className={'mt-3 border-gray-200 sm:mx-auto dark:border-gray-700'} />
        </div>
    );
};

export default Footer;
