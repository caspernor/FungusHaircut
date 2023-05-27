from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'

db = SQLAlchemy(app)

class Booking(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(50))
    customer_email = db.Column(db.String(50))
    customer_phone = db.Column(db.String(20))
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
            'customer_phone': booking.customer_phone,
            'date': str(booking.date)  # Convert to string for JSON serialization
        })
    return {'bookings': booking_data}
    

@app.route('/booking', methods=['POST'])
def booking():
    customer_name = request.form.get('customer_name')
    customer_email = request.form.get('customer_email')
    customer_phone = request.form.get('customer_phone')
    date = request.form.get('date')

    booking = Booking(customer_name=customer_name, customer_email=customer_email, customer_phone=customer_phone, date=date)
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

