import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@progress/kendo-react-buttons';
import { Fade, Slide, Expand } from '@progress/kendo-react-animation';

// Import template images
import classicImg from '../assets/classic.png';
import modernImg from '../assets/modern.png';
import corporateImg from '../assets/corporate.png';
import formalImg from '../assets/formal.png';
import cleanImg from '../assets/clean.png';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Add CSS animation styles to head
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scrollTemplates {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes ctaPulse {
        0% {
          box-shadow: 0 12px 40px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(255, 107, 107, 0.4);
        }
        50% {
          box-shadow: 0 12px 40px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 15px rgba(255, 107, 107, 0);
        }
        100% {
          box-shadow: 0 12px 40px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(255, 107, 107, 0);
        }
      }
      
      .cta-button {
        animation: ctaPulse 2s ease-in-out infinite;
      }
      
      .templates-scroll-container:hover {
        animation-play-state: paused !important;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    // Staggered animations on component mount
    const timer1 = setTimeout(() => setShowContent(true), 200);
    const timer2 = setTimeout(() => setShowTemplates(true), 800);
    const timer3 = setTimeout(() => setShowCTA(true), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleCreateCV = () => {
    navigate('/cv-editor');
  };

  const templateImages = [
    { src: classicImg, name: 'Classic', delay: 0 },
    { src: modernImg, name: 'Modern', delay: 200 },
    { src: corporateImg, name: 'Corporate', delay: 400 },
    { src: formalImg, name: 'Formal', delay: 600 },
    { src: cleanImg, name: 'Clean', delay: 800 },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    hero: {
      textAlign: 'center' as const,
      marginBottom: '4rem',
      maxWidth: '800px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1rem',
      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      color: '#e2e8f0',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    templatesSection: {
      margin: '4rem 0',
      padding: '2rem 0',
    },
    templatesTitle: {
      fontSize: '1.5rem',
      color: '#ffffff',
      marginBottom: '2rem',
      textAlign: 'center' as const,
    },
    templatesGrid: {
      display: 'flex',
      gap: '1.5rem',
      overflow: 'hidden',
      maxWidth: '100%',
      margin: '0 auto',
      position: 'relative' as const,
    },
    templatesScrollContainer: {
      display: 'flex',
      gap: '1.5rem',
      animation: 'scrollTemplates 15s linear infinite',
      minWidth: '200%',
    },
    templateCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center' as const,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      minWidth: '120px',
      flexShrink: 0,
    },
    templateImage: {
      width: '60px',
      height: '80px',
      objectFit: 'cover' as const,
      borderRadius: '6px',
      marginBottom: '0.5rem',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
    },
    templateName: {
      fontSize: '0.9rem',
      color: '#ffffff',
      fontWeight: '500',
    },
    ctaSection: {
      textAlign: 'center' as const,
      margin: '3rem 0',
      padding: '2rem 0',
      position: 'relative' as const,
    },
    ctaButton: {
      padding: '1.2rem 3rem !important',
      fontSize: '1.3rem !important',
      fontWeight: '700 !important',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff9068 100%) !important',
      borderRadius: '60px !important',
      color: '#ffffff !important',
      boxShadow: '0 12px 40px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2) !important',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
      textTransform: 'uppercase' as const,
      letterSpacing: '1.5px',
      position: 'relative' as const,
      overflow: 'hidden' as const,
      minWidth: '280px',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.1) !important',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '900px',
      margin: '3rem auto',
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center' as const,
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '1.2rem',
      color: '#ffffff',
      marginBottom: '0.5rem',
      fontWeight: '600',
    },
    featureText: {
      color: '#e2e8f0',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      <Fade appear={showContent}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            Build Your Perfect CV
          </h1>
          <p style={styles.subtitle}>
            Create professional, ATS-friendly resumes in minutes with our intuitive CV builder. 
            Choose from stunning templates and land your dream job.
          </p>
        </div>
      </Fade>

      <Expand appear={showCTA} direction="vertical">
        <div style={styles.ctaSection}>
          <Button
            style={styles.ctaButton}
            className="cta-button"
            onClick={handleCreateCV}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 107, 0.7), 0 8px 25px rgba(0, 0, 0, 0.3) !important';
              e.currentTarget.style.background = 'linear-gradient(135deg, #ff8a80 0%, #ff7043 50%, #ffab91 100%) !important';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2) !important';
              e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff9068 100%) !important';
            }}
          >
            🚀 Create Your CV Now
          </Button>
        </div>
      </Expand>

      <Slide appear={showTemplates} direction="up">
        <div style={styles.templatesSection}>
          <h2 style={styles.templatesTitle}>Choose Your Template</h2>
          <div style={styles.templatesGrid}>
            <div style={styles.templatesScrollContainer} className="templates-scroll-container">
              {[...templateImages, ...templateImages].map((template, index) => (
                <Fade key={`${template.name}-${index}`} appear={showTemplates}>
                  <div 
                    style={styles.templateCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img 
                      src={template.src} 
                      alt={template.name}
                      style={styles.templateImage}
                    />
                    <div style={styles.templateName}>{template.name}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <Fade appear={showContent}>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎨</div>
            <h3 style={styles.featureTitle}>Professional Templates</h3>
            <p style={styles.featureText}>
              Choose from multiple professionally designed templates that are optimized for ATS systems.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Quick & Easy</h3>
            <p style={styles.featureText}>
              Build your CV in minutes with our intuitive interface and real-time preview.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📄</div>
            <h3 style={styles.featureTitle}>PDF Export</h3>
            <p style={styles.featureText}>
              Export your finished CV as a high-quality PDF ready for job applications.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default LandingPage;
