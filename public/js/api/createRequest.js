/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json'
    switch (options.method) {
        case 'GET':
            const url = options.url
            let data = ''
            for (let [key, value] of Object.entries(options.data)) {
                data = data + `${key}=${value}&`
            }
            
            let requestURL
            if (data.length) {
                requestURL = data + "?" + data.slice(0, -1)
            } else {
                requestURL = data
            }
            xhr.open( 'GET', requestURL);
            xhr.send();
          break;
        default:
            formData = new FormData;

            for (let [key, value] of Object.entries(options.data)) {
                data = data + `${key}=${value}&`
                formData.append(key, value)
            } 

            xhr.open( 'POST', options.url );
            xhr.send( formData );
          break;
    }
    var listener = () => {
        if (xhr.readyState = xhr.DONE){
            console.log(xhr.responseText)
            options.callback(err, response)
        }
    }
    xhr.addEventListener('readystatechange', listener)
    // xhr.removeEventListener('readystatechange', listener)
};
