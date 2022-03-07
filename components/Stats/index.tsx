import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
const Routes: any[] = [
  {
    title: "Total Champions",
    icon: IconTypes.Champions,
    data: 3
  },
  {
    title: "Total Users ",
    icon: IconTypes.User,
    data: 20
  },
  {
    title: "Total Area Covered in Sqaure Meters",
    icon: IconTypes.Land,
    data: "140.234"
  },
  {
    title: "Total District",
    icon: IconTypes.Farm,
    data: "3"
  },
  {
    title: "Total Communites",
    icon: IconTypes.Community,
    data: 0
  },
  {
    title: "Total Crop",
    icon: IconTypes.Crop,
    data: 1
  },
  {
    title: "Average NDVI",
    icon: IconTypes.Average,
    data: 0.333
  },
  {
    title: "Top Dressing",
    icon: IconTypes.Dressing,
    data: 20
  },
];

export const Stats = () => (
  <div className="grid grid-cols-4 ">
    {Routes.map((route) => (
      <div className="bg-white p-6 m-12 rounded-lg shadow-lg flex flex-col justify-center ">
        <ToIcon
          type={route?.icon}
          size={IconSize.MD}
          style={IconStyles.Default}
        />
        <div className="text-center font-semibold text-secondary text-3xl mt-8 p-4">
          {route.data}
        </div>
        <div className="text-center font-semibold text-secondary text-lg mt-2 px-2">
          {route.title}
        </div>
      </div>
    ))}
  </div>
);
