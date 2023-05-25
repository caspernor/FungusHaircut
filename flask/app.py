from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'

db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(50))
    customer_email = db.Column(db.String(50))
    customer_phone = db.Column(db.String(20))
    date = db.Column(db.DateTime)

@app.route('/', methods=['GET'])
def getIndex():
    return 'Hejhej Backend'

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

AVAILABLE_TIME_SLOTS = ['09:00', '09:30', '10:00', '11:00']

@app.route('/timeslot/<date>', methods=['GET'])
def getAvailableTimeslots(date):
    requested_date = datetime.strptime(date, "%Y-%m-%d")
    bookings_on_date = Booking.query.filter(db.func.date(Booking.date) == requested_date.date()).all()
    booked_timeslots = [booking.date.strftime("%H:%M") for booking in bookings_on_date]
    available_timeslots = [slot for slot in AVAILABLE_TIME_SLOTS if slot not in booked_timeslots]

    return {'available_timeslots': available_timeslots}

if __name__ == '__main__':
    app.run(debug=True)

