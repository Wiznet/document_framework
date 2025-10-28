import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  level,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl = true } = item;
  const openInNewTab = item.customProps?.openInNewTab;
  const url = item.customProps?.url;

  // 항상 'to'를 줘야 커서와 클릭이 정상 작동
  const linkTarget = url ? '#' : href;

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}
    >
      <Link
        className="menu__link"
        to={linkTarget} // ✅ 반드시 있어야 함
        autoAddBaseUrl={autoAddBaseUrl}
        onClick={(e) => {
          if (url) {
            e.preventDefault(); // 내부 라우터 방지
            if (openInNewTab) {
              window.open(url, '_blank', 'noopener,noreferrer');
            } else {
              window.location.href = url;
            }
          } else if (onItemClick) {
            onItemClick(item); // 기본 문서는 정상 이동
          }
        }}
        {...props}
      >
        {label}
        {openInNewTab && (
          <span style={{ marginLeft: '4px', fontSize: '12px' }}>↗</span>
        )}
      </Link>
    </li>
  );
}