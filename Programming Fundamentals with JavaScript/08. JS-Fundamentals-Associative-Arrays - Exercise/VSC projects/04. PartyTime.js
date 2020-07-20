function solve(input) {

    let partyList = {
        "vip": [],
        "regular": [],
    }

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let incomingGuests = input.slice(partyIndex + 1);

    for (const eachGuest of guestList) {

        if (Number.isInteger(+eachGuest[0])) { //!
            partyList.vip.push(eachGuest);
        } else {
            partyList.regular.push(eachGuest);
        }
    }

    for (const guest of incomingGuests) {

        if (partyList.vip.includes(guest)) {
            let vipIndex = partyList.vip.indexOf(guest);
            partyList.vip.splice(vipIndex, 1);
        } else if (partyList.regular.includes(guest)) {
            let regularIndex = partyList.regular.indexOf(guest);
            partyList.regular.splice(regularIndex, 1);
        }
    }

    
    let unattendanceCount = (partyList.vip.length) + (partyList.regular.length);
    console.log(unattendanceCount);

    partyList.vip.forEach((vipUnattendance) => {
        console.log(vipUnattendance);
    });

    partyList.regular.forEach((regularUnattendance) => {
        console.log(regularUnattendance);
    });   
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);