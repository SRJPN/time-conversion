exports.timeConversion = (s) => {
    const repeatRegex = /(\d+):(\d+):(\d+)(\w+)/g
    var match = repeatRegex.exec(s);
    var hours = match[4].toLowerCase() == 'pm' ? (Number.parseInt(match[1]) + 12) % 24 : (Number.parseInt(match[1])) % 12
    var result = `${hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${match[2]}:${match[3]}`
    return result

}