import {
  BoxPagination,
  ContainerPagination,
  PageOption,
  TriangleIconLeft,
  TriangleIconRight,
} from "../../atoms/Paginator";
import { OptionText } from "../../atoms/Paragraph";
import { IPaginationProps } from "../../types";
import usePagination from "./usePagination";




const Pagination = (props: IPaginationProps) => {
 const {
   numberPages,
   onAddPages,
   onDecrease,
   onIncrease,
   onLessPages,
   onSelectPage,
   pageSelected,
 } = usePagination(props);

 

  const Options=[]
  for (let index = numberPages.start; index <numberPages.end; index++) {
    Options.push(
      <PageOption
        key={index}
        className="pageOption"
        active={pageSelected === index}
        onClick={() => onSelectPage(index)}
      >
        <OptionText>{index+1}</OptionText>
      </PageOption>
    )
  }
  
  return (
    <ContainerPagination>
      <BoxPagination>
        {numberPages.start > 1 && (
          <PageOption className="pageChangeOption" onClick={onDecrease}>
            <TriangleIconLeft />
          </PageOption>
        )}
        {numberPages.start > 0 && (
          <PageOption className="pageInfinityOption" onClick={onLessPages}>
            <OptionText>...</OptionText>
          </PageOption>
        )}
        {Options}
        {numberPages.start + props.pages < 50 && (
          <PageOption className="pageInfinityOption" onClick={onAddPages}>
            <OptionText>...</OptionText>
          </PageOption>
        )}
        {numberPages.end < 50 && (
          <PageOption className="pageChangeOption" onClick={onIncrease}>
            <TriangleIconRight />
          </PageOption>
        )}
      </BoxPagination>
    </ContainerPagination>
  );
};
export default Pagination;
