import ServiceTemplate from "../../../components/ServiceTemplate";
import { getService } from "../../../data/services";

export const metadata = { title: "logo design" };
export default function Page() { return <ServiceTemplate service={getService("logo-design")} />; }
