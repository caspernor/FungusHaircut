import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import clsx from "clsx";

export default function ExampleModal({ open, handleClose }) {
  const cancelButtonRef = useRef(null);
  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [openings, setOpenings] = useState([]);
  

  const OPENINGS = ["10:00", "10:30", "11:00", "11:30", "12:00",
                    "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00", "16:30", "17:00",
                    "17:30", 
];

  const checkAvailability = async () => {
    if (!date.$y) return;
    /* fetch data her */
    setOpenings(OPENINGS);
  };
  
  /*
  const handleBookedTime = () => {
    const alertMessage = "Du har booket tiden" ${setDate} "kl." ${setTime};
    alert(alertMessage);
  } 

  */

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
                        {openings.length > 0 &&
                          openings.map((opening, index) => (
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
                                  "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1"
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
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-light px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light sm:col-start-2"
                    onClick={() => handleBookedTime}
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