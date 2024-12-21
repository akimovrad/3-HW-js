const btn = document.getElementById('btn');
const countInput = document.getElementById('count');
const root = document.getElementById('root');
const messageContainer = document.createElement('div'); 
messageContainer.id = 'message';
root.after(messageContainer); 

btn.onclick = () => {
    const count = parseInt(countInput.value);

    root.innerHTML = '';
    messageContainer.innerHTML = '';
    if (!count || isNaN(count) || count <= 0) {
        messageContainer.innerHTML = '<p style="color: red;">Please enter a valid number!</p>';
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            data.slice(0, count).forEach(post => {
                root.innerHTML += `<h1>${post.title}</h1>`;
            });
            messageContainer.innerHTML = '<p style="color: green;">Успешно отправлено!</p>';
        })
        .catch((error) => {
            messageContainer.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
        });
};
