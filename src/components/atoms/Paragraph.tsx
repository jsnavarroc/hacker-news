import styled from 'styled-components'

export const TitleLogo = styled.a`
  font-family: 'Libre Baskerville';
  font-family: Baskerville;
  font-size: 1.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
`

const Normal = styled.span`
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
`


export const SmallTitle = styled(Normal)`
  font-size: 0.688rem;
  line-height: normal;
  color: #606060;
`

export const OptionText =  styled(Normal)`
  font-size: 0.875rem;
  font-weight: normal;
`
export const TitleTap =  styled(Normal)`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.75;
`

const NormalParagraph = styled.p`
  font-family: Roboto;
  font-size: 0.875rem;
  font-stretch: normal;
  font-style: normal;
`
export const InfoCard = styled(NormalParagraph)`
  margin: 0.375rem 1rem 0.875rem 0;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`

export const OptionInputText = styled(NormalParagraph)`
    font-weight: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #343434;
`

