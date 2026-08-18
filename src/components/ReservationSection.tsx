import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, Sparkles, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

interface ReservationSectionProps {
  theme: 'dark' | 'light';
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '07:30 PM',
    guests: '2',
    seatingPreference: 'Open-Air Lawn',
    specialRequest: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const seatingOptions = [
    'Open-Air Lawn',
    'Indoor Luxury Lounge',
    'Romantic Private Booth',
    'Family Banquet Hall',
    'Fireplace Seating'
  ];

  const timeSlots = [
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM',
    '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleBookViaWhatsApp = () => {
    const nameStr = formData.name.trim() || 'Guest';
    const dateStr = formData.date || 'Upcoming Date';
    const timeStr = formData.time;
    const guestsStr = formData.guests;
    const seatingStr = formData.seatingPreference;
    const specialStr = formData.specialRequest ? `\nSpecial Request: ${formData.specialRequest}` : '';

    const text = encodeURIComponent(
      `Hello Night Queen Restaurant & Lawn,\nI would like to make a table reservation:\n\n👤 Name: ${nameStr}\n📅 Date: ${dateStr}\n⏰ Time: ${timeStr}\n👥 Guests: ${guestsStr}\n🌿 Seating: ${seatingStr}${specialStr}\n\nPlease confirm availability.`
    );

    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  // Get tomorrow's date for default min attribute
  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <section
      id="reservation"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#faf8f5] text-[#121216]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Table & Event Bookings
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Reserve Your Experience
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            Secure your preferred table or open-air lawn space. Our team will verify your reservation promptly.
          </p>
        </div>

        {/* Form Container Card */}
        <div className={`p-6 sm:p-10 md:p-12 border shadow-2xl relative overflow-hidden ${
          theme === 'dark'
            ? 'glass-card border-white/10'
            : 'bg-white border-[#ded5c2]'
        }`}>
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 px-4"
              >
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f5f4]">
                  Reservation Request Received!
                </h3>

                <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#d4af37]">{formData.name}</strong>. We have noted your request for <strong>{formData.guests}</strong> on <strong>{formData.date} at {formData.time}</strong> ({formData.seatingPreference}).
                </p>

                <p className="mt-2 text-xs text-white/50">
                  Our host will contact you at <strong className="text-white">{formData.phone}</strong> to confirm your table placement.
                </p>

                {/* Instant WhatsApp Confirmation Button */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleBookViaWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details to WhatsApp Host</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#d4af37] text-[#d4af37] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer"
                  >
                    Make Another Booking
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="reservation-name-input"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10 text-white'
                          : theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id="reservation-phone-input"
                      type="tel"
                      placeholder="e.g. 99731 86420"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        errors.phone
                          ? 'border-rose-500 bg-rose-500/10 text-white'
                          : theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reservation Date *</span>
                    </label>
                    <input
                      id="reservation-date-input"
                      type="date"
                      min={todayDate}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        errors.date
                          ? 'border-rose-500 bg-rose-500/10 text-white'
                          : theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  {/* Time Slot Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      id="reservation-time-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-[#0e0e0e] text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      id="reservation-guests-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="3 to 4 Guests">3 – 4 Guests (Small Family)</option>
                      <option value="5 to 8 Guests">5 – 8 Guests (Family & Group)</option>
                      <option value="9 to 15 Guests">9 – 15 Guests (Party Gathering)</option>
                      <option value="15+ Guests (Lawn Event)">15+ Guests (Grand Lawn Event)</option>
                    </select>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Seating Ambiance</span>
                    </label>
                    <select
                      id="reservation-seating-select"
                      value={formData.seatingPreference}
                      onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                      className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37]'
                          : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37]'
                      }`}
                    >
                      {seatingOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0e0e0e] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Special Request / Celebration Note (Optional)</span>
                  </label>
                  <textarea
                    id="reservation-special-request"
                    rows={3}
                    placeholder="e.g. Birthday decoration on table, cake arrangement, high chair for infant..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className={`w-full px-4 py-3 border text-sm outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0e0e0e] border-white/10 text-[#f5f5f4] focus:border-[#d4af37] placeholder:text-white/30'
                        : 'bg-[#faf8f5] border-[#dfd5c2] text-[#121216] focus:border-[#d4af37] placeholder:text-[#8e8a80]'
                    }`}
                  />
                </div>

                {/* Submit & WhatsApp Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    id="reservation-submit-btn"
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-8 bg-[#d4af37] text-black font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#e5c378] transition-all cursor-pointer"
                  >
                    Confirm Table Reservation
                  </button>

                  <button
                    id="reservation-whatsapp-btn"
                    type="button"
                    onClick={handleBookViaWhatsApp}
                    className="w-full sm:w-auto py-4 px-6 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-white/50">
                    Need immediate assistance? Call us directly at <a href={`tel:${restaurantConfig.phone}`} className="text-[#d4af37] font-semibold underline">{restaurantConfig.displayPhone}</a>
                  </p>
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
