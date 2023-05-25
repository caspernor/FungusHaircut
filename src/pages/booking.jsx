import Calendar from "@/components/booking/Calendar";

export default function Booking () {
    return (
    <div className="flex justify-center relative isolate overflow-hidden pt-14">
      <img
        src="orange-bg.jpeg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"

      />
            <div className="max-w-7xl bg-gray-200 shadow rounded-lg">
                <Calendar />
            </div>
        </div>
    )
}