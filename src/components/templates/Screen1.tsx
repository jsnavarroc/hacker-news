import Navbar from "../molecules/Navbar"
import TapsOptions from "../molecules/TapsOption"
import CardList from "../organims/CardList"
import InputList from "../organims/InputList"
import PaginationPage from "../organims/PaginationPage"


const Screen1 = () => {
    return (
      <>
        <Navbar />
        <TapsOptions />
        <InputList />
        <CardList />
        <PaginationPage />
      </>
    );
}

export default Screen1;