
class FormatedDate {

    // get indian date
   getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-IN', options);
    return formattedDate;
  }

//   get date difference
getNumberOfDays(from,to = new Date()) {
    let toTime = to.getTime()
    let fromTime = from.getTime()
    let differenceInMilliseconds = toTime - fromTime

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInDays = differenceInMilliseconds / millisecondsPerDay;
  return differenceInDays
}

}
module.exports = FormatedDate;