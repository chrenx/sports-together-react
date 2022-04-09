import {useState} from "react";

function date_format(inputDate, format) {
    console.log("date_format funciton is using");
    //parse the input date
    const date = new Date(inputDate);
  
    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    
  
    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        
  
    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }
  
    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));
  
    return format;
}

function time_format(inputTime) {
    var hours = parseInt(inputTime.substring(0, 2));
    var minute = inputTime.substring(3, 5);
    var suffix = hours < 12 ? "AM":"PM";
    var time = ((hours + 11) % 12 + 1).toString() + ':' + minute + ' ' + suffix;
    return time;
}


const FormPage = ({setFindMatch, setSuccess}) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState(undefined);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [sport, setSport] = useState("Basketball");
    const [numOfPeopleNeeded, setNumOfPeople] = useState(undefined);

    const [isPending, setIsPending] = useState(false);


    const handleSubmit = () => {
        setIsPending(true);
        var newPost = {
            "sport": sport,
            "numOfPeople": parseInt(numOfPeopleNeeded),
            "currentNumOfPeople": 1,
            "location": location,
            "host": fullname,
            "contactInfo": email,
            "date": date,
            "time": time,
            "joinBtn": "Join",
            "own": true
        };
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(() => {
                console.log('new post added');
                setIsPending(false);
                setSuccess(true);
                setTimeout(() => window.location.reload(), 500);
            })
        
        setFindMatch(true);
    };

    const handleCancel = () => {
        setFindMatch(true);
    };

    return (
        <div className="form-page" onSubmit={handleSubmit}>
            <form className="basic-info">
                <div className="form-header">
                    <h3>Please fill the information below so that we can find your proper match.</h3>
                </div>
                
                <div className="info">
                    <label>Full name:</label>
                    <input type="text"
                           required 
                        //    value={ fullname } 
                           onChange={(e) => setFullname(e.target.value)}>
                    </input>

                    <label>Email:</label>
                    <input type="email"
                           required 
                        //    value={ email } 
                           onChange={(e) => setEmail(e.target.value)}>
                    </input>

                    <label>Preferred location:</label>
                    <input type="text"
                           required 
                        //    value={ location } 
                           onChange={(e) => setLocation(e.target.value)}>
                    </input>

                    <label>Preferred date:</label>
                    <input type="date"
                           required 
                        //    value={ date } 
                           onChange={(e) => setDate(date_format(e.target.value, 'MM-dd-yyyy'))}>
                    </input>

                    <label>Preferred time:</label>
                    <input type="time"
                           required 
                        //    value={ time } 
                           onChange={(e) => setTime(time_format(e.target.value))}>
                    </input>

                    <label>Sport:</label>
                    <select required
                            // value={ sport } 
                            onChange={(e) => setSport(e.target.value)}>
                        <option value="Basketball">Basketball</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Gym">Gym</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Squash">Squash</option>
                    </select>

                    <label>Number of people needed (please include yourself):</label>
                    <input type="number"
                           required 
                           min="2"
                           max="100"
                        //    value={ numOfPeopleNeeded } 
                           onChange={(e) => setNumOfPeople(e.target.value)}>
                    </input>
                
                    {!isPending && <button className="submit-form-btn" type="submit" >Submit</button>}
                    {isPending && <button className="submit-form-btn" disabled>Adding Post...</button>}

                    <button className="cancel-form-btn" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="clear-form-btn" type="reset" >Clear All</button>
                </div>
                </form>
        </div>
    );
}
 
export default FormPage;