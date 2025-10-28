import React, { useEffect } from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const {href, label, className, autoAddBaseUrl = true} = item;
  const isActive = activePath === href;
  const isInternalLink = isInternalUrl(href);
  
  // customProps에서 openInNewTab 확인
  const openInNewTab = item.customProps?.openInNewTab;
  
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        // 새 탭 열기 처리
        {...(openInNewTab && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        {...props}>
        {label}
        {!isInternalLink && <IconExternalLink />}
        {/* customProps 새 탭용 아이콘 추가 */}
        {openInNewTab && isInternalLink && (
          <span style={{marginLeft: '4px', fontSize: '12px'}}>↗</span>
        )}
      </Link>
    </li>
  );
}