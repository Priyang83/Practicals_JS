let tempDataMain = data;
let tCol = [];
function displayBtn(sliceLen, arrayData) {
    // console.log(arrayData)
    tempDataMain = arrayData;
    const dataLen = tempDataMain.length;
    let noOfBtn = parseInt(dataLen / sliceLen);

    if (dataLen % sliceLen != 0) {
        noOfBtn += 1;
    }
    // console.log(noOfBtn)
    let button_Array = [];
    for (let i = 1; i <= noOfBtn; i++) {
        button_Array += `<button onclick="displayData(${sliceLen * i - sliceLen}, ${sliceLen * i});" class="btn btn-primary"> Page ${i} </button>`
    }
    document.getElementById("display_btn").innerHTML = button_Array;
    displayData(0, sliceLen)
}
function displayData(start, end) {
    // console.log(arrayData);
    
    tCol = [];
    for (key in tempDataMain[0]) {
        tCol.push(key);
    }

    const colName = tCol.map(function (val) {
        return `<th>${val}</th>`;
    })

    //console.log(tCol);
    const temp = tempDataMain.slice(start, end).map(function (val) {
        let tempData = ``;
        for (let key in val) {
            tempData += `

                <td><div class="flexcontainer"><p>${val[key]}</p><button onclick="sortData('${key}');"><i class="fa-solid fa-arrow-up"></i></button></div> </td>   
              `;
        }
        return `
        <tr>
            ${tempData}
        </tr>
        `;
    });
    document.getElementById("displayCol").innerHTML = colName.join("")
    document.getElementById("display_Data").innerHTML = temp.join(" ");
    
}

function sortData(keyname) {
    tempDataMain.sort(function (val, val2) {
        if (val[keyname] < val2[keyname]) {
            return -1;
        }
        else {
            return 1;
        }
    });
    displayBtn(10, tempDataMain);
}

displayBtn(10, data);

const colNameOption = tCol.map(function (val) {
    return `<option value="${val}">${val}</option>`;
});
document.getElementById("colSelect").innerHTML = colNameOption.join("");

function dataSearch() {
    const cols = document.getElementById("colSelect").value;
    // console.log(cols);
    const searchSelection = document.getElementById("searchSelect").value;
    const searchVal = document.getElementById("searchVal").value;
    //console.log(searchSelection);
    
    let searchData = [];
    if (searchSelection == "startsWith") {
        searchData = data.filter(function (val) {
            // console.log(val[cols])
            //console.log(val[b])
            let s = String(val[cols]);
            return s.startsWith(searchVal)
        })
    }
    else if (searchSelection == "endsWith") {
        searchData = data.filter(function (val) {
            let s = String(val[cols]);
            return s.endsWith(searchVal);

        })
    }
    displayBtn(10, searchData);

}