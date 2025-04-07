import { ChevronLeftIcon, ChevronRightIcon, Loader, X } from 'lucide-react';
import { useState } from 'react';
import { useEvents } from '@/hooks/useEvents';
import NotFound404 from '../NotFound404';
import urlBuilder from '@sanity/image-url';

const ContentEvents = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedEvent, setSelectedEvent] = useState(null);

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const { eventsData, loading, error } = useEvents();
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET;

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <Loader className='animate-spin' size={32} />
        </div>;
    }

    if (error) {
        return <div className="max-w-[1140px] mx-auto"><NotFound404 /></div>;
    }

    const formatDate = (day) => {
        const month = (currentMonth + 1).toString().padStart(2, "0");
        const formattedDay = day.toString().padStart(2, "0");
        return `${currentYear}-${month}-${formattedDay}`;
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const formatTime = (datetime) => {
        const date = new Date(datetime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}H${minutes}`;
    };

    const renderDays = () => {
        const days = [];
        const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

        for (let i = 0; i < firstDayIndex; i++) {
            days.push(
                <div key={`empty-${i}`} className="font-bold text-base bg-artLightBlue-50/30 text-artDarkBlue-50/30 p-5 h-auto min-h-48 rounded-md text-left"></div>
            );
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const formattedDate = formatDate(i);
            const eventsForDay = eventsData.filter(event => {
                const eventDate = new Date(event.datetime).toISOString().split("T")[0];
                return eventDate === formattedDate;
            });

            const weekdayIndex = (firstDayIndex + i - 1) % 7;

            days.push(
                <div
                    key={i}
                    className="font-bold text-base bg-artLightBlue-50 text-artDarkBlue-50 p-5 h-auto min-h-48 rounded-md text-left"
                >
                    <div className="w-full flex items-center gap-2">
                        <span className="font-barlow">{weekdays[weekdayIndex]}</span>{" "}
                        <span className="font-barlow">{i}</span>
                    </div>
                    {eventsForDay.length > 0 && (
                        <div className="text-xs mt-2">
                            {eventsForDay.map((event, index) => (
                                <div
                                    key={index}
                                    className="text-xs text-gray-900 cursor-pointer rounded-sm hover:bg-artDarkBlue-50/50 transition-all duration-200 ease-in-out p-1.5"
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    <p className="font-extrabold">{formatTime(event.datetime)}</p>
                                    <p className="font-medium">{event.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full mt-10">
            <div className="flex items-center justify-center gap-4 sm:gap-16 w-fit sm:max-w-[600px] mb-4 p-4">
                <button className="text-3xl cursor-pointer text-artLime-50" onClick={handlePrevMonth}>
                    <ChevronLeftIcon size={32} />
                </button>
                <h2 className="text-3xl sm:text-5xl text-center font-black text-artLime-50 w-full min-w-64 sm:min-w-96 max-w-64 sm:max-w-96">
                    {months[currentMonth]} {currentYear}
                </h2>
                <button className="text-3xl cursor-pointer text-artLime-50" onClick={handleNextMonth}>
                    <ChevronRightIcon size={32} />
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-2 sm:gap-4 w-full max-w-full">
                {renderDays()}
            </div>

            {/* Popup */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-6">
                    <div className="bg-white p-6 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] relative">
                        <X
                            size={36}
                            className="text-artMidBlue-50 absolute top-4 right-4 cursor-pointer"
                            onClick={() => setSelectedEvent(null)}
                        />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className="text-2xl font-semibold font-barlow text-artLightBlue-50">
                                    {selectedEvent.title}
                                </h3>
                                <p className="text-xl font-barlow text-artDarkBlue-50">
                                    {new Date(selectedEvent.datetime).toLocaleString()}
                                </p>
                            </div>
                            <img
                                src={urlBuilder({ projectId, dataset }).image(selectedEvent.poster.asset).url()}
                                alt={selectedEvent.title}
                                className="w-28 h-28 rounded-full object-cover object-center mr-14"
                            />
                        </div>
                        <div className="mt-4">
                            {selectedEvent.content?.map((block, index) => {
                                if (block._type === "block") {
                                    return (
                                        <p key={index} className="font-barlow font-medium text-lg py-2">
                                            {block.children.map((child) => child.text).join(" ")}
                                        </p>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContentEvents;
