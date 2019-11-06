import styled from 'styled-components/native';
import { TextColor, BodyColor } from '../../helpers/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  background: ${BodyColor};
`;

export const Scroll = styled.ScrollView``;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  padding-bottom: 10px;
  font-size: 17px;
  color: ${TextColor};
`;
