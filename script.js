let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

//rendering from localStorage
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//button click event listener
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log( localStorage.getItem("myLeads"))
    inputEl.value = ""
    renderLeads()
})

//function behaviour
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                    <li>
                        <a target='_blank' href='${myLeads[i]}'>
                            ${myLeads[i]}
                        </a>
                    </li>
                `
    }
    ulEl.innerHTML = listItems
}