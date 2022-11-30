const officer_line = document.getElementById('#members_main');
const officer_line_title = document.getElementById('#officers_title');
const year_spans = document.getElementsByClassName("year_span")

function setYear() {
    for (x = 0; x <= year_spans.length; x++){
        let start_year = moment().format('YYYY');
        let end_year = moment().add(1, 'year').format('YYYY');
        let current_years = start_year + ' - ' + end_year;
        year_spans[x].innerHTML = current_years;
        console.log(current_years);
    }
}
setYear();