/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json'
    let url = ''
    let formData = ''
    

    if(options.method === 'GET') {
        let data = ''
        for (let [key, value] of Object.entries(options.data)) {
            data = data + `${key}=${value}&`
        }
        method = 'GET'
        url = data + (data.length ? "?" + data.slice(0, -1) : '')
    } else {
        formData = new FormData();

        for (let [key, value] of Object.entries(options.data)) {
            formData.append(key, value)
        } 
        url = options.url
    }

    xhr.open(options.method, url);
    xhr.send(formData);

    let listener = () => {
        xhr.removeEventListener('load', listener)
        options.callback(xhr.status, xhr.responseText)
    }
    xhr.addEventListener('load', listener)
    
};
