// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_table.render_table = (function render_table(p__28626,owner,opts){var map__28745 = p__28626;var map__28745__$1 = ((cljs.core.seq_QMARK_.call(null,map__28745))?cljs.core.apply.call(null,cljs.core.hash_map,map__28745):map__28745);var map__28746 = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28746__$1 = ((cljs.core.seq_QMARK_.call(null,map__28746))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);var table_data = map__28746__$1;var query = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28747 = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28747__$1 = ((cljs.core.seq_QMARK_.call(null,map__28747))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);var controls = map__28747__$1;var title = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28748 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28748))?sablono.interpreter.attributes.call(null,attrs28748):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28748))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28749 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28749))?sablono.interpreter.attributes.call(null,attrs28749):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28749))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28749)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28751(s__28752){return (new cljs.core.LazySeq(null,((function (attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28752__$1 = s__28752;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28752__$1);if(temp__4126__auto__)
{var s__28752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28752__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28752__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28754 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28753 = (0);while(true){
if((i__28753 < size__4376__auto__))
{var vec__28781 = cljs.core._nth.call(null,c__4375__auto__,i__28753);var row_i = cljs.core.nth.call(null,vec__28781,(0),null);var row = cljs.core.nth.call(null,vec__28781,(1),null);cljs.core.chunk_append.call(null,b__28754,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28753,vec__28781,row_i,row,c__4375__auto__,size__4376__auto__,b__28754,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28782(s__28783){return (new cljs.core.LazySeq(null,((function (i__28753,vec__28781,row_i,row,c__4375__auto__,size__4376__auto__,b__28754,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28783__$1 = s__28783;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28783__$1);if(temp__4126__auto____$1)
{var s__28783__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28783__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28783__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28785 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28784 = (0);while(true){
if((i__28784 < size__4376__auto____$1))
{var vec__28790 = cljs.core._nth.call(null,c__4375__auto____$1,i__28784);var col_i = cljs.core.nth.call(null,vec__28790,(0),null);var col = cljs.core.nth.call(null,vec__28790,(1),null);cljs.core.chunk_append.call(null,b__28785,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28791__$1 = (((G__28791 == null))?null:cljs.core.get.call(null,rowcol,G__28791));var G__28791__$2 = (((G__28791__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28791__$1));var G__28791__$3 = (((G__28791__$2 == null))?null:render_fn__$1.call(null,G__28791__$2));return G__28791__$3;
})():null)], null)));
{
var G__28863 = (i__28784 + (1));
i__28784 = G__28863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28785),iter__28782.call(null,cljs.core.chunk_rest.call(null,s__28783__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28785),null);
}
} else
{var vec__28792 = cljs.core.first.call(null,s__28783__$2);var col_i = cljs.core.nth.call(null,vec__28792,(0),null);var col = cljs.core.nth.call(null,vec__28792,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28793__$1 = (((G__28793 == null))?null:cljs.core.get.call(null,rowcol,G__28793));var G__28793__$2 = (((G__28793__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28793__$1));var G__28793__$3 = (((G__28793__$2 == null))?null:render_fn__$1.call(null,G__28793__$2));return G__28793__$3;
})():null)], null)),iter__28782.call(null,cljs.core.rest.call(null,s__28783__$2)));
}
} else
{return null;
}
break;
}
});})(i__28753,vec__28781,row_i,row,c__4375__auto__,size__4376__auto__,b__28754,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28753,vec__28781,row_i,row,c__4375__auto__,size__4376__auto__,b__28754,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28864 = (i__28753 + (1));
i__28753 = G__28864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),iter__28751.call(null,cljs.core.chunk_rest.call(null,s__28752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),null);
}
} else
{var vec__28794 = cljs.core.first.call(null,s__28752__$2);var row_i = cljs.core.nth.call(null,vec__28794,(0),null);var row = cljs.core.nth.call(null,vec__28794,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28794,row_i,row,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28795(s__28796){return (new cljs.core.LazySeq(null,((function (vec__28794,row_i,row,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28796__$1 = s__28796;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28796__$1);if(temp__4126__auto____$1)
{var s__28796__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28796__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28796__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28798 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28797 = (0);while(true){
if((i__28797 < size__4376__auto__))
{var vec__28803 = cljs.core._nth.call(null,c__4375__auto__,i__28797);var col_i = cljs.core.nth.call(null,vec__28803,(0),null);var col = cljs.core.nth.call(null,vec__28803,(1),null);cljs.core.chunk_append.call(null,b__28798,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28804__$1 = (((G__28804 == null))?null:cljs.core.get.call(null,rowcol,G__28804));var G__28804__$2 = (((G__28804__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28804__$1));var G__28804__$3 = (((G__28804__$2 == null))?null:render_fn__$1.call(null,G__28804__$2));return G__28804__$3;
})():null)], null)));
{
var G__28865 = (i__28797 + (1));
i__28797 = G__28865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28798),iter__28795.call(null,cljs.core.chunk_rest.call(null,s__28796__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28798),null);
}
} else
{var vec__28805 = cljs.core.first.call(null,s__28796__$2);var col_i = cljs.core.nth.call(null,vec__28805,(0),null);var col = cljs.core.nth.call(null,vec__28805,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28806__$1 = (((G__28806 == null))?null:cljs.core.get.call(null,rowcol,G__28806));var G__28806__$2 = (((G__28806__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28806__$1));var G__28806__$3 = (((G__28806__$2 == null))?null:render_fn__$1.call(null,G__28806__$2));return G__28806__$3;
})():null)], null)),iter__28795.call(null,cljs.core.rest.call(null,s__28796__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28794,row_i,row,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28794,row_i,row,s__28752__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28751.call(null,cljs.core.rest.call(null,s__28752__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28748),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28750 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28750))?sablono.interpreter.attributes.call(null,attrs28750):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28750))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28750)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28807(s__28808){return (new cljs.core.LazySeq(null,((function (attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28808__$1 = s__28808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28808__$1);if(temp__4126__auto__)
{var s__28808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28808__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28808__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28810 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28809 = (0);while(true){
if((i__28809 < size__4376__auto__))
{var vec__28837 = cljs.core._nth.call(null,c__4375__auto__,i__28809);var row_i = cljs.core.nth.call(null,vec__28837,(0),null);var row = cljs.core.nth.call(null,vec__28837,(1),null);cljs.core.chunk_append.call(null,b__28810,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28809,vec__28837,row_i,row,c__4375__auto__,size__4376__auto__,b__28810,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28838(s__28839){return (new cljs.core.LazySeq(null,((function (i__28809,vec__28837,row_i,row,c__4375__auto__,size__4376__auto__,b__28810,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28839__$1 = s__28839;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28839__$1);if(temp__4126__auto____$1)
{var s__28839__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28839__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28839__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28841 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28840 = (0);while(true){
if((i__28840 < size__4376__auto____$1))
{var vec__28846 = cljs.core._nth.call(null,c__4375__auto____$1,i__28840);var col_i = cljs.core.nth.call(null,vec__28846,(0),null);var col = cljs.core.nth.call(null,vec__28846,(1),null);cljs.core.chunk_append.call(null,b__28841,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28847__$1 = (((G__28847 == null))?null:cljs.core.get.call(null,rowcol,G__28847));var G__28847__$2 = (((G__28847__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28847__$1));var G__28847__$3 = (((G__28847__$2 == null))?null:render_fn__$1.call(null,G__28847__$2));return G__28847__$3;
})():null)], null)));
{
var G__28866 = (i__28840 + (1));
i__28840 = G__28866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28841),iter__28838.call(null,cljs.core.chunk_rest.call(null,s__28839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28841),null);
}
} else
{var vec__28848 = cljs.core.first.call(null,s__28839__$2);var col_i = cljs.core.nth.call(null,vec__28848,(0),null);var col = cljs.core.nth.call(null,vec__28848,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28849__$1 = (((G__28849 == null))?null:cljs.core.get.call(null,rowcol,G__28849));var G__28849__$2 = (((G__28849__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28849__$1));var G__28849__$3 = (((G__28849__$2 == null))?null:render_fn__$1.call(null,G__28849__$2));return G__28849__$3;
})():null)], null)),iter__28838.call(null,cljs.core.rest.call(null,s__28839__$2)));
}
} else
{return null;
}
break;
}
});})(i__28809,vec__28837,row_i,row,c__4375__auto__,size__4376__auto__,b__28810,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28809,vec__28837,row_i,row,c__4375__auto__,size__4376__auto__,b__28810,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28867 = (i__28809 + (1));
i__28809 = G__28867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28810),iter__28807.call(null,cljs.core.chunk_rest.call(null,s__28808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28810),null);
}
} else
{var vec__28850 = cljs.core.first.call(null,s__28808__$2);var row_i = cljs.core.nth.call(null,vec__28850,(0),null);var row = cljs.core.nth.call(null,vec__28850,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28850,row_i,row,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function iter__28851(s__28852){return (new cljs.core.LazySeq(null,((function (vec__28850,row_i,row,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28852__$1 = s__28852;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28852__$1);if(temp__4126__auto____$1)
{var s__28852__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28852__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28852__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28854 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28853 = (0);while(true){
if((i__28853 < size__4376__auto__))
{var vec__28859 = cljs.core._nth.call(null,c__4375__auto__,i__28853);var col_i = cljs.core.nth.call(null,vec__28859,(0),null);var col = cljs.core.nth.call(null,vec__28859,(1),null);cljs.core.chunk_append.call(null,b__28854,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28860__$1 = (((G__28860 == null))?null:cljs.core.get.call(null,rowcol,G__28860));var G__28860__$2 = (((G__28860__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28860__$1));var G__28860__$3 = (((G__28860__$2 == null))?null:render_fn__$1.call(null,G__28860__$2));return G__28860__$3;
})():null)], null)));
{
var G__28868 = (i__28853 + (1));
i__28853 = G__28868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28854),iter__28851.call(null,cljs.core.chunk_rest.call(null,s__28852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28854),null);
}
} else
{var vec__28861 = cljs.core.first.call(null,s__28852__$2);var col_i = cljs.core.nth.call(null,vec__28861,(0),null);var col = cljs.core.nth.call(null,vec__28861,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28862__$1 = (((G__28862 == null))?null:cljs.core.get.call(null,rowcol,G__28862));var G__28862__$2 = (((G__28862__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28862__$1));var G__28862__$3 = (((G__28862__$2 == null))?null:render_fn__$1.call(null,G__28862__$2));return G__28862__$3;
})():null)], null)),iter__28851.call(null,cljs.core.rest.call(null,s__28852__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28850,row_i,row,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28850,row_i,row,s__28808__$2,temp__4126__auto__,attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28807.call(null,cljs.core.rest.call(null,s__28808__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28748,rowcol,render_fn__$1,map__28745,map__28745__$1,map__28746,map__28746__$1,table_data,query,results,map__28747,map__28747__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28869,owner){var map__28914 = p__28869;var map__28914__$1 = ((cljs.core.seq_QMARK_.call(null,map__28914))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);var props = map__28914__$1;var map__28915 = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28915__$1 = ((cljs.core.seq_QMARK_.call(null,map__28915))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);var table_state = map__28915__$1;var table_data = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28916 = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28916__$1 = ((cljs.core.seq_QMARK_.call(null,map__28916))?cljs.core.apply.call(null,cljs.core.hash_map,map__28916):map__28916);var controls = map__28916__$1;var index_type = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28917 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28917 = (function (index_type,row_aggs,owner,metric_path,props,map__28914,row_path,table_data,map__28915,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28869,title,rows,cols,map__28916,meta28918){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28914 = map__28914;
this.row_path = row_path;
this.table_data = table_data;
this.map__28915 = map__28915;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.p__28869 = p__28869;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28916 = map__28916;
this.meta28918 = meta28918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28917.cljs$lang$type = true;
clustermap.components.ranges_table.t28917.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28917";
clustermap.components.ranges_table.t28917.cljs$lang$ctorPrWriter = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28917");
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28917.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28917.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28920,p__28921){var self__ = this;
var map__28922 = p__28920;var map__28922__$1 = ((cljs.core.seq_QMARK_.call(null,map__28922))?cljs.core.apply.call(null,cljs.core.hash_map,map__28922):map__28922);var next_props = map__28922__$1;var map__28923 = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28923__$1 = ((cljs.core.seq_QMARK_.call(null,map__28923))?cljs.core.apply.call(null,cljs.core.hash_map,map__28923):map__28923);var next_table_state = map__28923__$1;var next_table_data = cljs.core.get.call(null,map__28923__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28924 = cljs.core.get.call(null,map__28923__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28924__$1 = ((cljs.core.seq_QMARK_.call(null,map__28924))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);var next_controls = map__28924__$1;var next_col_aggs = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28925 = p__28921;var map__28925__$1 = ((cljs.core.seq_QMARK_.call(null,map__28925))?cljs.core.apply.call(null,cljs.core.hash_map,map__28925):map__28925);var fetch_data_fn = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28943){var state_val_28944 = (state_28943[(1)]);if((state_val_28944 === (5)))
{var inst_28941 = (state_28943[(2)]);var state_28943__$1 = state_28943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else
{if((state_val_28944 === (4)))
{var state_28943__$1 = state_28943;var statearr_28945_28958 = state_28943__$1;(statearr_28945_28958[(2)] = null);
(statearr_28945_28958[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28944 === (3)))
{var inst_28928 = (state_28943[(7)]);var inst_28930 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28931 = ["RANGES-TABLE-DATA",inst_28928];var inst_28932 = (new cljs.core.PersistentVector(null,2,(5),inst_28930,inst_28931,null));var inst_28933 = cljs.core.clj__GT_js.call(null,inst_28932);var inst_28934 = console.log(inst_28933);var inst_28935 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28936 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28937 = (new cljs.core.PersistentVector(null,1,(5),inst_28935,inst_28936,null));var inst_28938 = om.core.update_BANG_.call(null,self__.table_state,inst_28937,inst_28928);var state_28943__$1 = (function (){var statearr_28946 = state_28943;(statearr_28946[(8)] = inst_28934);
return statearr_28946;
})();var statearr_28947_28959 = state_28943__$1;(statearr_28947_28959[(2)] = inst_28938);
(statearr_28947_28959[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28944 === (2)))
{var inst_28928 = (state_28943[(7)]);var inst_28928__$1 = (state_28943[(2)]);var state_28943__$1 = (function (){var statearr_28948 = state_28943;(statearr_28948[(7)] = inst_28928__$1);
return statearr_28948;
})();if(cljs.core.truth_(inst_28928__$1))
{var statearr_28949_28960 = state_28943__$1;(statearr_28949_28960[(1)] = (3));
} else
{var statearr_28950_28961 = state_28943__$1;(statearr_28950_28961[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28944 === (1)))
{var inst_28926 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28943__$1 = state_28943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(2),inst_28926);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28954 = [null,null,null,null,null,null,null,null,null];(statearr_28954[(0)] = state_machine__9111__auto__);
(statearr_28954[(1)] = (1));
return statearr_28954;
});
var state_machine__9111__auto____1 = (function (state_28943){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28943);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object))
{var ex__9114__auto__ = e28955;var statearr_28956_28962 = state_28943;(statearr_28956_28962[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28963 = state_28943;
state_28943 = G__28963;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28957 = f__9126__auto__.call(null);(statearr_28957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28922,map__28922__$1,next_props,map__28923,map__28923__$1,next_table_state,next_table_data,map__28924,map__28924__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28925,map__28925__$1,fetch_data_fn,map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28917.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28917.prototype.om$core$IRender$render$arity$1 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28917.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28917.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28919){var self__ = this;
var _28919__$1 = this;return self__.meta28918;
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28919,meta28918__$1){var self__ = this;
var _28919__$1 = this;return (new clustermap.components.ranges_table.t28917(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28914,self__.row_path,self__.table_data,self__.map__28915,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.p__28869,self__.title,self__.rows,self__.cols,self__.map__28916,meta28918__$1));
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28917 = ((function (map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28917(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28914__$2,row_path__$1,table_data__$1,map__28915__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28869__$1,title__$1,rows__$1,cols__$1,map__28916__$2,meta28918){return (new clustermap.components.ranges_table.t28917(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28914__$2,row_path__$1,table_data__$1,map__28915__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28869__$1,title__$1,rows__$1,cols__$1,map__28916__$2,meta28918));
});})(map__28914,map__28914__$1,props,map__28915,map__28915__$1,table_state,table_data,map__28916,map__28916__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28917(index_type,row_aggs,owner,metric_path,props,map__28914__$1,row_path,table_data,map__28915__$1,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28869,title,rows,cols,map__28916__$1,null));
});
