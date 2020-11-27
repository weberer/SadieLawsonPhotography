const {buildEmailSubject, buildEmailBody} = require('./email');
const aws = require('aws-sdk');
const ses = new aws.SES({region: 'us-east-1'});

const recipientEmailAddress = process.env.RECIPIENT_EMAIL_ADDRESS;
const sourceEmailAddress = process.env.SOURCE_EMAIL_ADDRESS;

let response;

exports.handleContactRequest = (event, context, callback) => {
    const data = JSON.parse(event.body);

    try {
        const params = {
            Destination: {
                ToAddresses: [recipientEmailAddress]
            },
            Message: {
                Body: {
                    Text: {
                        Data: buildEmailBody(data)
                    }
                },
                Subject: {
                    Data: buildEmailSubject(data)
                }
            },
            Source: sourceEmailAddress
        };

        ses.sendEmail(params, (err, data) => {
            if (err) {
                console.log(err);
                context.fail(err);
            } else {
                context.succeed(event);
            }
        });

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Message Sent Successfully.\n\n' + JSON.stringify(params)
            })
        };

    } catch(e) {
        console.log(e);

        response = {
            'statusCode': 500,
            'body': JSON.stringify({message: 'Failed to send message', error: e.message}),
            'isBase64Encoded': false
        };
    }


    callback(null, response);
    return response;
};