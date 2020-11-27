/**
 * Validates data object to ensure it has all required properties to build the email subject and response.
 * @param {Object} data - Data object containing information about the contact request. Object is validated to ensure it has all required
 * values
 */
const _validateDataObj = data => {
    const requiredFields = ["firstName", "lastName", "message", "contactMethod"];
    let missingFields = new Array();
    const hasRequiredFields = requiredFields.map(field => {
        const hasProperty = data.hasOwnProperty(field);
        if(!hasProperty)
            missingFields.push(field);

        return hasProperty;
    }).reduce((prev, current) => prev && current, true);

    if(!hasRequiredFields)
        throw "The provided object is missing the following fields: " + JSON.stringify(missingFields);

}

/**
 *
 * @param {Object} data - Data object containing information about the contact request. Fields required to build
 * the email subject are, firstName, lastName, contactMethod, message.
 * This object is validated using the private method _validateDataObj(Object).
 */
const buildEmailBody = data => {
    _validateDataObj(data);

    const {
        firstName,
        lastName,
        email,
        phone,
        product,
        date,
        contactMethod,
        message,
        referralMethod
    } = data;

    const emailBody = `You have received a new contact request from ${firstName} ${lastName}.
        ${product !== "" ? "They would like to inqurie abot your " + product + " sessions." : ""}
        ${date !== "" ? "Their preferred date for this session is on " + date : ""}

        Their message for you is:
        ${message}

        ${firstName} prefers to be contacted by ${contactMethod}.
        ${email !== "" ? "Their email is " + email + "." : ""} ${phone !== "" ? "Their phone number is " + phone + "." : ""}

        ${referralMethod !== "" ? "They heard about you by " + referralMethod : ""}`;

    return emailBody;
}

/**
 *
 * @param {Object} data - Data object containing information about the contact request. Fields required to build
 * the email subject are, firstName, lastName, product. This object is validated using the private method _validateDataObj(Object).
 */
const buildEmailSubject = data => {
    _validateDataObj(data);

    const {
        firstName,
        lastName,
        product,
        ...other
    } = data;

    const emailSubject = `New ${product !== "" ? product : "Contact"} Request From ${firstName} ${lastName}`

    return emailSubject;
}

exports.buildEmailBody = buildEmailBody;
exports.buildEmailSubject = buildEmailSubject;