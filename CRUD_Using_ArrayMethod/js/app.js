let editFlag=-1;
const product = []
function displayItem(){
    temp=product.map(function(val,index){
        return ` 
        <tr>
            <td> ${val}</td>
            <td> <button onclick="editInfo('${val}','${index}');">Edit</button> </td>
            <td> <button onclick="removeItem('${index}');">Delete</button> </td>
        </tr> `;
    });
    document.getElementById("display").innerHTML=temp.join("");
}

function saveInfo(){
    const temp=document.getElementById("searchItem").value;
    if(editFlag < 0){
        product.push(temp)
    }
    else{
        product[editFlag]=temp;
        editFlag=-1;
    }
    
    displayItem();
}
function editInfo(v,i){
    editFlag=i;
    document.getElementById("searchItem").value = v;
}
function removeItem(i){
    product.splice(i,1);
    displayItem();
}