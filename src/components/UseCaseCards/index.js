import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/*
 * A row of cards, one situation each: an icon, a short title and the full
 * sentence. The text is page text, not part of a picture, so it is
 * searchable, translatable and readable on a phone; the grid goes from four
 * columns to two to one as the page narrows.
 *
 * <UseCaseCards items={[{icon, title, text}, ...]} />
 */
export default function UseCaseCards({items}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.title} className={styles.card}>
          <img className={styles.icon} src={withBaseUrl(item.icon)} alt="" aria-hidden="true" />
          <p className={styles.title}>{item.title}</p>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
