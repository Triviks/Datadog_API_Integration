export const fetchMonitors = async () => {
    try {
        const response = await fetch('/api/monitor', {
            method: "GET",
            // mode: "no-cors",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json',
                'DD-API-KEY': process.env.REACT_APP_DATADOG_API_KEY,
                'DD-APPLICATION-KEY': process.env.REACT_APP_DATADOG_APP_KEY,
                // OPTIONAL HEADERS
                // 'Client-Token': process.env.REACT_APP_DATADOG_CLIENT_TOKEN,
                // 'Connection': 'keep-alive',
                // 'User-Agent': 'PostmanRuntime/7.38.0',
                // 'Accept-Encoding': 'gzip, deflate, br',
                // 'Host': 'api.us5.datadoghq.com',
                // 'Accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch monitors');
        }

        const data = await response.json();
        console.log("Data: ", data);
        return data;
    } catch (error) {
        console.error('Error fetching monitors:', error); 
        throw error;
    }
};
