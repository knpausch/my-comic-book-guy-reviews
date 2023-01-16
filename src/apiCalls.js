export const response = fetch('https://api.sampleapis.com/simpsons/episodes')
    .then(response => response.json())