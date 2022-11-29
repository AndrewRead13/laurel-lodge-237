import moment from 'moment';
const officer_line = document.getElementById('#members_main');
const officer_line_title = document.getElementById('#officers_title');
const year_span = document.getElementsByClassName('.year_span')


function getYear(){
    let start_year = moment().year();
    let end_year = moment().add('year', 1);
    year_span.innerHTML = start_year + ' - ' + end_year;
};
getYear();

console.log(start_year);

