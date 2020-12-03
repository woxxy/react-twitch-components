import styled from '@emotion/styled';

interface TwitchWrapperProps {
  streamWidth: string;
  streamHeight: string;
}

export const TwitchWrapper = styled.div`
  position: relative;
  width: ${({ streamWidth }: TwitchWrapperProps) => streamWidth};
  height: ${({ streamHeight }: TwitchWrapperProps) => streamHeight};
`;
