document.addEventListener("DOMContentLoaded", function() {
    const jobs = [];
    addNewJobRow();

    document.getElementById('addRowBtn').addEventListener('click', addNewJobRow);
    document.getElementById('addJobBtn').addEventListener('click', addMultipleJobs);
    document.getElementById('summarizeBtn').addEventListener('click', summarize);

    function addNewJobRow() {
        const newRow = document.createElement('div');
        newRow.classList.add('row', 'jobRow', 'mt-2');
        newRow.innerHTML = `
            <input type="text" class="jobName col-2" placeholder="Job Name">
            <input type="number" class="colorsFront col-2" placeholder="Colors Front">
            <input type="number" class="colorsBack col-2" placeholder="Colors Back">
            <select class="setupType col-2">
                <option value="" disabled selected>Setup Type</option>
                <option value="Youth">Youth</option>
                <option value="Adult">Adult</option>
            </select>
        `;
        document.getElementById('jobContainer').appendChild(newRow);
    }

    function addMultipleJobs() {
        const rows = document.querySelectorAll('.jobRow');
        const addedJobsList = document.getElementById('addedJobsList');
        
        rows.forEach(row => {
            const jobName = row.querySelector('.jobName').value;
            const colorsFront = parseInt(row.querySelector('.colorsFront').value) || 0;
            const colorsBack = parseInt(row.querySelector('.colorsBack').value) || 0;
            const setupType = row.querySelector('.setupType').value;

            if (jobName && colorsFront >= 0 && colorsBack >= 0 && setupType) {
                jobs.push({
                    jobName,
                    screens: colorsFront + colorsBack,
                    setupType
                });

                const jobDiv = document.createElement('div');
                jobDiv.innerHTML = `${jobName} - ${colorsFront + colorsBack} screens - ${setupType}`;
                addedJobsList.appendChild(jobDiv);
            }
        });

        document.getElementById('jobContainer').innerHTML = '';
        addNewJobRow();
    }

    function summarize() {
        const outputDiv = document.getElementById('output').querySelector('.card-body');
        outputDiv.innerHTML = '<h4>Press 1</h4>';

        jobs.forEach((job, index) => {
            outputDiv.innerHTML += `<p>Set up ${index + 1}: Job ${job.jobName} (${job.screens} screens, ${job.setupType})</p>`;
        });
    }
});





