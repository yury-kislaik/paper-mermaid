(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tshirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.instance.on("mousedown", function(e)
		{
		    e.currentTarget.offsetX = stage.mouseX / stage.scaleX - e.currentTarget.x;
		    e.currentTarget.offsetY = stage.mouseY / stage.scaleY - e.currentTarget.y;
		});
		
		this.instance.on("pressmove", function(e)
		{
		    e.currentTarget.x = stage.mouseX / stage.scaleX - e.currentTarget.offsetX;
		    e.currentTarget.y = stage.mouseY / stage.scaleY - e.currentTarget.offsetY;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-756.7,-137.1)).s().p("AiPMiQhdgBhIgQQgzgMgOgCQgLgBgYABIgkgBQgmgDgxgTIgHgDIgFgFIgKgJQADgGACgJIADgLQAVg0ALhDIAHgzIAFgPQANgtAHg5QAFgoAEg/QADgrAAgYQgBgkgIgdIgDgHIgBgHIgBgDQACgDABgFQAAgIgGgEQgEgEgJgBQgLAAgJADQgFABgFACIgWALIgIAEIgDAAIgSACIgMAFIgHAAIgMAAIgwguQgTgTgMgHQgIgFgYgIIgrgPQgYgIgKgHQgNgIgMgPIADgDQAFgHACgRQAHhDAkiCIAKghQAihOAvhMIAAgBQAoguA1giQAOgKAEgGIACgIIAFgCQAPgHASgNQAIgFADgEQAGgFgBgGIAfgKQAfgLAVgLQAngUAUgcIAHgBQAJgBADgCQAEgCAEgGQAJgLAHgKIAhg2IACgFIAFgBIAFADQAbAHAwAAQAtAAAWgBQApgDAxgMIBYgZQBggeAngRIAmgQQAKgDAFgEIAGAAIADAGIAAADQAAAMASAKQAjAXAiAcQAQAOAKAFQAHADAXAGIBeATIAZAKIA6AoIB2BUIAgAYIANAPQAqAzAtBbQANAaAIAWIgCAJQgKAmgRAWQgHAIgSARQgRAPgIAKIgQAbQgKASgHAIIgXATQgPALgGAJQgEAGgEAJIgHAQQgJATgOAOIgHgBQgGABgJAFIgOAJIgEABIgegVQgJgHgGgBQgEgDgEABIgFABQgFACgDAGIAAACQgEAHgCAMQgCANgIAWIgKAkQgDAMgBASIgCAeQgEArgUBNQgWBRgEAmIgGBCQgLCGg5B7QgNAdANAKIABABIgMALIgLAHIgKACQgPAFgWALIgCABQhHAXhKAKQglAGheAGQhmAHg4AAIgHAAg");
	this.shape.setTransform(82.525,80.2017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tshirt, new cjs.Rectangle(0,0,165.1,160.4), null);


(lib.skirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.instance.on("mousedown", function(e)
		{
		    e.currentTarget.offsetX = stage.mouseX / stage.scaleX - e.currentTarget.x;
		    e.currentTarget.offsetY = stage.mouseY / stage.scaleY - e.currentTarget.y;
		});
		
		this.instance.on("pressmove", function(e)
		{
		    e.currentTarget.x = stage.mouseX / stage.scaleX - e.currentTarget.offsetX;
		    e.currentTarget.y = stage.mouseY / stage.scaleY - e.currentTarget.offsetY;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-234.2,-248.3)).s().p("AEpMvQgmgHhNgTQg4gPgVgKIgmgSQgVgKgSAAQgQABgYAJIhJAeQgrARgfAHQgaAFggACQg/ACgtgLQgVgGglgOQghgOgQgJQgtgbgegnQgLgOgGgCIAAAAIgihHQgYgzgYgdQgSgWgQgEQgIgCgKABIgTACQgaACgigFQgUgDgmgKQhUgWgogQQg+gZgdgjQgKgMgIgCIgMgTQg7hegYhTIgKgpIACgCQACgEACgJQACgHALgSIAPgWIACgDIBOhIQBShNAuggQALgIAEgGQACgEABgEIAEgDQAhgWAsgoIBIhEQAWgUAuglICgiDQAvgmAagQIBIg0IBrhNQAlgbAFgQQAFgRgBgNIgBgWIABgMIAGgFQAdgaA9gtIABAAIA6ASIBIA3QAwAjAqAZIgBABQgDADgBAFQAAAFADAFQADAGAMAGQA+AiBTAOIARADIAEABQARAEAaABQBkAFBQgMQBfgPBKgqQAKgGAEgEQAEgHAAgFQAegBAeAVQAXAQAbAiIAgAoIAQArIABADIgQAMQgjAeABAZQAAALAJAVQA9CEAxCLIAPAsIADAMIgBALQACAnAZA4IAaA7IAGAnIAEAfIADAXIAHAcQAAAEADAHIATBAQAEAMAGAFIAFAUQAUBKAJAaIAGAOIABAGQAXBUAGAvQAHBDgOA0QgbAogyA5QgbAfgSAOQgOAEgRACQgYADgwABIglADQgXACgPAAQgggBgtgLIhBgSIgGgHIgMgOQgJgHgIAEQgDABgCADIgKADQhHAYgmAKQg9AQgyACIgTAAQgtAAg0gJg");
	this.shape.setTransform(113.4278,82.3973);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skirt, new cjs.Rectangle(0,0,226.9,164.8), null);


(lib.dress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.instance.on("mousedown", function(e)
		{
		    e.currentTarget.offsetX = stage.mouseX / stage.scaleX - e.currentTarget.x;
		    e.currentTarget.offsetY = stage.mouseY / stage.scaleY - e.currentTarget.y;
		});
		
		this.instance.on("pressmove", function(e)
		{
		    e.currentTarget.x = stage.mouseX / stage.scaleX - e.currentTarget.offsetX;
		    e.currentTarget.y = stage.mouseY / stage.scaleY - e.currentTarget.offsetY;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-220.2,-811.9)).s().p("AhifvIgjgSIgjgRQgjgOguABQgcAAg3AIQgjAFgRAHQgKAEgUALQgUALgLAEQgVAIgcAAQgSAAghgDQglgEgRgEQgegGgWgKQgJgFgvggQgigYgZgEQgWgEgjAIIhEAPQgpAJgbADQglAEgYgHQgXgHgigbQg1grg6g2QgxgvgXgQQgqgggpgJQgVgEgrAAQgrABgVgEQgigHgggWQgegVgXgeQgkgvgdhVQgGgQgHgFQgIgGgWAAQgVAAgGgIQgIgKAGgSIAFgOQAmgaAegyQAVgiAbhCIAyh8IAkhQQALgWAcgxQA+hsAxhnIABADQACAFAGADQADACACAAIAGgCQAKgFAIgTIADgIQAEgCADgDQAFgFAEgJIAFgQQALgjAXglQAQgZAfgoQBqiIDwkfQBahrAwguQAsgpBohSQBjhPAvgvIA8g+QAjgkAdgUQAWgQAlgTIA8ggQBTgvBPhTQBZhgAYhYQAQg3gJg2QgKg5gjgoIgHgGIgDgFIgMgNIgIgPQgEgKgFgFIgOgMQgHgHgLgTIgagtQgMgUgMADQgNACAAAXQABAPAEAOIgIADQgWAIgjgIQgxgJgKgBIgcACQgSACgKgBQgPgBgMgIQgOgIgDgNQgBgRgEgHQgFgKgXgHIhCgQQgegHgKgMQgJgKgCgVQgCgcAMgbQALgbAVgSIATgPQAMgJAGgIQARgZgJgtIgJgkQgFgVAAgPQAAgcAPgeQALgVAYggQA/hWAtgwQBAhGBBgqQANgIAGgFQAKgIADgKQADgIAAgPIAAgYQADgYAWgQQAVgPAaABQAIABAJACIAAADIACAEIAAAEQABAEAFAKQAeAxAOAZQAXAqANAkIAJAaQAHATAMAYIAMAaQALAeATAiQAMAWAaAoQAEAGAFAEQAvBlA+BPQANAPAKAAQAKAAAKgLQAJgIAHgJQAFABAFgCQAJgEAKgPQAXghAnhHQAnhGAXgiQAegqA6g+QBJhOATgYIBZh1QA1hGAsgnQAkggAcAIQgPALACAXQACAWAPAPQAMAMAVAKIAlARQAYANAZAVQAQAOAcAbIAYAZIgBAEQAAADAEAJIAKAUQAKAVAFAHIAQAcIAMASIAGAMIAHALIAZAwQAFAKAGADIgBANQAAAVgPAjQgRAngCASQgCATAJArQAIApgFAWQgGAbgdAfQgqAugFAIIgNATQgIALgIAFQgLAHgPgCQgNgBgMgIQgSgMgSgcQgHgKgHgFQgJgGgHAFQgFADgBAJIgBAPQgBALgKAUQg3BsgfB3IgTBEIgNAiQgJAVgDANQgLAigCA0QgKCaAyBZIAGAHQAQAjAaAeQALANASARIAfAdQAlAkArAyIBKBcQBlCAAuBIQA6BbBKCmQAvBmAaBGQAlBgASBTQAEAMAFAGQANBIAsCZQAsCcACBfQABAcgFBGIgJCTQgEBFAHAhQAEARAKAXIARAoQARApAUBZQAEASgFAIQgFAIgRAEQgwALg1AHIgnAFQgXAEgQAFQgXAIgsAZQg6AjgZASIg+A0QgkAdggALQgiAMg+gBQhOAAhXgKQgwgFgVAFQgPADgSAKIgfASQgjAVhQAkQgkAQgUAEQgcAHgkgDQgVgCgrgIIhhgPIgHAAIgJgEQhSgcgwASQgWAJgcAXQgnAigHAEQgyAjhhALQgcACgZAAQhDAAgugUg");
	this.shape.setTransform(173.0306,205.1702);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dress, new cjs.Rectangle(0,0,346.1,410.3), null);


// stage content:
(lib.dragndrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dress
	this.instance = new lib.dress();
	this.instance.setTransform(183.45,741.6,1,1,0,0,0,173.1,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tshirt
	this.instance_1 = new lib.tshirt();
	this.instance_1.setTransform(366.45,295.2,1,1,0,0,0,82.5,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// skirt
	this.instance_2 = new lib.skirt();
	this.instance_2.setTransform(156.15,371.95,1,1,0,0,0,113.4,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(4.928,0,0,0.361,-5755,-663.9)).s().p("Egh0BJ8MAAAiT3MBDDAAAIAmAAMAAACT3g");
	this.shape.setTransform(216.5,546.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(75.175,0,0,0.361,-90433.1,-154.2)).s().p("EghOAFtIgmAAIAArZMBDpAAAIAALZg");
	this.shape_1.setTransform(212.7,36.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(4.775,0,0,0.361,-9001.5,-217.7)).s().p("AM2EOI5/AAIAAobIAFAAIABAAIZ7AAIAHAAIAIAAIAAADIgGAAIAAIXIAJAAIAAABg");
	this.shape_2.setTransform(749.15,99.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(-4.278,0,0,0.373,5746.8,-160.4)).s().p("As6FyIAAAAIgDAAIAAgHIAArOIAAgOIZ7AAIAALcIAAAHg");
	this.shape_3.setTransform(748.225,35.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(-4.278,0,0,0.361,5992.9,-191.2)).s().p("As9AFIAAgDIZ4AAIAAgGIADAAIAAAJg");
	this.shape_4.setTransform(748.575,72.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(-4.278,0,0,0.361,5663.4,-147.6)).s().p("AgCFtIAAgKIAArPIAFAAIAALZg");
	this.shape_5.setTransform(831.925,36.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(-0.326,0,0,0.361,501.1,-191.2)).s().p("AF5AFIgBAAIr2AAIAAgJIL6AAIAAAGIADAAIAAADg");
	this.shape_6.setTransform(627.225,72.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-639.9,-663.9)).s().p("EgfHBJ8MAAAiT3IChAAIV3AAIL2AAIAAIcIABAAIaAAAMAAACLbg");
	this.shape_7.setTransform(632.15,546.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(5.5,0,0,0.361,-6642.2,-154.2)).s().p("Ag8FtIgmAAIAArZIDFAAIAALZg");
	this.shape_8.setTransform(439.1,36.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-506,-154.2)).s().p("Aq7FtIAArZIV3AAIAALPIAAAKg");
	this.shape_9.setTransform(518.975,36.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(-0.326,0,0,0.361,482.5,-154.7)).s().p("Al8FoIAArPIL5AAIAALPg");
	this.shape_10.setTransform(627.075,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(411.7,508.1,421.7,511.19999999999993);
// library properties:
lib.properties = {
	id: 'CF42BDB0CCF54FF980D13F8921311F6F',
	width: 831,
	height: 1019,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF42BDB0CCF54FF980D13F8921311F6F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;