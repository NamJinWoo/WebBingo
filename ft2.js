var p = document.getElementsByTagName("p");
var array=[];
var selected=[];
var array1 = [];
var array2 = [];
var count = 0;
for(var i = 0; i< p.length;i++){
  array[i] = p[i];
}
function ranGenerator(max, min){
        return Math.floor((Math.random() * max) + min);
    }
function start(){
  for(var i = 0; i < 16; i++){
        array[i] = ranGenerator(25, 1);

        for(var j = 0; j < i; j++ ){
            if(array[i] == array[j]){
                i = i - 1;
                break;
            }
        }
        console.log(array[i]);
        localStorage.setItem("data"+(i+1),array[i]);
        p[i].innerHTML = array[i];

    }
}
function change(event){
    document.getElementById(event.target.id).setAttribute("class","selected");
}
function changeP(event){
  var tr = document.getElementById("table").getElementsByTagName("tr");
  var data= [];
  var which = [];
  var index = 0;
    for(var i = 0 ; i< 4;i++){
      for(var j = 0; j< 4; j++){
        console.log(tr[i].children[j].id);
        if($(tr[i].children[j]).attr("class")=="selected"){
          data[index] = tr[i].children[j].childNodes[0].innerHTML;
          which[index] = tr[i].children[j].id;
          index++;
          console.log(data);
          console.log(which);
        }
      }
    }
    //document.getElementById(which[1]).innerHTML = data[0];
    //document.getElementById(which[0]).innerHTML = ;
    var x = document.getElementById(which[1]);
    var y = document.getElementById(which[0]);
    x.childNodes[0].innerHTML = data[0];
    y.childNodes[0].innerHTML = data[1];
    for(var i = 0; i < 16; i++){
          localStorage.setItem("data"+(i+1),p[i].innerHTML);

      }
    var q = $(x).attr("id");
    var w = $(y).attr("id");
    $("#"+q).attr("class","none");
    $("#"+w).attr("class","none");
}
function match(){
  for(var i = 0; i< 16; i++){
    $(p[i]).parent().attr("class","none");
  }
  document.getElementById("change").disabled = true;
  var k = 0;
  var h = document.getElementsByTagName("h3");
  for(var i = 0; i < 16; i++){
        array1[i] = ranGenerator(25, 1);

        for(var j = 0; j < i; j++ ){
            if(array1[i] == array1[j]){
                i = i - 1;
                break;
            }
        }
    }
  h[0].innerHTML = "매칭 데이타 : "+ array1;
  for(var i = 0; i < 16; i++){
    for(var j = 0; j < 16; j ++){
    if(array[i] == array1[j]){
      console.log($(p[i]).parent().attr("id"));
      $(p[i]).parent().attr("class","matched");
      array2[k] = i;
      k++;
    }
  }
  }

}
function check(){
  var tr = document.getElementById("table").getElementsByTagName("tr");

  for(var i = 0; i < 4; i++){
    var count1 = 0;
    for(var j =0; j<4;j++){
      if($(tr[i]).children().eq(j).attr("class")=="matched"){
        count1 ++;
        if(count1 == 4){
          count++;
        }
      }

    }
  }
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  for(var i = 0; i<4; i++){
    if($(tr[i]).children().eq(0).attr("class")=="matched"){
      count2++;
      if(count2 == 4){
        count++;
        console.log(count);
      }
    }
  }
  for(var i = 0; i<4; i++){
    if($(tr[i]).children().eq(1).attr("class")=="matched"){
      count3++;
      if(count3 == 4){
        count++;
        console.log(count);
      }
    }
  }
  for(var i = 0; i<4; i++){
    if($(tr[i]).children().eq(2).attr("class")=="matched"){
      count4++;
      if(count4 == 4){
        count++;
        console.log(count);
      }
    }
  }
  for(var i = 0; i<4; i++){
    if($(tr[i]).children().eq(3).attr("class")=="matched"){
      count5++;
      if(count5 == 4){
        count++;
        console.log(count);
      }
    }
  }


  if($(tr[0]).children().eq(0).attr("class")=="matched"){
    if($(tr[1]).children().eq(1).attr("class")=="matched"){
      if($(tr[2]).children().eq(2).attr("class")=="matched"){
        if($(tr[3]).children().eq(3).attr("class")=="matched"){
          count++;
        }
      }
    }
  }
  if($(tr[0]).children().eq(3).attr("class")=="matched"){
    if($(tr[1]).children().eq(2).attr("class")=="matched"){
      if($(tr[2]).children().eq(1).attr("class")=="matched"){
        if($(tr[3]).children().eq(0).attr("class")=="matched"){
          count++;
        }
      }
    }
  }
  var h2 = document.getElementsByTagName("h2");
  if(count >=5){
    h2[0].innerHTML = count + "  You Win!"
  }
  else{
    h2[0].innerHTML = count + "  You Lose!"
  }
}
