module.exports = function reverse (n) {
    return parseFloat(String(n).split (""). reverse (). join ("")) //convert to str, then convert to array, then reverse array, then convert to str, then convert to number
  
}
