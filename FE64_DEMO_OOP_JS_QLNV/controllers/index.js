var arrayList=[];
// constructor(maNv, tenNv, chucVu, luongCb, gioLamViec)
function displayContent(arrayListNV){ 
    let displayHTML=``;
    arrayListNV.forEach((element) => {
        displayHTML+=`
            <tr>
                <td>${element.maNv}</td>
                <td>${element.tenNv}</td>
                <td>${element.chucVu}</td>
                <td>${element.luongCb}</td>
                <td>${element.tongLuong()}</td>
                <td>${element.gioLamViec}</td>    
                <td>${element.xepLoai()}
                    <div class="btn btn-danger" onClick='xoaNhanVien(${element.maNv})'>Xóa</div>
                </td>   
            </tr>
        `;
    });
    return displayHTML;
}


//Bước 1: Định nghĩa sự kiện cho nút btnXacNhan
document.querySelector("#btnXacNhan").addEventListener('click', () => {

    //Bước 2: Lấy thông tin người dùng nhập từ giao diện
    let manhanVien = document.querySelector("#idNv").value;
    let tennhanVien = document.querySelector("#nameNv").value;

    //Dom đến thẻ select
    //selectedIndex: là vị trí của thẻ option được chọn trong thẻ <select></select>
    // console.log('selectedIndex',tagChucVu.selectedIndex);
    var tagChucVu=document.querySelector("#typeNv");
    var tagOptionDuocChon=tagChucVu[tagChucVu.selectedIndex]; //=> tagChucVu['0']
    // console.log('option',tagOptionDuocChon.innerHTML);

    let chucVu = tagOptionDuocChon.innerHTML;
    let luongCb = document.querySelector("#salary").value;
    let gioLamViec = document.querySelector("#hourWork").value;
    let nhanVien=new NhanVien(manhanVien,tennhanVien,chucVu,luongCb,gioLamViec);

    arrayList.push(nhanVien);
    let displayUI=displayContent(arrayList);

    document.querySelector("#displayConent").innerHTML=displayUI;

});

function xoaNhanVien(idDelete){
    for(let i=arrayList.length-1;i>=0;i--)
    {
        let nv=arrayList[i];
        if(nv.maNv==idDelete){
            arrayList.splice(i,1);
        }
    }
    let displayUI=displayContent(arrayList);
    document.querySelector("#displayConent").innerHTML=displayUI;
}
