// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.nav_button');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.nav_button.NavButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___33067 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33051 = schema.core.Any;var input_schema33052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map33047","map33047",1983211577,null))], null);var input_checker33053 = schema.core.checker.call(null,input_schema33052);var output_checker33054 = schema.core.checker.call(null,output_schema33051);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function constructor33045(G__33055){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33055], null);var temp__4126__auto___33069 = input_checker33053.call(null,args__6035__auto___33068);if(cljs.core.truth_(temp__4126__auto___33069))
{var error__6036__auto___33070 = temp__4126__auto___33069;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33045","constructor33045",1430220499,null),cljs.core.pr_str.call(null,error__6036__auto___33070)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33070,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33068,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33052,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33047 = G__33055;while(true){
if(cljs.core.map_QMARK_.call(null,map33047))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33047)));
}
var map33049 = plumbing.fnk.schema.safe_get.call(null,map33047,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map33050 = plumbing.fnk.schema.safe_get.call(null,map33049,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map33050,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map33050,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map33050,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map33050,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map33048 = plumbing.fnk.schema.safe_get.call(null,map33047,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map33048,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map33047,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t33060 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t33060 = (function (input_schema33052,map33050,input_checker33053,owner,text,output_checker33054,output_schema33051,constructor33045,map33049,map33048,G__33055,map33047,target_view,validate__6034__auto__,id,class$,app,ufv__,meta33061){
this.input_schema33052 = input_schema33052;
this.map33050 = map33050;
this.input_checker33053 = input_checker33053;
this.owner = owner;
this.text = text;
this.output_checker33054 = output_checker33054;
this.output_schema33051 = output_schema33051;
this.constructor33045 = constructor33045;
this.map33049 = map33049;
this.map33048 = map33048;
this.G__33055 = G__33055;
this.map33047 = map33047;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.meta33061 = meta33061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t33060.cljs$lang$type = true;
clustermap.components.nav_button.t33060.cljs$lang$ctorStr = "clustermap.components.nav-button/t33060";
clustermap.components.nav_button.t33060.cljs$lang$ctorPrWriter = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t33060");
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
clustermap.components.nav_button.t33060.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t33060.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
clustermap.components.nav_button.t33060.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t33060.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (_){var self__ = this;
var ___$1 = this;var attrs33063 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs33063))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs33063)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33063))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33063),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
clustermap.components.nav_button.t33060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (_33062){var self__ = this;
var _33062__$1 = this;return self__.meta33061;
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
clustermap.components.nav_button.t33060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function (_33062,meta33061__$1){var self__ = this;
var _33062__$1 = this;return (new clustermap.components.nav_button.t33060(self__.input_schema33052,self__.map33050,self__.input_checker33053,self__.owner,self__.text,self__.output_checker33054,self__.output_schema33051,self__.constructor33045,self__.map33049,self__.map33048,self__.G__33055,self__.map33047,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,meta33061__$1));
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
clustermap.components.nav_button.__GT_t33060 = ((function (owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054){
return (function __GT_t33060(input_schema33052__$1,map33050__$1,input_checker33053__$1,owner__$1,text__$1,output_checker33054__$1,output_schema33051__$1,constructor33045__$1,map33049__$1,map33048__$1,G__33055__$1,map33047__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta33061){return (new clustermap.components.nav_button.t33060(input_schema33052__$1,map33050__$1,input_checker33053__$1,owner__$1,text__$1,output_checker33054__$1,output_schema33051__$1,constructor33045__$1,map33049__$1,map33048__$1,G__33055__$1,map33047__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta33061));
});})(owner,app,map33048,id,class$,target_view,text,map33050,map33049,validate__6034__auto__,ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
;
}
return (new clustermap.components.nav_button.t33060(input_schema33052,map33050,input_checker33053,owner,text,output_checker33054,output_schema33051,constructor33045,map33049,map33048,G__33055,map33047,target_view,validate__6034__auto__,id,class$,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33071 = output_checker33054.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33071))
{var error__6036__auto___33072 = temp__4126__auto___33071;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33045","constructor33045",1430220499,null),cljs.core.pr_str.call(null,error__6036__auto___33072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33072,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33051,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33051,input_schema33052,input_checker33053,output_checker33054))
,schema.core.make_fn_schema.call(null,output_schema33051,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33052], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___33067){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner33044,p__33064){var vec__33066 = p__33064;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33066,(0),null);return component_fnk__7881__auto___33067.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner33044),new cljs.core.Keyword(null,"owner","owner",-392611939),owner33044,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner33044,var_args){
var p__33064 = null;if (arguments.length > 2) {
  p__33064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner33044,p__33064);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__33073){
var data__7882__auto__ = cljs.core.first(arglist__33073);
arglist__33073 = cljs.core.next(arglist__33073);
var owner33044 = cljs.core.first(arglist__33073);
var p__33064 = cljs.core.rest(arglist__33073);
return nav_button_component__delegate(data__7882__auto__,owner33044,p__33064);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___33067))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m33046){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m33046);
});
__GT_nav_button_component = function(cursor__7850__auto__,m33046){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m33046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
