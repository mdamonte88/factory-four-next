
const getStatues = async(apiName: String) => {
    try {
        const response = await fetch(`https://api.factoryfour.com/${apiName}/health/status`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return { apiName, ...data };
    } catch (error) {
        return { apiName, success: false, message: '503:Service Unavailable', hostname: '', time: 0 };
    }
}

export default getStatues;