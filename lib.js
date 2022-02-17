exports.timeConversion = (s) => {
    const repeatRegex = /(\d+):(\d+):(\d+)(\w+)/g
    var [_, hours, minutes, seconds, ampm] = repeatRegex.exec(s);

    var hours = ampm.toLowerCase() == 'pm'
        ? ((Number.parseInt(hours) % 12) + 12) % 24
        : (Number.parseInt(hours)) % 12

    return [pad(hours), minutes, seconds].join(':');
}

const pad = (x) => {
    return String("0" + x).slice(-2);
}