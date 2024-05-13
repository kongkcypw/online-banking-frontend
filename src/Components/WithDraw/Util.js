export function calculateDistanceFromATM(userLat, userLng, atmArray) {
    const R = 6371; // Radius of the earth in km
    const distances = [];

    // Convert user's latitude and longitude to radians
    const lat1 = userLat * Math.PI / 180;
    const lon1 = userLng * Math.PI / 180;

    // Iterate through each ATM
    for (let atm of atmArray) {
        // Convert ATM's latitude and longitude to radians
        const lat2 = parseFloat(atm.Latitude) * Math.PI / 180;
        const lon2 = parseFloat(atm.Longitude) * Math.PI / 180;

        // Haversine formula
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c * 1000; // Convert to meters

        distances.push({
            ATMID: atm.ATMID,
            BranchID: atm.BranchID,
            Name: atm.Name,
            Distance: distance.toFixed(2) // Round to 2 decimal places
        });
    }

    return distances;
}