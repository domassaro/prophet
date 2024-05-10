import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

export const getInvestigations = async (
  page: number,
  source?: string,
  severity?: string,
  determination?: string,
  column?: string,
  order?: string,
  chosenDate?: string
) => {
  try {
    let defaultQuery = `http://localhost:8080/investigations?page=${page}`;
    if (severity && severity !== "All") {
      defaultQuery += `&severity=${severity}`;
    }
    if (chosenDate) {
      const formattedDate = moment(chosenDate).format("YYYY-MM-DD");
      defaultQuery += `&date=${formattedDate}`;
    }
    if (source) {
      defaultQuery += `&source=${source}`;
    }
    if (column) {
      defaultQuery += `&column=${column}`;
    }
    if (order) {
      defaultQuery += `&order=${order}`;
    }
    if (determination && determination !== "All") {
      defaultQuery += `&determination=${determination}`;
    }
    const res = await axios.get(`${defaultQuery}`);
    return res.data;
  } catch (err: any) {
    toast.error(err);
  }
};
