var colorChanger = {

	colorList: [8, 8, 8]/*Valores dentre 1 e 14*/, body: {}, indexList: 0, key: false,
	
	setColor: function(_color){
		this.body.style.background = _color
	},
	
	hex: function(){
		return "#" + this.colorList[0].toString(16) + this.colorList[1].toString(16) + this.colorList[2].toString(16);
	},
	
	increment: function(){
		if(this.key) this.colorList[this.indexList]++;
		else this.colorList[this.indexList]--;
	},
	
	iteratorList: function(){
		if(this.colorList[this.indexList] == 15 || this.colorList[this.indexList] == 0){
			this.indexList++;
			if(this.indexList == 3){
				this.indexList = 0;
			}
			this.key = !this.key;
		}
	},
	
	loop: function(){
		this.setColor(this.hex());
		this.iteratorList();
		this.increment();
	}
};
	
	
