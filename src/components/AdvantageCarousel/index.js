import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/*
 * A row of slides, one advantage each: a picture on top, the text below.
 *
 * The next slide peeks in from the right and the slides that are not current
 * are dimmed, so a reader sees there is more without looking for arrows.
 * Swipe, scroll sideways, click the peeking slide, click a dot, use the arrow
 * buttons or the arrow keys - every one of them moves to another slide.
 *
 * All text stays in the page (not in the pictures), so it is searchable.
 *
 * <AdvantageCarousel label="Advantages" items={[{img, alt, title, text}, ...]} />
 */
export default function AdvantageCarousel({items, label = 'Advantages'}) {
  const {withBaseUrl} = useBaseUrlUtils();
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);
  const count = items.length;

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    const slide = slideRefs.current[Math.max(0, Math.min(count - 1, index))];
    if (!track || !slide) {
      return;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({left: slide.offsetLeft, behavior: reduce ? 'auto' : 'smooth'});
  }, [count]);

  // The current slide is the one whose left edge is nearest the track's.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let best = 0;
        let bestDistance = Infinity;
        slideRefs.current.forEach((slide, i) => {
          const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
          if (distance < bestDistance) {
            bestDistance = distance;
            best = i;
          }
        });
        setActive(best);
      });
    };
    track.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <section className={styles.carousel} aria-roledescription="carousel" aria-label={label}>
      <div
        className={styles.track}
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${label}: use the left and right arrow keys to move between slides`}>
        {items.map((item, i) => (
          <article
            key={item.title}
            ref={(el) => { slideRefs.current[i] = el; }}
            className={`${styles.slide} ${i === active ? '' : styles.inactive}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${item.title}`}
            onClick={i === active ? undefined : () => goTo(i)}>
            <img className={styles.image} src={withBaseUrl(item.img)} alt={item.alt || ''} loading="lazy" />
            <div className={styles.body}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </article>
        ))}
        <div className={styles.spacer} aria-hidden="true" />
      </div>

      <div className={styles.controls}>
        <div className={styles.dots}>
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              aria-label={`Go to slide ${i + 1}: ${item.title}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className={styles.nav}>
          <span className={styles.counter} aria-live="polite">{active + 1} / {count}</span>
          <button type="button" className={styles.arrow} aria-label="Previous slide" disabled={active === 0} onClick={() => goTo(active - 1)}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className={styles.arrow} aria-label="Next slide" disabled={active === count - 1} onClick={() => goTo(active + 1)}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 6l6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
