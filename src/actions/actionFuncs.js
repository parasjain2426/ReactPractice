import { CHANGEPAGE, CHARTDATA, PAGECONTENT } from "./actionVars";

export const chartAction = (data) => {
  return {
    type: CHARTDATA,
    chartData: data
  };
};
export const pageAction = (currentPage) => {
  return {
    type: CHANGEPAGE,
    pageNumber: currentPage
  };
};
export const loadContent = (pageData) => {
  return {
    type: PAGECONTENT,
    currentData: pageData
  };
};
