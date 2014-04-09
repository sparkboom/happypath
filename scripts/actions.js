var HappyPath = function HappyPath(){
	this.queue = new Queue();
	this.queue.doNext();
}

function fireEvent(element,event){
    if (document.createEventObject){
        // dispatch for IE
        var evt = document.createEventObject();
        return element.fireEvent('on'+event,evt)
    }
    else{
        // dispatch for firefox + others
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
}
function go(resp, selector, filterParams){
	resp = $(selector);
		
	if (resp.length>1 && filterParams){
		var filtered = _.filter(resp,function(el,index){
			if (filterParams.index && index===filterParams.index)
				return true;
			
			if (filterParams.text && el.innerText.match(filterParams.text))
				return true;
			
			if (filterParams.value && $(el).val().match(filterParams.value))
				return true;
				
			return false;
		});
		resp = $(filtered);
	}
	
	return resp;
}

var setActions = {
	'setInput':function(resp,value){
		resp.focus().val(value);
		fireEvent(resp.get(0),'change');
	},
	'setSelect':function(resp,value){
		if (_.isNumber(value)){
			resp.val(value);
			fireEvent(resp.get(0),'change');
		}else if (value instanceof RegExp){
			resp.val(value);
			resp.find("option").filter(function() {
				return $(this).text().match(value); 
			}).prop('selected', true);
			fireEvent(resp.get(0),'change');
			
		}
	}
};


var actions = {
	'go':function(resp, selector, filterParams){
		if (_.isNumber(filterParams))
			filterParams = {index:filterParams};
		if (filterParams instanceof RegExp)
			filterParams = {text:filterParams};
			
		// inner scope.. you can't touch me from outside!
		var i = 0;
		var self = this;
		
		function forloop(){
			if(i>=10){
				self.queue.doNext(resp);
				return;
			}
			
			resp = go.call(this, resp, selector, filterParams);
			if (resp && resp.length>0){
				self.queue.doNext(resp);
				return;
			}
			
			i++; 
			setTimeout(forloop, 400);
		}
		
		// call the loop to get things started..
		forloop();
	},
	'idx':function(resp, index){
		resp = $(resp.get(index))
		this.queue.doNext(resp);
	},
	'click':function(resp){
		fireEvent(resp.get(0),'click');
		this.queue.doNext(resp);
	},
	'set':function(resp, value){
		resp.focus();
		resp.each(function( ) {
			var actionName = 'set' +  $(this).prop('tagName').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			setActions[actionName]($(this),value);
		});
		this.queue.doNext(resp);
	},
	'wait':function(resp, waitTime){
		var self = this;
		setTimeout(function(){
			self.queue.doNext(resp);
		},waitTime);
	}
}

_.forIn(actions, function(fn,name){
	AutoMgr.prototype[name] = function(){
		var current = {
			self:this,
			args:Array.prototype.slice.call(arguments, 0),
			name:name
		};
		console.log('queued',name,arguments);
		
		this.queue.add(function(resp){
			current.args.unshift(resp);
			console.log(current.name,current.args);
			fn.apply(current.self,current.args);
		})
		
		this.queue.run();
		return this;
	}
});

var happy = new HappyPath();