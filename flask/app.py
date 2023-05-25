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

if __name__ == '__main__':
    app.run(debug=True)

