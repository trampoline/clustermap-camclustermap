// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_link');
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
clustermap.components.action_link.ActionLinkSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"content","content",15833224),schema.core.Any,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___28432 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28416 = schema.core.Any;var input_schema28417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_link.ActionLinkSchema], true, false),new cljs.core.Symbol(null,"map28412","map28412",1097017476,null))], null);var input_checker28418 = schema.core.checker.call(null,input_schema28417);var output_checker28419 = schema.core.checker.call(null,output_schema28416);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function constructor28410(G__28420){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28420], null);var temp__4126__auto___28434 = input_checker28418.call(null,args__6035__auto___28433);if(cljs.core.truth_(temp__4126__auto___28434))
{var error__6036__auto___28435 = temp__4126__auto___28434;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28410","constructor28410",1650147083,null),cljs.core.pr_str.call(null,error__6036__auto___28435)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28435,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28433,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28417,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28412 = G__28420;while(true){
if(cljs.core.map_QMARK_.call(null,map28412))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28412)));
}
var map28414 = plumbing.fnk.schema.safe_get.call(null,map28412,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28415 = plumbing.fnk.schema.safe_get.call(null,map28414,new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var content = plumbing.fnk.schema.safe_get.call(null,map28415,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28415,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var class$ = cljs.core.get.call(null,map28415,new cljs.core.Keyword(null,"class","class",-2030961996),null);var id = cljs.core.get.call(null,map28415,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28413 = plumbing.fnk.schema.safe_get.call(null,map28412,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28413,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28412,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_link.t28425 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_link.t28425 = (function (map28413,output_checker28419,G__28420,map28412,owner,map28415,output_schema28416,constructor28410,content,map28414,input_schema28417,input_checker28418,validate__6034__auto__,id,class$,app,ufv__,action,meta28426){
this.map28413 = map28413;
this.output_checker28419 = output_checker28419;
this.G__28420 = G__28420;
this.map28412 = map28412;
this.owner = owner;
this.map28415 = map28415;
this.output_schema28416 = output_schema28416;
this.constructor28410 = constructor28410;
this.content = content;
this.map28414 = map28414;
this.input_schema28417 = input_schema28417;
this.input_checker28418 = input_checker28418;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta28426 = meta28426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_link.t28425.cljs$lang$type = true;
clustermap.components.action_link.t28425.cljs$lang$ctorStr = "clustermap.components.action-link/t28425";
clustermap.components.action_link.t28425.cljs$lang$ctorPrWriter = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-link/t28425");
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
clustermap.components.action_link.t28425.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_link.t28425.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function (_){var self__ = this;
var ___$1 = this;return "action-link-component";
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
clustermap.components.action_link.t28425.prototype.om$core$IRender$ = true;
clustermap.components.action_link.t28425.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28428 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.a,((cljs.core.map_QMARK_.call(null,attrs28428))?sablono.interpreter.attributes.call(null,attrs28428):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.content.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28428),sablono.interpreter.interpret.call(null,self__.content.call(null))], null))));
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
clustermap.components.action_link.t28425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function (_28427){var self__ = this;
var _28427__$1 = this;return self__.meta28426;
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
clustermap.components.action_link.t28425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function (_28427,meta28426__$1){var self__ = this;
var _28427__$1 = this;return (new clustermap.components.action_link.t28425(self__.map28413,self__.output_checker28419,self__.G__28420,self__.map28412,self__.owner,self__.map28415,self__.output_schema28416,self__.constructor28410,self__.content,self__.map28414,self__.input_schema28417,self__.input_checker28418,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.action,meta28426__$1));
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
clustermap.components.action_link.__GT_t28425 = ((function (owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419){
return (function __GT_t28425(map28413__$1,output_checker28419__$1,G__28420__$1,map28412__$1,owner__$1,map28415__$1,output_schema28416__$1,constructor28410__$1,content__$1,map28414__$1,input_schema28417__$1,input_checker28418__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta28426){return (new clustermap.components.action_link.t28425(map28413__$1,output_checker28419__$1,G__28420__$1,map28412__$1,owner__$1,map28415__$1,output_schema28416__$1,constructor28410__$1,content__$1,map28414__$1,input_schema28417__$1,input_checker28418__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta28426));
});})(owner,app,map28413,id,class$,action,content,map28415,map28414,validate__6034__auto__,ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
;
}
return (new clustermap.components.action_link.t28425(map28413,output_checker28419,G__28420,map28412,owner,map28415,output_schema28416,constructor28410,content,map28414,input_schema28417,input_checker28418,validate__6034__auto__,id,class$,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28436 = output_checker28419.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28436))
{var error__6036__auto___28437 = temp__4126__auto___28436;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28410","constructor28410",1650147083,null),cljs.core.pr_str.call(null,error__6036__auto___28437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28437,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28416,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28416,input_schema28417,input_checker28418,output_checker28419))
,schema.core.make_fn_schema.call(null,output_schema28416,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28417], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_link.action_link_component = ((function (component_fnk__7881__auto___28432){
return (function() { 
var action_link_component__delegate = function (data__7882__auto__,owner28409,p__28429){var vec__28431 = p__28429;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28431,(0),null);return component_fnk__7881__auto___28432.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28409),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28409,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_link_component = function (data__7882__auto__,owner28409,var_args){
var p__28429 = null;if (arguments.length > 2) {
  p__28429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_link_component__delegate.call(this,data__7882__auto__,owner28409,p__28429);};
action_link_component.cljs$lang$maxFixedArity = 2;
action_link_component.cljs$lang$applyTo = (function (arglist__28438){
var data__7882__auto__ = cljs.core.first(arglist__28438);
arglist__28438 = cljs.core.next(arglist__28438);
var owner28409 = cljs.core.first(arglist__28438);
var p__28429 = cljs.core.rest(arglist__28438);
return action_link_component__delegate(data__7882__auto__,owner28409,p__28429);
});
action_link_component.cljs$core$IFn$_invoke$arity$variadic = action_link_component__delegate;
return action_link_component;
})()
;})(component_fnk__7881__auto___28432))
;
clustermap.components.action_link.__GT_action_link_component = (function() {
var __GT_action_link_component = null;
var __GT_action_link_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__);
});
var __GT_action_link_component__2 = (function (cursor__7850__auto__,m28411){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__,m28411);
});
__GT_action_link_component = function(cursor__7850__auto__,m28411){
switch(arguments.length){
case 1:
return __GT_action_link_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_link_component__2.call(this,cursor__7850__auto__,m28411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_link_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_link_component__1;
__GT_action_link_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_link_component__2;
return __GT_action_link_component;
})()
;
