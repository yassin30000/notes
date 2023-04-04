// SERVERS

    /*

    definition:

        The back-end server sends the web pages 
        or data to the front-end client when requested.

    implementation:
    some backend functionalities include:

        -Send the requested web pages
        -Handle email messages
        -Send files
        -Store and send data in a database
        -Process data
        -Handle web traffic

    */


// HTTP BASICS

    /*

        HTTP defines the process of exchanging hypertext between systems.
        Specifically, HTTP works between clients and servers. 
    

        A client (sometimes called the user agent) is the data consumer.
        This is usually your web browser. A server (sometimes referred to as the origin)
        is the data provider, often where an application is running.


        usually, the client sends a request to the server for a certain resource: 
        webpage, image, or app data. the server then provides a response containing the
        resource that it asked for or an error explaining why it cant send the resource


        PROPERITES OF HTTP:

        reliable connections
            messages passed between client & server sacrafice lil speed for the sake of trust,
            assuring that ea message will be confirmed

        stateless transfer
            doesnt store any information, you should be able to understand the HTTP's intent
            just by reading it

        intermediaries
            ur request will go through a series of other services or devices that pass the 
            request along, there are 3 types:

                proxies: may modify your request so it appears to come from a diff source
                gateways: pretend to be the resource server you requested
                tunnels: jus pass request along
    */

// HTTP REQUEST & RESPONSE CYCLE

    /*
        * see diagram for request-response cycle visual *
    */

// HTTP REQUEST COMPONENTS  

    /*
        example of what a HTTP request looks like:

        POST / HTTP/1.0
        Host: appacademy.io
        Content-Length: 31
        Content-Type: application/x-www-form-urlencoded
        Host: appacademy.io
        Connection: keep-alive
        Upgrade-Insecure-Requests: 1
        User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3
        Accept-Encoding: gzip, deflate
        Accept-Language: en-US,en;q=0.9

        username=azure&password=hunter2
    */