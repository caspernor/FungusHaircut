import Calendar from "@/components/booking/Calendar";

export default function Booking () {
    return (
    <div className="relative bg-cream py-24 sm:py-32 flex justify-center items-center h-screen">
    <div className="hidden-on-mobile md:absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-orangesmash" />
    <div className="hidden-on-mobile md:absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-orangesmash opacity-70" />
    <div className="hidden-on-mobile md:absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-orangesmash opacity-40" />
            <div className="max-w-7xl bg-orangesmash shadow rounded-lg">
                <Calendar />
            </div>
        </div>
    )
}