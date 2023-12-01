
# יצירת פרוייקט עם אוטנטיקיישן 
מתחילים עם ג׳אנגו 
פותחים תיקייה לכל טכנולוגיה ובעצם לבק ולפרונט 
משתמשים בסביבה וירטואלית להתקנת הג׳אנגו וכל תוספי הבק 
מייצרים פרוייקט בג׳אנגו 
הכולל גם אפליקציה 
ומציירים פרוייקט בריאקט 
להריץ את השרתים לבדיקה 

# עבודה על הבק  
התקנת תוספים כמו רסט פריים וורק , ותוספים לאוטנטיקיישן 
jwt 
axios

חיבור urls.py  --> לא לשכוח שימוש באינקלוד includ 
ויצירת views.py --> restframework


# מצורף ריקאורמנטס בתחתית העמוד 

# הוספת הגדרות לג׳אנגו כגון : ==>  
מצורף קובץ למטה  => יש לשנות את המפתח המוסתר סיקרט קי 
cors 
appname - שם האפליקציה של ג׳אנגו 
restframework 
ועוד ... 

# לייצר סופר יוזר  


##### ##### ##### לשים לב לשים הגדרות נכונות כדיי שהכל יעבוד בגלל החיבור לאוטנטיקיישן #### #### ##### 

# בדיקה והזנת סופריוזר  /admin 





################### front -- react  #############

# יצירת קומפוננטות ושימוש בהוקס וראוטינג 

# hook - useState (snniped)  ==>  מאפשר לריאקט לזהות שינויים ולהציג אותם ללא צורך בג׳אווסקריפט  useState שימוש ב

# דוגמא לשימוש ג׳נרי טופס כניסה login - github













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







# setting django 


import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "django-insecure-@&5$$%b6z+x*2a54f(-r5l!#jy0ced=b=y75uj$zm9t=bpr%z("  ---->>    dont paste this!!!!!! 
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

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

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (


        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

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

ROOT_URLCONF = 'myproj.urls'

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

WSGI_APPLICATION = 'myproj.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

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

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOW_ALL_ORIGINS = True