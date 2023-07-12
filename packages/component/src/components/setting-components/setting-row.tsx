import clsx from 'clsx';
import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

import { settingRow } from './share.css';

export const SettingRow: FC<
  PropsWithChildren<{
    name: ReactNode;
    desc: ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
    spreadCol?: boolean;
    testId?: string;
    disabled?: boolean;
  }>
> = ({
  name,
  desc,
  children,
  onClick,
  style,
  spreadCol = true,
  testId = '',
  disabled = false,
}) => {
  return (
    <div
      className={clsx(settingRow, {
        'two-col': spreadCol,
        disabled,
      })}
      style={style}
      onClick={onClick}
      data-testid={testId}
    >
      <div className="left-col">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      {spreadCol ? <div className="right-col">{children}</div> : children}
    </div>
  );
};
