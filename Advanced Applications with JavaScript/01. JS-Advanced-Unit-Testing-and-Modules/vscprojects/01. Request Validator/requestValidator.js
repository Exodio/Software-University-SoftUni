solve = (inputRequest) => {

    let methodsArr = ['POST', 'GET', 'DELETE', 'CONNECT'];
    let uriPattern = /^([A-Za-z0-9.]+)$|\*/g;
    let versionsArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^([^<>\\&'"]*)$/g;

    if (!inputRequest.hasOwnProperty('method') || !methodsArr.includes(inputRequest.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!inputRequest.hasOwnProperty('uri') || !inputRequest.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!inputRequest.hasOwnProperty('version') || !versionsArr.includes(inputRequest.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!inputRequest.hasOwnProperty('message') || !inputRequest.message.match(messagePattern)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return inputRequest;
}

solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
});