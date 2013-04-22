var Vars = {
	bpLevel: 0,
}

var Site = {
	init: function(){

		Site.generalFunc();	

	},
	generalFunc: function() {

		var currentBP = 0;

		//Register Ajax calls
		$('input[name=ajax]').val(1);

		//Insert fallback for no placeholder.
		if(!Modernizr.input.placeholder) {
			$('.ph-text').each(function(){
				Site.placeholder($(this));	
			})
		}

		//Checkbox checked or not.
		$('input[type=checkbox],input[type=radio]').on('click touchstart', function(){
			if($(this).prop('checked')) {
				$(this).addClass('checkbox-checked');
			} else {
				$(this).removeClass('checkbox-checked');
			}
		});

		//Clears nearest input and focuses field. Used in search boxes for ipad etc
		$('.clear-input').on('click touchstart', function(){
			$inp = $(this).siblings('input');
			if(typeof $inp != "undefined") {
				$inp.val("").focus();
			}
		});

		if($('.input-to-clear').val() !== "") { 
			$('.clear-input').addClass('show');
		}

		$('.input-to-clear').on('blur', function(){
			if($(this).val() !== "") {
				$(this).siblings('.clear-input').addClass('show');
			} else {
				$(this).siblings('.clear-input').removeClass('show');
			}
		});

		//Initiate uniform
		$('select').uniform({'autoHide': false});

		//Check values on input change	
		$('.validate-val').on({
			blur: function(){
				Site.verifyVals($(this));
			},
			focus: function(){
				$(this).removeClass('err');
				$(this).parent().removeClass('err');
				$('.family-form-main').find('button').html('Submit');
			},
			change: function(){
				Site.verifyVals($(this));
				//Checkout.checkDynamicFormTriggers($(this));
			}
		});

		//Hide/display grid
		$(window).on('keypress', function(e){
			if(e.shiftKey && e.ctrlKey && e.charCode === 65) {
				$('#grid').toggleClass('hidden');
			}
		});
		
		//Responsive breakpoints
		function testForBP () {
			//1200, 980, 768 & 320
			var breakPoints = [0, 320, 768, 980, 1280],
				len = breakPoints.length,
				newBP;

			for (var i = 0; i < len; i++) {
				if (Modernizr.mq('(max-width: '+(breakPoints[i]-1)+'px)')) {
					newBP = breakPoints[i-1];
					break;
				} else {
					newBP = breakPoints[len-1];
				}
			};

			if(newBP !== currentBP) {
				var bps = [currentBP, newBP];
				Vars.bpLevel = newBP;
				$(window).trigger('bpChange', bps);
				currentBP = newBP;
			}
		}

		testForBP();
		
		$(window).on('resize', function() {
			testForBP();
		});

	}
}


