const updatesService = {};
const basePath = 'http://localhost:3000';


updatesService.getUpdates = new Promise(async function(resolve, reject) {
    const res = await fetch(basePath + '/api/updates');
    const { data } = await res.json();

    if(data && Array.isArray(data)) {
        resolve(data);
    }
    else reject("error retrieving donations")
});

// updatesService.updateDonations = (donations) => {
//     return new Promise(async function(resolve, reject) {
//
//         try {
//             const res = await fetch(basePath + '/api/donations', {
//                 method: 'PUT',
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(donations)
//             })
//
//             resolve(res.body)
//         } catch (error) {
//             console.log(error);
//             reject(error)
//         }
//     })
// };

export default updatesService;
