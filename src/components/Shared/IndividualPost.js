import {useState} from 'react';

const IndividualPost = ({post, handleDelete}) => {
    const [currentNumOfPeople, setCurrent] = useState(post.currentNumOfPeople);
    const [joinBtn, setJoinBtn] = useState(post.joinBtn);

    const updateDB = (newPost) => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(() => {
                console.log('post updated');
            })
    };

    const handleSinglePost = () => {
        var newPost = post;
        if (joinBtn === "Cancel") {
            setCurrent(currentNumOfPeople - 1);
            setJoinBtn("Join");
            newPost.currentNumOfPeople--;
            newPost.joinBtn = "Join";
            updateDB(newPost);
        } else if (currentNumOfPeople < post.numOfPeople) {
            setCurrent(currentNumOfPeople + 1);
            setJoinBtn("Cancel");
            newPost.currentNumOfPeople++;
            newPost.joinBtn = "Cancel";
            updateDB(newPost);
        } else {
            alert("This event has achieved the maximal number of people!");
        }
    };

    return (
        <div className="one-post">
                    <div className="left-col">
                        <div className="sport">
                            <span id="bold-bigger">{post.sport}</span>
                        </div>
                        <div>
                            # of people needed: {post.numOfPeople}
                        </div>
                        <div>
                            Current # of people: {currentNumOfPeople}
                        </div>
                        <div className="location">
                            Location: {post.location}
                        </div>
                    </div>

                    <div className="right-col">
                        <input type="button"
                               id="join-button"
                               value={joinBtn}
                               onClick={handleSinglePost}>
                        </input>

                        {post.own && <input type="button" 
                                            id="join-button" 
                                            onClick={() => handleDelete(post.id)} 
                                            value="Delete">
                                     </input>}

                        <details id="details">
                            <summary>Details</summary>
                            <div>Host: {post.host}</div>
                            <div>Contact info: {post.contactInfo}</div>
                            <div>Date: {post.date}</div>
                            <div>Time: {post.time}</div>
                        </details>
                    </div>
                </div>
    );
}
 
export default IndividualPost;