import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function PDFViewer() {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const file = params.get('file');
    if (file) {
      if (file.includes('github.com')) {
        window.location.href = file;
        return;
      }
      setPdfUrl(file);
    }

    // Hide Channel.io widget only (not Chatbase)
    const hideChannelIO = () => {
      // Only target Channel.io specific elements
      const elements = [
        ...document.querySelectorAll('#ch-plugin'),
        ...document.querySelectorAll('#ch-plugin-launcher'),
        ...document.querySelectorAll('div[id^="ch-plugin"]'),
      ];

      elements.forEach(el => {
        if (el) {
          el.style.display = 'none';
        }
      });
    };

    // Run on interval
    hideChannelIO();
    const interval = setInterval(hideChannelIO, 500);

    return () => clearInterval(interval);
  }, [location]);

  if (!pdfUrl) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui' }}>
        <h1>PDF 파일을 찾을 수 없습니다</h1>
        <p>올바른 PDF 링크를 클릭해주세요.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>PDF Viewer - WIZnet Docs</title>
        <style>{`
          /* Hide Channel.io widget on PDF viewer page */
          #ch-plugin,
          #ch-plugin-launcher,
          div[id^="ch-plugin"] {
            display: none !important;
          }
        `}</style>
      </Head>
      <div className="pdf-viewer-container">
        <div className={`pdf-viewer-content ${!isOpen ? 'chatbot-closed' : ''}`}>
          <iframe
            src={pdfUrl}
            className="pdf-viewer-iframe"
            title="PDF Document"
          />
        </div>

        {/* Chatbot Toggle Button (outside sidebar) */}
        <button
          className={`chatbot-toggle-pdf ${isOpen ? 'open' : 'closed'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        >
          <span className="chatbot-toggle-text">
            {isOpen ? '→' : 'Ask AI'}
          </span>
        </button>

        {/* Chatbot Sidebar */}
        <div className={`chatbot-sidebar-pdf ${isOpen ? 'open' : 'closed'}`}>
          <iframe
            src="https://www.chatbase.co/ilABqrthoUgNCWQYN5MPS/help"
            width="100%"
            height="100%"
            frameBorder="0"
            title="WIZnet AI Assistant"
          />
          <div className="chatbot-disclaimer">
            AI-generated answers may be incomplete. Always verify critical specifications with official documentation.
          </div>
        </div>
      </div>
    </>
  );
}
