"""
from flask import Flask, request
import pyodbc
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

server = 'fungusbooking.database.windows.net'
database = 'FungusBooking'
username = 'CloudSA80f32b97'
password = 'Fungushaircut100'
driver = '{ODBC Driver 17 for SQL Server}'  # Update the driver based on your system

connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'
connection = pyodbc.connect(connection_string)

class Booking:
    def __init__(self, id, customer_name, customer_email, date):
        self.id = id
        self.customer_name = customer_name
        self.customer_email = customer_email
        self.date = date

@app.route('/', methods=['GET'])
def getIndex():
    return 'Hejhej Backend'

@app.route('/bookings', methods=['GET'])
def getBookings():
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM booking')
    bookings = []
    for row in cursor.fetchall():
        booking = Booking(row.id, row.customer_name, row.customer_email, row.date)
        bookings.append({
            'id': booking.id,
            'customer_name': booking.customer_name,
            'customer_email': booking.customer_email,
            'date': str(booking.date)
        })
    return {'bookings': bookings}

@app.route('/booking', methods=['POST'])
def createBooking():
    customer_name = request.form.get('customer_name')
    customer_email = request.form.get('customer_email')
    date = request.form.get('date')

    cursor = connection.cursor()
    cursor.execute('INSERT INTO booking (customer_name, customer_email, date) VALUES (?, ?, ?)',
                   (customer_name, customer_email, date))
    connection.commit()

    return 'Booking successful!'

AVAILABLE_TIME_SLOTS = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

@app.route('/timeslot/<date>', methods=['GET'])
def getAvailableTimeslots(date):
    requested_date = datetime.strptime(date, "%Y-%m-%d")
    cursor = connection.cursor()
    cursor.execute('SELECT date FROM booking WHERE date = ?', requested_date.date())
    booked_timeslots = [str(row.date) for row in cursor.fetchall()]
    available_timeslots = [slot for slot in AVAILABLE_TIME_SLOTS if slot not in booked_timeslots]

    return {'available_timeslots': available_timeslots}

if __name__ == '__main__':
    app.run(debug=True)
"""




from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


server = 'fungusbooking.database.windows.net'
database = 'FungusBooking'
username = 'CloudSA80f32b97'
password = 'Fungushaircut100'
driver = '{ODBC Driver 18 for SQL Server}'  # Update the driver based on your system


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'

#app.config['SQLALCHEMY_DATABASE_URI'] = f"mssql+pymssql://{username}:{password}@{server}/{database}?driver={driver}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Booking(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(50))
    customer_email = db.Column(db.String(50))
    date = db.Column(db.DateTime)

@app.route('/', methods=['GET'])
def getIndex():
    return 'Hejhej Backend'

@app.route('/bookings', methods=['GET'])
def getBookings():
    bookings = Booking.query.all()
    booking_data = []
    for booking in bookings:
        booking_data.append({
            'id': booking.id,
            'customer_name': booking.customer_name,
            'customer_email': booking.customer_email,
            'date': str(booking.date)
        })
    return {'bookings': booking_data}
    

@app.route('/booking', methods=['POST'])
def booking():
    customer_name = request.form.get('customer_name')
    customer_email = request.form.get('customer_email')
    date = request.form.get('date')

    booking = Booking(customer_name=customer_name, customer_email=customer_email, date=date)
    db.session.add(booking)
    db.session.commit()

    return 'Booking successful!'

AVAILABLE_TIME_SLOTS = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

@app.route('/timeslot/<date>', methods=['GET'])
def getAvailableTimeslots(date):
    requested_date = datetime.strptime(date, "%Y-%m-%d")
    bookings_on_date = Booking.query.filter(db.func.date(Booking.date) == requested_date.date()).all()
    booked_timeslots = [booking.date.strftime("%H:%M") for booking in bookings_on_date]
    available_timeslots = [slot for slot in AVAILABLE_TIME_SLOTS if slot not in booked_timeslots]

    return {'available_timeslots': available_timeslots}

if __name__ == '__main__':
    app.run(debug=True)
