const express = require('express'),
    app = express();

const trackImg = new Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

let server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("Pixel Tracking...", port);
});

app.get('/api/track/:campaign/:list/:id', (req, res) => {
    console.log("Message view", trackImg.length);
    res.writeHead(200, {
        'Content-Type': 'image/gif',
        'Content-Length': trackImg.length
    });
    res.send({
    	msg:"email opned"
    });
});