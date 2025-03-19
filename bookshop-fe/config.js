
const IP = " 10.33.51.18";

const shopAppApi = `http://${IP}:9999`;

const apiConfig = {
    baseURL: shopAppApi,
    headers: {
        "Content-Type": "application/json",
    },
};

export default apiConfig;