import React from 'react';

import { List, ChannelContainer, LeftSide, Avatar, Column, Username, Info, RightSide, WhiteCilce } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () =>(
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
          <Username>Lídia Araújo</Username>
          <Info>36 news Videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCilce/>
      </RightSide>
    </ChannelContainer>
  ) 
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
