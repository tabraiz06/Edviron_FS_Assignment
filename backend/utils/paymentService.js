const axios = require("axios");

const createPayment = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const response = await axios.post(
    "https://dev-vanilla.edviron.com/erp/createcollect-request",
    data,
    config
  );
  return response.data;
};

module.exports = { createPayment };
