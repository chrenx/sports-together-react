import useFetch from '../Shared/useFetch';
import PostsList from '../Shared/PostsList';
import FormPage from '../Shared/FormPage';
import FindMatchBtn from '../Shared/FindMatchBtn';
import {useState} from 'react';

const MainPage = () => {
    const { posts, isPending, error } = useFetch('http://localhost:8000/posts');
    const [findMatch, setFindMatch] = useState(true);
    const [successfulSubmit, setSuccess] = useState(false);

    return (
        <div className="main-page">
            <div className="split-view left-container">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { posts && <PostsList posts={posts} /> }
            </div>

            <div className="split-view right-container">
                {findMatch ? (
                    <FindMatchBtn setFindMatch={setFindMatch} 
                                  successfulSubmit={successfulSubmit}/>
                ) : (
                    <FormPage setFindMatch={setFindMatch} 
                              setSuccess={setSuccess} 
                              successfulSubmit={successfulSubmit} />
                )}
                
                
            </div>
        </div>
    );
}
 
export default MainPage;