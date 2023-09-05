document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const url =  'https://jsonplaceholder.typicode.com/users';

    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const dob = document.querySelector('#dob').value;

        const data = {
            name: name,
            lastname: lastname,
            dob: dob
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    });
});
