var User = (function(){
			var age = 10

			return {
				getAge: function(){
					alert(age);
				},
				getName: function(){
					alert(name)
				},
				setName: function(name){
					return  name;
				}
			}
		})();


		var name = prompt('set your name');
        
        User.setName(name);
        User.getName();
        User.getAge();