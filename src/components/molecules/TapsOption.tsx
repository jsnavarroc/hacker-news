import {useState} from 'react';
import { TitleTap } from "../atoms/Paragraph"
import { BoxTaps, Tap } from "../atoms/Taps"

interface ITapsOptionsrops {
    taps?:string[]
}

const TapsOptions = (props:ITapsOptionsrops) =>  {
    const tapsDefault = ['All', 'My Faves']
    const {taps=tapsDefault} = props;
    const [route, setRoute] = useState('')
    return(
        <BoxTaps>
            {taps.map((tap, key )=> (
                <Tap key={key} active={route === tap} onClick={() => setRoute(tap)}>
                    <TitleTap>{tap}</TitleTap>
                </Tap>
            ))}
      </BoxTaps>
    )
}

export default TapsOptions;