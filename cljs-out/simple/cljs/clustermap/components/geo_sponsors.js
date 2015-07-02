// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__29110(s__29111){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__29111__$1 = s__29111;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29111__$1);if(temp__4126__auto__)
{var s__29111__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29111__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29111__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29113 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29112 = (0);while(true){
if((i__29112 < size__4376__auto__))
{var map__29116 = cljs.core._nth.call(null,c__4375__auto__,i__29112);var map__29116__$1 = ((cljs.core.seq_QMARK_.call(null,map__29116))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116):map__29116);var teaser = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__29113,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__29118 = (i__29112 + (1));
i__29112 = G__29118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29113),iter__29110.call(null,cljs.core.chunk_rest.call(null,s__29111__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29113),null);
}
} else
{var map__29117 = cljs.core.first.call(null,s__29111__$2);var map__29117__$1 = ((cljs.core.seq_QMARK_.call(null,map__29117))?cljs.core.apply.call(null,cljs.core.hash_map,map__29117):map__29117);var teaser = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__29110.call(null,cljs.core.rest.call(null,s__29111__$2)));
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
var component_fnk__7881__auto___29212 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29124 = schema.core.Any;var input_schema29125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29122","map29122",1549672490,null))], null);var input_checker29126 = schema.core.checker.call(null,input_schema29125);var output_checker29127 = schema.core.checker.call(null,output_schema29124);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function constructor29120(G__29128){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29128], null);var temp__4126__auto___29214 = input_checker29126.call(null,args__6035__auto___29213);if(cljs.core.truth_(temp__4126__auto___29214))
{var error__6036__auto___29215 = temp__4126__auto___29214;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29120","constructor29120",1883441343,null),cljs.core.pr_str.call(null,error__6036__auto___29215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29215,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29213,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29125,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29122 = G__29128;while(true){
if(cljs.core.map_QMARK_.call(null,map29122))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29122)));
}
var map29123 = plumbing.fnk.schema.safe_get.call(null,map29122,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29123,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29123,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29122,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29169 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29169 = (function (G__29128,owner,map29123,map29122,input_checker29126,output_schema29124,bounds,input_schema29125,validate__6034__auto__,output_checker29127,ufv__,geo_sponsors,constructor29120,meta29170){
this.G__29128 = G__29128;
this.owner = owner;
this.map29123 = map29123;
this.map29122 = map29122;
this.input_checker29126 = input_checker29126;
this.output_schema29124 = output_schema29124;
this.bounds = bounds;
this.input_schema29125 = input_schema29125;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker29127 = output_checker29127;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.constructor29120 = constructor29120;
this.meta29170 = meta29170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29169.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29169.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29169";
clustermap.components.geo_sponsors.t29169.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29169");
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_,p__29172,p__29173){var self__ = this;
var map__29174 = p__29172;var map__29174__$1 = ((cljs.core.seq_QMARK_.call(null,map__29174))?cljs.core.apply.call(null,cljs.core.hash_map,map__29174):map__29174);var next_bounds = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29175 = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29175__$1 = ((cljs.core.seq_QMARK_.call(null,map__29175))?cljs.core.apply.call(null,cljs.core.hash_map,map__29175):map__29175);var next_geo_sponsors = map__29175__$1;var next_data = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29176 = p__29173;var map__29176__$1 = ((cljs.core.seq_QMARK_.call(null,map__29176))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176):map__29176);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (state_29194){var state_val_29195 = (state_29194[(1)]);if((state_val_29195 === (5)))
{var inst_29192 = (state_29194[(2)]);var state_29194__$1 = state_29194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29194__$1,inst_29192);
} else
{if((state_val_29195 === (4)))
{var state_29194__$1 = state_29194;var statearr_29196_29216 = state_29194__$1;(statearr_29196_29216[(2)] = null);
(statearr_29196_29216[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29195 === (3)))
{var inst_29179 = (state_29194[(7)]);var inst_29181 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29182 = ["GEO-SPONSORS : ",inst_29179];var inst_29183 = (new cljs.core.PersistentVector(null,2,(5),inst_29181,inst_29182,null));var inst_29184 = cljs.core.clj__GT_js.call(null,inst_29183);var inst_29185 = console.log(inst_29184);var inst_29186 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29187 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29188 = (new cljs.core.PersistentVector(null,1,(5),inst_29186,inst_29187,null));var inst_29189 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29188,inst_29179);var state_29194__$1 = (function (){var statearr_29197 = state_29194;(statearr_29197[(8)] = inst_29185);
return statearr_29197;
})();var statearr_29198_29217 = state_29194__$1;(statearr_29198_29217[(2)] = inst_29189);
(statearr_29198_29217[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29195 === (2)))
{var inst_29179 = (state_29194[(7)]);var inst_29179__$1 = (state_29194[(2)]);var state_29194__$1 = (function (){var statearr_29199 = state_29194;(statearr_29199[(7)] = inst_29179__$1);
return statearr_29199;
})();if(cljs.core.truth_(inst_29179__$1))
{var statearr_29200_29218 = state_29194__$1;(statearr_29200_29218[(1)] = (3));
} else
{var statearr_29201_29219 = state_29194__$1;(statearr_29201_29219[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29195 === (1)))
{var inst_29177 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29194__$1 = state_29194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29194__$1,(2),inst_29177);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29205 = [null,null,null,null,null,null,null,null,null];(statearr_29205[(0)] = state_machine__9111__auto__);
(statearr_29205[(1)] = (1));
return statearr_29205;
});
var state_machine__9111__auto____1 = (function (state_29194){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29194);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29206){if((e29206 instanceof Object))
{var ex__9114__auto__ = e29206;var statearr_29207_29220 = state_29194;(statearr_29207_29220[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29206;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29221 = state_29194;
state_29194 = G__29221;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29194){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
})();var state__9127__auto__ = (function (){var statearr_29208 = f__9126__auto__.call(null);(statearr_29208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29174,map__29174__$1,next_bounds,map__29175,map__29175__$1,next_geo_sponsors,next_data,map__29176,map__29176__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29169.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_29171){var self__ = this;
var _29171__$1 = this;return self__.meta29170;
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.t29169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function (_29171,meta29170__$1){var self__ = this;
var _29171__$1 = this;return (new clustermap.components.geo_sponsors.t29169(self__.G__29128,self__.owner,self__.map29123,self__.map29122,self__.input_checker29126,self__.output_schema29124,self__.bounds,self__.input_schema29125,self__.validate__6034__auto__,self__.output_checker29127,self__.ufv__,self__.geo_sponsors,self__.constructor29120,meta29170__$1));
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
clustermap.components.geo_sponsors.__GT_t29169 = ((function (owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127){
return (function __GT_t29169(G__29128__$1,owner__$1,map29123__$1,map29122__$1,input_checker29126__$1,output_schema29124__$1,bounds__$1,input_schema29125__$1,validate__6034__auto____$1,output_checker29127__$1,ufv____$1,geo_sponsors__$1,constructor29120__$1,meta29170){return (new clustermap.components.geo_sponsors.t29169(G__29128__$1,owner__$1,map29123__$1,map29122__$1,input_checker29126__$1,output_schema29124__$1,bounds__$1,input_schema29125__$1,validate__6034__auto____$1,output_checker29127__$1,ufv____$1,geo_sponsors__$1,constructor29120__$1,meta29170));
});})(owner,geo_sponsors,bounds,map29123,validate__6034__auto__,ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
;
}
return (new clustermap.components.geo_sponsors.t29169(G__29128,owner,map29123,map29122,input_checker29126,output_schema29124,bounds,input_schema29125,validate__6034__auto__,output_checker29127,ufv__,geo_sponsors,constructor29120,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29222 = output_checker29127.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29222))
{var error__6036__auto___29223 = temp__4126__auto___29222;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29120","constructor29120",1883441343,null),cljs.core.pr_str.call(null,error__6036__auto___29223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29223,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29124,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29124,input_schema29125,input_checker29126,output_checker29127))
,schema.core.make_fn_schema.call(null,output_schema29124,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29125], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29212){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner29119,p__29209){var vec__29211 = p__29209;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29211,(0),null);return component_fnk__7881__auto___29212.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29119,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner29119,var_args){
var p__29209 = null;if (arguments.length > 2) {
  p__29209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner29119,p__29209);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29224){
var data__7882__auto__ = cljs.core.first(arglist__29224);
arglist__29224 = cljs.core.next(arglist__29224);
var owner29119 = cljs.core.first(arglist__29224);
var p__29209 = cljs.core.rest(arglist__29224);
return geo_sponsors_component__delegate(data__7882__auto__,owner29119,p__29209);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29212))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m29121){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m29121);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m29121){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m29121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
