function yesno(thecheckbox, thelabel) {
	var checkboxvar = document.getElementById(thecheckbox);
	var labelvar = document.getElementById(thelabel);
	
	if (checkboxvar.checked == true) {
	  labelvar.innerHTML = "Y";
	} else {
	  labelvar.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	}
  }


/**For Toggle Checkbox script
let clickCount = 0;

function yesno(thecheckbox, thelabel) {
  var checkboxvar = document.getElementById(thecheckbox);
  var labelvar = document.getElementById(thelabel);
  
  clickCount++;

  if (clickCount === 1) {
	labelvar.innerHTML = "Y";
  } else if (clickCount === 2) {
	labelvar.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	clickCount = 0; // Reset count for next cycle
  }
}
*/
/**----- */


const btn = document.querySelector('.takeImageBtn');

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.general_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.homepage_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.landingpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.productpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.categorypage_checklist_div'))
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
	html2canvas(document.querySelector('.gwppromotion_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.cartpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.navigation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.footer_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.productoffline_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})