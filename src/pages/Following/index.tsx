import React, { JSXElementConstructor } from 'react';
import { Wrapper, Container, Main } from './styles';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';

import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices} = React.useMemo(() =>{
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Following Categories</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList/> },
      {
        key: 'LIVES_CHANNELS',
        render: () => <Title>Lives Channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <View/> },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <View/> },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <View/> },
    ];
  //Array que contḿ apenas os indices doe elementos que são Títulos!
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data:items,
      indices,
    }

  }, []);
  return (
    <Wrapper>
      <Container>
        <Header></Header>

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            //Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
