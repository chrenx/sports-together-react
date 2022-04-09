import IndividualPost from "./IndividualPost";
import PopUpWindow from "./PopUpWindow";
import {useState} from "react";


const PostsList = ({posts}) => {

    const [popUp, setPopUp] = useState(false);
    const [deleteID, setDeleteID] = useState(undefined);

    const handleDelete = (id) => {
        setPopUp(true);
        setDeleteID(id);
    };

    const handleFinalDecision = (yesDelete) => {
        console.log(yesDelete);
        if (yesDelete) {
            console.log(deleteID);
            fetch('http://localhost:8000/posts/' + deleteID, {method: 'DELETE'})
                .then(() => {
                    console.log("发送了");
                    window.location.reload();
                    setPopUp(false);
                })
        } else {
            setPopUp(false);
        }
    }

    var singlePost = [];
    posts.forEach((post) => {
        singlePost.push(
            <IndividualPost
                post={post}
                handleDelete={handleDelete}
                setPopUp={setPopUp}
                key={post.id}
            />
        );
    });
    singlePost.reverse();

    return (
        <div className="posts-list">
            {popUp && <PopUpWindow handleFinalDecision={handleFinalDecision}/>}
            {singlePost}
        </div>
    );
}
 
export default PostsList;