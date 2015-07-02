// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.data.colorchooser');
goog.require('cljs.core');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.picker');
goog.require('clustermap.data.picker');
/**
* chooses scale points based on the data itself... i.e. n-tile points
*/
clustermap.data.colorchooser.auto_scale = (function auto_scale(steps,data){var sorted_data = cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.filter.call(null,cljs.core.identity,data)));var point_count = cljs.core.count.call(null,sorted_data);return cljs.core.map.call(null,((function (sorted_data,point_count){
return (function (i){return cljs.core.get.call(null,sorted_data,(((point_count * i) / steps) | (0)));
});})(sorted_data,point_count))
,cljs.core.range.call(null,(1),steps));
});
/**
* chooses scale points based on the data with outliers filtered by interquartile range
* k - only use points in range [Q1 - k*(Q3-Q1) , Q3 + k*(Q3-Q1)]
*/
clustermap.data.colorchooser.auto_no_outliers_scale = (function auto_no_outliers_scale(steps,k,data){var sorted_data = cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.filter.call(null,cljs.core.identity,data)));var point_count = cljs.core.count.call(null,sorted_data);var q1 = cljs.core.get.call(null,sorted_data,(((point_count * (1)) / (4)) | (0)));var q3 = cljs.core.get.call(null,sorted_data,(((point_count * (3)) / (4)) | (0)));var iq = (q3 - q1);var filtered_data = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (sorted_data,point_count,q1,q3,iq){
return (function (d){return ((d >= (q1 - (k * iq)))) && ((d <= (q3 + (k * iq))));
});})(sorted_data,point_count,q1,q3,iq))
,sorted_data));var filtered_point_count = cljs.core.count.call(null,filtered_data);return cljs.core.map.call(null,((function (sorted_data,point_count,q1,q3,iq,filtered_data,filtered_point_count){
return (function (i){return cljs.core.get.call(null,filtered_data,(((filtered_point_count * i) / steps) | (0)));
});})(sorted_data,point_count,q1,q3,iq,filtered_data,filtered_point_count))
,cljs.core.range.call(null,(1),steps));
});
/**
* returns a list of linear-scale thresholds
*/
clustermap.data.colorchooser.linear_scale = (function linear_scale(min,max,steps){var step = ((max - min) / steps);return cljs.core.map.call(null,((function (step){
return (function (i){return (min + (i * step));
});})(step))
,cljs.core.range.call(null,(1),steps));
});
/**
* returns a list of log-scale thresholds
*/
clustermap.data.colorchooser.log_scale = (function log_scale(min,max,steps){var translation = ((1) - min);var log_min = (0);var log_max = Math.log.call(null,(max + translation));var log_linear_scale = clustermap.data.colorchooser.linear_scale.call(null,(0),log_max,steps);return cljs.core.map.call(null,((function (translation,log_min,log_max,log_linear_scale){
return (function (n){return (Math.pow.call(null,Math.E,n) - translation);
});})(translation,log_min,log_max,log_linear_scale))
,log_linear_scale);
});
clustermap.data.colorchooser.choose_from_scheme = (function choose_from_scheme(scheme,thresholds,value){var scheme_thresholds = cljs.core.map.call(null,cljs.core.vector,thresholds,scheme);var chosen = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (scheme_thresholds){
return (function (p__29612){var vec__29613 = p__29612;var t = cljs.core.nth.call(null,vec__29613,(0),null);var i = cljs.core.nth.call(null,vec__29613,(1),null);return (value <= t);
});})(scheme_thresholds))
,scheme_thresholds)));var or__3639__auto__ = chosen;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,scheme);
}
});
clustermap.data.colorchooser.choose_color_scheme = (function choose_color_scheme(color_scheme_spec){var vec__29615 = color_scheme_spec;var k = cljs.core.nth.call(null,vec__29615,(0),null);var rest = cljs.core.nthnext.call(null,vec__29615,(1));if((k instanceof cljs.core.Keyword))
{return cljs.core.get_in.call(null,clustermap.data.colorbrewer.schemes,cljs.core.map.call(null,cljs.core.keyword,color_scheme_spec));
} else
{return color_scheme_spec;
}
});
/**
* return a map of {key-value => colours}
*/
clustermap.data.colorchooser.choose = (function choose(color_scheme_spec,scale,key,variable,data){var color_scheme = clustermap.data.colorchooser.choose_color_scheme.call(null,color_scheme_spec);var col_count = cljs.core.count.call(null,color_scheme);var values = cljs.core.filter.call(null,cljs.core.identity,clustermap.data.picker.pick_variable.call(null,variable,data));var min_value = cljs.core.apply.call(null,cljs.core.min,values);var max_value = cljs.core.apply.call(null,cljs.core.max,values);var thresholds = (function (){var pred__29619 = cljs.core._EQ_;var expr__29620 = scale;if(cljs.core.truth_(pred__29619.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),expr__29620)))
{return clustermap.data.colorchooser.log_scale.call(null,min_value,max_value,col_count);
} else
{if(cljs.core.truth_(pred__29619.call(null,new cljs.core.Keyword(null,"linear","linear",872268697),expr__29620)))
{return clustermap.data.colorchooser.linear_scale.call(null,min_value,max_value,col_count);
} else
{if(cljs.core.truth_(pred__29619.call(null,new cljs.core.Keyword(null,"auto","auto",-566279492),expr__29620)))
{return clustermap.data.colorchooser.auto_scale.call(null,col_count,values);
} else
{if(cljs.core.truth_(pred__29619.call(null,new cljs.core.Keyword(null,"auto-no-outliers","auto-no-outliers",-1448217833),expr__29620)))
{return clustermap.data.colorchooser.auto_no_outliers_scale.call(null,col_count,(5),values);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29620))));
}
}
}
}
})();var chooser = cljs.core.partial.call(null,clustermap.data.colorchooser.choose_from_scheme,color_scheme,thresholds);var value_colors = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (color_scheme,col_count,values,min_value,max_value,thresholds,chooser){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,r,key),chooser.call(null,cljs.core.get.call(null,r,variable))], null);
});})(color_scheme,col_count,values,min_value,max_value,thresholds,chooser))
,data));var threshold_colors = cljs.core.map.call(null,cljs.core.vector,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_value], null),thresholds),color_scheme);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threshold_colors,value_colors], null);
});
