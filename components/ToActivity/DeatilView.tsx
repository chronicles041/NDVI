import ToModal from "../../components/ToModal";
import { IconSize, IconTypes } from "../ToIcons";
const DetailViewForm =() =>{
    const onDetailClick = () => {
        // ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
        //   setReportDetail(res)
        // );
      };
    return(
        <ToModal
            iconType={IconTypes.Edit}
            iconSize={IconSize.XSM}
            type={1}
            title={""} 
            onOpen={() => onDetailClick()}
            >
            <div className="flex flex-col w-full gap-y-6">
                <div className="flex flex-row">
                    <span className="flex-none text-center text-base font-normal text-secondary ">Tittle</span>
                    <span className="flex-1 text-center text-base font-normal text-secondary ">Hello Test Tittle</span>
                </div>
            </div>
        </ToModal>
    );

};
export default DetailViewForm;