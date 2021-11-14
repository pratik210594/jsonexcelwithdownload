
var data = [{
    "Segment": "Government",
    "Country": "Canada",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Government",
    "Country": "Germany",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Midmarket",
    "Country": "France",
    "Product": "Carretera",
    "Discount": "None",
}];
//document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const EXCEL_EXTENSION = '.xlsx';


function downloadFunc()
{
		const worksheet = XLSX.utils.json_to_sheet(data);
	//	console.log(worksheet);
		const workbook = {
			Sheets:{
				'data' :worksheet
			},
			SheetNames:['data']
		};
		const excelBuffer = XLSX.write(workbook,{bookType:'xlsx', type:'array'});
		console.log(excelBuffer);
		saveAsExcel(excelBuffer, 'myFile');
}

function saveAsExcel(buffer, filename)
{
//	alert('ihhhh');
	const data = new Blob([buffer], {type: EXCEL_TYPE});
	saveAs(data,filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION);
}



