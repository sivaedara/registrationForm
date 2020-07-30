try{
window.onload=function(){
  (function(){
  document.getElementById('btnSubmit').onclick = function(){
    console.log(document.getElementById('txtFstName').value);
    var newrow = '<tr><td>' + $('#txtFstName').val() + '</td><td>' + $('#txtLstName').val() + '</td><td>'+ $('#ddlCity option:selected').text() +'</td><td><button id=edit >Edit</button></td></tr>';
    $('#tblDetails').append(newrow);
    
   };
  })();

  if(document.getElementById('edit')!=null){
     document.getElementById('edit').onclick = function(){
  
     var row_index = $(this).parent().index();
     row = $('#tblDetails').find('tr').eq(row_index);
  };
  }
 }
}catch(e){console.log(e);}

