document.addEventListener("DOMContentLoaded",()=>{
const createOptions = (dropdown, values) => values.map(A => {
    const option = document.createElement("option");
    option.value = A; option.text = A;
    dropdown.appendChild(option);
});
window.onload = () => {
    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
    const days = ["","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dates = Array.from({ length: 31 }, (_, i) => String(i).padStart(2,0));
    createOptions(document.getElementById("hour-dropdown"), hours);
    createOptions(document.getElementById("minute-dropdown"), minutes);
    createOptions(document.getElementById("day-dropdown"), days);
    createOptions(document.getElementById("month-dropdown"), months);
    createOptions(document.getElementById("date-dropdown"), dates);
    const updateInfo = () => {
        const selected = {
            hour: document.getElementById("hour-dropdown").value || "null",
            minute: document.getElementById("minute-dropdown").value || "null",
            day: document.getElementById("day-dropdown").value || "null",
            month: document.getElementById("month-dropdown").value || "null",
            date: document.getElementById("date-dropdown").value || "null"
        };
        document.getElementById("selected-info").textContent = `SELECTED: hour:${selected.hour},Minute:${selected.minute},Day: ${selected.day},Month: ${selected.month},Date: ${selected.date}`;
    };
    document.querySelectorAll('select').forEach(sel => sel.addEventListener("change", updateInfo));
};
})


// document.addEventListener("DOMContentLoaded",()=>{
//     const forms=document.getElementById("form");
//     const saved=document.getElementById("saved-data")

//     const savedData=JSON.parse(localStorage.getItem("datetime"))||null;
//     if(savedData){
//         displaysavedData(savedData)
//     }
//     forms.addEventListener("save",(e)=>{
//         e.preventDefault()

//         const inputs={
//             year:forms.year.value||"*",
//             month:forms.month.value||"*",
//             day:forms.day.value||"*",
//             date:forms.date.value||"*",
//             hour:forms.hour.value||"*",
//             minute:forms.minute.value||"*"
//         }
//         localStorage.setItem("datatime",JSON.stringify(inputs))
//         displaysavedData(inputs)
//     })
//     function displaysavedData(data){
//         saved.innerHTML=`
//         year:${data.year}<br>
//          month:${data.month}<br>
//           day:${data.day}<br>
//            date:${data.date}<br>
//            hour:${data.hour}<br>
//             minute:${data.minute}<br>
//         `
//     }
// })