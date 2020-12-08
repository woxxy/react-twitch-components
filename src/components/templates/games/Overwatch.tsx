import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { FollowerGoal } from '../../molecules/FollowerGoal';
import { css } from '@emotion/css';
import { SubscriberGoal } from '../../molecules/SubscriberGoal';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Teko:600'],
  },
});

export const UltimateWrapperTemplate = styled.div`
  width: 600px;
  height: 200px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -300px;
  display: flex;
`;

export interface UltimateSideProps {
  align?: 'right' | 'left';
  margin?: string;
  upper?: boolean;
}

export const UltimateSideTemplate = styled.div`
  flex: 1;
  height: 100%;
  transform: skew(
      ${({ align = 'left' }: UltimateSideProps) =>
        align === 'left' ? '10deg, -15deg' : '-10deg, 15deg'}
    )
    rotate(
      ${({ align = 'left', upper = false }: UltimateSideProps) =>
        !upper
          ? align === 'left'
            ? '11.5'
            : '-11.5'
          : align === 'left'
          ? '12.5'
          : '-12.5'}deg
    );
  text-align: ${({ align = 'left' }: UltimateSideProps) => align};
  font-family: 'Teko', sans-serif;
  ${({ upper = false }: UltimateSideProps) =>
    upper && `position: absolute; bottom: 115%; height: auto; width: 40%`};
  ${({ upper = false, align = 'left' }: UltimateSideProps) =>
    upper && (align === 'right' ? `right: -60px;` : `left: -60px;`)};
`;

export const UltimateCenterTemplate = styled.div`
  width: 162px;
  height: 100%;
  flex-shrink: 0;
`;

export const UltimateSideTitle = styled.div`
  display: flex;
  width: 100%;
  color: rgba(255, 201, 88, 0.8);
  border-bottom: 2px solid rgba(240, 240, 240, 0.18);
  ${({ align = 'left', margin = '0px' }: UltimateSideProps) =>
    `margin-${align === 'left' ? 'right' : 'left'}: ${margin}`};
  font-size: 23px;
  margin-bottom: 3px;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);

  transform: skew(
    ${({ align = 'left' }: UltimateSideProps) =>
      align === 'left' ? '-5deg, -0deg' : '5deg, 0deg'}
  );

  & path {
    stroke: rgba(0, 0, 0, 0.5);
    stroke-width: 10;
  }
`;

export const UltimateSideIcon = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  text-align: ${({ align = 'left' }: UltimateSideProps) =>
    align === 'left' ? 'right' : 'left'};
`;

export const UltimateSideValue = styled.div`
  display: inline-block;
  margin: 5px 0 25px;
  text-align: ${({ align = 'left' }: UltimateSideProps) => align};
  background-color: rgba(255, 255, 255, 0.55);
  color: rgba(0, 0, 0, 0.65);
  padding: 6px 6px 3px;
  border-radius: 7px;
  font-size: 23px;
  transform: skew(
    ${({ align = 'left' }: UltimateSideProps) =>
      align === 'left' ? '-5deg, -0deg' : '5deg, 0deg'}
  );
`;

export const UltimateLoadingBarWrapper = styled.div`
  height: 30px;
`;

const progressBarClassNames = {
  progressBarFilled: css`
    background: rgba(255, 201, 88, 0.8);
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
    font-size: 20px;
  `,
  progressBarEmpty: css`
    background: rgba(255, 255, 255, 0.55);
    color: rgba(0, 0, 0, 0.65);
  `,
  progressBar: css`
    border-color: rgba(240, 240, 240, 0.18);
    border-radius: 4px;
    overflow: hidden;
  `,
};

export interface OverwatchUltimateElements {
  title: ReactNode;
  value?: ReactNode;
  rawValue?: ReactNode;
  icon?: ReactNode;
}

export const UltimateDetail: FC<{
  elements: OverwatchUltimateElements;
  align?: 'right' | 'left';
}> = ({ elements, align = 'left' }) => {
  return (
    <>
      <UltimateSideTitle align={align}>
        {align === 'right' && (
          <UltimateSideIcon align={'right'}>{elements.icon}</UltimateSideIcon>
        )}
        {elements.title}
        {align === 'left' && (
          <UltimateSideIcon align={'left'}>{elements.icon}</UltimateSideIcon>
        )}
      </UltimateSideTitle>
      {elements.value && (
        <UltimateSideValue align={align}>{elements.value}</UltimateSideValue>
      )}
      {elements.rawValue}
    </>
  );
};

export const OverwatchUltimate: FC<{
  upperLeft?: OverwatchUltimateElements[];
  upperRight?: OverwatchUltimateElements[];
  left?: OverwatchUltimateElements[];
  right?: OverwatchUltimateElements[];
}> = ({ upperLeft, upperRight, left, right }) => {
  return (
    <>
      <UltimateWrapperTemplate>
        <UltimateSideTemplate upper={true}>
          {upperLeft &&
            upperLeft.map((elements, index) => (
              <UltimateDetail elements={elements} key={index} />
            ))}
        </UltimateSideTemplate>
        <UltimateSideTemplate upper={true} align={'right'}>
          {upperRight &&
            upperRight.map((elements, index) => (
              <UltimateDetail elements={elements} key={index} align={'right'} />
            ))}
        </UltimateSideTemplate>
        <UltimateSideTemplate>
          {left &&
            left.map((elements, index) => (
              <UltimateDetail elements={elements} key={index} />
            ))}
        </UltimateSideTemplate>
        <UltimateCenterTemplate />
        <UltimateSideTemplate align={'right'}>
          {right &&
            right.map((elements, index) => (
              <UltimateDetail elements={elements} align={'right'} key={index} />
            ))}
        </UltimateSideTemplate>
      </UltimateWrapperTemplate>
    </>
  );
};

export const OverwatchUltimateFollowersGoal: FC<
  React.ComponentProps<typeof FollowerGoal>
> = props => {
  return (
    <UltimateLoadingBarWrapper>
      <FollowerGoal {...props} classNames={progressBarClassNames} />
    </UltimateLoadingBarWrapper>
  );
};

export const OverwatchUltimateSubscriberGoal: FC<
  React.ComponentProps<typeof SubscriberGoal>
> = props => {
  return (
    <UltimateLoadingBarWrapper>
      <SubscriberGoal {...props} classNames={progressBarClassNames} />
    </UltimateLoadingBarWrapper>
  );
};

const CameraWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
`;

const CameraUsername = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-family: 'Teko', sans-serif;
  color: rgba(255, 201, 88, 0.8);
  font-size: 28px;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
`;

const CameraFrame = styled.div`
  border: 6px solid rgba(255, 201, 88, 0.8);
  width: 440px;
  height: 310px;
  border-radius: 7px;
`;

export const OverwatchCamera: FC = ({ children }) => {
  return (
    <CameraWrapper>
      <CameraUsername>{children}</CameraUsername>
      <CameraFrame />
    </CameraWrapper>
  );
};
