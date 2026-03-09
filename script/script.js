let allIssues = [];
let currentTab = 'all';
const tabActive =['bg-[#4A00FF]', 'text-white', 'border-blue'];
const tabInactive =['bg-transparent', 'text-slate-700', 'border-slate-200'];
function switchTab(tab){
    const tabs =['all', 'open', 'closed'];
    for(const t of tabs){
        const tabName = document.getElementById('tab-' + t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    let filteredIssues = []; 

    if (tab === 'all') {
        filteredIssues = allIssues;
    }
    else {
        filteredIssues = allIssues.filter(issue => issue.status.toLowerCase() === tab);
    }
    displayIssues(filteredIssues);
}
switchTab(currentTab);

const loadIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((json)=>{
       allIssues = json.data;
       displayIssues(allIssues);
    })
}
function displayIssues(issues) {
    const container = document.getElementById('issue-container');
    const countElement = document.getElementById('issue-count');
    container.innerHTML = "";
    if (countElement) {
        countElement.innerText = `${issues.length} Issues`;
    }
    issues.forEach(issue => {
        const card = document.createElement('div');
        const s = issue.status ? issue.status.toLowerCase() : 'open';
        const borderColor = (s === 'open') ? 'border-green-500' : 'border-purple-500';
        card.className = `bg-white rounded-xl shadow-sm py-6 px-5 flex flex-col h-full border-t-4 ${borderColor}`;
        card.innerHTML =`
            <div class="flex justify-between pb-3">
                <img src="${s === 'open' ? 'assets/Open-Status.png' : 'assets/Closed-Status.png'}" alt="status">
                <div class="bg-[#FEECEC] rounded-full"><p class="font-medium text-[12px] text-[#EF4444]">${issue.priority}</p></div>
            </div>
            <h2 class="font-semibold text-[16px]">${issue.title}</h2>
            <p class="text-[14px] text-[#64748B]">${issue.description}</p>
            <div class="flex gap-2 mt-3 mb-4">
                <button class="bg-[#FEECEC] rounded-full text-[#EF4444] text-[12px] p-2">BUG</button>
                <button class="bg-[#FFF8DB] rounded-full text-[#D97706] text-[12px] p-2">HELP WANTED</button>
            </div>
            <p class="text-[12px] text-[#64748B]">#${issue.id} by ${issue.author}</p>
            <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
        `;
        card.onclick = () => {
            issue.status = (s === 'open') ? 'closed' : 'open';
            const activeTab = document.querySelector('.bg-[#4A00FF]') ? document.querySelector('.bg-[#4A00FF]').id.replace('tab-', '') : 'all';
            switchTab(activeTab);
            };
        container.appendChild(card);
    });
}
loadIssues();