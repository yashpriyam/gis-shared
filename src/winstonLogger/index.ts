import create from "./logger";
import transports from "./transports";

export default (serviceConfig: any) => create(transports(serviceConfig));
