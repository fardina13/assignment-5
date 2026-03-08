// const loadIssues = () => {
//     fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
//     .then((res)=>res.json())
//     .then((json)=>displayIssues(json.data))
// }
// const displayIssues = (issues)=>{
//     const issuesContainer = document.getElementById('issues-container');
//     for(let issue of issues){
//         const btnDiv = document.createElement('div');
//         btnDiv.innerHTML = `
//            <button class="btn btn-outline btn-primary">All</button>
//         `;
//         issuesContainer.append(btnDiv);
//     }
// }
// loadIssues();

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
}
switchTab(currentTab);