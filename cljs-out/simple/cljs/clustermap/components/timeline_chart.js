// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.timeline_chart.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20756,p__20757){var map__20789 = p__20756;var map__20789__$1 = ((cljs.core.seq_QMARK_.call(null,map__20789))?cljs.core.apply.call(null,cljs.core.hash_map,map__20789):map__20789);var map__20790 = cljs.core.get.call(null,map__20789__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20790__$1 = ((cljs.core.seq_QMARK_.call(null,map__20790))?cljs.core.apply.call(null,cljs.core.hash_map,map__20790):map__20790);var metrics = cljs.core.get.call(null,map__20790__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20789__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20789__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20791 = p__20757;var map__20791__$1 = ((cljs.core.seq_QMARK_.call(null,map__20791))?cljs.core.apply.call(null,cljs.core.hash_map,map__20791):map__20791);var opts = map__20791__$1;var y1_title = cljs.core.get.call(null,map__20791__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20791__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (p1__20755_SHARP_){return ((1900) + p1__20755_SHARP_);
});})(map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (p1__20754_SHARP_){return p1__20754_SHARP_.getYear();
});})(map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (p1__20753_SHARP_){return (new Date(p1__20753_SHARP_));
});})(map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function iter__20792(s__20793){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (){var s__20793__$1 = s__20793;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20793__$1);if(temp__4126__auto__)
{var s__20793__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20793__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20793__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20795 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20794 = (0);while(true){
if((i__20794 < size__4376__auto__))
{var map__20806 = cljs.core._nth.call(null,c__4375__auto__,i__20794);var map__20806__$1 = ((cljs.core.seq_QMARK_.call(null,map__20806))?cljs.core.apply.call(null,cljs.core.hash_map,map__20806):map__20806);var metric_spec = map__20806__$1;var title = cljs.core.get.call(null,map__20806__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20806__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20806__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20795,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20794,map__20806,map__20806__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20795,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function iter__20807(s__20808){return (new cljs.core.LazySeq(null,((function (i__20794,map__20806,map__20806__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20795,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (){var s__20808__$1 = s__20808;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20808__$1);if(temp__4126__auto____$1)
{var s__20808__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20808__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20808__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20810 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20809 = (0);while(true){
if((i__20809 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20809);cljs.core.chunk_append.call(null,b__20810,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20820 = (i__20809 + (1));
i__20809 = G__20820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20810),iter__20807.call(null,cljs.core.chunk_rest.call(null,s__20808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20810),null);
}
} else
{var record = cljs.core.first.call(null,s__20808__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20807.call(null,cljs.core.rest.call(null,s__20808__$2)));
}
} else
{return null;
}
break;
}
});})(i__20794,map__20806,map__20806__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20795,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20794,map__20806,map__20806__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20795,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20821 = (i__20794 + (1));
i__20794 = G__20821;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20795),iter__20792.call(null,cljs.core.chunk_rest.call(null,s__20793__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20795),null);
}
} else
{var map__20811 = cljs.core.first.call(null,s__20793__$2);var map__20811__$1 = ((cljs.core.seq_QMARK_.call(null,map__20811))?cljs.core.apply.call(null,cljs.core.hash_map,map__20811):map__20811);var metric_spec = map__20811__$1;var title = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20811,map__20811__$1,metric_spec,title,metric,variable,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function iter__20812(s__20813){return (new cljs.core.LazySeq(null,((function (map__20811,map__20811__$1,metric_spec,title,metric,variable,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (){var s__20813__$1 = s__20813;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20813__$1);if(temp__4126__auto____$1)
{var s__20813__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20813__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20813__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20815 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20814 = (0);while(true){
if((i__20814 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20814);cljs.core.chunk_append.call(null,b__20815,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20822 = (i__20814 + (1));
i__20814 = G__20822;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20815),iter__20812.call(null,cljs.core.chunk_rest.call(null,s__20813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20815),null);
}
} else
{var record = cljs.core.first.call(null,s__20813__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20812.call(null,cljs.core.rest.call(null,s__20813__$2)));
}
} else
{return null;
}
break;
}
});})(map__20811,map__20811__$1,metric_spec,title,metric,variable,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20811,map__20811__$1,metric_spec,title,metric,variable,s__20793__$2,temp__4126__auto__,x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20792.call(null,cljs.core.rest.call(null,s__20793__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function iter__20816(s__20817){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title){
return (function (){var s__20817__$1 = s__20817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20817__$1);if(temp__4126__auto__)
{var s__20817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20817__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20817__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20819 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20818 = (0);while(true){
if((i__20818 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20818);cljs.core.chunk_append.call(null,b__20819,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20823 = (i__20818 + (1));
i__20818 = G__20823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20819),iter__20816.call(null,cljs.core.chunk_rest.call(null,s__20817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20819),null);
}
} else
{var y = cljs.core.first.call(null,s__20817__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20816.call(null,cljs.core.rest.call(null,s__20817__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20789,map__20789__$1,map__20790,map__20790__$1,metrics,color,records,map__20791,map__20791__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20944 = schema.utils.use_fn_validation;var output_schema20825_20945 = schema.core.Any;var input_schema20826_20946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20827_20947 = schema.core.checker.call(null,input_schema20826_20946);var output_checker20828_20948 = schema.core.checker.call(null,output_schema20825_20945);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function timeline_chart(G__20829,G__20830,G__20831){var validate__6034__auto__ = ufv___20944.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20949 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20829,G__20830,G__20831], null);var temp__4126__auto___20950 = input_checker20827_20947.call(null,args__6035__auto___20949);if(cljs.core.truth_(temp__4126__auto___20950))
{var error__6036__auto___20951 = temp__4126__auto___20950;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20951)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20951,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20949,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20826_20946,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20891 = G__20829;var map__20893 = G__20891;var map__20893__$1 = ((cljs.core.seq_QMARK_.call(null,map__20893))?cljs.core.apply.call(null,cljs.core.hash_map,map__20893):map__20893);var map__20894 = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20894__$1 = ((cljs.core.seq_QMARK_.call(null,map__20894))?cljs.core.apply.call(null,cljs.core.hash_map,map__20894):map__20894);var timeline_chart__$1 = map__20894__$1;var query = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20830;var G__20892 = G__20831;var map__20895 = G__20892;var map__20895__$1 = ((cljs.core.seq_QMARK_.call(null,map__20895))?cljs.core.apply.call(null,cljs.core.hash_map,map__20895):map__20895);var opts = map__20895__$1;var id = cljs.core.get.call(null,map__20895__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20891__$1 = G__20891;var owner__$1 = owner;var G__20892__$1 = G__20892;while(true){
var map__20896 = G__20891__$1;var map__20896__$1 = ((cljs.core.seq_QMARK_.call(null,map__20896))?cljs.core.apply.call(null,cljs.core.hash_map,map__20896):map__20896);var map__20897 = cljs.core.get.call(null,map__20896__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20897__$1 = ((cljs.core.seq_QMARK_.call(null,map__20897))?cljs.core.apply.call(null,cljs.core.hash_map,map__20897):map__20897);var timeline_chart__$2 = map__20897__$1;var query__$1 = cljs.core.get.call(null,map__20897__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20897__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20896__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20898 = G__20892__$1;var map__20898__$1 = ((cljs.core.seq_QMARK_.call(null,map__20898))?cljs.core.apply.call(null,cljs.core.hash_map,map__20898):map__20898);var opts__$1 = map__20898__$1;var id__$1 = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20899 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20899 = (function (query,G__20892,map__20893,input_schema20826,G__20829,G__20891,owner,G__20831,output_schema20825,map__20897,map__20898,G__20830,timeline_data,filter_spec,map__20895,input_checker20827,output_checker20828,validate__6034__auto__,id,timeline_chart,map__20896,map__20894,opts,ufv__,meta20900){
this.query = query;
this.G__20892 = G__20892;
this.map__20893 = map__20893;
this.input_schema20826 = input_schema20826;
this.G__20829 = G__20829;
this.G__20891 = G__20891;
this.owner = owner;
this.G__20831 = G__20831;
this.output_schema20825 = output_schema20825;
this.map__20897 = map__20897;
this.map__20898 = map__20898;
this.G__20830 = G__20830;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.map__20895 = map__20895;
this.input_checker20827 = input_checker20827;
this.output_checker20828 = output_checker20828;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.map__20896 = map__20896;
this.map__20894 = map__20894;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20900 = meta20900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20899.cljs$lang$type = true;
clustermap.components.timeline_chart.t20899.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20899";
clustermap.components.timeline_chart.t20899.cljs$lang$ctorPrWriter = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20899");
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_,p__20902,___$1){var self__ = this;
var map__20903 = p__20902;var map__20903__$1 = ((cljs.core.seq_QMARK_.call(null,map__20903))?cljs.core.apply.call(null,cljs.core.hash_map,map__20903):map__20903);var map__20904 = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20904__$1 = ((cljs.core.seq_QMARK_.call(null,map__20904))?cljs.core.apply.call(null,cljs.core.hash_map,map__20904):map__20904);var prev_query = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20899.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_,p__20905,p__20906){var self__ = this;
var map__20907 = p__20905;var map__20907__$1 = ((cljs.core.seq_QMARK_.call(null,map__20907))?cljs.core.apply.call(null,cljs.core.hash_map,map__20907):map__20907);var map__20908 = cljs.core.get.call(null,map__20907__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20908__$1 = ((cljs.core.seq_QMARK_.call(null,map__20908))?cljs.core.apply.call(null,cljs.core.hash_map,map__20908):map__20908);var next_query = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20907__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20909 = p__20906;var map__20909__$1 = ((cljs.core.seq_QMARK_.call(null,map__20909))?cljs.core.apply.call(null,cljs.core.hash_map,map__20909):map__20909);var fetch_data_fn = cljs.core.get.call(null,map__20909__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (state_20928){var state_val_20929 = (state_20928[(1)]);if((state_val_20929 === (5)))
{var inst_20926 = (state_20928[(2)]);var state_20928__$1 = state_20928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20928__$1,inst_20926);
} else
{if((state_val_20929 === (4)))
{var state_20928__$1 = state_20928;var statearr_20930_20952 = state_20928__$1;(statearr_20930_20952[(2)] = null);
(statearr_20930_20952[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20929 === (3)))
{var inst_20912 = (state_20928[(7)]);var inst_20914 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20915 = ["TIMELINE DATA",inst_20912];var inst_20916 = (new cljs.core.PersistentVector(null,2,(5),inst_20914,inst_20915,null));var inst_20917 = cljs.core.clj__GT_js.call(null,inst_20916);var inst_20918 = console.log(inst_20917);var inst_20919 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20920 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20921 = (new cljs.core.PersistentVector(null,1,(5),inst_20919,inst_20920,null));var inst_20922 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20912);var inst_20923 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20921,inst_20922);var state_20928__$1 = (function (){var statearr_20931 = state_20928;(statearr_20931[(8)] = inst_20918);
return statearr_20931;
})();var statearr_20932_20953 = state_20928__$1;(statearr_20932_20953[(2)] = inst_20923);
(statearr_20932_20953[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20929 === (2)))
{var inst_20912 = (state_20928[(7)]);var inst_20912__$1 = (state_20928[(2)]);var state_20928__$1 = (function (){var statearr_20933 = state_20928;(statearr_20933[(7)] = inst_20912__$1);
return statearr_20933;
})();if(cljs.core.truth_(inst_20912__$1))
{var statearr_20934_20954 = state_20928__$1;(statearr_20934_20954[(1)] = (3));
} else
{var statearr_20935_20955 = state_20928__$1;(statearr_20935_20955[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20929 === (1)))
{var inst_20910 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20928__$1 = state_20928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20928__$1,(2),inst_20910);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20939 = [null,null,null,null,null,null,null,null,null];(statearr_20939[(0)] = state_machine__9111__auto__);
(statearr_20939[(1)] = (1));
return statearr_20939;
});
var state_machine__9111__auto____1 = (function (state_20928){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20928);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20940){if((e20940 instanceof Object))
{var ex__9114__auto__ = e20940;var statearr_20941_20956 = state_20928;(statearr_20941_20956[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20957 = state_20928;
state_20928 = G__20957;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20928){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
})();var state__9127__auto__ = (function (){var statearr_20942 = f__9126__auto__.call(null);(statearr_20942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20907,map__20907__$1,map__20908,map__20908__$1,next_query,next_timeline_data,next_filter_spec,map__20909,map__20909__$1,fetch_data_fn,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20899.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20943 = om.core.get_node.call(null,self__.owner,"chart");var G__20943__$1 = (((G__20943 == null))?null:jayq.core.$.call(null,G__20943));var G__20943__$2 = (((G__20943__$1 == null))?null:G__20943__$1.highcharts());var G__20943__$3 = (((G__20943__$2 == null))?null:G__20943__$2.reflow());return G__20943__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
);
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20899.prototype.om$core$IRender$render$arity$1 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_20901){var self__ = this;
var _20901__$1 = this;return self__.meta20900;
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.t20899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function (_20901,meta20900__$1){var self__ = this;
var _20901__$1 = this;return (new clustermap.components.timeline_chart.t20899(self__.query,self__.G__20892,self__.map__20893,self__.input_schema20826,self__.G__20829,self__.G__20891,self__.owner,self__.G__20831,self__.output_schema20825,self__.map__20897,self__.map__20898,self__.G__20830,self__.timeline_data,self__.filter_spec,self__.map__20895,self__.input_checker20827,self__.output_checker20828,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.map__20896,self__.map__20894,self__.opts,self__.ufv__,meta20900__$1));
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
clustermap.components.timeline_chart.__GT_t20899 = ((function (map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948){
return (function __GT_t20899(query__$2,G__20892__$2,map__20893__$2,input_schema20826__$1,G__20829__$1,G__20891__$2,owner__$3,G__20831__$1,output_schema20825__$1,map__20897__$2,map__20898__$2,G__20830__$1,timeline_data__$2,filter_spec__$2,map__20895__$2,input_checker20827__$1,output_checker20828__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,map__20896__$2,map__20894__$2,opts__$2,ufv____$1,meta20900){return (new clustermap.components.timeline_chart.t20899(query__$2,G__20892__$2,map__20893__$2,input_schema20826__$1,G__20829__$1,G__20891__$2,owner__$3,G__20831__$1,output_schema20825__$1,map__20897__$2,map__20898__$2,G__20830__$1,timeline_data__$2,filter_spec__$2,map__20895__$2,input_checker20827__$1,output_checker20828__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,map__20896__$2,map__20894__$2,opts__$2,ufv____$1,meta20900));
});})(map__20896,map__20896__$1,map__20897,map__20897__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20898,map__20898__$1,opts__$1,id__$1,G__20891,map__20893,map__20893__$1,map__20894,map__20894__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20892,map__20895,map__20895__$1,opts,id,validate__6034__auto__,ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
}
return (new clustermap.components.timeline_chart.t20899(query__$1,G__20892__$1,map__20893__$1,input_schema20826_20946,G__20829,G__20891__$1,owner__$2,G__20831,output_schema20825_20945,map__20897__$1,map__20898__$1,G__20830,timeline_data__$1,filter_spec__$1,map__20895__$1,input_checker20827_20947,output_checker20828_20948,validate__6034__auto__,id__$1,timeline_chart__$2,map__20896__$1,map__20894__$1,opts__$1,ufv___20944,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20958 = output_checker20828_20948.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20958))
{var error__6036__auto___20959 = temp__4126__auto___20958;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20959)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20959,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20825_20945,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20944,output_schema20825_20945,input_schema20826_20946,input_checker20827_20947,output_checker20828_20948))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20825_20945,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20826_20946], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20824){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20824);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20824){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
