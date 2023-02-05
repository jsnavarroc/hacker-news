import Circle from "../atoms/spinner/Circle";
import Navbar from "../molecules/Navbar";
import TapsOptions from "../molecules/TapsOption";
import CardList from "../organims/CardList";
import InputList from "../organims/InputList";
import PaginationPage from "../organims/PaginationPage";
import Screen1 from "../templates/Screen1"
import useGetData from "./hooks/useGetData";


const Page1 = () => {
    const {loading, response:data} = useGetData();

    return (
      <>
        {loading && <Circle />}

        <Navbar />
        <TapsOptions />
        <InputList />
        <CardList cardsInfo={data} />
        <PaginationPage />
      </>
    );
}

export default Page1;