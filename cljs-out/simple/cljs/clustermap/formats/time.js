// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__27467 = t;var G__27467__$1 = (((G__27467 == null))?null:(new Date(G__27467)));var G__27467__$2 = (((G__27467__$1 == null))?null:G__27467__$1.getYear());var G__27467__$3 = (((G__27467__$2 == null))?null:(G__27467__$2 + (1900)));return G__27467__$3;
});
clustermap.formats.time.date_formatter = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
clustermap.formats.time.coerce_from_string = (function coerce_from_string(s){if(typeof s === 'string')
{return cljs_time.coerce.from_string.call(null,s);
} else
{return s;
}
});
clustermap.formats.time.format_date = (function format_date(t){var G__27469 = t;var G__27469__$1 = (((G__27469 == null))?null:clustermap.formats.time.coerce_from_string.call(null,G__27469));var G__27469__$2 = (((G__27469__$1 == null))?null:cljs_time.format.unparse.call(null,clustermap.formats.time.date_formatter,G__27469__$1));return G__27469__$2;
});
clustermap.formats.time.now = (function now(){return cljs_time.core.now.call(null);
});
clustermap.formats.time.today_str = (function today_str(){return clustermap.formats.time.format_date.call(null,clustermap.formats.time.now.call(null));
});
/**
* returns [start end] for a quarter at least n months before t
*/
clustermap.formats.time.year_quarter_ago = (function year_quarter_ago(t,n){var max_end = cljs_time.core.minus.call(null,cljs_time.core.minus.call(null,t,cljs_time.core.years.call(null,cljs.core.quot.call(null,n,(12)))),cljs_time.core.months.call(null,cljs.core.mod.call(null,n,(12))));var max_end_month = cljs_time.core.month.call(null,max_end);var quarter_offset = cljs.core.mod.call(null,(max_end_month - (1)),(3));var quarter_end_month = (max_end_month - quarter_offset);var quarter_end = cljs_time.core.date_midnight.call(null,cljs_time.core.year.call(null,max_end),quarter_end_month);var quarter_start = cljs_time.core.minus.call(null,quarter_end,cljs_time.core.months.call(null,(12)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarter_start,quarter_end], null);
});
clustermap.formats.time.months_ago = (function months_ago(n){return cljs_time.core.minus.call(null,cljs_time.core.minus.call(null,clustermap.formats.time.now.call(null),cljs_time.core.years.call(null,cljs.core.quot.call(null,n,(12)))),cljs_time.core.months.call(null,cljs.core.mod.call(null,n,(12))));
});
clustermap.formats.time.end_of_year_at_least_n_months_prev = (function end_of_year_at_least_n_months_prev(n){var t = clustermap.formats.time.months_ago.call(null,n);var y = cljs_time.core.year.call(null,t);return cljs_time.core.date_time.call(null,y,(1),(1));
});
