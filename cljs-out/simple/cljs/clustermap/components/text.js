// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.text');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.text.TextComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),schema.core.either.call(null,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null))], null)], null);
clustermap.components.text.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
var component_fnk__7881__auto___31568 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31552 = schema.core.Any;var input_schema31553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31549","map31549",-747842385,null))], null);var input_checker31554 = schema.core.checker.call(null,input_schema31553);var output_checker31555 = schema.core.checker.call(null,output_schema31552);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function constructor31547(G__31556){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31556], null);var temp__4126__auto___31570 = input_checker31554.call(null,args__6035__auto___31569);if(cljs.core.truth_(temp__4126__auto___31570))
{var error__6036__auto___31571 = temp__4126__auto___31570;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31547","constructor31547",626243356,null),cljs.core.pr_str.call(null,error__6036__auto___31571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31571,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31569,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31549 = G__31556;while(true){
if(cljs.core.map_QMARK_.call(null,map31549))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31549)));
}
var map31550 = plumbing.fnk.schema.safe_get.call(null,map31549,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31550,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31551 = plumbing.fnk.schema.safe_get.call(null,map31550,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31551,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31549,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31561 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31561 = (function (owner,output_schema31552,G__31556,path,input_checker31554,map31550,map31549,output_checker31555,source,input_schema31553,validate__6034__auto__,map31551,constructor31547,ufv__,meta31562){
this.owner = owner;
this.output_schema31552 = output_schema31552;
this.G__31556 = G__31556;
this.path = path;
this.input_checker31554 = input_checker31554;
this.map31550 = map31550;
this.map31549 = map31549;
this.output_checker31555 = output_checker31555;
this.source = source;
this.input_schema31553 = input_schema31553;
this.validate__6034__auto__ = validate__6034__auto__;
this.map31551 = map31551;
this.constructor31547 = constructor31547;
this.ufv__ = ufv__;
this.meta31562 = meta31562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31561.cljs$lang$type = true;
clustermap.components.text.t31561.cljs$lang$ctorStr = "clustermap.components.text/t31561";
clustermap.components.text.t31561.cljs$lang$ctorPrWriter = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31561");
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
clustermap.components.text.t31561.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31561.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
clustermap.components.text.t31561.prototype.om$core$IRender$ = true;
clustermap.components.text.t31561.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31564 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31564))?sablono.interpreter.attributes.call(null,attrs31564):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31564))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31564)], null))));
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
clustermap.components.text.t31561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function (_31563){var self__ = this;
var _31563__$1 = this;return self__.meta31562;
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
clustermap.components.text.t31561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function (_31563,meta31562__$1){var self__ = this;
var _31563__$1 = this;return (new clustermap.components.text.t31561(self__.owner,self__.output_schema31552,self__.G__31556,self__.path,self__.input_checker31554,self__.map31550,self__.map31549,self__.output_checker31555,self__.source,self__.input_schema31553,self__.validate__6034__auto__,self__.map31551,self__.constructor31547,self__.ufv__,meta31562__$1));
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
clustermap.components.text.__GT_t31561 = ((function (owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555){
return (function __GT_t31561(owner__$1,output_schema31552__$1,G__31556__$1,path__$1,input_checker31554__$1,map31550__$1,map31549__$1,output_checker31555__$1,source__$1,input_schema31553__$1,validate__6034__auto____$1,map31551__$1,constructor31547__$1,ufv____$1,meta31562){return (new clustermap.components.text.t31561(owner__$1,output_schema31552__$1,G__31556__$1,path__$1,input_checker31554__$1,map31550__$1,map31549__$1,output_checker31555__$1,source__$1,input_schema31553__$1,validate__6034__auto____$1,map31551__$1,constructor31547__$1,ufv____$1,meta31562));
});})(owner,path,map31551,source,map31550,validate__6034__auto__,ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
;
}
return (new clustermap.components.text.t31561(owner,output_schema31552,G__31556,path,input_checker31554,map31550,map31549,output_checker31555,source,input_schema31553,validate__6034__auto__,map31551,constructor31547,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31572 = output_checker31555.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31572))
{var error__6036__auto___31573 = temp__4126__auto___31572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31547","constructor31547",626243356,null),cljs.core.pr_str.call(null,error__6036__auto___31573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31573,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31552,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31552,input_schema31553,input_checker31554,output_checker31555))
,schema.core.make_fn_schema.call(null,output_schema31552,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31553], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31568){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31546,p__31565){var vec__31567 = p__31565;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31567,(0),null);return component_fnk__7881__auto___31568.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31546,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31546,var_args){
var p__31565 = null;if (arguments.length > 2) {
  p__31565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31546,p__31565);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31574){
var data__7882__auto__ = cljs.core.first(arglist__31574);
arglist__31574 = cljs.core.next(arglist__31574);
var owner31546 = cljs.core.first(arglist__31574);
var p__31565 = cljs.core.rest(arglist__31574);
return text_component__delegate(data__7882__auto__,owner31546,p__31565);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31568))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31548){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31548);
});
__GT_text_component = function(cursor__7850__auto__,m31548){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
