import Pill from "../elements/Pill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLaravel, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faEye, faPaintRoller, faUser } from '@fortawesome/free-solid-svg-icons';

export default () => (
    <div className={'flex h-screen'}>
        <div className="max-w-screen-2xl p-4 lg:mx-16 my-auto text-center lg:text-left">
            <h1 className="mb-8 lg:mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                Hello, I&apos;m Cameron
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                <FontAwesomeIcon icon={faUser} size={'sm'} className={'mr-2'} />
                I&apos;m a&nbsp;
                <Pill color={'bg-yellow-100 text-yellow-800'}>uni student</Pill>and
                <Pill color={'bg-purple-100 text-purple-800'}>hobbyist developer</Pill>
                building
                <span className={'font-serif mx-1 text-blue-500'}>elegant websites</span>
                used by <span className={'underline italic'}>thousands.</span>
            </p>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-8 lg:mt-2">
                <FontAwesomeIcon icon={faPaintRoller} size={'sm'} className={'mr-2'} />
                The main frameworks I use for projects are&nbsp;
                <Pill color={'text-blue-800 bg-blue-100'}>
                    <FontAwesomeIcon icon={faReact} className={'my-auto mr-1'} /> React
                </Pill>,
                <Pill color={'text-red-800 bg-red-100'}>
                    <FontAwesomeIcon icon={faLaravel} className={'my-auto mr-1'} /> Laravel
                </Pill>&
                <Pill color={'text-green-800 bg-green-100'}>
                    <FontAwesomeIcon icon={faVuejs} className={'my-auto mr-1'} /> Vue
                </Pill>.
            </p>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-8 lg:mt-2">
                <FontAwesomeIcon icon={faEye} size={'sm'} className={'mr-2'} />
                Check out the <code className={'text-sm bg-zinc-900 px-2 py-1 rounded'}>{'<Sidebar />'}</code> to learn more about my work.
            </p>
        </div>
    </div>
);
