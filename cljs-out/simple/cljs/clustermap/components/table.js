// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(controls,p__28439,p__28440){var map__28454 = p__28439;var map__28454__$1 = ((cljs.core.seq_QMARK_.call(null,map__28454))?cljs.core.apply.call(null,cljs.core.hash_map,map__28454):map__28454);var table_data = map__28454__$1;var current_sort_spec = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28455 = p__28440;var map__28455__$1 = ((cljs.core.seq_QMARK_.call(null,map__28455))?cljs.core.apply.call(null,cljs.core.hash_map,map__28455):map__28455);var col = map__28455__$1;var render_fn = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28456 = current_sort_spec__$1;var G__28456__$1 = (((G__28456 == null))?null:cljs.core.keys.call(null,G__28456));var G__28456__$2 = (((G__28456__$1 == null))?null:cljs.core.first.call(null,G__28456__$1));return G__28456__$2;
})();var current_sort_dir = (function (){var G__28457 = current_sort_spec__$1;var G__28457__$1 = (((G__28457 == null))?null:current_sort_key.call(null,G__28457));var G__28457__$2 = (((G__28457__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28457__$1));return G__28457__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28458 = cljs.core._EQ_;var expr__28459 = current_sort_dir;if(cljs.core.truth_(pred__28458.call(null,"asc",expr__28459)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28454,map__28454__$1,table_data,current_sort_spec,map__28455,map__28455__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28464 = cljs.core._EQ_;var expr__28465 = current_sort_dir;if(cljs.core.truth_(pred__28464.call(null,"asc",expr__28465)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28464.call(null,"desc",expr__28465)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3639__auto__ = current_sort_dir;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
}
})()], null)], true, false));
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28454,map__28454__$1,table_data,current_sort_spec,map__28455,map__28455__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28463 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28463))?sablono.interpreter.attributes.call(null,attrs28463):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28463))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28463)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28467,owner,opts){var map__28476 = p__28467;var map__28476__$1 = ((cljs.core.seq_QMARK_.call(null,map__28476))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);var controls = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28477 = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28477__$1 = ((cljs.core.seq_QMARK_.call(null,map__28477))?cljs.core.apply.call(null,cljs.core.hash_map,map__28477):map__28477);var table_data = map__28477__$1;var count = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28478 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28478 = (function (owner,p__28467,paginate,table_data,map__28476,controls,size,map__28477,from,count,opts,meta28479){
this.owner = owner;
this.p__28467 = p__28467;
this.paginate = paginate;
this.table_data = table_data;
this.map__28476 = map__28476;
this.controls = controls;
this.size = size;
this.map__28477 = map__28477;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28479 = meta28479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28478.cljs$lang$type = true;
clustermap.components.table.t28478.cljs$lang$ctorStr = "clustermap.components.table/t28478";
clustermap.components.table.t28478.cljs$lang$ctorPrWriter = ((function (map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28478");
});})(map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
;
clustermap.components.table.t28478.prototype.om$core$IRender$ = true;
clustermap.components.table.t28478.prototype.om$core$IRender$render$arity$1 = ((function (map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28481 = clustermap.formats.number.readable.call(null,(self__.from + (1)));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28481))?sablono.interpreter.attributes.call(null,attrs28481):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28481))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28481)], null))));
})()," to ",(function (){var attrs28482 = clustermap.formats.number.readable.call(null,(function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28482))?sablono.interpreter.attributes.call(null,attrs28482):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28482))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28482)], null))));
})()," of ",(function (){var attrs28483 = clustermap.formats.number.readable.call(null,self__.count);return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28483))?sablono.interpreter.attributes.call(null,attrs28483):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28483))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28483)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
},"Last")));
});})(map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
;
clustermap.components.table.t28478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (_28480){var self__ = this;
var _28480__$1 = this;return self__.meta28479;
});})(map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
;
clustermap.components.table.t28478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function (_28480,meta28479__$1){var self__ = this;
var _28480__$1 = this;return (new clustermap.components.table.t28478(self__.owner,self__.p__28467,self__.paginate,self__.table_data,self__.map__28476,self__.controls,self__.size,self__.map__28477,self__.from,self__.count,self__.opts,meta28479__$1));
});})(map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28478 = ((function (map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size){
return (function __GT_t28478(owner__$1,p__28467__$1,paginate__$1,table_data__$1,map__28476__$2,controls__$1,size__$1,map__28477__$2,from__$1,count__$1,opts__$1,meta28479){return (new clustermap.components.table.t28478(owner__$1,p__28467__$1,paginate__$1,table_data__$1,map__28476__$2,controls__$1,size__$1,map__28477__$2,from__$1,count__$1,opts__$1,meta28479));
});})(map__28476,map__28476__$1,controls,map__28477,map__28477__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28478(owner,p__28467,paginate,table_data,map__28476__$1,controls,size,map__28477__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28484){var map__28497 = p__28484;var map__28497__$1 = ((cljs.core.seq_QMARK_.call(null,map__28497))?cljs.core.apply.call(null,cljs.core.hash_map,map__28497):map__28497);var record = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28498 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28498 = (function (columns,record,map__28497,p__28484,render_table_row,meta28499){
this.columns = columns;
this.record = record;
this.map__28497 = map__28497;
this.p__28484 = p__28484;
this.render_table_row = render_table_row;
this.meta28499 = meta28499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28498.cljs$lang$type = true;
clustermap.components.table.t28498.cljs$lang$ctorStr = "clustermap.components.table/t28498";
clustermap.components.table.t28498.cljs$lang$ctorPrWriter = ((function (map__28497,map__28497__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28498");
});})(map__28497,map__28497__$1,record,columns))
;
clustermap.components.table.t28498.prototype.om$core$IRender$ = true;
clustermap.components.table.t28498.prototype.om$core$IRender$render$arity$1 = ((function (map__28497,map__28497__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28497,map__28497__$1,record,columns){
return (function iter__28501(s__28502){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28497,map__28497__$1,record,columns){
return (function (){var s__28502__$1 = s__28502;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28502__$1);if(temp__4126__auto__)
{var s__28502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28502__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28502__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28504 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28503 = (0);while(true){
if((i__28503 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28503);cljs.core.chunk_append.call(null,b__28504,(function (){var map__28507 = col;var map__28507__$1 = ((cljs.core.seq_QMARK_.call(null,map__28507))?cljs.core.apply.call(null,cljs.core.hash_map,map__28507):map__28507);var render_fn = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28509 = (i__28503 + (1));
i__28503 = G__28509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28504),iter__28501.call(null,cljs.core.chunk_rest.call(null,s__28502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28504),null);
}
} else
{var col = cljs.core.first.call(null,s__28502__$2);return cljs.core.cons.call(null,(function (){var map__28508 = col;var map__28508__$1 = ((cljs.core.seq_QMARK_.call(null,map__28508))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);var render_fn = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28501.call(null,cljs.core.rest.call(null,s__28502__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28497,map__28497__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28497,map__28497__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28497,map__28497__$1,record,columns))
;
clustermap.components.table.t28498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28497,map__28497__$1,record,columns){
return (function (_28500){var self__ = this;
var _28500__$1 = this;return self__.meta28499;
});})(map__28497,map__28497__$1,record,columns))
;
clustermap.components.table.t28498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28497,map__28497__$1,record,columns){
return (function (_28500,meta28499__$1){var self__ = this;
var _28500__$1 = this;return (new clustermap.components.table.t28498(self__.columns,self__.record,self__.map__28497,self__.p__28484,self__.render_table_row,meta28499__$1));
});})(map__28497,map__28497__$1,record,columns))
;
clustermap.components.table.__GT_t28498 = ((function (map__28497,map__28497__$1,record,columns){
return (function __GT_t28498(columns__$1,record__$1,map__28497__$2,p__28484__$1,render_table_row__$1,meta28499){return (new clustermap.components.table.t28498(columns__$1,record__$1,map__28497__$2,p__28484__$1,render_table_row__$1,meta28499));
});})(map__28497,map__28497__$1,record,columns))
;
}
return (new clustermap.components.table.t28498(columns,record,map__28497__$1,p__28484,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28510,owner,opts){var map__28526 = p__28510;var map__28526__$1 = ((cljs.core.seq_QMARK_.call(null,map__28526))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);var props = map__28526__$1;var table_data = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28527 = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28527__$1 = ((cljs.core.seq_QMARK_.call(null,map__28527))?cljs.core.apply.call(null,cljs.core.hash_map,map__28527):map__28527);var controls = map__28527__$1;var columns = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28528 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28528))?sablono.interpreter.attributes.call(null,attrs28528):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28528))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28529 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function iter__28533(s__28534){return (new cljs.core.LazySeq(null,((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function (){var s__28534__$1 = s__28534;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28534__$1);if(temp__4126__auto__)
{var s__28534__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28534__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28534__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28536 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28535 = (0);while(true){
if((i__28535 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28535);cljs.core.chunk_append.call(null,b__28536,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28541 = (i__28535 + (1));
i__28535 = G__28541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28536),iter__28533.call(null,cljs.core.chunk_rest.call(null,s__28534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28536),null);
}
} else
{var col = cljs.core.first.call(null,s__28534__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28533.call(null,cljs.core.rest.call(null,s__28534__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28529))?sablono.interpreter.attributes.call(null,attrs28529):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28529))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28529)], null))));
})(),(function (){var attrs28530 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28530))?sablono.interpreter.attributes.call(null,attrs28530):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28530))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28530)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28528),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28531 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function iter__28537(s__28538){return (new cljs.core.LazySeq(null,((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function (){var s__28538__$1 = s__28538;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28538__$1);if(temp__4126__auto__)
{var s__28538__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28538__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28538__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28540 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28539 = (0);while(true){
if((i__28539 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28539);cljs.core.chunk_append.call(null,b__28540,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28542 = (i__28539 + (1));
i__28539 = G__28542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28540),iter__28537.call(null,cljs.core.chunk_rest.call(null,s__28538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28540),null);
}
} else
{var col = cljs.core.first.call(null,s__28538__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28537.call(null,cljs.core.rest.call(null,s__28538__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28531))?sablono.interpreter.attributes.call(null,attrs28531):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28531))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28531)], null))));
})(),(function (){var attrs28532 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28528,map__28526,map__28526__$1,props,table_data,map__28527,map__28527__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28532))?sablono.interpreter.attributes.call(null,attrs28532):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28532))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28532)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28543,owner){var map__28582 = p__28543;var map__28582__$1 = ((cljs.core.seq_QMARK_.call(null,map__28582))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);var props = map__28582__$1;var map__28583 = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28583__$1 = ((cljs.core.seq_QMARK_.call(null,map__28583))?cljs.core.apply.call(null,cljs.core.hash_map,map__28583):map__28583);var table_state = map__28583__$1;var table_data = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28584 = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28584__$1 = ((cljs.core.seq_QMARK_.call(null,map__28584))?cljs.core.apply.call(null,cljs.core.hash_map,map__28584):map__28584);var controls = map__28584__$1;var index = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28585 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28585 = (function (sort_spec,table_component,owner,props,map__28584,table_data,index,filter_spec,columns,table_state,controls,size,from,map__28582,p__28543,map__28583,meta28586){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28584 = map__28584;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.from = from;
this.map__28582 = map__28582;
this.p__28543 = p__28543;
this.map__28583 = map__28583;
this.meta28586 = meta28586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28585.cljs$lang$type = true;
clustermap.components.table.t28585.cljs$lang$ctorStr = "clustermap.components.table/t28585";
clustermap.components.table.t28585.cljs$lang$ctorPrWriter = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28585");
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28585.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28585.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28588,p__28589){var self__ = this;
var map__28590 = p__28588;var map__28590__$1 = ((cljs.core.seq_QMARK_.call(null,map__28590))?cljs.core.apply.call(null,cljs.core.hash_map,map__28590):map__28590);var next_props = map__28590__$1;var map__28591 = cljs.core.get.call(null,map__28590__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28591__$1 = ((cljs.core.seq_QMARK_.call(null,map__28591))?cljs.core.apply.call(null,cljs.core.hash_map,map__28591):map__28591);var next_table_state = map__28591__$1;var next_table_data = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28592 = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28592__$1 = ((cljs.core.seq_QMARK_.call(null,map__28592))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);var next_controls = map__28592__$1;var next_index = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28590__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28593 = p__28589;var map__28593__$1 = ((cljs.core.seq_QMARK_.call(null,map__28593))?cljs.core.apply.call(null,cljs.core.hash_map,map__28593):map__28593);var fetch_table_data_fn = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28606){var state_val_28607 = (state_28606[(1)]);if((state_val_28607 === (5)))
{var inst_28604 = (state_28606[(2)]);var state_28606__$1 = state_28606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28606__$1,inst_28604);
} else
{if((state_val_28607 === (4)))
{var state_28606__$1 = state_28606;var statearr_28608_28620 = state_28606__$1;(statearr_28608_28620[(2)] = null);
(statearr_28608_28620[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28607 === (3)))
{var inst_28596 = (state_28606[(7)]);var inst_28598 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28599 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28600 = (new cljs.core.PersistentVector(null,1,(5),inst_28598,inst_28599,null));var inst_28601 = om.core.update_BANG_.call(null,self__.table_state,inst_28600,inst_28596);var state_28606__$1 = state_28606;var statearr_28609_28621 = state_28606__$1;(statearr_28609_28621[(2)] = inst_28601);
(statearr_28609_28621[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28607 === (2)))
{var inst_28596 = (state_28606[(7)]);var inst_28596__$1 = (state_28606[(2)]);var state_28606__$1 = (function (){var statearr_28610 = state_28606;(statearr_28610[(7)] = inst_28596__$1);
return statearr_28610;
})();if(cljs.core.truth_(inst_28596__$1))
{var statearr_28611_28622 = state_28606__$1;(statearr_28611_28622[(1)] = (3));
} else
{var statearr_28612_28623 = state_28606__$1;(statearr_28612_28623[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28607 === (1)))
{var inst_28594 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28606__$1 = state_28606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28606__$1,(2),inst_28594);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28616 = [null,null,null,null,null,null,null,null];(statearr_28616[(0)] = state_machine__9111__auto__);
(statearr_28616[(1)] = (1));
return statearr_28616;
});
var state_machine__9111__auto____1 = (function (state_28606){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28606);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28617){if((e28617 instanceof Object))
{var ex__9114__auto__ = e28617;var statearr_28618_28624 = state_28606;(statearr_28618_28624[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28625 = state_28606;
state_28606 = G__28625;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28606){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28619 = f__9126__auto__.call(null);(statearr_28619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28590,map__28590__$1,next_props,map__28591,map__28591__$1,next_table_state,next_table_data,map__28592,map__28592__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28593,map__28593__$1,fetch_table_data_fn,map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28585.prototype.om$core$IRender$ = true;
clustermap.components.table.t28585.prototype.om$core$IRender$render$arity$1 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28585.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28585.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28587){var self__ = this;
var _28587__$1 = this;return self__.meta28586;
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28587,meta28586__$1){var self__ = this;
var _28587__$1 = this;return (new clustermap.components.table.t28585(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28584,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.from,self__.map__28582,self__.p__28543,self__.map__28583,meta28586__$1));
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28585 = ((function (map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28585(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28584__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,from__$1,map__28582__$2,p__28543__$1,map__28583__$2,meta28586){return (new clustermap.components.table.t28585(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28584__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,from__$1,map__28582__$2,p__28543__$1,map__28583__$2,meta28586));
});})(map__28582,map__28582__$1,props,map__28583,map__28583__$1,table_state,table_data,map__28584,map__28584__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28585(sort_spec,table_component,owner,props,map__28584__$1,table_data,index,filter_spec,columns,table_state,controls,size,from,map__28582__$1,p__28543,map__28583__$1,null));
});
