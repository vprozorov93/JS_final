/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json'

    if (options.method === 'GET'){
        let data = ''
        for (let [key, value] of Object.entries(options.data)) {
            data = data + `${key}=${value}&`
        }
        
        let requestURL = data + (data.length ? "?" + data.slice(0, -1) : '')

        xhr.open( 'GET', requestURL);
        xhr.send();
    } else {
        formData = new FormData();

        for (let [key, value] of Object.entries(options.data)) {
            data = data + `${key}=${value}&`
            formData.append(key, value)
        } 

        xhr.open( 'POST', options.url );
        xhr.send( formData );
    }

    let listener = () => {
        console.log(xhr.responseText)
        options.callback(err, response)

    }
    xhr.addEventListener('load', listener)
    // xhr.removeEventListener('load', listener)
};
