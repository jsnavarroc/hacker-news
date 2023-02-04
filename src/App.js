
import Navbar from './components/molecules/Navbar';
import { BoxTaps, Tap } from './components/atoms/Taps';
import { useState } from 'react';
import { Card, ContainerCards, ContentCard, IconContainer, LeftColumn, RightColumn, TitleCard } from './components/atoms/Card';
import { Input } from './components/atoms/Input';
import { BoxPagination, ContainerPagination, PageOption } from './components/atoms/Paginator';
import {  InfoCard, OptionText, SmallTitle, TitleTap } from './components/atoms/Paragraph';
import clockSVG from './assets/icons/clock.svg'
import filledHeart from './assets/icons/filledHeart.svg'
import hollowHeart from './assets/icons/hollowHeart.svg'

const Heart = () => {
  const [img, setImg] = useState(hollowHeart);

  const toggleImage = () => {
    if (img === hollowHeart) {
      setImg(filledHeart);
    } else {
      setImg(hollowHeart);
    }
  };

  return (
    <IconContainer
      whileHover={{ scale: 1.2}}
      whileTap={{opacity:0.5}}
      onClick={toggleImage}
      animate={{ backgroundImage: `url('${img}')` }}
      transition={{  duration: 0.1 }}
    />
  );
};

function App() {
  const [route, setRoute] = useState('')
  return (
    <div className="App">
      <Navbar/>
      <BoxTaps>
        <Tap active={route === 'All'} onClick={() => setRoute('All')}>
          <TitleTap>All</TitleTap>
        </Tap>
        <Tap active={route === 'MyFaves'} onClick={() => setRoute('MyFaves')}>
          <TitleTap>My Faves</TitleTap>
        </Tap>
      </BoxTaps>
      <Input/>
      <ContainerCards>
        <Card>
        <ContentCard>
            <LeftColumn>

              <TitleCard>
                 <img src={clockSVG}/>
                 <SmallTitle>3 hours ago by author</SmallTitle>         
              </TitleCard>
                <InfoCard>Yes, React is taking over front-end development. The question is whay.</InfoCard> 
            </LeftColumn>
          
            <RightColumn>
                <Heart/>
            </RightColumn>
        </ContentCard>
        </Card>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ContainerCards>
      <ContainerPagination>
        <BoxPagination>
          <PageOption className='pageChangeOption'>
            <OptionText >{'<'}</OptionText>
          </PageOption>
          <PageOption  className='pageOption'>
            <OptionText>1</OptionText>
          </PageOption>
          <PageOption  className='pageOption'>
            <OptionText>2</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>3</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>4</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>5</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>6</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>7</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>8</OptionText>
          </PageOption>
          <PageOption className='pageOption'>
            <OptionText>9</OptionText>
          </PageOption>
          <PageOption className='pageChangeOption'>
            <OptionText>{'>'}</OptionText>
          </PageOption>
        </BoxPagination>
      </ContainerPagination>
    </div>
  );
}


export default App;
