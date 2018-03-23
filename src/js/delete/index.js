const deleteFunction = (e) => { 
    e.preventDefault();
    console.log(e.target);
    
     $(e.target).parent().remove();
     //console.log($(this).parent())
    //alert("casi borra");
  
}

module.exports = deleteFunction;