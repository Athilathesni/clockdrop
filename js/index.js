const createOptions = (dropdown, values) => values.map(A => {
    const option = document.createElement("option");
    option.value = A; option.text = A;
    dropdown.appendChild(option);
});
window.onload = () => {
    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
    const days = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dates = Array.from({ length: 31 }, (_, i) => String(i).padStart(2, 0));
    createOptions(document.getElementById("hour-dropdown"), hours);
    createOptions(document.getElementById("minute-dropdown"), minutes);
    createOptions(document.getElementById("day-dropdown"), days);
    createOptions(document.getElementById("month-dropdown"), months);
    createOptions(document.getElementById("date-dropdown"), dates);
    const loadSavedData = () => {
        const savedData = JSON.parse(localStorage.getItem('selectedData'));
        if (savedData) {
            document.getElementById("hour-dropdown").value = savedData.hour || "null";
            document.getElementById("minute-dropdown").value = savedData.minute || "null";
            document.getElementById("day-dropdown").value = savedData.day || "null";
            document.getElementById("month-dropdown").value = savedData.month || "null";
            document.getElementById("date-dropdown").value = savedData.date || "null";
        }
    };
    loadSavedData();
    const updateInfo = () => {
        const selected = {
            hour: document.getElementById("hour-dropdown").value || "null",
            minute: document.getElementById("minute-dropdown").value || "null",
            day: document.getElementById("day-dropdown").value || "null",
            month: document.getElementById("month-dropdown").value || "null",
            date: document.getElementById("date-dropdown").value || "null"
        };       
        document.getElementById("selected-info").textContent = `SELECTED: hour:${selected.hour}, Minute:${selected.minute}, Day: ${selected.day}, Month: ${selected.month}, Date: ${selected.date}`;
        localStorage.setItem('selectedData', JSON.stringify(selected));
    };
    document.querySelectorAll('select').forEach(sel => sel.addEventListener("change", updateInfo));
};


