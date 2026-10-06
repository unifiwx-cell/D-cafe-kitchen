import { useState } from 'react';
import { X, Calendar, Users, Clock, CheckCircle, Phone, Utensils } from 'lucide-react';
import { useRestaurant } from '../context/RestaurantContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal() {
  const { isReservationModalOpen, setIsReservationModalOpen } = useRestaurant();

  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:30');
  const [seating, setSeating] = useState('indoor');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isReservationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DCK-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsConfirmed(true);
  };

  const handleClose = () => {
    setIsConfirmed(false);
    setIsReservationModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-lg bg-[#0e0e12] border border-[#c5a059]/35 rounded-2xl p-6 sm:p-8 text-[#f5f2eb] shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8c8275] hover:text-[#f5f2eb] hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          /* Confirmation Success View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center text-[#dfc27a] mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="font-devanagari text-xs text-[#c5a059] tracking-widest uppercase block mb-1">
              मेज आरक्षित
            </span>
            <h3 className="font-serif text-3xl text-[#f5f2eb] mb-2">
              Table Reserved!
            </h3>
            <p className="font-sans text-xs text-[#b8ac9c] mb-6">
              Confirmation code: <span className="font-mono text-[#dfc27a] font-bold">{bookingRef}</span>
            </p>

            <div className="p-4 rounded-xl bg-[#141418] border border-white/5 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between text-[#8c8275]">
                <span>Guest:</span>
                <span className="text-[#f5f2eb]">{name}</span>
              </div>
              <div className="flex justify-between text-[#8c8275]">
                <span>Party Size:</span>
                <span className="text-[#f5f2eb]">{guests} Guests</span>
              </div>
              <div className="flex justify-between text-[#8c8275]">
                <span>Date & Time:</span>
                <span className="text-[#f5f2eb]">{date} at {time}</span>
              </div>
              <div className="flex justify-between text-[#8c8275]">
                <span>Location:</span>
                <span className="text-[#dfc27a]">The Hosteller, Ground Floor, Tajganj</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8c8275] mb-6">
              Need to adjust your reservation? Call us at <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-[#dfc27a] underline">{RESTAURANT_INFO.phone}</a>.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                  Reserve a Table
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
                Dine at D Cafe & Kitchen
              </h3>
              <p className="font-sans text-xs text-[#8c8275] mt-1">
                Ground Floor, The Hosteller, Tajganj, Agra · Closes 11 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Guests */}
                <div>
                  <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8c8275]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8c8275]" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-8 pr-2 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8c8275]" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                    >
                      {[
                        '08:30 AM', '09:30 AM', '11:00 AM', '12:30 PM',
                        '01:30 PM', '02:30 PM', '07:00 PM', '07:30 PM',
                        '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
                      ].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                  Seating Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'indoor', label: 'Air-Cooled Indoor' },
                    { id: 'quiet', label: 'Quiet Corner' },
                    { id: 'patio', label: 'Courtyard / Patio' },
                  ].map((seat) => (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => setSeating(seat.id)}
                      className={`py-2 px-1 text-[11px] font-sans rounded border text-center transition-all ${
                        seating === seat.id
                          ? 'bg-[#1e1e24] border-[#c5a059] text-[#dfc27a]'
                          : 'bg-[#141418] border-white/5 text-[#8c8275]'
                      }`}
                    >
                      {seat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 085959 55905"
                    className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-[10px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                  Special Notes / Dietary Preferences (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Arriving from Taj Mahal tour, celebration dinner"
                  className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 text-[#f5f2eb] focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold uppercase tracking-widest hover:brightness-110 shadow-lg transition-all"
                >
                  Confirm Table Reservation
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#8c8275]">
                <Phone className="w-3 h-3 text-[#c5a059]" />
                <span>Instant confirmation · No booking deposit required</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
