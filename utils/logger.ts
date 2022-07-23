import { isString } from "utils";

const logger = {
  info: (message: any) => {
    if (isString(message)) console.log(message);
    else console.log(JSON.stringify(message));
  },
  error: (message: any) => {},
};

export default logger;
