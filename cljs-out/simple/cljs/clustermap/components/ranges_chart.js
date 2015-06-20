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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32922){var map__32968 = p__32922;var map__32968__$1 = ((cljs.core.seq_QMARK_.call(null,map__32968))?cljs.core.apply.call(null,cljs.core.hash_map,map__32968):map__32968);var map__32969 = cljs.core.get.call(null,map__32968__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32969__$1 = ((cljs.core.seq_QMARK_.call(null,map__32969))?cljs.core.apply.call(null,cljs.core.hash_map,map__32969):map__32969);var table_data = map__32969__$1;var query = cljs.core.get.call(null,map__32969__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32969__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32970 = cljs.core.get.call(null,map__32968__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32970__$1 = ((cljs.core.seq_QMARK_.call(null,map__32970))?cljs.core.apply.call(null,cljs.core.hash_map,map__32970):map__32970);var controls = map__32970__$1;var title = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32971){var map__32972 = p__32971;var map__32972__$1 = ((cljs.core.seq_QMARK_.call(null,map__32972))?cljs.core.apply.call(null,cljs.core.hash_map,map__32972):map__32972);var x = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32973(s__32974){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32974__$1 = s__32974;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32974__$1);if(temp__4126__auto__)
{var s__32974__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32974__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32974__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32976 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32975 = (0);while(true){
if((i__32975 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32975);cljs.core.chunk_append.call(null,b__32976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32975,yk,c__4375__auto__,size__4376__auto__,b__32976,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32985(s__32986){return (new cljs.core.LazySeq(null,((function (i__32975,yk,c__4375__auto__,size__4376__auto__,b__32976,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32986__$1 = s__32986;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32986__$1);if(temp__4126__auto____$1)
{var s__32986__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32986__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32986__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32988 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32987 = (0);while(true){
if((i__32987 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32987);cljs.core.chunk_append.call(null,b__32988,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33013 = (i__32987 + (1));
i__32987 = G__33013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32988),iter__32985.call(null,cljs.core.chunk_rest.call(null,s__32986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32988),null);
}
} else
{var xk = cljs.core.first.call(null,s__32986__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32985.call(null,cljs.core.rest.call(null,s__32986__$2)));
}
} else
{return null;
}
break;
}
});})(i__32975,yk,c__4375__auto__,size__4376__auto__,b__32976,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32975,yk,c__4375__auto__,size__4376__auto__,b__32976,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33014 = (i__32975 + (1));
i__32975 = G__33014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32976),iter__32973.call(null,cljs.core.chunk_rest.call(null,s__32974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32976),null);
}
} else
{var yk = cljs.core.first.call(null,s__32974__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32989(s__32990){return (new cljs.core.LazySeq(null,((function (yk,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32990__$1 = s__32990;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32990__$1);if(temp__4126__auto____$1)
{var s__32990__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32990__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32990__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32992 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32991 = (0);while(true){
if((i__32991 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32991);cljs.core.chunk_append.call(null,b__32992,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33015 = (i__32991 + (1));
i__32991 = G__33015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32992),iter__32989.call(null,cljs.core.chunk_rest.call(null,s__32990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32992),null);
}
} else
{var xk = cljs.core.first.call(null,s__32990__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32989.call(null,cljs.core.rest.call(null,s__32990__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32974__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32973.call(null,cljs.core.rest.call(null,s__32974__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32993(s__32994){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32994__$1 = s__32994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32994__$1);if(temp__4126__auto__)
{var s__32994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32994__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32994__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32996 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32995 = (0);while(true){
if((i__32995 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32995);cljs.core.chunk_append.call(null,b__32996,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33016 = (i__32995 + (1));
i__32995 = G__33016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32996),iter__32993.call(null,cljs.core.chunk_rest.call(null,s__32994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32996),null);
}
} else
{var xa = cljs.core.first.call(null,s__32994__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32993.call(null,cljs.core.rest.call(null,s__32994__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32997(s__32998){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32998__$1 = s__32998;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32998__$1);if(temp__4126__auto__)
{var s__32998__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32998__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32998__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33000 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32999 = (0);while(true){
if((i__32999 < size__4376__auto__))
{var vec__33003 = cljs.core._nth.call(null,c__4375__auto__,i__32999);var ya = cljs.core.nth.call(null,vec__33003,(0),null);var i = cljs.core.nth.call(null,vec__33003,(1),null);cljs.core.chunk_append.call(null,b__33000,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33017 = (i__32999 + (1));
i__32999 = G__33017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33000),iter__32997.call(null,cljs.core.chunk_rest.call(null,s__32998__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33000),null);
}
} else
{var vec__33004 = cljs.core.first.call(null,s__32998__$2);var ya = cljs.core.nth.call(null,vec__33004,(0),null);var i = cljs.core.nth.call(null,vec__33004,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32997.call(null,cljs.core.rest.call(null,s__32998__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33005(s__33006){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33006__$1 = s__33006;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33006__$1);if(temp__4126__auto__)
{var s__33006__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33006__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33006__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33008 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33007 = (0);while(true){
if((i__33007 < size__4376__auto__))
{var vec__33011 = cljs.core._nth.call(null,c__4375__auto__,i__33007);var ya = cljs.core.nth.call(null,vec__33011,(0),null);var i = cljs.core.nth.call(null,vec__33011,(1),null);cljs.core.chunk_append.call(null,b__33008,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33018 = (i__33007 + (1));
i__33007 = G__33018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33008),iter__33005.call(null,cljs.core.chunk_rest.call(null,s__33006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33008),null);
}
} else
{var vec__33012 = cljs.core.first.call(null,s__33006__$2);var ya = cljs.core.nth.call(null,vec__33012,(0),null);var i = cljs.core.nth.call(null,vec__33012,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33005.call(null,cljs.core.rest.call(null,s__33006__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32968,map__32968__$1,map__32969,map__32969__$1,table_data,query,results,map__32970,map__32970__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33140 = schema.utils.use_fn_validation;var output_schema33020_33141 = schema.core.Any;var input_schema33021_33142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33022_33143 = schema.core.checker.call(null,input_schema33021_33142);var output_checker33023_33144 = schema.core.checker.call(null,output_schema33020_33141);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function ranges_chart_component(G__33024,G__33025){var validate__6034__auto__ = ufv___33140.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33024,G__33025], null);var temp__4126__auto___33146 = input_checker33022_33143.call(null,args__6035__auto___33145);if(cljs.core.truth_(temp__4126__auto___33146))
{var error__6036__auto___33147 = temp__4126__auto___33146;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33147)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33147,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33145,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33021_33142,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33086 = G__33024;var map__33087 = G__33086;var map__33087__$1 = ((cljs.core.seq_QMARK_.call(null,map__33087))?cljs.core.apply.call(null,cljs.core.hash_map,map__33087):map__33087);var props = map__33087__$1;var map__33088 = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33088__$1 = ((cljs.core.seq_QMARK_.call(null,map__33088))?cljs.core.apply.call(null,cljs.core.hash_map,map__33088):map__33088);var table_state = map__33088__$1;var table_data = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33089 = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33089__$1 = ((cljs.core.seq_QMARK_.call(null,map__33089))?cljs.core.apply.call(null,cljs.core.hash_map,map__33089):map__33089);var controls = map__33089__$1;var index_type = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33025;var G__33086__$1 = G__33086;var owner__$1 = owner;while(true){
var map__33090 = G__33086__$1;var map__33090__$1 = ((cljs.core.seq_QMARK_.call(null,map__33090))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);var props__$1 = map__33090__$1;var map__33091 = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33091__$1 = ((cljs.core.seq_QMARK_.call(null,map__33091))?cljs.core.apply.call(null,cljs.core.hash_map,map__33091):map__33091);var table_state__$1 = map__33091__$1;var table_data__$1 = cljs.core.get.call(null,map__33091__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33092 = cljs.core.get.call(null,map__33091__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33092__$1 = ((cljs.core.seq_QMARK_.call(null,map__33092))?cljs.core.apply.call(null,cljs.core.hash_map,map__33092):map__33092);var controls__$1 = map__33092__$1;var index_type__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33093 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33093 = (function (index_type,G__33086,row_aggs,owner,metric_path,props,G__33025,map__33088,row_path,table_data,ranges_chart_component,metric_aggs,index,col_path,filter_spec,table_state,controls,col_aggs,map__33090,title,rows,cols,input_checker33022,map__33091,map__33087,validate__6034__auto__,output_schema33020,output_checker33023,map__33089,map__33092,ufv__,G__33024,input_schema33021,meta33094){
this.index_type = index_type;
this.G__33086 = G__33086;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.G__33025 = G__33025;
this.map__33088 = map__33088;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.map__33090 = map__33090;
this.title = title;
this.rows = rows;
this.cols = cols;
this.input_checker33022 = input_checker33022;
this.map__33091 = map__33091;
this.map__33087 = map__33087;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema33020 = output_schema33020;
this.output_checker33023 = output_checker33023;
this.map__33089 = map__33089;
this.map__33092 = map__33092;
this.ufv__ = ufv__;
this.G__33024 = G__33024;
this.input_schema33021 = input_schema33021;
this.meta33094 = meta33094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33093.cljs$lang$type = true;
clustermap.components.ranges_chart.t33093.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33093";
clustermap.components.ranges_chart.t33093.cljs$lang$ctorPrWriter = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33093");
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_,p__33096,___$1){var self__ = this;
var map__33097 = p__33096;var map__33097__$1 = ((cljs.core.seq_QMARK_.call(null,map__33097))?cljs.core.apply.call(null,cljs.core.hash_map,map__33097):map__33097);var prev_props = map__33097__$1;var map__33098 = cljs.core.get.call(null,map__33097__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33098__$1 = ((cljs.core.seq_QMARK_.call(null,map__33098))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);var prev_table_data = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33093.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_,p__33099,p__33100){var self__ = this;
var map__33101 = p__33099;var map__33101__$1 = ((cljs.core.seq_QMARK_.call(null,map__33101))?cljs.core.apply.call(null,cljs.core.hash_map,map__33101):map__33101);var next_props = map__33101__$1;var map__33102 = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33102__$1 = ((cljs.core.seq_QMARK_.call(null,map__33102))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);var next_table_state = map__33102__$1;var next_table_data = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33103 = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33103__$1 = ((cljs.core.seq_QMARK_.call(null,map__33103))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);var next_controls = map__33103__$1;var next_col_aggs = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33104 = p__33100;var map__33104__$1 = ((cljs.core.seq_QMARK_.call(null,map__33104))?cljs.core.apply.call(null,cljs.core.hash_map,map__33104):map__33104);var fetch_data_fn = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (state_33122){var state_val_33123 = (state_33122[(1)]);if((state_val_33123 === (5)))
{var inst_33120 = (state_33122[(2)]);var state_33122__$1 = state_33122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33122__$1,inst_33120);
} else
{if((state_val_33123 === (4)))
{var state_33122__$1 = state_33122;var statearr_33124_33148 = state_33122__$1;(statearr_33124_33148[(2)] = null);
(statearr_33124_33148[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33123 === (3)))
{var inst_33107 = (state_33122[(7)]);var inst_33109 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33110 = ["RANGES-TABLE-DATA",inst_33107];var inst_33111 = (new cljs.core.PersistentVector(null,2,(5),inst_33109,inst_33110,null));var inst_33112 = cljs.core.clj__GT_js.call(null,inst_33111);var inst_33113 = console.log(inst_33112);var inst_33114 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33115 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33116 = (new cljs.core.PersistentVector(null,1,(5),inst_33114,inst_33115,null));var inst_33117 = om.core.update_BANG_.call(null,self__.table_state,inst_33116,inst_33107);var state_33122__$1 = (function (){var statearr_33125 = state_33122;(statearr_33125[(8)] = inst_33113);
return statearr_33125;
})();var statearr_33126_33149 = state_33122__$1;(statearr_33126_33149[(2)] = inst_33117);
(statearr_33126_33149[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33123 === (2)))
{var inst_33107 = (state_33122[(7)]);var inst_33107__$1 = (state_33122[(2)]);var state_33122__$1 = (function (){var statearr_33127 = state_33122;(statearr_33127[(7)] = inst_33107__$1);
return statearr_33127;
})();if(cljs.core.truth_(inst_33107__$1))
{var statearr_33128_33150 = state_33122__$1;(statearr_33128_33150[(1)] = (3));
} else
{var statearr_33129_33151 = state_33122__$1;(statearr_33129_33151[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33123 === (1)))
{var inst_33105 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33122__$1 = state_33122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33122__$1,(2),inst_33105);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33133 = [null,null,null,null,null,null,null,null,null];(statearr_33133[(0)] = state_machine__9111__auto__);
(statearr_33133[(1)] = (1));
return statearr_33133;
});
var state_machine__9111__auto____1 = (function (state_33122){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33122);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33134){if((e33134 instanceof Object))
{var ex__9114__auto__ = e33134;var statearr_33135_33152 = state_33122;(statearr_33135_33152[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33153 = state_33122;
state_33122 = G__33153;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
})();var state__9127__auto__ = (function (){var statearr_33136 = f__9126__auto__.call(null);(statearr_33136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33101,map__33101__$1,next_props,map__33102,map__33102__$1,next_table_state,next_table_data,map__33103,map__33103__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33104,map__33104__$1,fetch_data_fn,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33093.prototype.om$core$IRender$render$arity$1 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33093.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33139 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33139__$1 = (((G__33139 == null))?null:jayq.core.$.call(null,G__33139));var G__33139__$2 = (((G__33139__$1 == null))?null:G__33139__$1.highcharts());var G__33139__$3 = (((G__33139__$2 == null))?null:G__33139__$2.reflow());return G__33139__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
);
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_33095){var self__ = this;
var _33095__$1 = this;return self__.meta33094;
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.t33093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function (_33095,meta33094__$1){var self__ = this;
var _33095__$1 = this;return (new clustermap.components.ranges_chart.t33093(self__.index_type,self__.G__33086,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.G__33025,self__.map__33088,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.map__33090,self__.title,self__.rows,self__.cols,self__.input_checker33022,self__.map__33091,self__.map__33087,self__.validate__6034__auto__,self__.output_schema33020,self__.output_checker33023,self__.map__33089,self__.map__33092,self__.ufv__,self__.G__33024,self__.input_schema33021,meta33094__$1));
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
clustermap.components.ranges_chart.__GT_t33093 = ((function (map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144){
return (function __GT_t33093(index_type__$2,G__33086__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,G__33025__$1,map__33088__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,table_state__$2,controls__$2,col_aggs__$2,map__33090__$2,title__$2,rows__$2,cols__$2,input_checker33022__$1,map__33091__$2,map__33087__$2,validate__6034__auto____$1,output_schema33020__$1,output_checker33023__$1,map__33089__$2,map__33092__$2,ufv____$1,G__33024__$1,input_schema33021__$1,meta33094){return (new clustermap.components.ranges_chart.t33093(index_type__$2,G__33086__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,G__33025__$1,map__33088__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,table_state__$2,controls__$2,col_aggs__$2,map__33090__$2,title__$2,rows__$2,cols__$2,input_checker33022__$1,map__33091__$2,map__33087__$2,validate__6034__auto____$1,output_schema33020__$1,output_checker33023__$1,map__33089__$2,map__33092__$2,ufv____$1,G__33024__$1,input_schema33021__$1,meta33094));
});})(map__33090,map__33090__$1,props__$1,map__33091,map__33091__$1,table_state__$1,table_data__$1,map__33092,map__33092__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33086,map__33087,map__33087__$1,props,map__33088,map__33088__$1,table_state,table_data,map__33089,map__33089__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
}
return (new clustermap.components.ranges_chart.t33093(index_type__$1,G__33086__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,G__33025,map__33088__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,map__33090__$1,title__$1,rows__$1,cols__$1,input_checker33022_33143,map__33091__$1,map__33087__$1,validate__6034__auto__,output_schema33020_33141,output_checker33023_33144,map__33089__$1,map__33092__$1,ufv___33140,G__33024,input_schema33021_33142,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33154 = output_checker33023_33144.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33154))
{var error__6036__auto___33155 = temp__4126__auto___33154;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33155,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33020_33141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33140,output_schema33020_33141,input_schema33021_33142,input_checker33022_33143,output_checker33023_33144))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33020_33141,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33021_33142], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33019){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33019);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33019){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
