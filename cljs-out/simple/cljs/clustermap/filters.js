// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.filters');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
clustermap.filters.FilterSchema = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Keyword,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.Keyword,schema.core.Any], true, false)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.maybe.call(null,schema.core.Str)], true, false),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"composed","composed",-1510693384),schema.core.Any], null);
clustermap.filters.make_sequential = (function make_sequential(s){if(cljs.core.sequential_QMARK_.call(null,s))
{return cljs.core.vec.call(null,s);
} else
{if((s == null))
{return cljs.core.PersistentVector.EMPTY;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
clustermap.filters.or_filters = (function or_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should","should",2086636648),filters__$1], null)], null);
});
clustermap.filters.de_or_filters = (function de_or_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));
});
/**
* and a sequence of filters
*/
clustermap.filters.and_filters = (function and_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),filters__$1], null)], null);
});
/**
* extract a sequence of filters which have been ANDed
*/
clustermap.filters.de_and_filters = (function de_and_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061)], null));
});
/**
* AND all components and a base-filter
*/
clustermap.filters.compose_base_filter = (function compose_base_filter(components,base_filter){var filters = (function (){var G__30908 = components;var G__30908__$1 = (((G__30908 == null))?null:cljs.core.vals.call(null,G__30908));var G__30908__$2 = (((G__30908__$1 == null))?null:cljs.core.conj.call(null,G__30908__$1,base_filter));return G__30908__$2;
})();var filters__$1 = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,filters));return clustermap.filters.and_filters.call(null,filters__$1);
});
/**
* take the filter components, and combine with each base-filter to produce
* a restricted version of the base-filter
*/
clustermap.filters.compose_filters = (function compose_filters(components,base_filters){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30911){var vec__30912 = p__30911;var k = cljs.core.nth.call(null,vec__30912,(0),null);var bf = cljs.core.nth.call(null,vec__30912,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.filters.compose_base_filter.call(null,components,bf)], null);
}),base_filters));
});
var ufv___30922 = schema.utils.use_fn_validation;var output_schema30913_30923 = clustermap.filters.FilterSchema;var input_schema30914_30924 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"k","k",-505765866,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"f","f",43394975,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"d","d",-682293345,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"u","u",483896742,null))], null);var input_checker30915_30925 = schema.core.checker.call(null,input_schema30914_30924);var output_checker30916_30926 = schema.core.checker.call(null,output_schema30913_30923);/**
* Inputs: [filters :- FilterSchema k :- s/Str f :- s/Any d :- s/Str u :- s/Str]
* Returns: FilterSchema
* 
* update the filter component k with filter f, description d, and url component u
*/
clustermap.filters.update_filter_component = ((function (ufv___30922,output_schema30913_30923,input_schema30914_30924,input_checker30915_30925,output_checker30916_30926){
return (function update_filter_component(G__30917,G__30918,G__30919,G__30920,G__30921){var validate__6034__auto__ = ufv___30922.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30927 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30917,G__30918,G__30919,G__30920,G__30921], null);var temp__4126__auto___30928 = input_checker30915_30925.call(null,args__6035__auto___30927);if(cljs.core.truth_(temp__4126__auto___30928))
{var error__6036__auto___30929 = temp__4126__auto___30928;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___30929)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30929,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30927,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30914_30924,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__30917;var k = G__30918;var f = G__30919;var d = G__30920;var u = G__30921;while(true){
var f__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),k], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),k], null),d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097),k], null),u);return cljs.core.assoc_in.call(null,f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f__$1)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30930 = output_checker30916_30926.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30930))
{var error__6036__auto___30931 = temp__4126__auto___30930;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___30931)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30931,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30913_30923,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30922,output_schema30913_30923,input_schema30914_30924,input_checker30915_30925,output_checker30916_30926))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.update_filter_component),schema.core.make_fn_schema.call(null,output_schema30913_30923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30914_30924], null)));
var ufv___30937 = schema.utils.use_fn_validation;var output_schema30932_30938 = clustermap.filters.FilterSchema;var input_schema30933_30939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null))], null);var input_checker30934_30940 = schema.core.checker.call(null,input_schema30933_30939);var output_checker30935_30941 = schema.core.checker.call(null,output_schema30932_30938);/**
* Inputs: [filters :- FilterSchema]
* Returns: FilterSchema
* 
* reset all filter components
*/
clustermap.filters.reset_filter = ((function (ufv___30937,output_schema30932_30938,input_schema30933_30939,input_checker30934_30940,output_checker30935_30941){
return (function reset_filter(G__30936){var validate__6034__auto__ = ufv___30937.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30936], null);var temp__4126__auto___30943 = input_checker30934_30940.call(null,args__6035__auto___30942);if(cljs.core.truth_(temp__4126__auto___30943))
{var error__6036__auto___30944 = temp__4126__auto___30943;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___30944)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30944,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30942,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30933_30939,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__30936;while(true){
var f = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097)], null),cljs.core.PersistentArrayMap.EMPTY);return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30945 = output_checker30935_30941.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30945))
{var error__6036__auto___30946 = temp__4126__auto___30945;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___30946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30946,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30932_30938,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30937,output_schema30932_30938,input_schema30933_30939,input_checker30934_30940,output_checker30935_30941))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.reset_filter),schema.core.make_fn_schema.call(null,output_schema30932_30938,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30933_30939], null)));
var ufv___30958 = schema.utils.use_fn_validation;var output_schema30947_30959 = schema.core.Any;var input_schema30948_30960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"url-components","url-components",-170905570,null))], null);var input_checker30949_30961 = schema.core.checker.call(null,input_schema30948_30960);var output_checker30950_30962 = schema.core.checker.call(null,output_schema30947_30959);/**
* Inputs: [url-components]
* 
* JSON encode the filter for use as a URL param
*/
clustermap.filters.filter_url_param_value = ((function (ufv___30958,output_schema30947_30959,input_schema30948_30960,input_checker30949_30961,output_checker30950_30962){
return (function filter_url_param_value(G__30951){var validate__6034__auto__ = ufv___30958.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30951], null);var temp__4126__auto___30964 = input_checker30949_30961.call(null,args__6035__auto___30963);if(cljs.core.truth_(temp__4126__auto___30964))
{var error__6036__auto___30965 = temp__4126__auto___30964;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___30965)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30965,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30963,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30948_30960,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var url_components = G__30951;while(true){
var G__30955 = url_components;var G__30955__$1 = (((G__30955 == null))?null:cljs.core.filter.call(null,((function (G__30955,validate__6034__auto__,ufv___30958,output_schema30947_30959,input_schema30948_30960,input_checker30949_30961,output_checker30950_30962){
return (function (p__30956){var vec__30957 = p__30956;var k = cljs.core.nth.call(null,vec__30957,(0),null);var v = cljs.core.nth.call(null,vec__30957,(1),null);return cljs.core.not_empty.call(null,v);
});})(G__30955,validate__6034__auto__,ufv___30958,output_schema30947_30959,input_schema30948_30960,input_checker30949_30961,output_checker30950_30962))
,G__30955));var G__30955__$2 = (((G__30955__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30955__$1));var G__30955__$3 = (((G__30955__$2 == null))?null:cljs.core.not_empty.call(null,G__30955__$2));var G__30955__$4 = (((G__30955__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__30955__$3));var G__30955__$5 = (((G__30955__$4 == null))?null:JSON.stringify(G__30955__$4));return G__30955__$5;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30966 = output_checker30950_30962.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30966))
{var error__6036__auto___30967 = temp__4126__auto___30966;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___30967)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30967,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30947_30959,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30958,output_schema30947_30959,input_schema30948_30960,input_checker30949_30961,output_checker30950_30962))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.filter_url_param_value),schema.core.make_fn_schema.call(null,output_schema30947_30959,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30948_30960], null)));
var ufv___30975 = schema.utils.use_fn_validation;var output_schema30968_30976 = schema.core.Any;var input_schema30969_30977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"v","v",1661996586,null))], null);var input_checker30970_30978 = schema.core.checker.call(null,input_schema30969_30977);var output_checker30971_30979 = schema.core.checker.call(null,output_schema30968_30976);/**
* Inputs: [v]
*/
clustermap.filters.parse_url_param_value = ((function (ufv___30975,output_schema30968_30976,input_schema30969_30977,input_checker30970_30978,output_checker30971_30979){
return (function parse_url_param_value(G__30972){var validate__6034__auto__ = ufv___30975.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30972], null);var temp__4126__auto___30981 = input_checker30970_30978.call(null,args__6035__auto___30980);if(cljs.core.truth_(temp__4126__auto___30981))
{var error__6036__auto___30982 = temp__4126__auto___30981;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___30982)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30982,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30980,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30969_30977,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var v = G__30972;while(true){
var G__30974 = v;var G__30974__$1 = (((G__30974 == null))?null:JSON.parse(G__30974));var G__30974__$2 = (((G__30974__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__30974__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));return G__30974__$2;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30983 = output_checker30971_30979.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30983))
{var error__6036__auto___30984 = temp__4126__auto___30983;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___30984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30984,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30968_30976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30975,output_schema30968_30976,input_schema30969_30977,input_checker30970_30978,output_checker30971_30979))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.parse_url_param_value),schema.core.make_fn_schema.call(null,output_schema30968_30976,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30969_30977], null)));
