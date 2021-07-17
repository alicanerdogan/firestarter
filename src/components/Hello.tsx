import * as React from 'react';
import styled from 'styled-components';
import { whereHoverAvailable } from 'src/utils/styles';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const HelloStyle = styled.div`
  ${whereHoverAvailable}
`;

export const Hello: React.FC<HelloProps> = () => {
  return <HelloStyle>{}</HelloStyle>;
};

Hello.displayName = 'Hello';
