/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

const arr = require('./array');

function populateTable(table, data) {
    data.forEach((d, i) => {
        const row = table.insertRow(i);
        Object.keys(d).forEach((k, j) => {
            const cell = row.insertCell(j);
            cell.innerHTML = d[k];
        });
        table.appendChild(row);
    });
}

const tabel = document.querySelector('#jadwal tbody');

populateTable(tabel, arr.warga1);

// Shuffle two-dimensional array
function fisherYates(arr) {
    let i = arr.length, j, tempi, tempj;
    if (i === 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = arr[i];
        tempj = arr[j];
        arr[i] = tempj;
        arr[j] = tempi;
    }
    return arr;
}

Date.prototype.getWeek = function() {
    let january1st = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - january1st) / 86400000) + january1st.getDay() + 1) / 7);
}

let weekNumber = (new Date()).getWeek();
                                                let data = $.each(warga1, function(i) { fisherYates(this) });console.log(data);
if (weekNumber % 2 == 0) populateTable(tabel, warga2);
if (weekNumber % 3 == 0) populateTable(tabel, warga3);
if (weekNumber % 4 == 0) populateTable(tabel, warga4);
if (weekNumber % 5 == 0) populateTable(tabel, warga5);
if (weekNumber % 6 == 0) populateTable(tabel, warga6);
if (weekNumber % 7 == 0) populateTable(tabel, warga7);
if (weekNumber % 8 == 0) populateTable(tabel, warga8);
if (weekNumber % 9 == 0) populateTable(tabel, warga9);
if (weekNumber % 10 == 0) populateTable(tabel, warga10);


// Show modal after registration form submit
$('form').on('submit', function (e) {
    e.preventDefault();
    $('#modal').modal('show');
})

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Manual table shuffle 
document.getElementById("shuffleButton").addEventListener("click", function () {
    let table = document.querySelector(`#jadwal tbody`);
    let data = $.each(warga, function(i) { fisherYates(this) });

    $('#anggota').find("tr:gt(0)").remove();
    const jadwal = document.querySelector('#jadwal > tbody ');
    jadwal.firstElementChild.remove();
    
    data.forEach((d, i) => {
        const row = table.insertRow(i);
        Object.keys(d).forEach((k, j) => {
            const cell = row.insertCell(j);
            cell.innerHTML = d[k];
        });
        table.appendChild(row);
    });
});
