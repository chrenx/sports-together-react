

const PopUpWindow = ({handleFinalDecision}) => {
    
    const deleteBtn = () => {
        handleFinalDecision(true);
    }

    const cancelBtn = () => {
        handleFinalDecision(false);
    }

    return (
        <form className="modal-content" >
            <div className="container">
                <h1>Delete Account</h1>
                <p>Are you sure you want to delete your account?</p>
                
                <div className="clearfix">
                    <button type="button" onClick={cancelBtn} className="cancelbtn">Cancel</button>
                    <button type="button" onClick={deleteBtn} className="deletebtn">Delete</button>
                </div>
            </div>
        </form>
    );
}
 
export default PopUpWindow;