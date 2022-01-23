importScripts(
  'object_hash.js',
  'worker-utils.js'
);


class LoadEventDataWorker {

  eventApiPath = '/events';
  // eventApiPath = '/server/events';

  loadEventDataFromApi = message => {
    if (!message.data.year || !message.data.month) return;
    const year = message.data.year;
    const paddedMonth = zeroPad(message.data.month);

    const resourceUrl = `${ message.data.domain }${this.eventApiPath}/events-${ year }-${ paddedMonth }.json`;
    const requestObj = new XMLHttpRequest();

    requestObj.onload = this.processRawEventData(year, paddedMonth);
    requestObj.onerror = this.postErrorFor(`${year}-${paddedMonth}`);
    requestObj.open('GET', resourceUrl);
    requestObj.send();
  };

  processRawEventData = (year, paddedMonth) => jsonData => {
    const parsedReply = JSON.parse(jsonData.target.response);

    postMessage({
      month: parsedReply.month,
      events: parsedReply.events
    });
  };

  rangeToDates = eventWithStartAndEndDate =>
    eventWithStartAndEndDate.dates.map( date => {
      const startDate = new Date(`${date.start}T00:00:00`);
      const endDate = new Date(`${date.end}T00:00:00`);
      let eventDateRange = [];
      let nextDateInRange;

      let i = 0;
      do {
        nextDateInRange = this.addDaysToDate(startDate, i);
        eventDateRange.push(nextDateInRange)
        i++;
      } while (nextDateInRange < endDate );

      const result = {
        event: eventWithStartAndEndDate,
        days: eventDateRange.map(this.dateToString)
      };
      return result;
    });

  addDaysToDate = (date, numDays) => {
    if (isNaN(numDays)) numDays = 1;
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + numDays);
    return copy
  };

  dateToString = date =>
    `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`;

  hasConsistentDates(jsonEventData) {
    const dataKeys = Object.keys(jsonEventData);
    return dataKeys.every(this.isSameYearMonth(dataKeys[0]));
  };

  isSameYearMonth = ref => test => test.substr(0, 7) === ref.substr(0, 7);

  postErrorFor = yearMonth => {
    return (err) => {
      const error = {
        type: 'error',
        msg: `No data for ${yearMonth}`,
        month: yearMonth,
        eventsByDay: [],
        isConsistent: false
      };
      postMessage(error)
    }
  };
}

self.onmessage = new LoadEventDataWorker().loadEventDataFromApi;
