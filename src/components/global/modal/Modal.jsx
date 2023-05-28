import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import clsx from "clsx";

export default function ExampleModal({ open, handleClose }) {
  const cancelButtonRef = useRef(null);
  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const [bookingData, setBookingData] = useState([]);

  const fetchAvailability = async () => {
    try {
      const year = date.$d.getFullYear();
      const month = String(date.$d.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so adding 1 and padding with leading zeros
      const day = String(date.$d.getDate()).padStart(2, '0'); // Padding the day with leading zeros

      const response = await fetch(`http://127.0.0.1:5000/timeslot/${year}-${month}-${day}`);
      const data = await response.json();
      setBookingData(data.available_timeslots);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBookingSubmit = async () => {
    const bookingData = {
      date,
      time: dateTime,
      name,
      email
    };
    
    try {
      const response = await fetch('http://127.0.0.1:5000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      
      if (response.ok) {
        console.log('Booking successful!');
        // Handle success or redirect to another page
      } else {
        console.error('Booking failed!');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const checkAvailability = async () => {
    console.log(date)
    if (!date.$y) return;
    /* fetch data her */
    fetchAvailability();
  };

  useEffect(() => {
    console.log(bookingData)
  }, [bookingData])

  const handleBookedTime = () => {
    const alertMessage = `Du har booket tiden ${date} kl. ${dateTime}`;
    alert(alertMessage);
  };
  
  useEffect(() => {}, [dateTime]);

  useEffect(() => {
    console.log(date.$d);
    checkAvailability();
  }, [date]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Book time
                    </Dialog.Title>
                    <div className="mt-2">
                      <DatePicker
                        label="Bookin dato"
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                      />
                    </div>
                    
                    {/* TODO: Gjør dette til selectable chips */}
                    <div className="flex items-center justify-between mt-6">
                      <h2 className="text-sm font-medium leading-6 text-gray-900">
                        Velg tidspunkt
                      </h2>
                    </div>
                    <RadioGroup
                      value={dateTime}
                      onChange={setDateTime}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Velg tidspunkt
                      </RadioGroup.Label>

                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {bookingData.length > 0 &&
                          bookingData.map((opening, index) => (
                            <RadioGroup.Option
                              key={index}
                              value={opening}
                              className={({ active, checked }) =>
                                clsx(
                                  active
                                    ? "ring-2 ring-light ring-offset-2"
                                    : "",
                                  checked
                                    ? "bg-light text-black hover:bg-cream"
                                    : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                                  "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer	"
                                )
                              }
                            >
                              <RadioGroup.Label as="span">
                                {opening}
                              </RadioGroup.Label>
                            </RadioGroup.Option>
                          ))}
                      </div>
                    </RadioGroup>
                    <div className="">
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Namn
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Petter hansen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="petter@hansen.dk"
                            
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  
                  
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-light px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light sm:col-start-2"
                    onClick={() => handleBookingSubmit()}
                  >
                    Book tid
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Tilbage
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
