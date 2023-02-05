
import useFiltersDispatch from '../../redux/hooks/dispatchers/useFiltersDispatch';
import useFiltersSelector from '../../redux/hooks/selectors/useFiltersSelector';
import { TitleTap } from "../atoms/Paragraph"
import { BoxTaps, Tap } from "../atoms/Taps"



const TapsOptions = () =>  {
    const {setTapListD} = useFiltersDispatch();
    const {tap:route} = useFiltersSelector();
    const tapsDefault = ['All', 'My Faves']

    const onClick = (tap:string) => {
        setTapListD(tap) 
    }
    return(
        <BoxTaps>
            {tapsDefault.map((tap, key )=> (
                <Tap key={key} active={route === tap} onClick={() => onClick(tap)}>
                    <TitleTap>{tap}</TitleTap>
                </Tap>
            ))}
      </BoxTaps>
    )
}

export default TapsOptions;