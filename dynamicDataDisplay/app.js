function displayBtn(sliceLen, arrayData) {
    // console.log(arrayData)
    const dataLen = arrayData.length;
    let noOfBtn = parseInt(dataLen / sliceLen);
    
    if (dataLen % sliceLen != 0) {
        noOfBtn += 1;
    }
    // console.log(noOfBtn)
    let button_Array = [];
    for (let i = 1; i <= noOfBtn; i++) {
        button_Array += `<button onclick="displayData('${sliceLen * i - sliceLen}', '${sliceLen * i}');" class="btn btn-primary"> Page ${i} </button>`
    }
    document.getElementById("display_btn").innerHTML=button_Array;
    displayData(0,sliceLen)
}
function displayData(start,end){
    // console.log(arrayData);
    
    
    const temp=data.slice(start,end).map(function(val){
        let tempData=``;
        for(let key in val){
            tempData += `

                <td><button onclick="sortData('${key}');"><i class="fa-solid fa-arrow-up"></i></button><p>${val[key]}</p> </td>   
              `;
        }
        return `
        <tr>
            ${tempData}
        </tr>
        `;
    });
    document.getElementById("display_Data").innerHTML=temp.join(" ");
}
function sortData(keyname){
    data.sort(function(val,val2){
        if(val[keyname] < val2[keyname]){
            return -1;
        }
        else{
            return 1;
        }
    });
    displayBtn(10,data);
}
displayBtn(10, data);