/* AJAXFORM */
(function(b){b.fn.ajaxSubmit=function(r){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof r=="function"){r={success:r}}var e=this.attr("action")||window.location.href;e=(e.match(/^([^#]+)/)||[])[1];e=e||"";r=b.extend({url:e,type:this.attr("method")||"GET"},r||{});var t={};this.trigger("form-pre-serialize",[this,r,t]);if(t.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(r.beforeSerialize&&r.beforeSerialize(this,r)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var l=this.formToArray(r.semantic);if(r.data){r.extraData=r.data;for(var f in r.data){if(r.data[f] instanceof Array){for(var g in r.data[f]){l.push({name:f,value:r.data[f][g]})}}else{l.push({name:f,value:r.data[f]})}}}if(r.beforeSubmit&&r.beforeSubmit(l,this,r)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[l,this,r,t]);if(t.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var d=b.param(l);if(r.type.toUpperCase()=="GET"){r.url+=(r.url.indexOf("?")>=0?"&":"?")+d;r.data=null}else{r.data=d}var s=this,i=[];if(r.resetForm){i.push(function(){s.resetForm()})}if(r.clearForm){i.push(function(){s.clearForm()})}if(!r.dataType&&r.target){var o=r.success||function(){};i.push(function(j){b(r.target).html(j).each(o,arguments)})}else{if(r.success){i.push(r.success)}}r.success=function(q,k){for(var n=0,j=i.length;n<j;n++){i[n].apply(r,[q,k,s])}};var c=b("input:file",this).fieldValue();var p=false;for(var h=0;h<c.length;h++){if(c[h]){p=true}}if(r.iframe||p){if(r.closeKeepAlive){b.get(r.closeKeepAlive,m)}else{m()}}else{b.ajax(r)}this.trigger("form-submit-notify",[this,r]);return this;function m(){var v=s[0];if(b(":input[name=submit]",v).length){alert('Error: Form elements must not be named "submit".');return}var q=b.extend({},b.ajaxSettings,r);var F=b.extend(true,{},b.extend(true,{},b.ajaxSettings),q);var u="jqFormIO"+(new Date().getTime());var B=b('<iframe id="'+u+'" name="'+u+'" src="about:blank" />');var D=B[0];B.css({position:"absolute",top:"-1000px",left:"-1000px"});var E={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;B.attr("src","about:blank")}};var C=q.global;if(C&&!b.active++){b.event.trigger("ajaxStart")}if(C){b.event.trigger("ajaxSend",[E,q])}if(F.beforeSend&&F.beforeSend(E,F)===false){F.global&&b.active--;return}if(E.aborted){return}var k=0;var x=0;var j=v.clk;if(j){var w=j.name;if(w&&!j.disabled){r.extraData=r.extraData||{};r.extraData[w]=j.value;if(j.type=="image"){r.extraData[name+".x"]=v.clk_x;r.extraData[name+".y"]=v.clk_y}}}setTimeout(function(){var I=s.attr("target"),G=s.attr("action");v.setAttribute("target",u);if(v.getAttribute("method")!="POST"){v.setAttribute("method","POST")}if(v.getAttribute("action")!=q.url){v.setAttribute("action",q.url)}if(!r.skipEncodingOverride){s.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(q.timeout){setTimeout(function(){x=true;y()},q.timeout)}var H=[];try{if(r.extraData){for(var J in r.extraData){H.push(b('<input type="hidden" name="'+J+'" value="'+r.extraData[J]+'" />').appendTo(v)[0])}}B.appendTo("body");D.attachEvent?D.attachEvent("onload",y):D.addEventListener("load",y,false);v.submit()}finally{v.setAttribute("action",G);I?v.setAttribute("target",I):s.removeAttr("target");b(H).remove()}},10);var z=0;function y(){if(k++){return}D.detachEvent?D.detachEvent("onload",y):D.removeEventListener("load",y,false);var G=true;try{if(x){throw"timeout"}var H,J;J=D.contentWindow?D.contentWindow.document:D.contentDocument?D.contentDocument:D.document;if((J.body==null||J.body.innerHTML=="")&&!z){z=1;k--;setTimeout(y,100);return}E.responseText=J.body?J.body.innerHTML:null;E.responseXML=J.XMLDocument?J.XMLDocument:J;E.getResponseHeader=function(L){var K={"content-type":q.dataType};return K[L]};if(q.dataType=="json"||q.dataType=="script"){var n=J.getElementsByTagName("textarea")[0];E.responseText=n?n.value:E.responseText}else{if(q.dataType=="xml"&&!E.responseXML&&E.responseText!=null){E.responseXML=A(E.responseText)}}H=b.httpData(E,q.dataType)}catch(I){G=false;b.handleError(q,E,"error",I)}if(G){q.success(H,"success");if(C){b.event.trigger("ajaxSuccess",[E,q])}}if(C){b.event.trigger("ajaxComplete",[E,q])}if(C&&!--b.active){b.event.trigger("ajaxStop")}if(q.complete){q.complete(E,G?"success":"error")}setTimeout(function(){B.remove();E.responseXML=null},100)}function A(n,G){if(window.ActiveXObject){G=new ActiveXObject("Microsoft.XMLDOM");G.async="false";G.loadXML(n)}else{G=(new DOMParser()).parseFromString(n,"text/xml")}return(G&&G.documentElement&&G.documentElement.tagName!="parsererror")?G:null}}};b.fn.ajaxForm=function(c){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){b(this).ajaxSubmit(c);return false}).each(function(){b(":submit,input:image",this).bind("click.form-plugin",function(f){var d=this.form;d.clk=this;if(this.type=="image"){if(f.offsetX!=undefined){d.clk_x=f.offsetX;d.clk_y=f.offsetY}else{if(typeof b.fn.offset=="function"){var g=b(this).offset();d.clk_x=f.pageX-g.left;d.clk_y=f.pageY-g.top}else{d.clk_x=f.pageX-this.offsetLeft;d.clk_y=f.pageY-this.offsetTop}}}setTimeout(function(){d.clk=d.clk_x=d.clk_y=null},10)})})};b.fn.ajaxFormUnbind=function(){this.unbind("submit.form-plugin");return this.each(function(){b(":submit,input:image",this).unbind("click.form-plugin")})};b.fn.formToArray=function(q){var p=[];if(this.length==0){return p}var d=this[0];var h=q?d.getElementsByTagName("*"):d.elements;if(!h){return p}for(var k=0,m=h.length;k<m;k++){var e=h[k];var f=e.name;if(!f){continue}if(q&&d.clk&&e.type=="image"){if(!e.disabled&&d.clk==e){p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}continue}var r=b.fieldValue(e,true);if(r&&r.constructor==Array){for(var g=0,c=r.length;g<c;g++){p.push({name:f,value:r[g]})}}else{if(r!==null&&typeof r!="undefined"){p.push({name:f,value:r})}}}if(!q&&d.clk){var l=d.getElementsByTagName("input");for(var k=0,m=l.length;k<m;k++){var o=l[k];var f=o.name;if(f&&!o.disabled&&o.type=="image"&&d.clk==o){p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}}}return p};b.fn.formSerialize=function(c){return b.param(this.formToArray(c))};b.fn.fieldSerialize=function(d){var c=[];this.each(function(){var h=this.name;if(!h){return}var f=b.fieldValue(this,d);if(f&&f.constructor==Array){for(var g=0,e=f.length;g<e;g++){c.push({name:h,value:f[g]})}}else{if(f!==null&&typeof f!="undefined"){c.push({name:this.name,value:f})}}});return b.param(c)};b.fn.fieldValue=function(h){for(var g=[],e=0,c=this.length;e<c;e++){var f=this[e];var d=b.fieldValue(f,h);if(d===null||typeof d=="undefined"||(d.constructor==Array&&!d.length)){continue}d.constructor==Array?b.merge(g,d):g.push(d)}return g};b.fieldValue=function(c,j){var e=c.name,p=c.type,q=c.tagName.toLowerCase();if(typeof j=="undefined"){j=true}if(j&&(!e||c.disabled||p=="reset"||p=="button"||(p=="checkbox"||p=="radio")&&!c.checked||(p=="submit"||p=="image")&&c.form&&c.form.clk!=c||q=="select"&&c.selectedIndex==-1)){return null}if(q=="select"){var k=c.selectedIndex;if(k<0){return null}var m=[],d=c.options;var g=(p=="select-one");var l=(g?k+1:d.length);for(var f=(g?k:0);f<l;f++){var h=d[f];if(h.selected){var o=h.value;if(!o){o=(h.attributes&&h.attributes.value&&!(h.attributes.value.specified))?h.text:h.value}if(g){return o}m.push(o)}}return m}return c.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var d=this.type,c=this.tagName.toLowerCase();if(d=="text"||d=="password"||c=="textarea"){this.value=""}else{if(d=="checkbox"||d=="radio"){this.checked=false}else{if(c=="select"){this.selectedIndex=-1}}}})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};b.fn.enable=function(c){if(c==undefined){c=true}return this.each(function(){this.disabled=!c})};b.fn.selected=function(c){if(c==undefined){c=true}return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio"){this.checked=c}else{if(this.tagName.toLowerCase()=="option"){var e=b(this).parent("select");if(c&&e[0]&&e[0].type=="select-one"){e.find("option").selected(false)}this.selected=c}}})};function a(){if(b.fn.ajaxSubmit.debug&&window.console&&window.console.log){window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}}})(jQuery);

/* UNIFORM - modified to only include selects, file selects and multi selects */
// Use $.uniform.update(); to update uniform elements
;(function(d,i){function h(a,c){for(var b in c)c.hasOwnProperty(b)&&(b.replace(/ |$/g,".uniform"),a.bind(b,c[b]))}function l(a,c,b){h(a,{focus:function(){c.addClass(b.focusClass)},blur:function(){c.removeClass(b.focusClass);c.removeClass(b.activeClass)},mouseenter:function(){c.addClass(b.hoverClass)},mouseleave:function(){c.removeClass(b.hoverClass);c.removeClass(b.activeClass)},"mousedown touchbegin":function(){a.is(":disabled")||c.addClass(b.activeClass)},"mouseup touchend":function(){c.removeClass(b.activeClass)}})} function m(a){if(a[0].multiple)return!0;a=a.attr("size");return a===i||1>=a?!1:!0}function n(a,c,b){a=a.val();""===a?a=b.fileDefaultHtml:(a=a.split(/[\/\\]+/),a=a[a.length-1]);c.text(a)}function j(a,c,b){b=b.disabledClass;c.is(":disabled")?a.addClass(b):a.removeClass(b)}function k(a,c,b){switch(b){case "after":return a.after(c),a.next();case "before":return a.before(c),a.prev();case "wrap":return a.wrap(c),a.parent()}return null}function p(a,c,b){var f,e;b||(b={});b=d.extend({bind:{},css:null,divClass:null, divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},b);f=d("<div />");e=d("<span />");c.autoHide&&!a.is(":visible")&&f.hide();b.divClass&&f.addClass(b.divClass);b.spanClass&&e.addClass(b.spanClass);c.useID&&a.attr("id")&&f.attr("id",c.idPrefix+"-"+a.attr("id"));b.spanHtml&&e.html(b.spanHtml);f=k(a,f,b.divWrap);e=k(a,e,b.spanWrap);b.css&&a.css(b.css);j(f,a,c);return{div:f,span:e}}d.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked", disabledClass:"disabled",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!1,selectClass:"selector",submitDefaultHtml:"Submit",useID:!0},elements:[]};var q=!0,r=[{match:function(a){return a.is(":file")},apply:function(a,c){function b(){n(a,g,c)}var f,e,g;f=p(a,c,{css:{opacity:0},divClass:c.fileClass, spanClass:c.fileButtonClass,spanHtml:c.fileButtonHtml,spanWrap:"after"});e=f.div;f=f.span;g=d("<span />").html(c.fileDefaultHtml);g.addClass(c.filenameClass);g=k(a,g,"after");a.attr("size")||a.attr("size",e.width()/10);l(a,e,c);b();d.browser.msie?h(a,{click:function(){a.trigger("change");setTimeout(b,0)}}):h(a,{change:b});d.uniform.noSelect(g);d.uniform.noSelect(f);return{remove:function(){a.siblings("span").remove();a.unwrap();return a},update:function(){e.removeClass(c.hoverClass+" "+c.focusClass+ " "+c.activeClass);n(a,g,c);j(e,a,c)}}}},{match:function(a){return a.is("select")&&!m(a)?!0:!1},apply:function(a,c){var b,f,e,g;g=a.width();b=p(a,c,{css:{opacity:0},divClass:c.selectClass,spanHtml:(a.find(":selected:first")||a.find("option:first")).html(),spanWrap:"before"});f=b.div;e=b.span;c.selectAutoWidth?(f.width(d("<div />").width()-d("<span />").width()+g+25),b=parseInt(f.css("paddingLeft"),10),e.width(g-b-15),a.width(g+b),a.css("min-width",g+b+"px"),f.width(g+b)): (b=a.width(),f.width(b),e.width(b-25));l(a,f,c);h(a,{change:function(){e.html(a.find(":selected").html());f.removeClass(c.activeClass)},"click touchend":function(){var b=a.find(":selected").html();e.html()!==b&&a.trigger("change")},keyup:function(){e.html(a.find(":selected").html())}});d.uniform.noSelect(e);return{remove:function(){a.siblings("span").remove();a.unwrap();return a},update:function(){f.removeClass(c.hoverClass+" "+c.focusClass+" "+c.activeClass);e.html(a.find(":selected").html());j(f, a,c)}}}},{match:function(a){return a.is("select")&&m(a)?!0:!1},apply:function(a){a.addClass("uniform-multiselect");return{remove:function(){a.removeClass("uniform-multiselect")},update:function(){}}}}];d.browser.msie&&7>d.browser.version&&(q=!1);d.fn.uniform=function(a){var c=this,a=d.extend({},d.uniform.defaults,a);!1!==a.resetSelector&&d(a.resetSelector).mouseup(function(){window.setTimeout(function(){d.uniform.update(c)},10)});return this.each(function(){var b=d(this),c,e;b.data("uniformed")&& d.uniform.update(b);if(!b.data("uniformed")&&q)for(c=0;c<r.length;c+=1)if(e=r[c],e.match(b,a)){c=e.apply(b,a);b.data("uniformed",c);d.uniform.elements.push(b.get(0));break}})};d.uniform.restore=function(a){a===i&&(a=d.uniform.elements);d(a).each(function(){var a=d(this),b;if(b=a.data("uniformed"))b.remove(),a.unbind(".uniform"),b=d.inArray(this,d.uniform.elements),0<=b&&d.uniform.elements.splice(b,1),a.removeData("uniformed")})};d.uniform.noSelect=function(a){function c(){return!1}d(a).each(function(){this.onselectstart= this.ondragstart=c;d(this).mousedown(c).css({MozUserSelect:"none"})})};d.uniform.update=function(a){a===i&&(a=d.uniform.elements);d(a).each(function(){var a=d(this),b;(b=a.data("uniformed"))&&b.update(a,b.options)})}})(jQuery);