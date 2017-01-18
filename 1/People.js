;var People = (function  () {
	
	var names = ["Perto", "Ivan", "Nazar", "Bryant"], me = this;

	addPersonName = function (name){

	}

	delPersonName = function(index){
			
		names.splise(index, 1);
	}

	return {
		cacheDom: function(index){
			return names[index];
		},
		delPersonName: function(index){
			names.splise(index, 1);
		},
		init: function(){
			alert("i'm working");
			var list = document.getElementById("listOfNames");
			for(var i = 0; i< names.length; i++){
				var li = document.createElement('li');
				li.innerHTML = this.cacheDom(i);
				list.appendChild(li);
			}
		}
	}

})()