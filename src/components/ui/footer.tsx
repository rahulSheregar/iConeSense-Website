"use client";
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer>
       <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800 animate-fade-in">
        <div style={isMobile ? { ...footerContentStyles, flexDirection: 'column', alignItems: 'center' } : footerContentStyles}>
          <div style={{ ...addressStyles, marginBottom: isMobile ? '20px' : '0' }}> {/* Add marginBottom for mobile view */}
            <h3 style={addressHeaderStyles}>/ SPONSORED BY</h3>
            <img src="/logo.png" alt="Company Logo" style={logoStyles} />
          </div>
          <div style={{ ...addressStyles, marginBottom: isMobile ? '20px' : '0' }}> {/* Add marginBottom for mobile view */}
            <h3 style={addressHeaderStyles}>/ HOW TO REACH US</h3>
            <p style={emailStyles}>imutissi@iit.edu</p>
            <p>Chicago, IL 60616</p>
          </div>
          <div style={{ ...addressStyles, marginBottom: isMobile ? '20px' : '0' }}> {/* Add marginBottom for mobile view */}
            <h3 style={addressHeaderStyles}>/ WHERE TO FIND US</h3>
            <p>3201 S Dearborn St</p>
            <p>+1 (312) 567 3808</p>
          </div>
        </div>
        <div style={backToTopStyles}>
          <a href="#" style={backToTopLinkStyles}>↑ Back to Top</a>
        </div>
        <div style={copyRightStyles}>
          <p>Copyright © 2024 iConSenSe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
   

  );
};

const footerStyles: React.CSSProperties = {
  background: '#242424',
  color: 'white',
  fontSize: '15px',
  fontFamily: 'Arial, sans-serif',
  padding: '40px 20px',
};

const footerContentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyles: React.CSSProperties = {
  width: '150px',
  marginBottom: '10px',
};

const addressStyles: React.CSSProperties = {
  textAlign: 'left',
};

const addressHeaderStyles: React.CSSProperties = {
  marginBottom: '10px',
};

const emailStyles: React.CSSProperties = {
  marginTop: '10px',
};

const backToTopStyles: React.CSSProperties = {
  textAlign: 'center',
  margin: '20px 0',
};

const backToTopLinkStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '16px',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const copyRightStyles: React.CSSProperties = {
  borderTop: '1px solid #333',
  textAlign: 'center',
  paddingTop: '10px',
};

export default Footer;
