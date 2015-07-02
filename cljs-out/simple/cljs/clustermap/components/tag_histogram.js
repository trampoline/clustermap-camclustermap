// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
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
clustermap.components.tag_histogram.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31901,p__31902){var map__31945 = p__31901;var map__31945__$1 = ((cljs.core.seq_QMARK_.call(null,map__31945))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);var tag_agg_data = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31946 = p__31902;var map__31946__$1 = ((cljs.core.seq_QMARK_.call(null,map__31946))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);var opts = map__31946__$1;var y1_title = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function iter__31947(s__31948){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (){var s__31948__$1 = s__31948;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31948__$1);if(temp__4126__auto__)
{var s__31948__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31948__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31948__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31950 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31949 = (0);while(true){
if((i__31949 < size__4376__auto__))
{var map__31961 = cljs.core._nth.call(null,c__4375__auto__,i__31949);var map__31961__$1 = ((cljs.core.seq_QMARK_.call(null,map__31961))?cljs.core.apply.call(null,cljs.core.hash_map,map__31961):map__31961);var metric_spec = map__31961__$1;var title = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31950,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31949,map__31961,map__31961__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31950,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function iter__31962(s__31963){return (new cljs.core.LazySeq(null,((function (i__31949,map__31961,map__31961__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31950,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (){var s__31963__$1 = s__31963;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31963__$1);if(temp__4126__auto____$1)
{var s__31963__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31963__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31963__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31965 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31964 = (0);while(true){
if((i__31964 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31964);cljs.core.chunk_append.call(null,b__31965,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31987 = (i__31964 + (1));
i__31964 = G__31987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31965),iter__31962.call(null,cljs.core.chunk_rest.call(null,s__31963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31965),null);
}
} else
{var record = cljs.core.first.call(null,s__31963__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31962.call(null,cljs.core.rest.call(null,s__31963__$2)));
}
} else
{return null;
}
break;
}
});})(i__31949,map__31961,map__31961__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31950,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31949,map__31961,map__31961__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31950,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31988 = (i__31949 + (1));
i__31949 = G__31988;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31950),iter__31947.call(null,cljs.core.chunk_rest.call(null,s__31948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31950),null);
}
} else
{var map__31966 = cljs.core.first.call(null,s__31948__$2);var map__31966__$1 = ((cljs.core.seq_QMARK_.call(null,map__31966))?cljs.core.apply.call(null,cljs.core.hash_map,map__31966):map__31966);var metric_spec = map__31966__$1;var title = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31966,map__31966__$1,metric_spec,title,metric,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function iter__31967(s__31968){return (new cljs.core.LazySeq(null,((function (map__31966,map__31966__$1,metric_spec,title,metric,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (){var s__31968__$1 = s__31968;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31968__$1);if(temp__4126__auto____$1)
{var s__31968__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31968__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31968__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31970 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31969 = (0);while(true){
if((i__31969 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31969);cljs.core.chunk_append.call(null,b__31970,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31989 = (i__31969 + (1));
i__31969 = G__31989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31970),iter__31967.call(null,cljs.core.chunk_rest.call(null,s__31968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31970),null);
}
} else
{var record = cljs.core.first.call(null,s__31968__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31967.call(null,cljs.core.rest.call(null,s__31968__$2)));
}
} else
{return null;
}
break;
}
});})(map__31966,map__31966__$1,metric_spec,title,metric,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31966,map__31966__$1,metric_spec,title,metric,s__31948__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31947.call(null,cljs.core.rest.call(null,s__31948__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function iter__31971(s__31972){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (){var s__31972__$1 = s__31972;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31972__$1);if(temp__4126__auto__)
{var s__31972__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31972__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31972__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31974 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31973 = (0);while(true){
if((i__31973 < size__4376__auto__))
{var map__31977 = cljs.core._nth.call(null,c__4375__auto__,i__31973);var map__31977__$1 = ((cljs.core.seq_QMARK_.call(null,map__31977))?cljs.core.apply.call(null,cljs.core.hash_map,map__31977):map__31977);var label_formatter = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31974,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31990 = (i__31973 + (1));
i__31973 = G__31990;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31974),iter__31971.call(null,cljs.core.chunk_rest.call(null,s__31972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31974),null);
}
} else
{var map__31978 = cljs.core.first.call(null,s__31972__$2);var map__31978__$1 = ((cljs.core.seq_QMARK_.call(null,map__31978))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978):map__31978);var label_formatter = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31971.call(null,cljs.core.rest.call(null,s__31972__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function iter__31979(s__31980){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title){
return (function (){var s__31980__$1 = s__31980;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31980__$1);if(temp__4126__auto__)
{var s__31980__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31980__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31980__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31982 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31981 = (0);while(true){
if((i__31981 < size__4376__auto__))
{var vec__31985 = cljs.core._nth.call(null,c__4375__auto__,i__31981);var y = cljs.core.nth.call(null,vec__31985,(0),null);var i = cljs.core.nth.call(null,vec__31985,(1),null);cljs.core.chunk_append.call(null,b__31982,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31991 = (i__31981 + (1));
i__31981 = G__31991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31982),iter__31979.call(null,cljs.core.chunk_rest.call(null,s__31980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31982),null);
}
} else
{var vec__31986 = cljs.core.first.call(null,s__31980__$2);var y = cljs.core.nth.call(null,vec__31986,(0),null);var i = cljs.core.nth.call(null,vec__31986,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31979.call(null,cljs.core.rest.call(null,s__31980__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31945,map__31945__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31946,map__31946__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32184 = schema.utils.use_fn_validation;var output_schema31993_32185 = schema.core.Any;var input_schema31994_32186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31995_32187 = schema.core.checker.call(null,input_schema31994_32186);var output_checker31996_32188 = schema.core.checker.call(null,output_schema31993_32185);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function tag_histogram(G__31997,G__31998,G__31999){var validate__6034__auto__ = ufv___32184.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31997,G__31998,G__31999], null);var temp__4126__auto___32190 = input_checker31995_32187.call(null,args__6035__auto___32189);if(cljs.core.truth_(temp__4126__auto___32190))
{var error__6036__auto___32191 = temp__4126__auto___32190;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32191)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32191,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32189,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31994_32186,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32095 = G__31997;var map__32097 = G__32095;var map__32097__$1 = ((cljs.core.seq_QMARK_.call(null,map__32097))?cljs.core.apply.call(null,cljs.core.hash_map,map__32097):map__32097);var map__32098 = cljs.core.get.call(null,map__32097__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32098__$1 = ((cljs.core.seq_QMARK_.call(null,map__32098))?cljs.core.apply.call(null,cljs.core.hash_map,map__32098):map__32098);var tag_histogram__$1 = map__32098__$1;var query = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32097__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31998;var G__32096 = G__31999;var map__32099 = G__32096;var map__32099__$1 = ((cljs.core.seq_QMARK_.call(null,map__32099))?cljs.core.apply.call(null,cljs.core.hash_map,map__32099):map__32099);var opts = map__32099__$1;var id = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32095__$1 = G__32095;var owner__$1 = owner;var G__32096__$1 = G__32096;while(true){
var map__32100 = G__32095__$1;var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);var map__32101 = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32101__$1 = ((cljs.core.seq_QMARK_.call(null,map__32101))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);var tag_histogram__$2 = map__32101__$1;var query__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32102 = G__32096__$1;var map__32102__$1 = ((cljs.core.seq_QMARK_.call(null,map__32102))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);var opts__$1 = map__32102__$1;var id__$1 = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32103 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32103 = (function (query,G__31999,G__31997,owner,metrics,G__31998,input_schema31994,map__32098,tag_agg_data,tag_histogram,input_checker31995,G__32096,filter_spec,output_schema31993,map__32099,map__32101,tag_type,map__32102,map__32100,validate__6034__auto__,id,opts,tag_data,ufv__,output_checker31996,G__32095,map__32097,meta32104){
this.query = query;
this.G__31999 = G__31999;
this.G__31997 = G__31997;
this.owner = owner;
this.metrics = metrics;
this.G__31998 = G__31998;
this.input_schema31994 = input_schema31994;
this.map__32098 = map__32098;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.input_checker31995 = input_checker31995;
this.G__32096 = G__32096;
this.filter_spec = filter_spec;
this.output_schema31993 = output_schema31993;
this.map__32099 = map__32099;
this.map__32101 = map__32101;
this.tag_type = tag_type;
this.map__32102 = map__32102;
this.map__32100 = map__32100;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.output_checker31996 = output_checker31996;
this.G__32095 = G__32095;
this.map__32097 = map__32097;
this.meta32104 = meta32104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32103.cljs$lang$type = true;
clustermap.components.tag_histogram.t32103.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32103";
clustermap.components.tag_histogram.t32103.cljs$lang$ctorPrWriter = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32103");
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_,p__32106,___$1){var self__ = this;
var map__32107 = p__32106;var map__32107__$1 = ((cljs.core.seq_QMARK_.call(null,map__32107))?cljs.core.apply.call(null,cljs.core.hash_map,map__32107):map__32107);var map__32108 = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32108__$1 = ((cljs.core.seq_QMARK_.call(null,map__32108))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);var prev_query = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32103.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_,p__32109,p__32110){var self__ = this;
var map__32111 = p__32109;var map__32111__$1 = ((cljs.core.seq_QMARK_.call(null,map__32111))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);var map__32112 = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32112__$1 = ((cljs.core.seq_QMARK_.call(null,map__32112))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);var next_query = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32113 = p__32110;var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var fetch_tag_data_fn = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32192 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (state_32131){var state_val_32132 = (state_32131[(1)]);if((state_val_32132 === (5)))
{var inst_32129 = (state_32131[(2)]);var state_32131__$1 = state_32131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32131__$1,inst_32129);
} else
{if((state_val_32132 === (4)))
{var state_32131__$1 = state_32131;var statearr_32133_32193 = state_32131__$1;(statearr_32133_32193[(2)] = null);
(statearr_32133_32193[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32132 === (3)))
{var inst_32116 = (state_32131[(7)]);var inst_32118 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32119 = ["HISTOGRAM TAGS: ",inst_32116];var inst_32120 = (new cljs.core.PersistentVector(null,2,(5),inst_32118,inst_32119,null));var inst_32121 = cljs.core.clj__GT_js.call(null,inst_32120);var inst_32122 = console.log(inst_32121);var inst_32123 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32124 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32125 = (new cljs.core.PersistentVector(null,1,(5),inst_32123,inst_32124,null));var inst_32126 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32125,inst_32116);var state_32131__$1 = (function (){var statearr_32134 = state_32131;(statearr_32134[(8)] = inst_32122);
return statearr_32134;
})();var statearr_32135_32194 = state_32131__$1;(statearr_32135_32194[(2)] = inst_32126);
(statearr_32135_32194[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32132 === (2)))
{var inst_32116 = (state_32131[(7)]);var inst_32116__$1 = (state_32131[(2)]);var state_32131__$1 = (function (){var statearr_32136 = state_32131;(statearr_32136[(7)] = inst_32116__$1);
return statearr_32136;
})();if(cljs.core.truth_(inst_32116__$1))
{var statearr_32137_32195 = state_32131__$1;(statearr_32137_32195[(1)] = (3));
} else
{var statearr_32138_32196 = state_32131__$1;(statearr_32138_32196[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32132 === (1)))
{var inst_32114 = fetch_tag_data_fn.call(null,next_tag_type);var state_32131__$1 = state_32131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32131__$1,(2),inst_32114);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;return ((function (switch__9110__auto__,c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32142 = [null,null,null,null,null,null,null,null,null];(statearr_32142[(0)] = state_machine__9111__auto__);
(statearr_32142[(1)] = (1));
return statearr_32142;
});
var state_machine__9111__auto____1 = (function (state_32131){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32131);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32143){if((e32143 instanceof Object))
{var ex__9114__auto__ = e32143;var statearr_32144_32197 = state_32131;(statearr_32144_32197[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32143;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32198 = state_32131;
state_32131 = G__32198;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32131){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
})();var state__9127__auto__ = (function (){var statearr_32145 = f__9126__auto__.call(null);(statearr_32145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32192);
return statearr_32145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32192,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (state_32168){var state_val_32169 = (state_32168[(1)]);if((state_val_32169 === (5)))
{var inst_32166 = (state_32168[(2)]);var state_32168__$1 = state_32168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32168__$1,inst_32166);
} else
{if((state_val_32169 === (4)))
{var state_32168__$1 = state_32168;var statearr_32170_32199 = state_32168__$1;(statearr_32170_32199[(2)] = null);
(statearr_32170_32199[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32169 === (3)))
{var inst_32152 = (state_32168[(7)]);var inst_32154 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32155 = ["HISTOGRAM TAG AGGS: ",inst_32152];var inst_32156 = (new cljs.core.PersistentVector(null,2,(5),inst_32154,inst_32155,null));var inst_32157 = cljs.core.clj__GT_js.call(null,inst_32156);var inst_32158 = console.log(inst_32157);var inst_32159 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32160 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32161 = (new cljs.core.PersistentVector(null,1,(5),inst_32159,inst_32160,null));var inst_32162 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32152);var inst_32163 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32161,inst_32162);var state_32168__$1 = (function (){var statearr_32171 = state_32168;(statearr_32171[(8)] = inst_32158);
return statearr_32171;
})();var statearr_32172_32200 = state_32168__$1;(statearr_32172_32200[(2)] = inst_32163);
(statearr_32172_32200[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32169 === (2)))
{var inst_32152 = (state_32168[(7)]);var inst_32152__$1 = (state_32168[(2)]);var state_32168__$1 = (function (){var statearr_32173 = state_32168;(statearr_32173[(7)] = inst_32152__$1);
return statearr_32173;
})();if(cljs.core.truth_(inst_32152__$1))
{var statearr_32174_32201 = state_32168__$1;(statearr_32174_32201[(1)] = (3));
} else
{var statearr_32175_32202 = state_32168__$1;(statearr_32175_32202[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32169 === (1)))
{var inst_32146 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32147 = [next_filter_spec];var inst_32148 = cljs.core.PersistentHashMap.fromArrays(inst_32146,inst_32147);var inst_32149 = cljs.core.merge.call(null,next_query,inst_32148);var inst_32150 = fetch_tag_agg_data_fn.call(null,inst_32149);var state_32168__$1 = state_32168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,(2),inst_32150);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32179 = [null,null,null,null,null,null,null,null,null];(statearr_32179[(0)] = state_machine__9111__auto__);
(statearr_32179[(1)] = (1));
return statearr_32179;
});
var state_machine__9111__auto____1 = (function (state_32168){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32168);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32180){if((e32180 instanceof Object))
{var ex__9114__auto__ = e32180;var statearr_32181_32203 = state_32168;(statearr_32181_32203[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32180;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32204 = state_32168;
state_32168 = G__32204;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32168){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
})();var state__9127__auto__ = (function (){var statearr_32182 = f__9126__auto__.call(null);(statearr_32182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32111,map__32111__$1,map__32112,map__32112__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32113,map__32113__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32103.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32183 = om.core.get_node.call(null,self__.owner,"chart");var G__32183__$1 = (((G__32183 == null))?null:jayq.core.$.call(null,G__32183));var G__32183__$2 = (((G__32183__$1 == null))?null:G__32183__$1.highcharts());var G__32183__$3 = (((G__32183__$2 == null))?null:G__32183__$2.reflow());return G__32183__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
);
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32103.prototype.om$core$IRender$render$arity$1 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_32105){var self__ = this;
var _32105__$1 = this;return self__.meta32104;
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.t32103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function (_32105,meta32104__$1){var self__ = this;
var _32105__$1 = this;return (new clustermap.components.tag_histogram.t32103(self__.query,self__.G__31999,self__.G__31997,self__.owner,self__.metrics,self__.G__31998,self__.input_schema31994,self__.map__32098,self__.tag_agg_data,self__.tag_histogram,self__.input_checker31995,self__.G__32096,self__.filter_spec,self__.output_schema31993,self__.map__32099,self__.map__32101,self__.tag_type,self__.map__32102,self__.map__32100,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.output_checker31996,self__.G__32095,self__.map__32097,meta32104__$1));
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
clustermap.components.tag_histogram.__GT_t32103 = ((function (map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188){
return (function __GT_t32103(query__$2,G__31999__$1,G__31997__$1,owner__$3,metrics__$2,G__31998__$1,input_schema31994__$1,map__32098__$2,tag_agg_data__$2,tag_histogram__$3,input_checker31995__$1,G__32096__$2,filter_spec__$2,output_schema31993__$1,map__32099__$2,map__32101__$2,tag_type__$2,map__32102__$2,map__32100__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_checker31996__$1,G__32095__$2,map__32097__$2,meta32104){return (new clustermap.components.tag_histogram.t32103(query__$2,G__31999__$1,G__31997__$1,owner__$3,metrics__$2,G__31998__$1,input_schema31994__$1,map__32098__$2,tag_agg_data__$2,tag_histogram__$3,input_checker31995__$1,G__32096__$2,filter_spec__$2,output_schema31993__$1,map__32099__$2,map__32101__$2,tag_type__$2,map__32102__$2,map__32100__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_checker31996__$1,G__32095__$2,map__32097__$2,meta32104));
});})(map__32100,map__32100__$1,map__32101,map__32101__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32102,map__32102__$1,opts__$1,id__$1,G__32095,map__32097,map__32097__$1,map__32098,map__32098__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32096,map__32099,map__32099__$1,opts,id,validate__6034__auto__,ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
}
return (new clustermap.components.tag_histogram.t32103(query__$1,G__31999,G__31997,owner__$2,metrics__$1,G__31998,input_schema31994_32186,map__32098__$1,tag_agg_data__$1,tag_histogram__$2,input_checker31995_32187,G__32096__$1,filter_spec__$1,output_schema31993_32185,map__32099__$1,map__32101__$1,tag_type__$1,map__32102__$1,map__32100__$1,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___32184,output_checker31996_32188,G__32095__$1,map__32097__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32205 = output_checker31996_32188.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32205))
{var error__6036__auto___32206 = temp__4126__auto___32205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32206,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31993_32185,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32184,output_schema31993_32185,input_schema31994_32186,input_checker31995_32187,output_checker31996_32188))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31993_32185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31994_32186], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31992){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31992);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31992){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
