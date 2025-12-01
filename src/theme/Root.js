import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const handlePDFClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.toLowerCase().endsWith('.pdf')) {
        if (href.includes('github.com')) {
          return;
        }
        e.preventDefault();
        // 새 창으로 PDF viewer 열기
        window.open(`/pdf-viewer?file=${encodeURIComponent(href)}`, '_blank');
      }
    };

    document.addEventListener('click', handlePDFClick);
    return () => document.removeEventListener('click', handlePDFClick);
  }, []);

  return <>{children}</>;
}
