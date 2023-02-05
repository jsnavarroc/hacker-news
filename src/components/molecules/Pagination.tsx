import { BoxPagination, ContainerPagination, PageOption, TriangleIconLeft, TriangleIconRight } from "../atoms/Paginator";
import { OptionText } from "../atoms/Paragraph";

interface IPaginationProps {
    pages:number
}
const Pagination = (props:IPaginationProps) => {
    const {pages} = props;
    return (
      <ContainerPagination>
        <BoxPagination>
          <PageOption className="pageChangeOption">
            <TriangleIconLeft />
          </PageOption>
          {Array.from(Array(pages).keys()).map((item) => {
            return (
              <PageOption className="pageOption">
                <OptionText>{item + 1}</OptionText>
              </PageOption>
            );
          })}
          <PageOption className="pageChangeOption">
            <TriangleIconRight />
          </PageOption>
        </BoxPagination>
      </ContainerPagination>
    );
}
export default Pagination;