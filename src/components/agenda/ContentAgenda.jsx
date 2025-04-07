import { useEvents } from '@/hooks/useEvents';
import { ChevronLeftIcon, ChevronRightIcon, Loader, X } from 'lucide-react';
import { useState } from 'react';
import NotFound404 from '../NotFound404';
import urlBuilder from '@sanity/image-url';

const ContentEventsList = () => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET;
    const { eventsData, loading, error } = useEvents();

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedEvent, setSelectedEvent] = useState(null);

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <Loader className='animate-spin' size={32} />
        </div>;
    }

    if (error) {
        return <div className="max-w-[1140px] mx-auto"><NotFound404 /></div>;
    }

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

    const eventsInMonth = eventsData.filter(event => {
        const eventDate = new Date(event.datetime);
        return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
    });

    const groupedEvents = eventsInMonth.reduce((acc, event) => {
        const eventDate = new Date(event.datetime);
        const formattedDate = eventDate.toISOString().split("T")[0];

        if (!acc[formattedDate]) {
            acc[formattedDate] = [];
        }
        acc[formattedDate].push(event);
        return acc;
    }, {});

    // Ordena os dias em ordem crescente
    const sortedDates = Object.keys(groupedEvents).sort((a, b) => new Date(a) - new Date(b)); 

    // Ordena os eventos dentro de cada dia de forma crescente
    sortedDates.forEach(dateKey => {
        groupedEvents[dateKey].sort((a, b) => new Date(a.datetime) - new Date(b.datetime)); // Ordenação de horários
    });

    const formatDate = (date) => {
        const dayNumber = date.getDate();
        const dayName = date.toLocaleDateString('pt-BR', { weekday: 'long' });
        return { dayNumber, dayName };
    };

    const formatTime = (time) => {
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(":", "H");
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
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

            <div className="w-full max-w-[600px] mx-auto p-4">
                {sortedDates.length === 0 ? (
                    <div className="text-center text-2xl text-artMidBlue-50">Não há eventos este mês.</div>
                ) : (
                    sortedDates.map((dateKey) => {
                        const eventDate = new Date(dateKey);
                        const { dayNumber, dayName } = formatDate(eventDate);

                        return (
                            <div key={dateKey}>
                                <div className="text-center mb-6">
                                    <h3 className='font-barlow font-black text-3xl text-artMidBlue-50'>{dayNumber}</h3>
                                    <h4 className='font-barlow font-light text-2xl text-artDarkBlue-50'>{dayName}</h4>
                                </div>
                                <ul>
                                    {groupedEvents[dateKey].map((event) => {
                                        const eventTime = formatTime(new Date(event.datetime));

                                        return (
                                            <li
                                                key={event._id}
                                                className="p-4 mb-4 bg-lightGray-50 rounded-md cursor-pointer bg-artLightBlue-50"
                                                onClick={() => handleEventClick(event)}
                                            >
                                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white">
                                                    <span className="font-medium font-barlow text-2xl text-white">{eventTime}</span>
                                                    <span className="font-bold font-barlow text-2xl text-white hidden sm:flex">|</span>
                                                    <span className="font-ligth font-barlow text-2xl text-white">{event.title}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Modal dados do evento */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-6">
                    <div className="bg-white p-6 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] relative">
                        <X size={36} className="text-artMidBlue-50 absolute top-4 right-4 cursor-pointer" onClick={handleClosePopup} />
                        <h3 className="text-2xl font-semibold text-artLightBlue-50">{selectedEvent.title}</h3>
                        <p className="text-xl text-artDarkBlue-50">{new Date(selectedEvent.datetime).toLocaleString()}</p>
                        <div className="mt-4">
                            {selectedEvent && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-6">
                                    <div className="bg-white p-6 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] relative">
                                        <X size={36} className="text-artMidBlue-50 absolute top-4 right-4 cursor-pointer" onClick={handleClosePopup} />

                                        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                                            <div>
                                                <h3 className="text-2xl font-semibold font-barlow text-artLightBlue-50">{selectedEvent.title}</h3>
                                                <p className="text-xl font-barlow text-artDarkBlue-50">{new Date(selectedEvent.datetime).toLocaleString()}</p>
                                            </div>
                                            <img
                                                src={urlBuilder({ projectId, dataset }).image(selectedEvent.poster.asset).url()}
                                                alt={selectedEvent.title}
                                                className="w-28 h-28 rounded-full object-cover object-center"
                                            />
                                        </div>
                                        {selectedEvent.content?.map((block, index) => {
                                            if (block._type === "block") {
                                                return <p key={index} className="font-barlow font-medium text-lg py-2">{block.children.map(child => child.text).join(" ")}</p>;
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContentEventsList;
