import ToIcon, {
  IconSize,
  IconStyles,
  IconTypes,
} from "../../../components/ToIcons";

const FarmDetail = ({detail}:any) => {
  return (
    <div className="  flex-col px-2  text-white items-center justify-center">
      <div className="grid h-auto w-full grid-cols-2  gap-x-6 gap-y-6  ">
        <div className="bg-white max-h-52 border-2  overflow-hidden border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Farm}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Farm id: {detail.farm_id}
          </div>
        </div>
        <div className="bg-white max-h-52 border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Location}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Farm Name:{detail.farm_name}
          </div>
        </div>
        <div className="bg-white max-h-52 border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Project}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Project Name: {detail.project_name}
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center border-2 border-soild border-primary items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Organiztion}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary whitespace-nowrap  text-base  mt-4">
            Organization Name:
            <br></br>
            {detail.organization_name}`
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center items-center border-2 border-solid border-primary   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Land}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4 ">
            Farm Area: {detail.farm_area} Hectors
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center items-center border-2 border-solid border-primary   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Crop}
            size={IconSize.MD}
            style={IconStyles.Default}
          />
          <div className="text-center font-semibold text-secondary text-base  mt-4 ">
            Farm Note: {detail.farm_notes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmDetail;
