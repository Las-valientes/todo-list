const editFunction = (e) => {
    e.preventDefault();
    let siblingNode = $(e.target).siblings('label');
    let editable = siblingNode.attr("contentEditable", true);
    // console.log(siblingNode);
    
}

module.exports = editFunction;