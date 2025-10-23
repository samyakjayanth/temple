import React, { useState, useEffect } from 'react';
import { Calendar, Bell, Users, Clock, MapPin, Heart, Menu, X, Plus, Edit, Trash2 } from 'lucide-react';

const styles = {
  body: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #fff7ed, white)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  nav: {
    background: 'linear-gradient(to right, #3980a3ff, #1566cfff)',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 50
  },
  navContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem 0',
    transition: 'color 0.2s'
  },
  adminButton: {
    background: 'white',
    color: '#1566cfff',
    padding: '0.25rem 1rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background 0.2s'
  },
  hero: {
    position: 'relative',
    height: '384px',
    background: 'linear-gradient(to right, #3980a3ff, #1566cfff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  heroContent: {
    textAlign: 'center',
    zIndex: 10,
    padding: '0 1rem'
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    marginBottom: '2rem'
  },
  heroButton: {
    background: 'white',
    color: '#3980a3ff',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s'
  },
  cardsContainer: {
    maxWidth: '1280px',
    margin: '-4rem auto 0',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 20
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'box-shadow 0.2s'
  },
  cardIcon: {
    width: '48px',
    height: '48px',
    margin: '0 auto 1rem',
    color: '#3980a3ff'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  cardText: {
    color: '#4b5563'
  },
  section: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1rem'
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  eventCard: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 0.2s'
  },
  eventImage: {
    width: '100%',
    height: '192px',
    objectFit: 'cover'
  },
  eventContent: {
    padding: '1.5rem'
  },
  eventTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  eventInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#4b5563',
    marginBottom: '0.5rem',
    gap: '0.5rem'
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  pageTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold'
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#3980a3ff',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.2s'
  },
  eventListCard: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '1.5rem',
    transition: 'box-shadow 0.2s'
  },
  eventListContent: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem'
  },
  eventListImage: {
    width: '100%',
    height: '192px',
    objectFit: 'cover'
  },
  eventListDetails: {
    padding: '1.5rem',
    flex: 1
  },
  eventListHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '1rem'
  },
  eventListTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  actionButtons: {
    display: 'flex',
    gap: '0.5rem'
  },
  iconButton: {
    padding: '0.5rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '0.5rem'
  },
  calendarDay: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#374151',
    padding: '0.5rem'
  },
  calendarCell: {
    aspectRatio: '1',
    border: '1px solid #e5e7eb',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  updateCard: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    transition: 'box-shadow 0.2s'
  },
  updateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '1rem'
  },
  updateTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  updateMeta: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  updateContent: {
    color: '#374151'
  },
  quoteSection: {
    maxWidth: '896px',
    margin: '4rem auto',
    padding: '0 1rem'
  },
  quoteCard: {
    background: 'linear-gradient(135deg, #f0fdfa, #e0f2fe)',
    borderLeft: '4px solid #3980a3ff',
    borderRadius: '0.5rem',
    padding: '2rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
  },
  quoteText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#1e293b',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  quoteAuthor: {
    fontSize: '1rem',
    color: '#3980a3ff',
    fontWeight: '600',
    textAlign: 'right'
  },
  statsSection: {
    background: 'linear-gradient(135deg, #3980a3ff, #1566cfff)',
    padding: '4rem 1rem',
    marginTop: '4rem'
  },
  statsGrid: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    textAlign: 'center'
  },
  statCard: {
    color: 'white'
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '1.125rem',
    opacity: 0.9
  },
  footer: {
    background: '#1f2937',
    color: 'white',
    marginTop: '4rem'
  },
  footerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1rem'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  footerTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  footerText: {
    color: '#9ca3af',
    marginBottom: '0.5rem'
  },
  footerBottom: {
    borderTop: '1px solid #374151',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#9ca3af'
  },
  mobileMenu: {
    display: 'none',
    paddingBottom: '1rem'
  },
  mobileMenuOpen: {
    display: 'block',
    paddingBottom: '1rem'
  },
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'none'
  }
};

const mediaStyles = `
  @media (min-width: 768px) {
    .nav-links {
      display: flex !important;
    }
    .mobile-menu-btn {
      display: none !important;
    }
    .event-list-content {
      grid-template-columns: 256px 1fr !important;
    }
    .event-list-image {
      width: 256px !important;
      height: 192px !important;
    }
  }
  @media (max-width: 767px) {
    .nav-links {
      display: none !important;
    }
    .mobile-menu-btn {
      display: block !important;
    }
  }
  .card:hover {
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  }
  .event-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  }
  .nav-button:hover {
    color: #fed7aa;
  }
  .hero-button:hover {
    background: #fff7ed;
    transform: scale(1.05);
  }
  .admin-button:hover {
    background: #fff7ed;
  }
  .add-button:hover {
    background: #2563a3;
  }
  .icon-button-edit {
    color: #2563eb;
  }
  .icon-button-edit:hover {
    background: #eff6ff;
  }
  .icon-button-delete {
    color: #2563eb;
  }
  .icon-button-delete:hover {
    background: #fef2f2;
  }
  .calendar-cell:hover {
    background: #fff7ed;
  }
  .calendar-cell-event {
    background: #bfdbfe;
    border-color: #93c5fd;
  }
  .calendar-cell-empty {
    background: #f9fafb;
  }
  .update-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  }
`;

