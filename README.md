cd backend
python -m venv venv
source venv/Scripts/activate  # Linux/Mac
# or
venv\Scripts\activate.bat     # Windows

pip install -r ../requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  
python manage.py runserver

cd ..
cd frontend
npm install
npm run dev
