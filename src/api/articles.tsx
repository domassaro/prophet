import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";

export const getArticles = async (chosenDate: string, country: string) => {
  try {
    const formattedDate = moment(chosenDate);
    const [year, month, day] = [
      formattedDate.format("YYYY"),
      formattedDate.format("MM"),
      formattedDate.format("DD"),
    ];

    const res = await axios.get(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${year}/${month}/${day}`
    );

    return res.data.items?.[0];
  } catch (err: any) {
    toast.error(err);
  }
};
