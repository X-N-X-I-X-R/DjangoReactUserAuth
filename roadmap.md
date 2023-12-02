git branch
 git checkout grocery_store

<<<<<<< HEAD
## Roadmap מפורט לפיתוח פרויקט עם Django ו-React
=======

# יצירת פרוייקט עם אוטנטיקיישן 
מתחילים עם ג׳אנגו 
פותחים תיקייה לכל טכנולוגיה ובעצם לבק ולפרונט 
משתמשים בסביבה וירטואלית להתקנת הג׳אנגו וכל תוספי הבק 
מייצרים פרוייקט בג׳אנגו 
הכולל גם אפליקציה 
ומציירים פרוייקט בריאקט 
להריץ את השרתים לבדיקה 
>>>>>>> origin/main

### חלק 1: פיתוח Backend באמצעות Django

1. **הקמת סביבה וירטואלית ל-Django:**
   - יצירת סביבה וירטואלית והתקנת Django ותוספות נדרשות.

2. **יצירת פרויקט ואפליקציה ב-Django:**
   - הפעלת פקודות ליצירת פרויקט חדש ואפליקציה תוך כדי עבודה במבנה הפרויקט הסטנדרטי של Django.

3. **הגדרת נתיבים ו-Views:**
   - כתיבת נתיבים ב-`urls.py` ויצירת `views.py` להתמודדות עם בקשות HTTP.

4. **הטמעת JWT לאימות:**
   - יישום אימות משתמש באמצעות JSON Web Tokens (JWT) על ידי הרחבת מחלקות מ-Django REST framework.

5. **יצירת נתיבים לרישום והתחברות משתמשים:**
   - פיתוח נתיבים ו-views לטיפול ברישום והתחברות משתמשים, כולל יצירת והחזרת טוקנים.

### חלק 2: פיתוח Frontend באמצעות React

1. **הקמת פרויקט React:**
   - יצירת פרויקט חדש באמצעות `create-react-app`.

2. **פיתוח קומפוננטות להתחברות ורישום:**
   - כתיבת קומפוננטות עבור התחברות ורישום משתמשים, כולל שימוש ב-Hooks כמו `useState`.

3. **שימוש ב-Axios לבקשות HTTP:**
   - יישום בקשות HTTP לשרת Django באמצעות Axios, לשליחת וקבלת נתונים.

4. **ניהול מצב האפליקציה:**
   - העברת מצבים ופונקציות בין קומפוננטות הורה וילד באמצעות Props.

5. **הגדרת נתיבים 

ות React Router:**
   - יישום ניתוב באפליקציה הפרונטלית על מנת לאפשר ניווט דינמי בין דפים שונים.

### חלק 3: חיבור בין Backend ל-Frontend

1. **חיבור בין ה-Frontend ל-Backend:**
   - שילוב הקומפוננטות הפרונטליות עם ה-Backend על מנת לאפשר רישום והתחברות של משתמשים.

2. **ניהול מצב האימות:**
   - שמירת וניהול טוקנים ב-Session Storage לניהול מצב האימות באפליקציה.

---

### רשימת התקנות נדרשות

#### עבור Django:
- Django REST framework
- django-cors-headers (אם נדרש)
- ספריות נוספות לתמיכה ב-JWT

#### עבור React:
- Axios
- React Router
# requirements ==>
asgiref==3.7.2
cffi==1.16.0
cryptography==41.0.5
Django==4.2.7
django-cors-headers==4.3.1
djangorestframework==3.14.0
djangorestframework-jwt==1.11.0
djangorestframework-simplejwt==5.3.0
gunicorn==21.2.0
jwt==1.3.1
packaging==23.2
pycparser==2.21
PyJWT==1.7.1
pytz==2023.3.post1
rest-framework-simplejwt==0.0.2
sqlparse==0.4.4

# istalling road 
pip freeze > requirements.txt

# django project==>
   -- virtual envirement -- 

  virtualenv venv 
  source venv/bin/activate

  -- django install -- 

  
pip install django  
pip install django-cors-headers
pip install djangorestframework
pip install jwt
pip install djangorestframework_simplejwt
pip install gunicorn 
pip install djangorestframework-jwt


# back folder ==>
django-admin startproject myproj .
django-admin startapp base

python manage.py createsuperuser

python manage.py runserver
# setting django  ---> in the end of this file 

# migrations 
python manage.py makemigrations
python manage.py migrate 

  


# front folder react

 npx create-react-app myapp

npm install axios

npm install axios react-router-dom







# setting django ==>

```python
import datetime
from pathlib import Path
from decouple import config

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Secret key configuration
SECRET_KEY = config('SECRET_KEY')
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Host configuration
ALLOWED_HOSTS = ['*']

# Installed applications
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "corsheaders",
    'rest_framework',
    'rest_framework_simplejwt.token_blacklist',    
    'base',
]

# REST framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# Simple JWT configuration
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': datetime.timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': datetime.timedelta(days=90),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': False,
    'ALGORITHM': 'HS256',
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
    'JTI_CLAIM': 'jti',
    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': datetime.timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': datetime.timedelta(days=1),
}

# Middleware configuration
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# URL configuration
ROOT_URLCONF = 'myproj.urls'

# Template configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI application path
WSGI_APPLICATION = 'myproj.wsgi.application'

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation configuration
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Language and timezone settings
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files URL
STATIC_URL = 'static/'

# Default auto field setting
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = ['http://localhost:3000']
