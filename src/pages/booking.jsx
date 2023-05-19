import Calendar from "@/components/booking/Calendar";

export default function Booking () {
    return (
        <div className="mt-20 flex justify-center">
            <div className="max-w-7xl bg-gray-200 shadow rounded-lg">
                <Calendar />
            </div>
        </div>
    )
}