const dailyQuotes = [
  {
    text: "The mind is everything. What you think, you become.",
    author: "Ancient Vedic Wisdom"
  },
  {
    text: "In the practice of tolerance, one's enemy is the best teacher.",
    author: "Bhagavad Gita"
  },
  {
    text: "The soul is neither born, and nor does it die.",
    author: "Bhagavad Gita"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Vedic Teaching"
  },
  {
    text: "When you change the way you look at things, the things you look at change.",
    author: "Ancient Wisdom"
  },
  {
    text: "Attachment is the cause of suffering. Detach, surrender, and find peace.",
    author: "Buddha"
  }
];

const initialEvents = [
  {
    id: 1,
    title: "Morning Prayer Service",
    date: "2025-10-25",
    time: "6:00 AM",
    location: "Main Hall",
    description: "Join us for our daily morning prayers and meditation.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80"
  },
  {
    id: 2,
    title: "Community Potluck",
    date: "2025-10-28",
    time: "12:00 PM",
    location: "Community Center",
    description: "Bring your favorite dish and share a meal with our temple family.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
  },
  {
    id: 3,
    title: "Meditation Workshop",
    date: "2025-11-02",
    time: "4:00 PM",
    location: "Meditation Room",
    description: "Learn mindfulness techniques with our experienced teachers.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
  }
];

const initialUpdates = [
  {
    id: 1,
    title: "Temple Renovation Update",
    date: "2025-10-20",
    content: "The renovation of the east wing is progressing well. Expected completion by December.",
    author: "Admin"
  },
  {
    id: 2,
    title: "New Class Schedule",
    date: "2025-10-18",
    content: "Yoga and meditation classes now available on Wednesdays at 7 PM.",
    author: "Admin"
  }
];

function TempleWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [events] = useState(initialEvents);
  const [updates] = useState(initialUpdates);
  const [stats, setStats] = useState({ members: 0, events: 0, years: 0 });
  const [dailyQuote, setDailyQuote] = useState(dailyQuotes[0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % dailyQuotes.length;
      setDailyQuote(dailyQuotes[index]);
    }, 10000); // 10000ms = 10 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      const targetStats = { members: 5000, events: 150, years: 25 };
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          members: Math.floor(targetStats.members * progress),
          events: Math.floor(targetStats.events * progress),
          years: Math.floor(targetStats.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, increment);

      return () => clearInterval(timer);
    };

    animateStats();
  }, []);

  const NavBar = () => (
    <nav style={styles.nav}>
      <style>{mediaStyles}</style>
      <div style={styles.navContainer}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <Heart size={32} />
            <span style={styles.logoText}>ISCKON</span>
          </div>
          
          <div className="nav-links" style={styles.navLinks}>
            <button onClick={() => setCurrentPage('home')} style={styles.navButton} className="nav-button">Home</button>
            <button onClick={() => setCurrentPage('events')} style={styles.navButton} className="nav-button">Events</button>
            <button onClick={() => setCurrentPage('calendar')} style={styles.navButton} className="nav-button">Calendar</button>
            <button onClick={() => setCurrentPage('updates')} style={styles.navButton} className="nav-button">Updates</button>
            <button onClick={() => setIsAdmin(!isAdmin)} style={styles.adminButton} className="admin-button">
              {isAdmin ? 'Exit Admin' : 'Admin'}
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={styles.mobileMenuButton}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} style={{...styles.navButton, display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0'}}>Home</button>
            <button onClick={() => { setCurrentPage('events'); setIsMenuOpen(false); }} style={{...styles.navButton, display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0'}}>Events</button>
            <button onClick={() => { setCurrentPage('calendar'); setIsMenuOpen(false); }} style={{...styles.navButton, display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0'}}>Calendar</button>
            <button onClick={() => { setCurrentPage('updates'); setIsMenuOpen(false); }} style={{...styles.navButton, display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0'}}>Updates</button>
            <button onClick={() => { setIsAdmin(!isAdmin); setIsMenuOpen(false); }} style={{...styles.navButton, display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0'}}>{isAdmin ? 'Exit Admin' : 'Admin'}</button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>ISCKON Vedic Cultural Center</h1>
          <p style={styles.heroSubtitle}>A place of peace, love, and community</p>
          <button onClick={() => setCurrentPage('events')} style={styles.heroButton} className="hero-button">
            Explore Events
          </button>
        </div>
      </div>

      <div style={styles.cardsContainer}>
        <div style={styles.cardsGrid}>
          <div style={styles.card} className="card">
            <Calendar style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Upcoming Events</h3>
            <p style={styles.cardText}>Join our community gatherings and ceremonies</p>
          </div>
          <div style={styles.card} className="card">
            <Users style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Community</h3>
            <p style={styles.cardText}>Connect with fellow members and volunteers</p>
          </div>
          <div style={styles.card} className="card">
            <Bell style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Stay Updated</h3>
            <p style={styles.cardText}>Get the latest news and announcements</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Events</h2>
        <div style={styles.cardsGrid}>
          {events.slice(0, 3).map(event => (
            <div key={event.id} style={styles.eventCard} className="event-card">
              <img src={event.image} alt={event.title} style={styles.eventImage} />
              <div style={styles.eventContent}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <div style={styles.eventInfo}>
                  <Clock size={16} />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div style={styles.eventInfo}>
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.quoteSection}>
        <div style={styles.quoteCard}>
          <p style={styles.quoteText}>"{dailyQuote.text}"</p>
          <p style={styles.quoteAuthor}>— {dailyQuote.author}</p>
        </div>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{stats.members}+</div>
            <div style={styles.statLabel}>Community Members</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{stats.events}+</div>
            <div style={styles.statLabel}>Events This Year</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{stats.years}+</div>
            <div style={styles.statLabel}>Years Serving</div>
          </div>
        </div>
      </div>
    </div>
  );

  const EventsPage = () => (
    <div style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Upcoming Events</h1>
        {isAdmin && (
          <button style={styles.addButton} className="add-button">
            <Plus size={20} />
            <span>Add Event</span>
          </button>
        )}
      </div>
      
      <div>
        {events.map(event => (
          <div key={event.id} style={styles.eventListCard}>
            <div className="event-list-content" style={styles.eventListContent}>
              <img src={event.image} alt={event.title} className="event-list-image" style={styles.eventListImage} />
              <div style={styles.eventListDetails}>
                <div style={styles.eventListHeader}>
                  <h2 style={styles.eventListTitle}>{event.title}</h2>
                  {isAdmin && (
                    <div style={styles.actionButtons}>
                      <button style={styles.iconButton} className="icon-button-edit">
                        <Edit size={20} />
                      </button>
                      <button style={styles.iconButton} className="icon-button-delete">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  )}
                </div>
                <div style={styles.eventInfo}>
                  <Clock size={20} />
                  <span style={{fontWeight: '500'}}>{event.date} at {event.time}</span>
                </div>
                <div style={styles.eventInfo}>
                  <MapPin size={20} />
                  <span>{event.location}</span>
                </div>
                <p style={{...styles.cardText, marginTop: '1rem'}}>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CalendarPage = () => (
    <div style={styles.section}>
      <h1 style={styles.pageTitle}>ISCKON Calendar</h1>
      <div style={styles.eventCard}>
        <div style={{padding: '1.5rem'}}>
          <div style={styles.calendarGrid}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} style={styles.calendarDay}>{day}</div>
            ))}
          </div>
          <div style={styles.calendarGrid}>
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2;
              const hasEvent = day > 0 && day % 7 === 3;
              const isEmpty = day <= 0 || day > 31;
              return (
                <div 
                  key={i} 
                  style={styles.calendarCell}
                  className={`calendar-cell ${hasEvent ? 'calendar-cell-event' : ''} ${isEmpty ? 'calendar-cell-empty' : ''}`}
                >
                  {day > 0 && day <= 31 && (
                    <div>
                      <div style={{fontWeight: '600', fontSize: '0.875rem'}}>{day}</div>
                      {hasEvent && <div style={{fontSize: '0.75rem', color: '#3980a3ff', marginTop: '0.25rem'}}>Event</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const UpdatesPage = () => (
    <div style={{...styles.section, maxWidth: '896px'}}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Community Updates</h1>
        {isAdmin && (
          <button style={styles.addButton} className="add-button">
            <Plus size={20} />
            <span>New Update</span>
          </button>
        )}
      </div>
      
      <div>
        {updates.map(update => (
          <div key={update.id} style={styles.updateCard} className="update-card">
            <div style={styles.updateHeader}>
              <div>
                <h2 style={styles.updateTitle}>{update.title}</h2>
                <p style={styles.updateMeta}>Posted on {update.date} by {update.author}</p>
              </div>
              {isAdmin && (
                <div style={styles.actionButtons}>
                  <button style={styles.iconButton} className="icon-button-edit">
                    <Edit size={20} />
                  </button>
                  <button style={styles.iconButton} className="icon-button-delete">
                    <Trash2 size={20} />
                  </button>
                </div>
              )}
            </div>
            <p style={styles.updateContent}>{update.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.body}>
      <NavBar />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'events' && <EventsPage />}
      {currentPage === 'calendar' && <CalendarPage />}
      {currentPage === 'updates' && <UpdatesPage />}
      
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={styles.footerTitle}>ISCKON</h3>
              <p style={styles.footerText}>A place of peace, prayer, and community connection.</p>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Contact</h4>
              <p style={styles.footerText}>248 NW 6th St</p>
              <p style={styles.footerText}>Seattle, WA 98199</p>
              <p style={styles.footerText}>contact@temple.org</p>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Hours</h4>
              <p style={styles.footerText}>Daily: 6:00 AM - 9:00 PM</p>
              <p style={styles.footerText}>Office: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2025 ISCKON Vedic Cultural Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TempleWebsite;