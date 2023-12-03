import React from 'react';
// שימוש ב ריאקט דום כדי להציג את הקומפוננטה של האפ שלנו בדף האינדקס שלנו 
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom"
import Autentication from './Components/Autentication';
// שימוש ב ריאקט ראוטר כדי להציג את הקומפוננטה של האפ שלנו בדף האינדקס שלנו 

// BrowserRouter ===> זהו רכיב ב-React Router,
// שמשמש להקנות יכולות ניתוב באפליקציות React.
// הוא מאפשר ניתוב דינמי בדפדפן, כלומר, טעינה של רכיבים שונים תלוי בכתובת URL,
// מבלי לטעון מחדש את כל הדף.

// Route ==>  זהו רכיב שמשמש להגדרת כלל ניתוב ספציפי.
// כל רכיב Route מקבל נתיב (path) ורכיב (component),
// וכאשר הנתיב בדפדפן תואם את הנתיב המוגדר ב-Route, הרכיב המתאים יוצג.

// Routes ==> רכיב שמשמש כמיכל לאחסון מספר רכיבי Route.
// הוא מאפשר לארגן את כללי הניתוב של האפליקציה בצורה מרוכזת ונוחה לניהול.

// Link ==> רכיב שמשמש ליצירת קישורים בתוך אפליקציית React. 
// במקום להשתמש בתג <a> מ-HTML,
// נעשה שימוש ב-Link כדי להפנות את המשתמש לנתיבים שונים באפליקציה מבלי לטעון מחדש את הדף.

// React.StrictMode ==>  זהו רכיב עזר שב-React, שמשמש לגילוי פרקטיקות לא מומלצות בקוד. הוא לא משפיע על הממשק למשתמש, אלא מסייע בזיהוי בעיות פוטנציאליות בפיתוח
//, כגון שימוש ב-APIs 
// לא תקניים או בעיות בקוד שעלולות להשפיע על יכולת הפעולה של האפליקציה בעתיד.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autentication />} />
        <Route path="/app" element={<App />} /> 
        <Route path="/logout"  element={<div>You are logout please login <Link to="/">Go to Login</Link></div>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);