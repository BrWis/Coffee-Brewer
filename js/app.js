if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service_worker.js')
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker not registered', err));
}