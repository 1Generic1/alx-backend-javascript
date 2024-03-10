export default function loadBalancer(chinaDownload, USDownload) {
    // Use Promise.race to return the value of the first resolved promise
    return Promise.race([chinaDownload, USDownload]);
}
