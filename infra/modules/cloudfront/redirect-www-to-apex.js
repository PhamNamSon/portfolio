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
    return req;
}
