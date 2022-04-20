import DashBorad from "./dashboard";
import Login from "./login";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const loginRoute = "/login";
  return  <Login />
};
export default Index;
