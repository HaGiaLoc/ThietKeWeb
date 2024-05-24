function getVisitCount() {
    let visitCount = localStorage.getItem('visitCount5');
    if (visitCount === null) 
        {
            visitCount = 0;
        } else 
        {
            visitCount = parseInt(visitCount, 10);
        }
    return visitCount;
}

function incrementVisitCount() {
    let visitCount = getVisitCount();
    visitCount += 1;
    localStorage.setItem('visitCount5', visitCount);
    return visitCount;
}

document.addEventListener('DOMContentLoaded', (event) => {
    let visitCount = incrementVisitCount();
    document.getElementById('visit-count').textContent = visitCount;
});