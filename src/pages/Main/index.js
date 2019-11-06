import React from 'react';
import { Container, Scroll, Form, Text } from './styles';

export default function Main() {
  return (
    <Container>
      <Scroll>
        <Form>
          <Text>eslint</Text>
          <Text>prettier</Text>
          <Text>react-navigation</Text>
          <Text>react-navigation-stack</Text>
          <Text>react-redux</Text>
          <Text>reactotron-react-native</Text>
          <Text>redux</Text>
          <Text>reactotron-redux</Text>
          <Text>redux-saga</Text>
          <Text>immer</Text>
          <Text>axios</Text>
          <Text>styled-components</Text>
          <Text>react-native-vector-icons</Text>
        </Form>
      </Scroll>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Template',
};
