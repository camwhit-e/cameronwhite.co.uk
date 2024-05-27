import { faHome, faInfoCircle, faSearch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from '../elements/Pill';
import Toast from '../elements/Toast';

export default () => (
    <div className={'flex justify-center'}>
        <div className={'mt-10 text-center text-gray-300 text-lg bg-slate-900 rounded-lg p-6'}>
            <div className={'mb-5'}>
                Sometimes in life, we can&apos;t find what we&apos;re&nbsp;
                <FontAwesomeIcon icon={faSearch} className={'text-blue-600'} /> for.
            </div>
            <span className={'italic'}>But that&apos;s&nbsp;
                <span className={'underline'}>okay</span>
            </span>
            &nbsp;for
            <Pill color={'text-green-800 bg-green-100'}>software developers</Pill>,
            <br />
            because we invented&nbsp;
            <span className={'text-red-400'}>
                <FontAwesomeIcon icon={faXmarkCircle} /> Exception!
            </span> handling a while back.
            <div className={'mt-10 flex justify-center'}>
                <Toast
                    icon={faInfoCircle}
                    color={'text-blue-700 bg-blue-100'}
                    text={<>Press the <FontAwesomeIcon icon={faHome} /> icon to return.</>}
                />
            </div>
        </div>
    </div>
)