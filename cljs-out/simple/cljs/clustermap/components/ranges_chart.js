// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__33181){var map__33227 = p__33181;var map__33227__$1 = ((cljs.core.seq_QMARK_.call(null,map__33227))?cljs.core.apply.call(null,cljs.core.hash_map,map__33227):map__33227);var map__33228 = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33228__$1 = ((cljs.core.seq_QMARK_.call(null,map__33228))?cljs.core.apply.call(null,cljs.core.hash_map,map__33228):map__33228);var table_data = map__33228__$1;var query = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33229 = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33229__$1 = ((cljs.core.seq_QMARK_.call(null,map__33229))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229):map__33229);var controls = map__33229__$1;var title = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__33230){var map__33231 = p__33230;var map__33231__$1 = ((cljs.core.seq_QMARK_.call(null,map__33231))?cljs.core.apply.call(null,cljs.core.hash_map,map__33231):map__33231);var x = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33232(s__33233){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33233__$1 = s__33233;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33233__$1);if(temp__4126__auto__)
{var s__33233__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33233__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33233__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33235 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33234 = (0);while(true){
if((i__33234 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33234);cljs.core.chunk_append.call(null,b__33235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33234,yk,c__4375__auto__,size__4376__auto__,b__33235,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33244(s__33245){return (new cljs.core.LazySeq(null,((function (i__33234,yk,c__4375__auto__,size__4376__auto__,b__33235,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33245__$1 = s__33245;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33245__$1);if(temp__4126__auto____$1)
{var s__33245__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33245__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33245__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33247 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33246 = (0);while(true){
if((i__33246 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33246);cljs.core.chunk_append.call(null,b__33247,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33272 = (i__33246 + (1));
i__33246 = G__33272;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33247),iter__33244.call(null,cljs.core.chunk_rest.call(null,s__33245__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33247),null);
}
} else
{var xk = cljs.core.first.call(null,s__33245__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33244.call(null,cljs.core.rest.call(null,s__33245__$2)));
}
} else
{return null;
}
break;
}
});})(i__33234,yk,c__4375__auto__,size__4376__auto__,b__33235,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33234,yk,c__4375__auto__,size__4376__auto__,b__33235,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33273 = (i__33234 + (1));
i__33234 = G__33273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33235),iter__33232.call(null,cljs.core.chunk_rest.call(null,s__33233__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33235),null);
}
} else
{var yk = cljs.core.first.call(null,s__33233__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33248(s__33249){return (new cljs.core.LazySeq(null,((function (yk,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33249__$1 = s__33249;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33249__$1);if(temp__4126__auto____$1)
{var s__33249__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33249__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33249__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33251 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33250 = (0);while(true){
if((i__33250 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33250);cljs.core.chunk_append.call(null,b__33251,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33274 = (i__33250 + (1));
i__33250 = G__33274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33251),iter__33248.call(null,cljs.core.chunk_rest.call(null,s__33249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33251),null);
}
} else
{var xk = cljs.core.first.call(null,s__33249__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33248.call(null,cljs.core.rest.call(null,s__33249__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33233__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33232.call(null,cljs.core.rest.call(null,s__33233__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33252(s__33253){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33253__$1 = s__33253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33253__$1);if(temp__4126__auto__)
{var s__33253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33253__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33253__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33255 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33254 = (0);while(true){
if((i__33254 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33254);cljs.core.chunk_append.call(null,b__33255,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33275 = (i__33254 + (1));
i__33254 = G__33275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33255),iter__33252.call(null,cljs.core.chunk_rest.call(null,s__33253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33255),null);
}
} else
{var xa = cljs.core.first.call(null,s__33253__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33252.call(null,cljs.core.rest.call(null,s__33253__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33256(s__33257){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33257__$1 = s__33257;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33257__$1);if(temp__4126__auto__)
{var s__33257__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33257__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33257__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33259 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33258 = (0);while(true){
if((i__33258 < size__4376__auto__))
{var vec__33262 = cljs.core._nth.call(null,c__4375__auto__,i__33258);var ya = cljs.core.nth.call(null,vec__33262,(0),null);var i = cljs.core.nth.call(null,vec__33262,(1),null);cljs.core.chunk_append.call(null,b__33259,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33276 = (i__33258 + (1));
i__33258 = G__33276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33259),iter__33256.call(null,cljs.core.chunk_rest.call(null,s__33257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33259),null);
}
} else
{var vec__33263 = cljs.core.first.call(null,s__33257__$2);var ya = cljs.core.nth.call(null,vec__33263,(0),null);var i = cljs.core.nth.call(null,vec__33263,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33256.call(null,cljs.core.rest.call(null,s__33257__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33264(s__33265){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33265__$1 = s__33265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33265__$1);if(temp__4126__auto__)
{var s__33265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33265__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33265__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33267 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33266 = (0);while(true){
if((i__33266 < size__4376__auto__))
{var vec__33270 = cljs.core._nth.call(null,c__4375__auto__,i__33266);var ya = cljs.core.nth.call(null,vec__33270,(0),null);var i = cljs.core.nth.call(null,vec__33270,(1),null);cljs.core.chunk_append.call(null,b__33267,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33277 = (i__33266 + (1));
i__33266 = G__33277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33267),iter__33264.call(null,cljs.core.chunk_rest.call(null,s__33265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33267),null);
}
} else
{var vec__33271 = cljs.core.first.call(null,s__33265__$2);var ya = cljs.core.nth.call(null,vec__33271,(0),null);var i = cljs.core.nth.call(null,vec__33271,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33264.call(null,cljs.core.rest.call(null,s__33265__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33227,map__33227__$1,map__33228,map__33228__$1,table_data,query,results,map__33229,map__33229__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33399 = schema.utils.use_fn_validation;var output_schema33279_33400 = schema.core.Any;var input_schema33280_33401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33281_33402 = schema.core.checker.call(null,input_schema33280_33401);var output_checker33282_33403 = schema.core.checker.call(null,output_schema33279_33400);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function ranges_chart_component(G__33283,G__33284){var validate__6034__auto__ = ufv___33399.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33283,G__33284], null);var temp__4126__auto___33405 = input_checker33281_33402.call(null,args__6035__auto___33404);if(cljs.core.truth_(temp__4126__auto___33405))
{var error__6036__auto___33406 = temp__4126__auto___33405;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33406,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33404,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33280_33401,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33345 = G__33283;var map__33346 = G__33345;var map__33346__$1 = ((cljs.core.seq_QMARK_.call(null,map__33346))?cljs.core.apply.call(null,cljs.core.hash_map,map__33346):map__33346);var props = map__33346__$1;var map__33347 = cljs.core.get.call(null,map__33346__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33347__$1 = ((cljs.core.seq_QMARK_.call(null,map__33347))?cljs.core.apply.call(null,cljs.core.hash_map,map__33347):map__33347);var table_state = map__33347__$1;var table_data = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33348 = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33348__$1 = ((cljs.core.seq_QMARK_.call(null,map__33348))?cljs.core.apply.call(null,cljs.core.hash_map,map__33348):map__33348);var controls = map__33348__$1;var index_type = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33346__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33284;var G__33345__$1 = G__33345;var owner__$1 = owner;while(true){
var map__33349 = G__33345__$1;var map__33349__$1 = ((cljs.core.seq_QMARK_.call(null,map__33349))?cljs.core.apply.call(null,cljs.core.hash_map,map__33349):map__33349);var props__$1 = map__33349__$1;var map__33350 = cljs.core.get.call(null,map__33349__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33350__$1 = ((cljs.core.seq_QMARK_.call(null,map__33350))?cljs.core.apply.call(null,cljs.core.hash_map,map__33350):map__33350);var table_state__$1 = map__33350__$1;var table_data__$1 = cljs.core.get.call(null,map__33350__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33351 = cljs.core.get.call(null,map__33350__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33351__$1 = ((cljs.core.seq_QMARK_.call(null,map__33351))?cljs.core.apply.call(null,cljs.core.hash_map,map__33351):map__33351);var controls__$1 = map__33351__$1;var index_type__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33349__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33352 = (function (index_type,row_aggs,owner,metric_path,map__33347,props,G__33283,map__33350,input_checker33281,row_path,table_data,ranges_chart_component,map__33349,metric_aggs,index,col_path,filter_spec,map__33348,table_state,map__33351,input_schema33280,G__33345,controls,col_aggs,output_checker33282,title,rows,G__33284,map__33346,cols,validate__6034__auto__,output_schema33279,ufv__,meta33353){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.map__33347 = map__33347;
this.props = props;
this.G__33283 = G__33283;
this.map__33350 = map__33350;
this.input_checker33281 = input_checker33281;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.map__33349 = map__33349;
this.metric_aggs = metric_aggs;
this.index = index;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__33348 = map__33348;
this.table_state = table_state;
this.map__33351 = map__33351;
this.input_schema33280 = input_schema33280;
this.G__33345 = G__33345;
this.controls = controls;
this.col_aggs = col_aggs;
this.output_checker33282 = output_checker33282;
this.title = title;
this.rows = rows;
this.G__33284 = G__33284;
this.map__33346 = map__33346;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema33279 = output_schema33279;
this.ufv__ = ufv__;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33352.cljs$lang$type = true;
clustermap.components.ranges_chart.t33352.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33352";
clustermap.components.ranges_chart.t33352.cljs$lang$ctorPrWriter = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33352");
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_,p__33355,___$1){var self__ = this;
var map__33356 = p__33355;var map__33356__$1 = ((cljs.core.seq_QMARK_.call(null,map__33356))?cljs.core.apply.call(null,cljs.core.hash_map,map__33356):map__33356);var prev_props = map__33356__$1;var map__33357 = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33357__$1 = ((cljs.core.seq_QMARK_.call(null,map__33357))?cljs.core.apply.call(null,cljs.core.hash_map,map__33357):map__33357);var prev_table_data = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33352.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_,p__33358,p__33359){var self__ = this;
var map__33360 = p__33358;var map__33360__$1 = ((cljs.core.seq_QMARK_.call(null,map__33360))?cljs.core.apply.call(null,cljs.core.hash_map,map__33360):map__33360);var next_props = map__33360__$1;var map__33361 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33361__$1 = ((cljs.core.seq_QMARK_.call(null,map__33361))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);var next_table_state = map__33361__$1;var next_table_data = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33362 = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33362__$1 = ((cljs.core.seq_QMARK_.call(null,map__33362))?cljs.core.apply.call(null,cljs.core.hash_map,map__33362):map__33362);var next_controls = map__33362__$1;var next_col_aggs = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33363 = p__33359;var map__33363__$1 = ((cljs.core.seq_QMARK_.call(null,map__33363))?cljs.core.apply.call(null,cljs.core.hash_map,map__33363):map__33363);var fetch_data_fn = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (state_33381){var state_val_33382 = (state_33381[(1)]);if((state_val_33382 === (5)))
{var inst_33379 = (state_33381[(2)]);var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33381__$1,inst_33379);
} else
{if((state_val_33382 === (4)))
{var state_33381__$1 = state_33381;var statearr_33383_33407 = state_33381__$1;(statearr_33383_33407[(2)] = null);
(statearr_33383_33407[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33382 === (3)))
{var inst_33366 = (state_33381[(7)]);var inst_33368 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33369 = ["RANGES-TABLE-DATA",inst_33366];var inst_33370 = (new cljs.core.PersistentVector(null,2,(5),inst_33368,inst_33369,null));var inst_33371 = cljs.core.clj__GT_js.call(null,inst_33370);var inst_33372 = console.log(inst_33371);var inst_33373 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33374 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33375 = (new cljs.core.PersistentVector(null,1,(5),inst_33373,inst_33374,null));var inst_33376 = om.core.update_BANG_.call(null,self__.table_state,inst_33375,inst_33366);var state_33381__$1 = (function (){var statearr_33384 = state_33381;(statearr_33384[(8)] = inst_33372);
return statearr_33384;
})();var statearr_33385_33408 = state_33381__$1;(statearr_33385_33408[(2)] = inst_33376);
(statearr_33385_33408[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33382 === (2)))
{var inst_33366 = (state_33381[(7)]);var inst_33366__$1 = (state_33381[(2)]);var state_33381__$1 = (function (){var statearr_33386 = state_33381;(statearr_33386[(7)] = inst_33366__$1);
return statearr_33386;
})();if(cljs.core.truth_(inst_33366__$1))
{var statearr_33387_33409 = state_33381__$1;(statearr_33387_33409[(1)] = (3));
} else
{var statearr_33388_33410 = state_33381__$1;(statearr_33388_33410[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33382 === (1)))
{var inst_33364 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33381__$1 = state_33381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33381__$1,(2),inst_33364);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33392 = [null,null,null,null,null,null,null,null,null];(statearr_33392[(0)] = state_machine__9111__auto__);
(statearr_33392[(1)] = (1));
return statearr_33392;
});
var state_machine__9111__auto____1 = (function (state_33381){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33381);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33393){if((e33393 instanceof Object))
{var ex__9114__auto__ = e33393;var statearr_33394_33411 = state_33381;(statearr_33394_33411[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33412 = state_33381;
state_33381 = G__33412;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33381){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
})();var state__9127__auto__ = (function (){var statearr_33395 = f__9126__auto__.call(null);(statearr_33395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33360,map__33360__$1,next_props,map__33361,map__33361__$1,next_table_state,next_table_data,map__33362,map__33362__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33363,map__33363__$1,fetch_data_fn,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33352.prototype.om$core$IRender$render$arity$1 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33352.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33398 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33398__$1 = (((G__33398 == null))?null:jayq.core.$.call(null,G__33398));var G__33398__$2 = (((G__33398__$1 == null))?null:G__33398__$1.highcharts());var G__33398__$3 = (((G__33398__$2 == null))?null:G__33398__$2.reflow());return G__33398__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
);
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_33354){var self__ = this;
var _33354__$1 = this;return self__.meta33353;
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.t33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function (_33354,meta33353__$1){var self__ = this;
var _33354__$1 = this;return (new clustermap.components.ranges_chart.t33352(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.map__33347,self__.props,self__.G__33283,self__.map__33350,self__.input_checker33281,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.map__33349,self__.metric_aggs,self__.index,self__.col_path,self__.filter_spec,self__.map__33348,self__.table_state,self__.map__33351,self__.input_schema33280,self__.G__33345,self__.controls,self__.col_aggs,self__.output_checker33282,self__.title,self__.rows,self__.G__33284,self__.map__33346,self__.cols,self__.validate__6034__auto__,self__.output_schema33279,self__.ufv__,meta33353__$1));
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
clustermap.components.ranges_chart.__GT_t33352 = ((function (map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403){
return (function __GT_t33352(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,map__33347__$2,props__$2,G__33283__$1,map__33350__$2,input_checker33281__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__33349__$2,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,map__33348__$2,table_state__$2,map__33351__$2,input_schema33280__$1,G__33345__$2,controls__$2,col_aggs__$2,output_checker33282__$1,title__$2,rows__$2,G__33284__$1,map__33346__$2,cols__$2,validate__6034__auto____$1,output_schema33279__$1,ufv____$1,meta33353){return (new clustermap.components.ranges_chart.t33352(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,map__33347__$2,props__$2,G__33283__$1,map__33350__$2,input_checker33281__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__33349__$2,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,map__33348__$2,table_state__$2,map__33351__$2,input_schema33280__$1,G__33345__$2,controls__$2,col_aggs__$2,output_checker33282__$1,title__$2,rows__$2,G__33284__$1,map__33346__$2,cols__$2,validate__6034__auto____$1,output_schema33279__$1,ufv____$1,meta33353));
});})(map__33349,map__33349__$1,props__$1,map__33350,map__33350__$1,table_state__$1,table_data__$1,map__33351,map__33351__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33345,map__33346,map__33346__$1,props,map__33347,map__33347__$1,table_state,table_data,map__33348,map__33348__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
}
return (new clustermap.components.ranges_chart.t33352(index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,map__33347__$1,props__$1,G__33283,map__33350__$1,input_checker33281_33402,row_path__$1,table_data__$1,ranges_chart_component,map__33349__$1,metric_aggs__$1,index__$1,col_path__$1,filter_spec__$1,map__33348__$1,table_state__$1,map__33351__$1,input_schema33280_33401,G__33345__$1,controls__$1,col_aggs__$1,output_checker33282_33403,title__$1,rows__$1,G__33284,map__33346__$1,cols__$1,validate__6034__auto__,output_schema33279_33400,ufv___33399,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33413 = output_checker33282_33403.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33413))
{var error__6036__auto___33414 = temp__4126__auto___33413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33414,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33279_33400,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33399,output_schema33279_33400,input_schema33280_33401,input_checker33281_33402,output_checker33282_33403))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33279_33400,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33280_33401], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33278){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33278);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33278){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
