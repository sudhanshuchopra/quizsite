var action;
var uncheck=(function(){
  var setCheck;
    function radio(e){
    if(setCheck != this){
             setCheck = this;
        }
        else{
            this.checked = false;
            setCheck = null;
    }
    };
    /*function handlecheck(e) {
     e.preventDefault();
     data = new FormData($('form')[0]);
     $.ajax({
       url: action,
      type:"POST",
      data: data,
       processData: false,
       dataType: 'json',
       contentType: false,
       success: function(response, xhr) {
         result=response.result;
         label_list=response.label_list;
         radios=$('form')[0].getElementsByClassName('radio-field');
         labels=[]
         for(var i=0;i<radios.length;i++)
         {
           labels[i]=radios[i].children[0].children[0];
         }
         for(var j=0;j<labels.length;j++)
         {
          labels[j].innerHTML=label_list[j]+ " "+labels[j].innerHTML;
         }
         myrads=$('form')[0].getElementsByClassName('radio');
         for(var k=0;k<myrads.length;k++)
          myrads[k].children[0].disabled=true;
       },
       error: function(error) {
         console.log(error);
      }
     });
   }*/
   function init()
   {
    var myRadios =document.getElementsByClassName("with-gap")
    var setCheck;
    var x = 0;
    for(x = 0; x < myRadios.length; x++){

    myRadios[x].onclick =radio;


}
    //$('#login-btn').click(handlecheck);


   }
    

    return{
        init:init,
    }})();
