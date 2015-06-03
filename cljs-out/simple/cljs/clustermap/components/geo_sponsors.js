// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__27826(s__27827){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__27827__$1 = s__27827;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27827__$1);if(temp__4126__auto__)
{var s__27827__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27827__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27827__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27829 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27828 = (0);while(true){
if((i__27828 < size__4376__auto__))
{var map__27832 = cljs.core._nth.call(null,c__4375__auto__,i__27828);var map__27832__$1 = ((cljs.core.seq_QMARK_.call(null,map__27832))?cljs.core.apply.call(null,cljs.core.hash_map,map__27832):map__27832);var teaser = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__27829,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__27834 = (i__27828 + (1));
i__27828 = G__27834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27829),iter__27826.call(null,cljs.core.chunk_rest.call(null,s__27827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27829),null);
}
} else
{var map__27833 = cljs.core.first.call(null,s__27827__$2);var map__27833__$1 = ((cljs.core.seq_QMARK_.call(null,map__27833))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);var teaser = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__27826.call(null,cljs.core.rest.call(null,s__27827__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__4377__auto__.call(null,top3);
})()));
});
clustermap.components.geo_sponsors.request_geo_sponsors_data = (function request_geo_sponsors_data(resource,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geo_sponsors,bounds);
});
var component_fnk__7881__auto___27864 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27840 = schema.core.Any;var input_schema27841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map27838","map27838",-1368067826,null))], null);var input_checker27842 = schema.core.checker.call(null,input_schema27841);var output_checker27843 = schema.core.checker.call(null,output_schema27840);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function constructor27836(G__27844){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27844], null);var temp__4126__auto___27866 = input_checker27842.call(null,args__6035__auto___27865);if(cljs.core.truth_(temp__4126__auto___27866))
{var error__6036__auto___27867 = temp__4126__auto___27866;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27836","constructor27836",280617052,null),cljs.core.pr_str.call(null,error__6036__auto___27867)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27867,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27865,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27841,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map27838 = G__27844;while(true){
if(cljs.core.map_QMARK_.call(null,map27838))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27838)));
}
var map27839 = plumbing.fnk.schema.safe_get.call(null,map27838,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map27839,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map27839,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map27838,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t27853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t27853 = (function (output_schema27840,owner,output_checker27843,input_schema27841,input_checker27842,map27838,G__27844,bounds,map27839,validate__6034__auto__,constructor27836,ufv__,geo_sponsors,meta27854){
this.output_schema27840 = output_schema27840;
this.owner = owner;
this.output_checker27843 = output_checker27843;
this.input_schema27841 = input_schema27841;
this.input_checker27842 = input_checker27842;
this.map27838 = map27838;
this.G__27844 = G__27844;
this.bounds = bounds;
this.map27839 = map27839;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor27836 = constructor27836;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta27854 = meta27854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t27853.cljs$lang$type = true;
clustermap.components.geo_sponsors.t27853.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t27853";
clustermap.components.geo_sponsors.t27853.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t27853");
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_,p__27856,p__27857){var self__ = this;
var map__27858 = p__27856;var map__27858__$1 = ((cljs.core.seq_QMARK_.call(null,map__27858))?cljs.core.apply.call(null,cljs.core.hash_map,map__27858):map__27858);var next_bounds = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27859 = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__27859__$1 = ((cljs.core.seq_QMARK_.call(null,map__27859))?cljs.core.apply.call(null,cljs.core.hash_map,map__27859):map__27859);var next_geo_sponsors = map__27859__$1;var next_data = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27860 = p__27857;var map__27860__$1 = ((cljs.core.seq_QMARK_.call(null,map__27860))?cljs.core.apply.call(null,cljs.core.hash_map,map__27860):map__27860);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
);
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t27853.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_27855){var self__ = this;
var _27855__$1 = this;return self__.meta27854;
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.t27853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function (_27855,meta27854__$1){var self__ = this;
var _27855__$1 = this;return (new clustermap.components.geo_sponsors.t27853(self__.output_schema27840,self__.owner,self__.output_checker27843,self__.input_schema27841,self__.input_checker27842,self__.map27838,self__.G__27844,self__.bounds,self__.map27839,self__.validate__6034__auto__,self__.constructor27836,self__.ufv__,self__.geo_sponsors,meta27854__$1));
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
clustermap.components.geo_sponsors.__GT_t27853 = ((function (owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843){
return (function __GT_t27853(output_schema27840__$1,owner__$1,output_checker27843__$1,input_schema27841__$1,input_checker27842__$1,map27838__$1,G__27844__$1,bounds__$1,map27839__$1,validate__6034__auto____$1,constructor27836__$1,ufv____$1,geo_sponsors__$1,meta27854){return (new clustermap.components.geo_sponsors.t27853(output_schema27840__$1,owner__$1,output_checker27843__$1,input_schema27841__$1,input_checker27842__$1,map27838__$1,G__27844__$1,bounds__$1,map27839__$1,validate__6034__auto____$1,constructor27836__$1,ufv____$1,geo_sponsors__$1,meta27854));
});})(owner,geo_sponsors,bounds,map27839,validate__6034__auto__,ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
;
}
return (new clustermap.components.geo_sponsors.t27853(output_schema27840,owner,output_checker27843,input_schema27841,input_checker27842,map27838,G__27844,bounds,map27839,validate__6034__auto__,constructor27836,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27868 = output_checker27843.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27868))
{var error__6036__auto___27869 = temp__4126__auto___27868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27836","constructor27836",280617052,null),cljs.core.pr_str.call(null,error__6036__auto___27869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27869,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27840,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27840,input_schema27841,input_checker27842,output_checker27843))
,schema.core.make_fn_schema.call(null,output_schema27840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27841], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___27864){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner27835,p__27861){var vec__27863 = p__27861;var opts__7883__auto__ = cljs.core.nth.call(null,vec__27863,(0),null);return component_fnk__7881__auto___27864.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner27835,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner27835,var_args){
var p__27861 = null;if (arguments.length > 2) {
  p__27861 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner27835,p__27861);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__27870){
var data__7882__auto__ = cljs.core.first(arglist__27870);
arglist__27870 = cljs.core.next(arglist__27870);
var owner27835 = cljs.core.first(arglist__27870);
var p__27861 = cljs.core.rest(arglist__27870);
return geo_sponsors_component__delegate(data__7882__auto__,owner27835,p__27861);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___27864))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m27837){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m27837);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m27837){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m27837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
