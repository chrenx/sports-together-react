const FindMatchBtn = ({setFindMatch, successfulSubmit}) => {
    const extraInfo = "You can either find an existing sport event on the " +
                      "left side of the screen, or you can click the button " +
                      "above to create a new one.";

    const successMsg = "Successful Submission!";
        
    const handleClick = () => {
        setFindMatch(false);
    }

    return (
        <div>
            {successfulSubmit && <div className="successful-submit">
                                        {successMsg}
                                 </div>}
            <button className="find-match" onClick={handleClick}>
                <div id="empty-line5">Find</div>
                <div id="empty-line5">your</div>
                <div>match</div>
            </button>
            <div className="extra-info">{ extraInfo }</div>
        </div>
    );
}
 
export default FindMatchBtn;