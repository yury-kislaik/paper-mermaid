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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-756.7,-137.1)).s().p("AiPMiQhdgBhIgQQgzgMgOgCQgLgBgYABIgkgBQgmgDgxgTIgHgDIgFgFIgKgJQADgGACgJIADgLQAVg0ALhDIAHgzIAFgPQANgtAHg5QAFgoAEg/QADgrAAgYQgBgkgIgdIgDgHIgBgHIgBgDQACgDABgFQAAgIgGgEQgEgEgJgBQgLAAgJADQgFABgFACIgWALIgIAEIgDAAIgSACIgMAFIgHAAIgMAAIgwguQgTgTgMgHQgIgFgYgIIgrgPQgYgIgKgHQgNgIgMgPIADgDQAFgHACgRQAHhDAkiCIAKghQAihOAvhMIAAgBQAoguA1giQAOgKAEgGIACgIIAFgCQAPgHASgNQAIgFADgEQAGgFgBgGIAfgKQAfgLAVgLQAngUAUgcIAHgBQAJgBADgCQAEgCAEgGQAJgLAHgKIAhg2IACgFIAFgBIAFADQAbAHAwAAQAtAAAWgBQApgDAxgMIBYgZQBggeAngRIAmgQQAKgDAFgEIAGAAIADAGIAAADQAAAMASAKQAjAXAiAcQAQAOAKAFQAHADAXAGIBeATIAZAKIA6AoIB2BUIAgAYIANAPQAqAzAtBbQANAaAIAWIgCAJQgKAmgRAWQgHAIgSARQgRAPgIAKIgQAbQgKASgHAIIgXATQgPALgGAJQgEAGgEAJIgHAQQgJATgOAOIgHgBQgGABgJAFIgOAJIgEABIgegVQgJgHgGgBQgEgDgEABIgFABQgFACgDAGIAAACQgEAHgCAMQgCANgIAWIgKAkQgDAMgBASIgCAeQgEArgUBNQgWBRgEAmIgGBCQgLCGg5B7QgNAdANAKIABABIgMALIgLAHIgKACQgPAFgWALIgCABQhHAXhKAKQglAGheAGQhmAHg4AAIgHAAg");
	this.shape.setTransform(82.525,80.2017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,165.1,160.4), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-234.2,-248.3)).s().p("AEpMvQgmgHhNgTQg4gPgVgKIgmgSQgVgKgSAAQgQABgYAJIhJAeQgrARgfAHQgaAFggACQg/ACgtgLQgVgGglgOQghgOgQgJQgtgbgegnQgLgOgGgCIAAAAIgihHQgYgzgYgdQgSgWgQgEQgIgCgKABIgTACQgaACgigFQgUgDgmgKQhUgWgogQQg+gZgdgjQgKgMgIgCIgMgTQg7hegYhTIgKgpIACgCQACgEACgJQACgHALgSIAPgWIACgDIBOhIQBShNAuggQALgIAEgGQACgEABgEIAEgDQAhgWAsgoIBIhEQAWgUAuglICgiDQAvgmAagQIBIg0IBrhNQAlgbAFgQQAFgRgBgNIgBgWIABgMIAGgFQAdgaA9gtIABAAIA6ASIBIA3QAwAjAqAZIgBABQgDADgBAFQAAAFADAFQADAGAMAGQA+AiBTAOIARADIAEABQARAEAaABQBkAFBQgMQBfgPBKgqQAKgGAEgEQAEgHAAgFQAegBAeAVQAXAQAbAiIAgAoIAQArIABADIgQAMQgjAeABAZQAAALAJAVQA9CEAxCLIAPAsIADAMIgBALQACAnAZA4IAaA7IAGAnIAEAfIADAXIAHAcQAAAEADAHIATBAQAEAMAGAFIAFAUQAUBKAJAaIAGAOIABAGQAXBUAGAvQAHBDgOA0QgbAogyA5QgbAfgSAOQgOAEgRACQgYADgwABIglADQgXACgPAAQgggBgtgLIhBgSIgGgHIgMgOQgJgHgIAEQgDABgCADIgKADQhHAYgmAKQg9AQgyACIgTAAQgtAAg0gJg");
	this.shape.setTransform(113.4278,82.3973);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,226.9,164.8), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.361,0,0,0.361,-220.2,-811.9)).s().p("AhifvIgjgSIgjgRQgjgOguABQgcAAg3AIQgjAFgRAHQgKAEgUALQgUALgLAEQgVAIgcAAQgSAAghgDQglgEgRgEQgegGgWgKQgJgFgvggQgigYgZgEQgWgEgjAIIhEAPQgpAJgbADQglAEgYgHQgXgHgigbQg1grg6g2QgxgvgXgQQgqgggpgJQgVgEgrAAQgrABgVgEQgigHgggWQgegVgXgeQgkgvgdhVQgGgQgHgFQgIgGgWAAQgVAAgGgIQgIgKAGgSIAFgOQAmgaAegyQAVgiAbhCIAyh8IAkhQQALgWAcgxQA+hsAxhnIABADQACAFAGADQADACACAAIAGgCQAKgFAIgTIADgIQAEgCADgDQAFgFAEgJIAFgQQALgjAXglQAQgZAfgoQBqiIDwkfQBahrAwguQAsgpBohSQBjhPAvgvIA8g+QAjgkAdgUQAWgQAlgTIA8ggQBTgvBPhTQBZhgAYhYQAQg3gJg2QgKg5gjgoIgHgGIgDgFIgMgNIgIgPQgEgKgFgFIgOgMQgHgHgLgTIgagtQgMgUgMADQgNACAAAXQABAPAEAOIgIADQgWAIgjgIQgxgJgKgBIgcACQgSACgKgBQgPgBgMgIQgOgIgDgNQgBgRgEgHQgFgKgXgHIhCgQQgegHgKgMQgJgKgCgVQgCgcAMgbQALgbAVgSIATgPQAMgJAGgIQARgZgJgtIgJgkQgFgVAAgPQAAgcAPgeQALgVAYggQA/hWAtgwQBAhGBBgqQANgIAGgFQAKgIADgKQADgIAAgPIAAgYQADgYAWgQQAVgPAaABQAIABAJACIAAADIACAEIAAAEQABAEAFAKQAeAxAOAZQAXAqANAkIAJAaQAHATAMAYIAMAaQALAeATAiQAMAWAaAoQAEAGAFAEQAvBlA+BPQANAPAKAAQAKAAAKgLQAJgIAHgJQAFABAFgCQAJgEAKgPQAXghAnhHQAnhGAXgiQAegqA6g+QBJhOATgYIBZh1QA1hGAsgnQAkggAcAIQgPALACAXQACAWAPAPQAMAMAVAKIAlARQAYANAZAVQAQAOAcAbIAYAZIgBAEQAAADAEAJIAKAUQAKAVAFAHIAQAcIAMASIAGAMIAHALIAZAwQAFAKAGADIgBANQAAAVgPAjQgRAngCASQgCATAJArQAIApgFAWQgGAbgdAfQgqAugFAIIgNATQgIALgIAFQgLAHgPgCQgNgBgMgIQgSgMgSgcQgHgKgHgFQgJgGgHAFQgFADgBAJIgBAPQgBALgKAUQg3BsgfB3IgTBEIgNAiQgJAVgDANQgLAigCA0QgKCaAyBZIAGAHQAQAjAaAeQALANASARIAfAdQAlAkArAyIBKBcQBlCAAuBIQA6BbBKCmQAvBmAaBGQAlBgASBTQAEAMAFAGQANBIAsCZQAsCcACBfQABAcgFBGIgJCTQgEBFAHAhQAEARAKAXIARAoQARApAUBZQAEASgFAIQgFAIgRAEQgwALg1AHIgnAFQgXAEgQAFQgXAIgsAZQg6AjgZASIg+A0QgkAdggALQgiAMg+gBQhOAAhXgKQgwgFgVAFQgPADgSAKIgfASQgjAVhQAkQgkAQgUAEQgcAHgkgDQgVgCgrgIIhhgPIgHAAIgJgEQhSgcgwASQgWAJgcAXQgnAigHAEQgyAjhhALQgcACgZAAQhDAAgugUg");
	this.shape.setTransform(173.0306,205.1702);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,346.1,410.3), null);


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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(82.5,80.2,1,1,0,0,0,82.5,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(113.4,82.4,1,1,0,0,0,113.4,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(173.1,205.2,1,1,0,0,0,173.1,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dress
	this.instance = new lib.dress();
	this.instance.setTransform(338.45,859.85,1.2974,1.2974,0,0,0,173.1,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tshirt
	this.instance_1 = new lib.tshirt();
	this.instance_1.setTransform(348.7,142.95,1.2974,1.2974);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// skirt
	this.instance_2 = new lib.skirt();
	this.instance_2.setTransform(281.65,458.1,1.2974,1.2974,0,0,0,113.4,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(7.044,0,0,0.659,-13253.3,-402.8)).s().p("AvqG+IAAgBIAAggIAAtaIfVAAIAAN7g");
	this.shape.setTransform(1006.875,44.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(6.017,0,0,0.468,-7057.8,-851.7)).s().p("EgvpBhaMAAAjCzMBfTAAAMAAADCzg");
	this.shape_1.setTransform(305,623.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.Bitmap1, null, new cjs.Matrix2D(0.468,0,0,0.468,-820.9,-851.7)).s().p("Egm1BhaMAAAjCzMAuVAAAIAANbIgBAgIABAAIAAABIfWAAMAAAC03g");
	this.shape_2.setTransform(858.6,623.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(553.5,623,553.7,623.8);
// library properties:
lib.properties = {
	id: 'CF42BDB0CCF54FF980D13F8921311F6F',
	width: 1107,
	height: 1246,
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