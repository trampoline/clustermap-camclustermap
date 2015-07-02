// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.min_tolerance = 0.01;
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),clustermap.boundarylines.min_tolerance], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__28074){var vec__28075 = p__28074;var z = cljs.core.nth.call(null,vec__28075,(0),null);var t = cljs.core.nth.call(null,vec__28075,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
{return (zoom <= z);
} else
{return and__3627__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3639__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);return cljs.core.swap_BANG_.call(null,app_state,((function (boundarylines_path__$1){
return (function (old_state){return cljs.core.reduce.call(null,((function (boundarylines_path__$1){
return (function (s,bl){var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var collection_ids = (bl["boundaryline_collection_ids"]);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var collection_cache_base_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_cache_paths = (function (){var iter__4377__auto__ = ((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function iter__28080(s__28081){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__28081__$1 = s__28081;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28081__$1);if(temp__4126__auto__)
{var s__28081__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28081__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28081__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28083 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28082 = (0);while(true){
if((i__28082 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__28082);cljs.core.chunk_append.call(null,b__28083,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__28084 = (i__28082 + (1));
i__28082 = G__28084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28083),iter__28080.call(null,cljs.core.chunk_rest.call(null,s__28081__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28083),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__28081__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__28080.call(null,cljs.core.rest.call(null,s__28081__$2)));
}
} else
{return null;
}
break;
}
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
,null,null));
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
;return iter__4377__auto__.call(null,collection_ids);
})();var all_cache_paths = cljs.core.conj.call(null,collection_cache_paths,general_cache_path);return cljs.core.reduce.call(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1){
return (function (s2,cp){return cljs.core.assoc_in.call(null,s2,cp,bl);
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1))
,s,all_cache_paths);
});})(boundarylines_path__$1))
,old_state,boundarylines);
});})(boundarylines_path__$1))
);
});
/**
* take a geojson boundaryline collection index and index the individual boundarylines
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.cache_index = (function cache_index(app_state,boundarylines_path,js_index){var keys = Object.keys(js_index);return cljs.core.swap_BANG_.call(null,app_state,((function (keys){
return (function (old_state){return cljs.core.reduce.call(null,((function (keys){
return (function (s,k){var bl = (js_index[k]);var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var cache_path = cljs.core.concat.call(null,boundarylines_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));return cljs.core.assoc_in.call(null,s,cache_path,bl);
});})(keys))
,old_state,keys);
});})(keys))
);
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundaryline_set = (function() { 
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__28085){var map__28101 = p__28085;var map__28101__$1 = ((cljs.core.seq_QMARK_.call(null,map__28101))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);var tolerance = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids){
return (function (state_28106){var state_val_28107 = (state_28106[(1)]);if((state_val_28107 === (2)))
{var inst_28103 = (state_28106[(2)]);var inst_28104 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28103);var state_28106__$1 = (function (){var statearr_28108 = state_28106;(statearr_28108[(7)] = inst_28104);
return statearr_28108;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28106__$1,true);
} else
{if((state_val_28107 === (1)))
{var state_28106__$1 = state_28106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28106__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28112 = [null,null,null,null,null,null,null,null];(statearr_28112[(0)] = state_machine__9111__auto__);
(statearr_28112[(1)] = (1));
return statearr_28112;
});
var state_machine__9111__auto____1 = (function (state_28106){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28106);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28113){if((e28113 instanceof Object))
{var ex__9114__auto__ = e28113;var statearr_28114_28116 = state_28106;(statearr_28114_28116[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28117 = state_28106;
state_28106 = G__28117;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28106){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28115 = f__9126__auto__.call(null);(statearr_28115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28101,map__28101__$1,tolerance,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__28085 = null;if (arguments.length > 2) {
  p__28085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__28085);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__28118){
var app_state = cljs.core.first(arglist__28118);
arglist__28118 = cljs.core.next(arglist__28118);
var boundarylines_path = cljs.core.first(arglist__28118);
var p__28085 = cljs.core.rest(arglist__28118);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__28085);
});
fetch_boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = fetch_boundaryline_set__delegate;
return fetch_boundaryline_set;
})()
;
/**
* return a channel with a single boundaryline gotten from cache or API
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_boundaryline = (function() { 
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28119){var map__28148 = p__28119;var map__28148__$1 = ((cljs.core.seq_QMARK_.call(null,map__28148))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);var tolerance = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance){
return (function (state_28162){var state_val_28163 = (state_28162[(1)]);if((state_val_28163 === (5)))
{var inst_28156 = (state_28162[(2)]);var inst_28157 = cljs.core.deref.call(null,app_state);var inst_28158 = cljs.core.get_in.call(null,inst_28157,cache_path);var state_28162__$1 = (function (){var statearr_28164 = state_28162;(statearr_28164[(7)] = inst_28156);
return statearr_28164;
})();var statearr_28165_28176 = state_28162__$1;(statearr_28165_28176[(2)] = inst_28158);
(statearr_28165_28176[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28163 === (4)))
{var inst_28160 = (state_28162[(2)]);var state_28162__$1 = state_28162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28162__$1,inst_28160);
} else
{if((state_val_28163 === (3)))
{var inst_28151 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28152 = [boundaryline_id];var inst_28153 = (new cljs.core.PersistentVector(null,1,(5),inst_28151,inst_28152,null));var inst_28154 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_28153,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_28162__$1 = state_28162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28162__$1,(5),inst_28154);
} else
{if((state_val_28163 === (2)))
{var state_28162__$1 = state_28162;var statearr_28166_28177 = state_28162__$1;(statearr_28166_28177[(2)] = cached_bl);
(statearr_28166_28177[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28163 === (1)))
{var state_28162__$1 = state_28162;if(cljs.core.truth_(cached_bl))
{var statearr_28167_28178 = state_28162__$1;(statearr_28167_28178[(1)] = (2));
} else
{var statearr_28168_28179 = state_28162__$1;(statearr_28168_28179[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28172 = [null,null,null,null,null,null,null,null];(statearr_28172[(0)] = state_machine__9111__auto__);
(statearr_28172[(1)] = (1));
return statearr_28172;
});
var state_machine__9111__auto____1 = (function (state_28162){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28162);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28173){if((e28173 instanceof Object))
{var ex__9114__auto__ = e28173;var statearr_28174_28180 = state_28162;(statearr_28174_28180[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28173;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28181 = state_28162;
state_28162 = G__28181;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28162){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance))
})();var state__9127__auto__ = (function (){var statearr_28175 = f__9126__auto__.call(null);(statearr_28175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28148,map__28148__$1,tolerance))
);
return c__9125__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28119 = null;if (arguments.length > 3) {
  p__28119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28119);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__28182){
var app_state = cljs.core.first(arglist__28182);
arglist__28182 = cljs.core.next(arglist__28182);
var boundarylines_path = cljs.core.first(arglist__28182);
arglist__28182 = cljs.core.next(arglist__28182);
var boundaryline_id = cljs.core.first(arglist__28182);
var p__28119 = cljs.core.rest(arglist__28182);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28119);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_28202){var state_val_28203 = (state_28202[(1)]);if((state_val_28203 === (2)))
{var inst_28198 = (state_28202[(2)]);var inst_28199 = cljs.core.clj__GT_js.call(null,inst_28198);var inst_28200 = console.log(inst_28199);var state_28202__$1 = state_28202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28202__$1,inst_28200);
} else
{if((state_val_28203 === (1)))
{var state_28202__$1 = state_28202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28202__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28207 = [null,null,null,null,null,null,null];(statearr_28207[(0)] = state_machine__9111__auto__);
(statearr_28207[(1)] = (1));
return statearr_28207;
});
var state_machine__9111__auto____1 = (function (state_28202){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28202);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28208){if((e28208 instanceof Object))
{var ex__9114__auto__ = e28208;var statearr_28209_28211 = state_28202;(statearr_28209_28211[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28208;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28212 = state_28202;
state_28202 = G__28212;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28202){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_28210 = f__9126__auto__.call(null);(statearr_28210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__28213){var map__28229 = p__28213;var map__28229__$1 = ((cljs.core.seq_QMARK_.call(null,map__28229))?cljs.core.apply.call(null,cljs.core.hash_map,map__28229):map__28229);var bounds = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids){
return (function (state_28234){var state_val_28235 = (state_28234[(1)]);if((state_val_28235 === (2)))
{var inst_28231 = (state_28234[(2)]);var inst_28232 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28231);var state_28234__$1 = (function (){var statearr_28236 = state_28234;(statearr_28236[(7)] = inst_28232);
return statearr_28236;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28234__$1,true);
} else
{if((state_val_28235 === (1)))
{var state_28234__$1 = state_28234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28234__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28240 = [null,null,null,null,null,null,null,null];(statearr_28240[(0)] = state_machine__9111__auto__);
(statearr_28240[(1)] = (1));
return statearr_28240;
});
var state_machine__9111__auto____1 = (function (state_28234){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28234);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object))
{var ex__9114__auto__ = e28241;var statearr_28242_28244 = state_28234;(statearr_28242_28244[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28245 = state_28234;
state_28234 = G__28245;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28234){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28243 = f__9126__auto__.call(null);(statearr_28243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28229,map__28229__$1,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__28213 = null;if (arguments.length > 4) {
  p__28213 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__28213);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28246){
var app_state = cljs.core.first(arglist__28246);
arglist__28246 = cljs.core.next(arglist__28246);
var boundarylines_path = cljs.core.first(arglist__28246);
arglist__28246 = cljs.core.next(arglist__28246);
var collection_id = cljs.core.first(arglist__28246);
arglist__28246 = cljs.core.next(arglist__28246);
var tolerance = cljs.core.first(arglist__28246);
var p__28213 = cljs.core.rest(arglist__28246);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__28213);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3627__auto__ = default_bl;if(cljs.core.truth_(and__3627__auto__))
{return default_tol;
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.get_cached_boundaryline = (function() { 
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28247){var vec__28250 = p__28247;var map__28251 = cljs.core.nth.call(null,vec__28250,(0),null);var map__28251__$1 = ((cljs.core.seq_QMARK_.call(null,map__28251))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);var indexes = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28250,map__28251,map__28251__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28250,map__28251,map__28251__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28247 = null;if (arguments.length > 3) {
  p__28247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28247);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28252){
var app_state = cljs.core.first(arglist__28252);
arglist__28252 = cljs.core.next(arglist__28252);
var boundarylines_path = cljs.core.first(arglist__28252);
arglist__28252 = cljs.core.next(arglist__28252);
var boundaryline_id = cljs.core.first(arglist__28252);
var p__28247 = cljs.core.rest(arglist__28252);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28247);
});
get_cached_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_cached_boundaryline__delegate;
return get_cached_boundaryline;
})()
;
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3639__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* - app-state : atom containing app-state
* - boundarylines-path : path in app-state of boundarylines state
* - collection-id : id of boundaryline collection to retrieve from
* - zoom : zoom level to retrieve for
* - boundaryline-ids : ids of boundarylines required
* - bounds :
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28253){var map__28258 = p__28253;var map__28258__$1 = ((cljs.core.seq_QMARK_.call(null,map__28258))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);var boundaryline_ids = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28258,map__28258__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28258,map__28258__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28258,map__28258__$1,boundaryline_ids){
return (function (p__28259){var vec__28260 = p__28259;var blid = cljs.core.nth.call(null,vec__28260,(0),null);var vec__28261 = cljs.core.nth.call(null,vec__28260,(1),null);var tol = cljs.core.nth.call(null,vec__28261,(0),null);var bl = cljs.core.nth.call(null,vec__28261,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28258,map__28258__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28253 = null;if (arguments.length > 5) {
  p__28253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28253);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28262){
var app_state = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var boundarylines_path = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var collection_id = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var bounds = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var zoom = cljs.core.first(arglist__28262);
var p__28253 = cljs.core.rest(arglist__28262);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28253);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28267_28271 = cljs.core.seq.call(null,keys);var chunk__28268_28272 = null;var count__28269_28273 = (0);var i__28270_28274 = (0);while(true){
if((i__28270_28274 < count__28269_28273))
{var k_28275 = cljs.core._nth.call(null,chunk__28268_28272,i__28270_28274);var obj_28276 = (js_index[k_28275]);var geom_28277 = (obj_28276["geojson"]);var feature_28278 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28276["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28276["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28276["compact_name"])], null)], null));var __28279__$1 = (feature_28278["geometry"] = geom_28277);var __28280__$2 = ((feature_28278["properties"])["index_object"] = obj_28276);features.push(feature_28278);
{
var G__28281 = seq__28267_28271;
var G__28282 = chunk__28268_28272;
var G__28283 = count__28269_28273;
var G__28284 = (i__28270_28274 + (1));
seq__28267_28271 = G__28281;
chunk__28268_28272 = G__28282;
count__28269_28273 = G__28283;
i__28270_28274 = G__28284;
continue;
}
} else
{var temp__4126__auto___28285 = cljs.core.seq.call(null,seq__28267_28271);if(temp__4126__auto___28285)
{var seq__28267_28286__$1 = temp__4126__auto___28285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28267_28286__$1))
{var c__4408__auto___28287 = cljs.core.chunk_first.call(null,seq__28267_28286__$1);{
var G__28288 = cljs.core.chunk_rest.call(null,seq__28267_28286__$1);
var G__28289 = c__4408__auto___28287;
var G__28290 = cljs.core.count.call(null,c__4408__auto___28287);
var G__28291 = (0);
seq__28267_28271 = G__28288;
chunk__28268_28272 = G__28289;
count__28269_28273 = G__28290;
i__28270_28274 = G__28291;
continue;
}
} else
{var k_28292 = cljs.core.first.call(null,seq__28267_28286__$1);var obj_28293 = (js_index[k_28292]);var geom_28294 = (obj_28293["geojson"]);var feature_28295 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28293["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28293["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28293["compact_name"])], null)], null));var __28296__$1 = (feature_28295["geometry"] = geom_28294);var __28297__$2 = ((feature_28295["properties"])["index_object"] = obj_28293);features.push(feature_28295);
{
var G__28298 = cljs.core.next.call(null,seq__28267_28286__$1);
var G__28299 = null;
var G__28300 = (0);
var G__28301 = (0);
seq__28267_28271 = G__28298;
chunk__28268_28272 = G__28299;
count__28269_28273 = G__28300;
i__28270_28274 = G__28301;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_28347){var state_val_28348 = (state_28347[(1)]);if((state_val_28348 === (5)))
{var inst_28334 = (state_28347[(7)]);var inst_28344 = (state_28347[(2)]);var inst_28345 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28334);var state_28347__$1 = (function (){var statearr_28349 = state_28347;(statearr_28349[(8)] = inst_28344);
return statearr_28349;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28347__$1,inst_28345);
} else
{if((state_val_28348 === (4)))
{var state_28347__$1 = state_28347;var statearr_28350_28362 = state_28347__$1;(statearr_28350_28362[(2)] = null);
(statearr_28350_28362[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (3)))
{var inst_28334 = (state_28347[(7)]);var inst_28341 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28334);var state_28347__$1 = state_28347;var statearr_28351_28363 = state_28347__$1;(statearr_28351_28363[(2)] = inst_28341);
(statearr_28351_28363[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (2)))
{var inst_28334 = (state_28347[(7)]);var inst_28334__$1 = (state_28347[(2)]);var inst_28335 = (function (){var bl_coll_index = inst_28334__$1;return ((function (bl_coll_index,inst_28334,inst_28334__$1,state_val_28348,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28334,inst_28334__$1,state_val_28348,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28336 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28335);var inst_28337 = cljs.core.deref.call(null,app_state);var inst_28338 = cljs.core.get_in.call(null,inst_28337,index_path);var inst_28339 = cljs.core._EQ_.call(null,inst_28338,inst_28334__$1);var state_28347__$1 = (function (){var statearr_28352 = state_28347;(statearr_28352[(9)] = inst_28336);
(statearr_28352[(7)] = inst_28334__$1);
return statearr_28352;
})();if(inst_28339)
{var statearr_28353_28364 = state_28347__$1;(statearr_28353_28364[(1)] = (3));
} else
{var statearr_28354_28365 = state_28347__$1;(statearr_28354_28365[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (1)))
{var inst_28332 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28347__$1 = state_28347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28347__$1,(2),inst_28332);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28358 = [null,null,null,null,null,null,null,null,null,null];(statearr_28358[(0)] = state_machine__9111__auto__);
(statearr_28358[(1)] = (1));
return statearr_28358;
});
var state_machine__9111__auto____1 = (function (state_28347){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28347);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28359){if((e28359 instanceof Object))
{var ex__9114__auto__ = e28359;var statearr_28360_28366 = state_28347;(statearr_28360_28366[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28359;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28367 = state_28347;
state_28347 = G__28367;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28347){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9127__auto__ = (function (){var statearr_28361 = f__9126__auto__.call(null);(statearr_28361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__9125__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3639__auto__ = hits;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
