
const fetch = require("isomorphic-unfetch");
const querystring = require("querystring");

function main(pincode, date) {

    var request = require('request');
    let qs = "?pincode=" + pincode + "&date=" + date ;

    let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin" + qs

    // console.log(url);

    var options = {
    'method': 'GET',
    'url': url,
    'headers': {
    }
    };
    request(options, function (error, response, obj) {
    if (error) throw new Error(error);

    let found = false;

    const data = JSON.parse(obj);

    data.centers.forEach((center) => {
        center.sessions.filter((session) => {
            return session.min_age_limit ===  45 && session.available_capacity > 0
        }).forEach((session)=> {
            found = true;
            console.log(pincode,"with",center.name,"is having",
            session.available_capacity,"slots of", session.vaccine)
        })
    })
    if(!found) {
        console.log("No Slots Available");
    }
    });

}

const inputArgs = process.argv.slice(2);
main(inputArgs[0],inputArgs[1]);
