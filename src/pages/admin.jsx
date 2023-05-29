import { useEffect, useState } from "react";

export default function AdminPage() {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      fetchBookings();
    }, []);
  
    const fetchBookings = async () => {
      try {
        const response = await fetch('https://fungusbe.azurewebsites.net/'); // Azure back-end URL her
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    useEffect(() => {
        console.log(bookings)
    }, [bookings])
  
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {/* {bookings.map((booking) => (
          <li key={booking.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={booking.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{booking.customer_name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{booking.customer_email}</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{booking.time}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Date: {booking.date}
              </p>
            </div>
          </li>
        ))} */}
      </ul>
    );
  }