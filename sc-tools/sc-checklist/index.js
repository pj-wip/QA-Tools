
const btn = document.querySelector('.takeImageBtn');


btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.master_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.pdp_creation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.seo_requests_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.highlights_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.promotion_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.shiseido_pdp_creation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.general_pages_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})


// Checkbox Script 
document.addEventListener('change', function(event) {
    // 1. Check if the clicked element is one of our checkboxes
    if (event.target.classList.contains('js-y') || 
        event.target.classList.contains('js-n') || 
        event.target.classList.contains('js-na')) {
        
        const clickedBox = event.target;
        const row = clickedBox.closest('tr'); // Find the specific row where the click happened
        
        // Find the other boxes IN THE SAME ROW
        const y = row.querySelector('.js-y');
        const n = row.querySelector('.js-n');
        const na = row.querySelector('.js-na');
        
        // 2. Logic: If a box is checked, uncheck the others in that row
        if (clickedBox.checked) {
            if (clickedBox === y) { if(n) n.checked = false; if(na) na.checked = false; }
            if (clickedBox === n) { if(y) y.checked = false; if(na) na.checked = false; }
            if (clickedBox === na) { if(y) y.checked = false; if(n) n.checked = false; }
        } 
        // 3. Logic: If the user tries to uncheck everything, reset to NA
        else {
            if (!y?.checked && !n?.checked && !na?.checked) {
                if(na) na.checked = true;
            }
        }
    }
});