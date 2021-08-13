let contactList
window.addEventListener("DOMContentLoaded", (event) => {
    contactList = getContactFromStorage()
    console.log(getContactFromStorage());
    document.querySelector(".contact-count").textContent = contactList.length
    createInnerHtml();
});

const getContactFromStorage = () =>{
    return localStorage.getItem('AddressBook') ? 
    JSON.parse(localStorage.getItem('AddressBook')) : []
}

const createInnerHtml = () => {
    if (contactList.length == 0) {
        return
    }
    const headerHtml = `<tr>
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    </tr>`;
    let innerHtml = `${headerHtml}`
    for (const contact of contactList)
    {
        innerHtml = `${innerHtml} 
        <tr>
        <td>${contact._name}</td>
        <td>
            ${contact._address}
        </td>
        <td>${contact._city}</td>
        <td>${contact._state}</td>
        <td>${contact._zip}</td>
        <td>${contact._phoneNumber}</td>
        <td>
            <img src="../assets/icon/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
            <img src="../assets/icon/create-black-18dp.svg" alt="update" id="${contact.id}" onclick="update(this)">
        </td>
        </tr>`;   
    }
    document.querySelector('#table-display').innerHTML = innerHtml
};

const getDeptHtml = (deptList) =>{
    let depthtml= "";
    for (const dept of deptList){
        depthtml = `${depthtml} <div class="dept-label">${dept}</div>`
    }
    return depthtml
}