function handler(event) {
    var req  = event.request;
    var host = req.headers.host.value;

    if (host === "www.namson.io") {
        var url = "https://namson.io" + req.uri;

        var qs = Object.keys(req.querystring || {})
        .map(function(k){ return k + "=" + req.querystring[k].value; })
        .join("&");
        if (qs) url += "?" + qs;

        return {
        statusCode: 301,
        statusDescription: "Moved Permanently",
        headers: { "location": { "value": url } }
        };
    }

    var uri = req.uri;
    if (!uri || uri === "/") {
        return req;
    }

    var lastSegment = uri.substring(uri.lastIndexOf("/") + 1);
    if (lastSegment.indexOf(".") === -1) {
        if (uri.charAt(uri.length - 1) === "/") {
            req.uri = uri + "index.html";
        } else {
            req.uri = uri + "/index.html";
        }
    }

    return req;
}