import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Toast from "../../elements/Toast";
import Wrapper from "../../elements/Wrapper";

const PostList = () => (
    <Wrapper>
        <div className={'flex justify-center'}>
            <Toast icon={faQuestionCircle} color={'text-gray-200 bg-yellow-600'} text={'No posts could be found. Check back later.'} />
        </div>
    </Wrapper>
);

export default PostList;
