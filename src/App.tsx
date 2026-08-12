import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NextServiceBanner } from './components/NextServiceBanner';
import { WeeklyBulletinHighlight } from './components/WeeklyBulletinHighlight';
import { AboutSection } from './components/AboutSection';
import { SermonArchive } from './components/SermonArchive';
import { MinistriesSection } from './components/MinistriesSection';
import { EventsCalendar } from './components/EventsCalendar';
import { GivingSection } from './components/GivingSection';
import { PrayerWall } from './components/PrayerWall';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PastoralAIAssistant } from './components/PastoralAIAssistant';
import { BulletinAdminModal } from './components/BulletinAdminModal';
import { AdminLoginModal } from './components/AdminLoginModal';

export default function App() {
  const [lang, setLang] = useState<Language>('zh'); // Default to Traditional Chinese as naturally appropriate for Formosan/Chinese-American church!
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isBulletinAdminOpen, setIsBulletinAdminOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(() => {
    return localStorage.getItem('canaan_admin_email');
  });

  const handleLoginSuccess = (email: string) => {
    setAdminEmail(email);
    localStorage.setItem('canaan_admin_email', email);
  };

  const handleLogout = () => {
    setAdminEmail(null);
    localStorage.removeItem('canaan_admin_email');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenGiving={() => setIsGivingModalOpen(true)}
        onOpenAI={() => setIsAIModalOpen(true)}
        adminEmail={adminEmail}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onLogoutAdmin={handleLogout}
        onOpenBulletinAdmin={() => setIsBulletinAdminOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          lang={lang}
          onOpenGiving={() => setIsGivingModalOpen(true)}
          onOpenAI={() => setIsAIModalOpen(true)}
        />

        {/* Live Countdown & Weekly Gathering Schedule */}
        <NextServiceBanner lang={lang} />

        {/* Weekly Bulletin Highlights: Memory Verse, Bible Reading Plan & Member Care */}
        <WeeklyBulletinHighlight lang={lang} />

        {/* About Church & Pastor Rev. Chen Jiachang */}
        <AboutSection lang={lang} />

        {/* Sermon Audio & Video Archive */}
        <SermonArchive lang={lang} />

        {/* Church Ministries & Groups */}
        <MinistriesSection lang={lang} />

        {/* Events & Calendar */}
        <EventsCalendar lang={lang} />

        {/* Online Giving & Zelle Section */}
        <GivingSection lang={lang} />

        {/* Intercessory Prayer Wall */}
        <PrayerWall lang={lang} onOpenAI={() => setIsAIModalOpen(true)} />

        {/* Contact, Directions & Ride Request */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenGiving={() => setIsGivingModalOpen(true)}
        onOpenAI={() => setIsAIModalOpen(true)}
      />

      {/* Floating Giving Modal */}
      {isGivingModalOpen && (
        <GivingSection
          lang={lang}
          isOpenModal={true}
          onCloseModal={() => setIsGivingModalOpen(false)}
        />
      )}

      {/* AI Pastoral & Bible Companion Modal */}
      <PastoralAIAssistant
        lang={lang}
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />

      {/* Weekly Bulletin PDF Admin / Email Update Modal */}
      <BulletinAdminModal
        lang={lang}
        isOpen={isBulletinAdminOpen}
        onClose={() => setIsBulletinAdminOpen(false)}
      />

      {/* Admin Login Modal for web@canaannewlife.org */}
      <AdminLoginModal
        lang={lang}
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
