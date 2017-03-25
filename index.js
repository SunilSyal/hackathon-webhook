'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        source: 'webhook-echo',
        "messages": fnProductList()
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});

restService.post('/fb-test', function(req, res) {

    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    var messages = {
        "attachment": {
            "type": "audio",
            "payload": {
                "url": "https://petersapparel.com/bin/clip.mp3"
            }
        }
    }

    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-fb',
        data: {
            facebook: messages
        }
    });
});


function fnProductList() {

    var productData = [{
        title: "Classic T-Shirt Collection",
        image_url: "http://asset1.marksandspencer.com/is/image/mands/SD_01_T38_7237_KC_X_EC_0?$PRODVIEWER_SUB$",
        price: "20",
        url: "http://www.marksandspencer.com/pure-cotton-v-neck-2-pocket-cardigan/p/p22500660?image=SD_01_T38_7237_KC_X_EC_90&color=OATMEAL&prevPage=plp&pdpredirect"
    }, {
        title: "Classic T-Shirt Collection",
        image_url: "http://asset1.marksandspencer.com/is/image/mands/SD_01_T38_7237_KC_X_EC_0?$PRODVIEWER_SUB$",
        price: "30",
        url: "http://www.marksandspencer.com/pure-cotton-v-neck-2-pocket-cardigan/p/p22500660?image=SD_01_T38_7237_KC_X_EC_90&color=OATMEAL&prevPage=plp&pdpredirect"
    }, {
        title: "Classic T-Shirt Collection",
        image_url: "http://asset1.marksandspencer.com/is/image/mands/SD_01_T38_7237_KC_X_EC_0?$PRODVIEWER_SUB$",
        price: "40",
        url: "http://www.marksandspencer.com/pure-cotton-v-neck-2-pocket-cardigan/p/p22500660?image=SD_01_T38_7237_KC_X_EC_90&color=OATMEAL&prevPage=plp&pdpredirect"
    }, {
        title: "Classic T-Shirt Collection",
        image_url: "http://asset1.marksandspencer.com/is/image/mands/SD_01_T38_7237_KC_X_EC_0?$PRODVIEWER_SUB$",
        price: "50",
        url: "http://www.marksandspencer.com/pure-cotton-v-neck-2-pocket-cardigan/p/p22500660?image=SD_01_T38_7237_KC_X_EC_90&color=OATMEAL&prevPage=plp&pdpredirect"
    }]

    var list = [{
            "type": 0,
            "speech": ""
        },
        {
            "title": "Jeans @ £30",
            "subtitle": "Blah Blah",
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/polytechnics-cbc63.appspot.com/o/credit-card.png?alt=media&token=5f5de210-6bda-4a7d-9350-93c3034e909a",
            "buttons": [{
                "text": "Buy",
                "postback": ""
            }],
            "type": 1
        }, {
            "title": "Jeans @ £23.24",
            "subtitle": "Blah Blah",
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/polytechnics-cbc63.appspot.com/o/loan.png?alt=media&token=4a939935-aa22-47b1-ae9b-4e468f461f18",
            "buttons": [{
                "text": "Buy",
                "postback": ""
            }],
            "type": 1
        }]


    /*var list = {
        "payload": {
            "facebook": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": "What do you want to do next?",
                        "buttons": [{
                                "type": "web_url",
                                "url": "https://login.microsoftonline.com/bluebankb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_BlueBankSUSI&client_Id=0f7ef810-2f9c-424c-942a-48c6ea361d9a&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fgoogle.com%3A44316%2F.auth%2Flogin%2Faad%2Fcallback&scope=openid&response_type=id_token&prompt=login",
                                "title": "Show Website"
                            },
                            {
                                "type": "postback",
                                "title": "Start Chatting",
                                "payload": "USER_DEFINED_PAYLOAD"
                            }
                        ]
                    }
                }
            }
        }
    }*/

    for (var i = 0; i < productData.length; i++) {
        var product = productData[i];
        var item = {

            "title": product.title,
            "image_url": product.image_url,
            "subtitle": product.subtitle,
            "default_action": {
                "type": "web_url",
                "url": product.url,
                "messenger_extensions": true,
                "webview_height_ratio": "tall"
            },
            "buttons": [{
                "title": "View",
                "type": "web_url",
                "url": "https://google.com",
                "messenger_extensions": true,
                "webview_height_ratio": "tall"
            }]
        }
        //list.payload.facebook.attachment.payload.elements.push(item);
    }

    return list;
}




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
