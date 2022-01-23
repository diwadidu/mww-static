function formatDate(dateStr) {
  const zeroPadNumber = (value) => {
    return `00${ value }`.substr(-2);
  }
  let pd = new Date(dateStr);
  return `${ pd.getFullYear() }-${ zeroPadNumber(pd.getMonth() + 1) }-${ zeroPadNumber(pd.getDate()) }`;
}

function zeroPad(someNumber, length) {
  if (!length) length = 2;
  return `00${someNumber}`.substr(-1 * length);
}

function formatYearMonth(year, month) {
  return `${zeroPad(year, 4)}-${zeroPad(month)}`;
}
