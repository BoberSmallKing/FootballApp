# Django + React Project Setup

## Backend


cd backend
python -m venv venv
source venv/Scripts/activate  # для Bash (Git Bash, WSL и т.п.)

venv\Scripts\activate.bat     # для CMD/PowerShell

pip install -r ../requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

cd ..
cd frontend
npm install
npm run dev
