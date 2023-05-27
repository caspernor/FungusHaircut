import Calendar from "@/components/booking/Calendar";

export default function Booking () {
    return (
    <div className="relative bg-orangesmash py-24 sm:py-32 flex justify-center items-center h-screen">
    <div className="absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-cream" />
    <div className="absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-cream opacity-70" />
    <div className="absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-cream opacity-40" />
            <div className="max-w-7xl bg-cream shadow rounded-lg">
                <Calendar />
            </div>
        </div>
    )
}