// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_filter');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.filters');
clustermap.components.filters.tag_filter.get_current_value = (function get_current_value(components,id){var or__3639__auto__ = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
});
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30773_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30773_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30774,value){var map__30776 = p__30774;var map__30776__$1 = ((cljs.core.seq_QMARK_.call(null,map__30776))?cljs.core.apply.call(null,cljs.core.hash_map,map__30776):map__30776);var component_spec = map__30776__$1;var tags = cljs.core.get.call(null,map__30776__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30776__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30777,value){var map__30779 = p__30777;var map__30779__$1 = ((cljs.core.seq_QMARK_.call(null,map__30779))?cljs.core.apply.call(null,cljs.core.hash_map,map__30779):map__30779);var component_spec = map__30779__$1;var tags = cljs.core.get.call(null,map__30779__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30779__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(tag_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tag_spec)));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30780,value){var map__30782 = p__30780;var map__30782__$1 = ((cljs.core.seq_QMARK_.call(null,map__30782))?cljs.core.apply.call(null,cljs.core.hash_map,map__30782):map__30782);var component_spec = map__30782__$1;var tags = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30783_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30784_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30784_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30786 = schema.core.Any;var input_schema30787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30785","map30785",1361240707,null))], null);var input_checker30788 = schema.core.checker.call(null,input_schema30787);var output_checker30789 = schema.core.checker.call(null,output_schema30786);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789){
return (function render_STAR_(G__30790){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30790], null);var temp__4126__auto___30808 = input_checker30788.call(null,args__6035__auto___30807);if(cljs.core.truth_(temp__4126__auto___30808))
{var error__6036__auto___30809 = temp__4126__auto___30808;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30809,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30807,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30787,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30785 = G__30790;while(true){
if(cljs.core.map_QMARK_.call(null,map30785))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30785)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30785,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30785,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789){
return (function iter__30799(s__30800){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789){
return (function (){var s__30800__$1 = s__30800;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30800__$1);if(temp__4126__auto__)
{var s__30800__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30800__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30800__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30802 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30801 = (0);while(true){
if((i__30801 < size__4376__auto__))
{var map__30805 = cljs.core._nth.call(null,c__4375__auto__,i__30801);var map__30805__$1 = ((cljs.core.seq_QMARK_.call(null,map__30805))?cljs.core.apply.call(null,cljs.core.hash_map,map__30805):map__30805);var label__$1 = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30802,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30810 = (i__30801 + (1));
i__30801 = G__30810;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30802),iter__30799.call(null,cljs.core.chunk_rest.call(null,s__30800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30802),null);
}
} else
{var map__30806 = cljs.core.first.call(null,s__30800__$2);var map__30806__$1 = ((cljs.core.seq_QMARK_.call(null,map__30806))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);var label__$1 = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30799.call(null,cljs.core.rest.call(null,s__30800__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30811 = output_checker30789.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30811))
{var error__6036__auto___30812 = temp__4126__auto___30811;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30812)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30812,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30786,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30786,input_schema30787,input_checker30788,output_checker30789))
,schema.core.make_fn_schema.call(null,output_schema30786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30787], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30958 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30818 = schema.core.Any;var input_schema30819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30816","map30816",327763003,null))], null);var input_checker30820 = schema.core.checker.call(null,input_schema30819);var output_checker30821 = schema.core.checker.call(null,output_schema30818);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function constructor30814(G__30822){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30822], null);var temp__4126__auto___30960 = input_checker30820.call(null,args__6035__auto___30959);if(cljs.core.truth_(temp__4126__auto___30960))
{var error__6036__auto___30961 = temp__4126__auto___30960;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30814","constructor30814",266987489,null),cljs.core.pr_str.call(null,error__6036__auto___30961)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30961,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30959,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30819,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30816 = G__30822;while(true){
if(cljs.core.map_QMARK_.call(null,map30816))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30816)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30816,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30817 = plumbing.fnk.schema.safe_get.call(null,map30816,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30817,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30816,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30889 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30889 = (function (component_spec,component_filter_rq_chan,constructor30814,owner,output_checker30821,data,input_schema30819,output_schema30818,input_checker30820,G__30822,map30817,filter_spec,validate__6034__auto__,map30816,id,ufv__,meta30890){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30814 = constructor30814;
this.owner = owner;
this.output_checker30821 = output_checker30821;
this.data = data;
this.input_schema30819 = input_schema30819;
this.output_schema30818 = output_schema30818;
this.input_checker30820 = input_checker30820;
this.G__30822 = G__30822;
this.map30817 = map30817;
this.filter_spec = filter_spec;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30816 = map30816;
this.id = id;
this.ufv__ = ufv__;
this.meta30890 = meta30890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30889.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30889.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30889";
clustermap.components.filters.tag_filter.t30889.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30889");
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30889.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (state_30929){var state_val_30930 = (state_30929[(1)]);if((state_val_30930 === (7)))
{var inst_30920 = (state_30929[(2)]);var state_30929__$1 = state_30929;if(cljs.core.truth_(inst_30920))
{var statearr_30931_30962 = state_30929__$1;(statearr_30931_30962[(1)] = (11));
} else
{var statearr_30932_30963 = state_30929__$1;(statearr_30932_30963[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (1)))
{var state_30929__$1 = state_30929;var statearr_30933_30964 = state_30929__$1;(statearr_30933_30964[(2)] = null);
(statearr_30933_30964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (4)))
{var inst_30894 = (state_30929[(7)]);var inst_30894__$1 = (state_30929[(2)]);var state_30929__$1 = (function (){var statearr_30934 = state_30929;(statearr_30934[(7)] = inst_30894__$1);
return statearr_30934;
})();if(cljs.core.truth_(inst_30894__$1))
{var statearr_30935_30965 = state_30929__$1;(statearr_30935_30965[(1)] = (5));
} else
{var statearr_30936_30966 = state_30929__$1;(statearr_30936_30966[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (13)))
{var inst_30925 = (state_30929[(2)]);var state_30929__$1 = state_30929;var statearr_30937_30967 = state_30929__$1;(statearr_30937_30967[(2)] = inst_30925);
(statearr_30937_30967[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (6)))
{var state_30929__$1 = state_30929;var statearr_30938_30968 = state_30929__$1;(statearr_30938_30968[(2)] = null);
(statearr_30938_30968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (3)))
{var inst_30927 = (state_30929[(2)]);var state_30929__$1 = state_30929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30929__$1,inst_30927);
} else
{if((state_val_30930 === (12)))
{var state_30929__$1 = state_30929;var statearr_30939_30969 = state_30929__$1;(statearr_30939_30969[(2)] = null);
(statearr_30939_30969[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (2)))
{var state_30929__$1 = state_30929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30929__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30930 === (11)))
{var state_30929__$1 = state_30929;var statearr_30940_30970 = state_30929__$1;(statearr_30940_30970[(2)] = null);
(statearr_30940_30970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (9)))
{var inst_30900 = (state_30929[(8)]);var state_30929__$1 = state_30929;var statearr_30941_30971 = state_30929__$1;(statearr_30941_30971[(2)] = inst_30900);
(statearr_30941_30971[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (5)))
{var inst_30900 = (state_30929[(8)]);var inst_30894 = (state_30929[(7)]);var inst_30897 = cljs.core.nth.call(null,inst_30894,(0),null);var inst_30898 = cljs.core.nth.call(null,inst_30894,(1),null);var inst_30900__$1 = om.core.get_props.call(null,self__.owner);var inst_30901 = cljs.core.seq_QMARK_.call(null,inst_30900__$1);var state_30929__$1 = (function (){var statearr_30942 = state_30929;(statearr_30942[(9)] = inst_30897);
(statearr_30942[(8)] = inst_30900__$1);
(statearr_30942[(10)] = inst_30898);
return statearr_30942;
})();if(inst_30901)
{var statearr_30943_30972 = state_30929__$1;(statearr_30943_30972[(1)] = (8));
} else
{var statearr_30944_30973 = state_30929__$1;(statearr_30944_30973[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (10)))
{var inst_30898 = (state_30929[(10)]);var inst_30906 = (state_30929[(2)]);var inst_30907 = cljs.core.get.call(null,inst_30906,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30908 = cljs.core.get.call(null,inst_30906,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30909 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30910 = ["TAG-FILTER-RQ",self__.id,inst_30898];var inst_30911 = (new cljs.core.PersistentVector(null,3,(5),inst_30909,inst_30910,null));var inst_30912 = cljs.core.clj__GT_js.call(null,inst_30911);var inst_30913 = console.log(inst_30912);var inst_30914 = cljs.core.deref.call(null,inst_30907);var inst_30915 = cljs.core.deref.call(null,inst_30908);var inst_30916 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30914,inst_30915,inst_30898);var inst_30917 = om.core.update_BANG_.call(null,inst_30907,inst_30916);var state_30929__$1 = (function (){var statearr_30945 = state_30929;(statearr_30945[(11)] = inst_30913);
(statearr_30945[(12)] = inst_30917);
return statearr_30945;
})();var statearr_30946_30974 = state_30929__$1;(statearr_30946_30974[(2)] = true);
(statearr_30946_30974[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30930 === (8)))
{var inst_30900 = (state_30929[(8)]);var inst_30903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30900);var state_30929__$1 = state_30929;var statearr_30947_30975 = state_30929__$1;(statearr_30947_30975[(2)] = inst_30903);
(statearr_30947_30975[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30951 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30951[(0)] = state_machine__9111__auto__);
(statearr_30951[(1)] = (1));
return statearr_30951;
});
var state_machine__9111__auto____1 = (function (state_30929){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30929);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30952){if((e30952 instanceof Object))
{var ex__9114__auto__ = e30952;var statearr_30953_30976 = state_30929;(statearr_30953_30976[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30952;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30977 = state_30929;
state_30929 = G__30977;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30929){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
})();var state__9127__auto__ = (function (){var statearr_30954 = f__9126__auto__.call(null);(statearr_30954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.t30889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (_30891){var self__ = this;
var _30891__$1 = this;return self__.meta30890;
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.t30889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function (_30891,meta30890__$1){var self__ = this;
var _30891__$1 = this;return (new clustermap.components.filters.tag_filter.t30889(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30814,self__.owner,self__.output_checker30821,self__.data,self__.input_schema30819,self__.output_schema30818,self__.input_checker30820,self__.G__30822,self__.map30817,self__.filter_spec,self__.validate__6034__auto__,self__.map30816,self__.id,self__.ufv__,meta30890__$1));
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
clustermap.components.filters.tag_filter.__GT_t30889 = ((function (owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821){
return (function __GT_t30889(component_spec__$1,component_filter_rq_chan__$1,constructor30814__$1,owner__$1,output_checker30821__$1,data__$1,input_schema30819__$1,output_schema30818__$1,input_checker30820__$1,G__30822__$1,map30817__$1,filter_spec__$1,validate__6034__auto____$1,map30816__$1,id__$1,ufv____$1,meta30890){return (new clustermap.components.filters.tag_filter.t30889(component_spec__$1,component_filter_rq_chan__$1,constructor30814__$1,owner__$1,output_checker30821__$1,data__$1,input_schema30819__$1,output_schema30818__$1,input_checker30820__$1,G__30822__$1,map30817__$1,filter_spec__$1,validate__6034__auto____$1,map30816__$1,id__$1,ufv____$1,meta30890));
});})(owner,component_filter_rq_chan,map30817,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
;
}
return (new clustermap.components.filters.tag_filter.t30889(component_spec,component_filter_rq_chan,constructor30814,owner,output_checker30821,data,input_schema30819,output_schema30818,input_checker30820,G__30822,map30817,filter_spec,validate__6034__auto__,map30816,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30978 = output_checker30821.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30978))
{var error__6036__auto___30979 = temp__4126__auto___30978;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30814","constructor30814",266987489,null),cljs.core.pr_str.call(null,error__6036__auto___30979)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30979,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30818,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30818,input_schema30819,input_checker30820,output_checker30821))
,schema.core.make_fn_schema.call(null,output_schema30818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30819], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30958){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30813,p__30955){var vec__30957 = p__30955;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30957,(0),null);return component_fnk__7881__auto___30958.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30813,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30813,var_args){
var p__30955 = null;if (arguments.length > 2) {
  p__30955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30813,p__30955);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30980){
var data__7882__auto__ = cljs.core.first(arglist__30980);
arglist__30980 = cljs.core.next(arglist__30980);
var owner30813 = cljs.core.first(arglist__30980);
var p__30955 = cljs.core.rest(arglist__30980);
return tag_filter_component__delegate(data__7882__auto__,owner30813,p__30955);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30958))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30815){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30815);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30815){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
