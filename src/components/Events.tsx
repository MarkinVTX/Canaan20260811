import React, { useState, useEffect } from 'react';
import { Language, ChurchEvent } from '../types';
import { TRANSLATIONS, UPCOMING_EVENTS } from '../data';
import { Calendar, Clock, MapPin, Users, HeartHandshake, Check, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EventsProps {
  currentLang: Language;
}

export default function Events({ currentLang }: EventsProps) {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [activeRegId, setActiveRegId] = useState<string | null>(null);
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  
  // Registration form state
  const [fullName, setFullName] = useState('');
  const [seats, setSeats] = useState(1);
  const [successId, setSuccessId] = useState<string | null>(null);

  useEffect(() => {
    // Load event counts and registration states from localStorage
    const storedEvents = localStorage.getItem('canaan_events_data');
    if (storedEvents) {
      try {
        setEvents(JSON.parse(storedEvents));
      } catch (e) {
        setEvents(UPCOMING_EVENTS);
      }
    } else {
      setEvents(UPCOMING_EVENTS);
    }

    const storedRegs = localStorage.getItem('canaan_registered_events');
    if (storedRegs) {
      try {
        setRegisteredIds(JSON.parse(storedRegs));
      } catch (e) {
        setRegisteredIds([]);
      }
    }
  }, []);

  const handleOpenRegistration = (id: string) => {
    setActiveRegId(id);
    setFullName('');
    setSeats(1);
  };

  const handleSubmitRegistration = (e: React.FormEvent, eventId: string) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    // Increment attendee counter
    const updatedEvents = events.map((ev) => {
      if (ev.id === eventId) {
        return { ...ev, attendeesCount: ev.attendeesCount + seats };
      }
      return ev;
    });

    setEvents(updatedEvents);
    localStorage.setItem('canaan_events_data', JSON.stringify(updatedEvents));

    // Mark as registered
    const updatedRegs = [...registeredIds, eventId];
    setRegisteredIds(updatedRegs);
    localStorage.setItem('canaan_registered_events', JSON.stringify(updatedRegs));

    setActiveRegId(null);
    setSuccessId(eventId);
    setTimeout(() => setSuccessId(null), 4000);
  };

  return (
    <section id="events" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.eventsHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.eventsSub[currentLang]}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const isRegistered = registeredIds.includes(event.id);
            const isSuccess = successId === event.id;
            
            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-all relative"
              >
                {/* Event Photo */}
                <div className="h-48 sm:h-52 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent"></div>
                  
                  {/* Category label */}
                  <span className="absolute top-4 left-4 text-[10px] bg-emerald-700/90 backdrop-blur-sm text-white font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    {event.category === 'special' 
                      ? (currentLang === 'en' ? 'Special Event' : '特別活動') 
                      : event.category === 'fellowship' 
                        ? (currentLang === 'en' ? 'Fellowship' : '聯誼聚會') 
                        : (currentLang === 'en' ? 'Church Worship' : '堂慶聚會')}
                  </span>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      {event.title[currentLang]}
                    </h3>
                    <p className="text-stone-600 text-xs font-sans font-light line-clamp-3">
                      {event.description[currentLang]}
                    </p>
                  </div>

                  {/* Metadata fields */}
                  <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-stone-400 shrink-0" />
                      <span>{event.time[currentLang]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-stone-400 shrink-0" />
                      <span>{event.location[currentLang]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-stone-400 shrink-0" />
                      <span>
                        <span className="font-bold text-stone-800">{event.attendeesCount} </span>
                        {TRANSLATIONS.joiningCount[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-2">
                    {isSuccess && (
                      <div className="text-emerald-700 bg-emerald-50 text-xs font-semibold p-3 rounded-xl border border-emerald-100 mb-3 flex items-center gap-1.5 animate-bounce">
                        <Sparkles className="h-4 w-4" />
                        <span>{TRANSLATIONS.registeredSuccess[currentLang]}</span>
                      </div>
                    )}

                    {isRegistered ? (
                      <div className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1.5">
                        <Check className="h-4 w-4" />
                        <span>{currentLang === 'en' ? 'Registered' : '已成功報名'}</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleOpenRegistration(event.id)}
                        id={`register-btn-${event.id}`}
                        className="w-full py-2.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <HeartHandshake className="h-4 w-4" />
                        <span>{TRANSLATIONS.registerButton[currentLang]}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Inline modal registration form */}
                <AnimatePresence>
                  {activeRegId === event.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-stone-900/95 text-white p-6 flex flex-col justify-between z-20 rounded-3xl"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                        <h4 className="font-serif font-bold text-base text-emerald-400">
                          {currentLang === 'en' ? 'Event Registration' : '活動報名'}
                        </h4>
                        <button
                          onClick={() => setActiveRegId(null)}
                          className="p-1 text-stone-400 hover:text-white cursor-pointer"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <form
                        onSubmit={(e) => handleSubmitRegistration(e, event.id)}
                        className="space-y-4 flex-grow flex flex-col justify-center"
                      >
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                            {currentLang === 'en' ? 'Full Name' : '您的全名'}
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                            placeholder={currentLang === 'en' ? 'e.g. John Doe' : '例如：陳小明'}
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                            {currentLang === 'en' ? 'Number of Attendees' : '報名人數'}
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="1"
                              max="10"
                              value={seats}
                              onChange={(e) => setSeats(Number(e.target.value))}
                              className="w-20 bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400 text-center"
                            />
                            <span className="text-xs text-stone-400">
                              {currentLang === 'en' ? 'person(s)' : '人'}
                            </span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer mt-2"
                        >
                          {currentLang === 'en' ? 'Confirm RSVP' : '確認登記'}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
