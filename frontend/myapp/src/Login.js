import React, { useState } from 'react'
import axios from 'axios'
import './Logincss.css'
import RegistrationForm from './RegistrationForm';
import Homepage from './Components/Homepage';


// שימוש ב פרופס כדי לקבל את הפרופס של הלוגין והאימייל של המשתמש שמתחבר ולעדכן אותם בזמן הריצה של הקוד
// פרופס הוא כמו משתנה שמקבלים מהקומפוננטה האב ומעדכנים אותו בקומפוננטה הבת ומעדכנים אותו בקומפוננטה האב וכך הלאה 
// פרופס זה קשור לסטייט רק שהוא נמצא בקומפוננטה האב ומעדכן את הסטייט של הקומפוננטה האב וגם של הקומפוננטה הבת 
const Login = (props) => {

    // שימוש בהוקס כדי לשמור את הסטייט של המשתנים שלנו ולעדכן אותם בזמן הריצה של הקוד 
    const [userName, setuserName] = useState("")
    const [pwd, setpwd] = useState("")
    const [logged, setlogged] = useState(false)
    const MY_SERVER = ("http://localhost:8000/login/")
 // פונקציה שמבצעת פוסט לכתובת של השרת שלנו ושולחת את הנתונים של המשתמש שהכניס את הפרטים שלו לשרת הג׳אנגו ומקבלת תשובה מהשרת
    const doLogin = () => {
        console.log(userName, pwd);

        // שימוש ב אקסיוס כדי לבצע פוסט לשרת שלנו ולשלוח את הנתונים של המשתמש שהכניס את הפרטים שלו לשרת הג׳אנגו ומקבלת תשובה מהשרת
        axios({
            method: 'post',
            url: MY_SERVER,
            data: {
                username: userName,
                password: pwd
            },
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response.data.access); // הטוקן של המשתמש שמתחבר 
                sessionStorage.setItem('token', response.data.access) // שמירת הטוקן של המשתמש בסשן סטורג׳
                const token = response.data.access // הגדרת משתנה שמכיל את הטוקן של המשתמש שמתחבר
                const object = JSON.parse(atob(token.split('.')[1])) // הגדרת משתנה שמכיל את הטוקן של המשתמש שמתחבר ומפענח אותו ומכניס אותו לתוך אובייקט כדיי לקבל את האימייל של המשתמש שמתחבר ושנוכל להציג אותו בקומפוננטה האב
                console.log(object.email); 
                 setlogged(true)   // ביקשנו את האיימיל מבלי להשתמש ביוזסטייט אלא לקחנו אותו משרת הג׳אנגו בעת יצירת סופריוזר
                props.logged(true)
                props.setUsername(userName);  // Set the username in the parent component

                
            });
    }
    //    פונקציה שמבצעת דיליט לטוקן של המשתמש ומעדכנת את הסטייט של המשתנה של הלוגין לפולס (שקר) ומעדכנת את הסטייט של הפרופס של הלוגין לפולס (שקר)

    const [showRegister] = useState(false);

  
  
    return (
      <div className="login-container">
        <div className="login-box">
          {showRegister ? (
            <RegistrationForm logged={setlogged} setUsername={props.setUsername} />
          ) : logged ? (
            <Homepage></Homepage>
              
          ) : (
            <div>
              <div className="label">User Name:</div>
              <input onChange={(evt) => setuserName(evt.target.value)} />
              <div className="label">Password:</div>
              <input type="password" onChange={(evt) => setpwd(evt.target.value)} />
              <button onClick={() => doLogin()}>Login</button>
      
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Login;