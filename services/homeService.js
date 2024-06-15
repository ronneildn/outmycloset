const homeService = {};
const basePath = 'http://localhost:3000';


homeService.getDonations = new Promise(async function(resolve, reject) {
    const res = await fetch(basePath + '/api/donations');
    const { data } = await res.json();

    if(data && Array.isArray(data)) {
        resolve(data[0].donations);
    }
    else reject("error retrieving donations")
});

homeService.updateDonations = (donations) => {
    return new Promise(async function(resolve, reject) {

        try {
            const res = await fetch(basePath + '/api/donations', {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(donations)
            })

            resolve(res.body)
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
};

export default homeService;
