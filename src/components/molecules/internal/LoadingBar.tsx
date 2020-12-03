import React, { FC } from 'react';
import { css, cx } from '@emotion/css';

const progressBarStyles = css`
  border: 1px solid #000000;
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const progressBarEmptyStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  text-align: right;
  overflow: hidden;
`;

export interface LoadingBarClassNames {
  progressBar?: string;
  progressBarFilled?: string;
  progressBarEmpty?: string;
}

export const LoadingBar: FC<{
  count: number;
  goal: number;
  classNames?: LoadingBarClassNames;
}> = ({ count, goal, classNames }) => {
  const progressBarFilledStyles = css`
    width: ${Math.min((count * 100) / goal, 100)}%;
    height: 100%;
    flex-shrink: 0;
    text-align: center;
    background: gray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;

  return (
    <div className={cx(progressBarStyles, classNames?.progressBar)}>
      <div
        className={cx(progressBarFilledStyles, classNames?.progressBarFilled)}
      >
        {count}
      </div>
      <div className={cx(progressBarEmptyStyles, classNames?.progressBarEmpty)}>
        {goal}
      </div>
    </div>
  );
};
