import { useState } from 'react';
import { Loader, X, CalendarIcon } from 'lucide-react';
import { useEvents } from '@/hooks/useEvents';
import urlBuilder from '@sanity/image-url';
import NotFound404 from './NotFound404';

const WeekEvents = () => {
    const today = new Date();
    const [selectedWeekEvents, setSelectedWeekEvents] = useState(null);

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

    // Calcular o primeiro e último dia da semana
    const getWeekDates = () => {
        const startOfWeek = new Date(today);
        const endOfWeek = new Date(today);

        // Definir o primeiro dia da semana (domingo)
        const dayOfWeek = today.getDay();
        startOfWeek.setDate(today.getDate() - dayOfWeek); // Ajusta para o domingo da semana

        // Definir o último dia da semana (sábado)
        endOfWeek.setDate(today.getDate() + (6 - dayOfWeek)); // Ajusta para o sábado da semana

        // Formatar as datas para exibição
        const formatDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            return `${day}/${month}`;
        };

        return {
            startOfWeek: formatDate(startOfWeek),
            endOfWeek: formatDate(endOfWeek),
            startDate: startOfWeek, // Data para filtro
            endDate: endOfWeek // Data para filtro
        };
    };

    const { startOfWeek, endOfWeek, startDate, endDate } = getWeekDates();

    const getWeekEvents = () => {
        const weekEvents = eventsData.filter(event => {
            const eventDate = new Date(event.datetime);
            return eventDate >= startDate && eventDate <= endDate; // Filtra os eventos dentro da semana
        });

        const sortedEvents = weekEvents.sort((a, b) => {
            const dateA = new Date(a.datetime);
            const dateB = new Date(b.datetime);
            return dateA - dateB;
        });

        return sortedEvents;
    };

    const handleOpenWeekPopup = () => {
        const events = getWeekEvents();
        setSelectedWeekEvents(events);
    };

    const handleClosePopup = () => {
        setSelectedWeekEvents(null);
    };

    const formatTime = (datetime) => {
        const date = new Date(datetime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    };

    return (
        <div className="flex gap-2 items-center justify-center w-full">
            <div className='flex gap-2 items-center justify-center w-full cursor-pointer bg-white p-1.5 rounded-md' onClick={handleOpenWeekPopup}>
                <button
                    className="p-3 bg-artLime-50 rounded-full text-white hover:bg-artLime-100 transition duration-200"
                >
                    <CalendarIcon size={24} />
                </button>
                <span className='text-artLime-50 text-xl font-barlow font-semibold hidden lg:block'>Agenda</span>
            </div>

            {/* Popup */}
            {selectedWeekEvents && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-6">
                    <div className="bg-white p-8 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] min-h-80 max-h-[75vh] relative overflow-y-auto">
                        <X
                            size={28}
                            className="text-artMidBlue-50 absolute top-6 right-6 cursor-pointer"
                            onClick={handleClosePopup}
                        />
                        <h2 className="text-2xl font-semibold font-barlow text-artMidBlue-50">Eventos da Semana</h2>
                        <h6 className='font-barlow text-sm'>Semana - {startOfWeek} à {endOfWeek}</h6>
                        <div className="mt-14">
                            {selectedWeekEvents.length > 0 ? (
                                selectedWeekEvents.map((event, index) => (
                                    <div key={index} className="border-b pb-4 mb-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <small className="text-xs text-artDarkBlue-50">{formatDate(event.datetime)}</small>
                                                <h3 className="text-lg font-medium">{event.title}</h3>
                                                <p className="text-sm text-artDarkBlue-50">{formatTime(event.datetime)}</p>
                                            </div>
                                            <img
                                                src={urlBuilder({ projectId, dataset }).image(event.poster.asset).url()}
                                                alt={event.title}
                                                className="w-16 h-16 rounded-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">Nenhum evento encontrado para esta semana.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeekEvents;
