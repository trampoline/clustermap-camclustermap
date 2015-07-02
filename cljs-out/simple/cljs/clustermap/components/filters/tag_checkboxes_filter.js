// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_checkboxes_filter');
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
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30458(s__30459){return (new cljs.core.LazySeq(null,(function (){var s__30459__$1 = s__30459;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30459__$1);if(temp__4126__auto__)
{var s__30459__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30459__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30459__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30461 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30460 = (0);while(true){
if((i__30460 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30460);cljs.core.chunk_append.call(null,b__30461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30462 = (i__30460 + (1));
i__30460 = G__30462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30461),iter__30458.call(null,cljs.core.chunk_rest.call(null,s__30459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30461),null);
}
} else
{var t = cljs.core.first.call(null,s__30459__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30458.call(null,cljs.core.rest.call(null,s__30459__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,tags);
})());
});
/**
* given a single option filter, extract the option id this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter = (function extract_tag_value_from_filter(f){return cljs.core.get_in.call(null,f,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));
});
/**
* given a combined option filter, extract the option ids this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters = (function extract_tag_values_from_filters(components,id){var fs = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter,fs)));
});
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30463_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30463_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30464,value){var map__30466 = p__30464;var map__30466__$1 = ((cljs.core.seq_QMARK_.call(null,map__30466))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466):map__30466);var component_spec = map__30466__$1;var tags = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_checkboxes_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30467_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30467_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30469,values){var map__30471 = p__30469;var map__30471__$1 = ((cljs.core.seq_QMARK_.call(null,map__30471))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);var component_spec = map__30471__$1;var sorted = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30471,map__30471__$1,component_spec,sorted,tags,label){
return (function (p1__30468_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30468_SHARP_));
});})(values__$1,map__30471,map__30471__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30472,values){var map__30474 = p__30472;var map__30474__$1 = ((cljs.core.seq_QMARK_.call(null,map__30474))?cljs.core.apply.call(null,cljs.core.hash_map,map__30474):map__30474);var component_spec = map__30474__$1;var tags = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30475){var map__30477 = p__30475;var map__30477__$1 = ((cljs.core.seq_QMARK_.call(null,map__30477))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);var component_spec = map__30477__$1;var tags = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30478){var map__30480 = p__30478;var map__30480__$1 = ((cljs.core.seq_QMARK_.call(null,map__30480))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);var component_spec = map__30480__$1;var tags = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30482 = schema.core.Any;var input_schema30483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30481","map30481",1796897001,null))], null);var input_checker30484 = schema.core.checker.call(null,input_schema30483);var output_checker30485 = schema.core.checker.call(null,output_schema30482);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function render_STAR_(G__30486){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30486], null);var temp__4126__auto___30522 = input_checker30484.call(null,args__6035__auto___30521);if(cljs.core.truth_(temp__4126__auto___30522))
{var error__6036__auto___30523 = temp__4126__auto___30522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30523,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30521,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30483,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30481 = G__30486;while(true){
if(cljs.core.map_QMARK_.call(null,map30481))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30481)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30481,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30481,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30504 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30504))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30504)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30504))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function iter__30505(s__30506){return (new cljs.core.LazySeq(null,((function (attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (){var s__30506__$1 = s__30506;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30506__$1);if(temp__4126__auto__)
{var s__30506__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30506__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30506__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30508 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30507 = (0);while(true){
if((i__30507 < size__4376__auto__))
{var map__30511 = cljs.core._nth.call(null,c__4375__auto__,i__30507);var map__30511__$1 = ((cljs.core.seq_QMARK_.call(null,map__30511))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);var label__$1 = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30508,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30507,map__30511,map__30511__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30508,s__30506__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30507,map__30511,map__30511__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30508,s__30506__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30524 = (i__30507 + (1));
i__30507 = G__30524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30508),iter__30505.call(null,cljs.core.chunk_rest.call(null,s__30506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30508),null);
}
} else
{var map__30512 = cljs.core.first.call(null,s__30506__$2);var map__30512__$1 = ((cljs.core.seq_QMARK_.call(null,map__30512))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);var label__$1 = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30512,map__30512__$1,label__$1,value,s__30506__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30512,map__30512__$1,label__$1,value,s__30506__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30505.call(null,cljs.core.rest.call(null,s__30506__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
,null,null));
});})(attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30504),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function iter__30513(s__30514){return (new cljs.core.LazySeq(null,((function (attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (){var s__30514__$1 = s__30514;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30514__$1);if(temp__4126__auto__)
{var s__30514__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30514__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30514__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30516 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30515 = (0);while(true){
if((i__30515 < size__4376__auto__))
{var map__30519 = cljs.core._nth.call(null,c__4375__auto__,i__30515);var map__30519__$1 = ((cljs.core.seq_QMARK_.call(null,map__30519))?cljs.core.apply.call(null,cljs.core.hash_map,map__30519):map__30519);var label__$1 = cljs.core.get.call(null,map__30519__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30519__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30516,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30515,map__30519,map__30519__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30516,s__30514__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30515,map__30519,map__30519__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30516,s__30514__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30525 = (i__30515 + (1));
i__30515 = G__30525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30516),iter__30513.call(null,cljs.core.chunk_rest.call(null,s__30514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30516),null);
}
} else
{var map__30520 = cljs.core.first.call(null,s__30514__$2);var map__30520__$1 = ((cljs.core.seq_QMARK_.call(null,map__30520))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);var label__$1 = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30520,map__30520__$1,label__$1,value,s__30514__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30520,map__30520__$1,label__$1,value,s__30514__$2,temp__4126__auto__,attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30513.call(null,cljs.core.rest.call(null,s__30514__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
,null,null));
});})(attrs30504,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30526 = output_checker30485.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30526))
{var error__6036__auto___30527 = temp__4126__auto___30526;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30527)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30527,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30482,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30482,input_schema30483,input_checker30484,output_checker30485))
,schema.core.make_fn_schema.call(null,output_schema30482,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30483], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30673 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30533 = schema.core.Any;var input_schema30534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30531","map30531",-327482236,null))], null);var input_checker30535 = schema.core.checker.call(null,input_schema30534);var output_checker30536 = schema.core.checker.call(null,output_schema30533);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function constructor30529(G__30537){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30537], null);var temp__4126__auto___30675 = input_checker30535.call(null,args__6035__auto___30674);if(cljs.core.truth_(temp__4126__auto___30675))
{var error__6036__auto___30676 = temp__4126__auto___30675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30529","constructor30529",1959194163,null),cljs.core.pr_str.call(null,error__6036__auto___30676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30676,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30674,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30531 = G__30537;while(true){
if(cljs.core.map_QMARK_.call(null,map30531))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30531)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30531,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30532 = plumbing.fnk.schema.safe_get.call(null,map30531,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30532,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30531,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30604 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30604 = (function (component_spec,component_filter_rq_chan,map30531,owner,output_schema30533,G__30537,data,input_checker30535,filter_spec,input_schema30534,constructor30529,map30532,validate__6034__auto__,id,output_checker30536,ufv__,meta30605){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30531 = map30531;
this.owner = owner;
this.output_schema30533 = output_schema30533;
this.G__30537 = G__30537;
this.data = data;
this.input_checker30535 = input_checker30535;
this.filter_spec = filter_spec;
this.input_schema30534 = input_schema30534;
this.constructor30529 = constructor30529;
this.map30532 = map30532;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker30536 = output_checker30536;
this.ufv__ = ufv__;
this.meta30605 = meta30605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30604.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30604.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30604";
clustermap.components.filters.tag_checkboxes_filter.t30604.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30604");
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (state_30644){var state_val_30645 = (state_30644[(1)]);if((state_val_30645 === (7)))
{var inst_30635 = (state_30644[(2)]);var state_30644__$1 = state_30644;if(cljs.core.truth_(inst_30635))
{var statearr_30646_30677 = state_30644__$1;(statearr_30646_30677[(1)] = (11));
} else
{var statearr_30647_30678 = state_30644__$1;(statearr_30647_30678[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (1)))
{var state_30644__$1 = state_30644;var statearr_30648_30679 = state_30644__$1;(statearr_30648_30679[(2)] = null);
(statearr_30648_30679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (4)))
{var inst_30609 = (state_30644[(7)]);var inst_30609__$1 = (state_30644[(2)]);var state_30644__$1 = (function (){var statearr_30649 = state_30644;(statearr_30649[(7)] = inst_30609__$1);
return statearr_30649;
})();if(cljs.core.truth_(inst_30609__$1))
{var statearr_30650_30680 = state_30644__$1;(statearr_30650_30680[(1)] = (5));
} else
{var statearr_30651_30681 = state_30644__$1;(statearr_30651_30681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (13)))
{var inst_30640 = (state_30644[(2)]);var state_30644__$1 = state_30644;var statearr_30652_30682 = state_30644__$1;(statearr_30652_30682[(2)] = inst_30640);
(statearr_30652_30682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (6)))
{var state_30644__$1 = state_30644;var statearr_30653_30683 = state_30644__$1;(statearr_30653_30683[(2)] = null);
(statearr_30653_30683[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (3)))
{var inst_30642 = (state_30644[(2)]);var state_30644__$1 = state_30644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30644__$1,inst_30642);
} else
{if((state_val_30645 === (12)))
{var state_30644__$1 = state_30644;var statearr_30654_30684 = state_30644__$1;(statearr_30654_30684[(2)] = null);
(statearr_30654_30684[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (2)))
{var state_30644__$1 = state_30644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30644__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30645 === (11)))
{var state_30644__$1 = state_30644;var statearr_30655_30685 = state_30644__$1;(statearr_30655_30685[(2)] = null);
(statearr_30655_30685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (9)))
{var inst_30615 = (state_30644[(8)]);var state_30644__$1 = state_30644;var statearr_30656_30686 = state_30644__$1;(statearr_30656_30686[(2)] = inst_30615);
(statearr_30656_30686[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (5)))
{var inst_30609 = (state_30644[(7)]);var inst_30615 = (state_30644[(8)]);var inst_30612 = cljs.core.nth.call(null,inst_30609,(0),null);var inst_30613 = cljs.core.nth.call(null,inst_30609,(1),null);var inst_30615__$1 = om.core.get_props.call(null,self__.owner);var inst_30616 = cljs.core.seq_QMARK_.call(null,inst_30615__$1);var state_30644__$1 = (function (){var statearr_30657 = state_30644;(statearr_30657[(9)] = inst_30612);
(statearr_30657[(10)] = inst_30613);
(statearr_30657[(8)] = inst_30615__$1);
return statearr_30657;
})();if(inst_30616)
{var statearr_30658_30687 = state_30644__$1;(statearr_30658_30687[(1)] = (8));
} else
{var statearr_30659_30688 = state_30644__$1;(statearr_30659_30688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (10)))
{var inst_30613 = (state_30644[(10)]);var inst_30621 = (state_30644[(2)]);var inst_30622 = cljs.core.get.call(null,inst_30621,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30623 = cljs.core.get.call(null,inst_30621,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30624 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30625 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30613];var inst_30626 = (new cljs.core.PersistentVector(null,3,(5),inst_30624,inst_30625,null));var inst_30627 = cljs.core.clj__GT_js.call(null,inst_30626);var inst_30628 = console.log(inst_30627);var inst_30629 = cljs.core.deref.call(null,inst_30622);var inst_30630 = cljs.core.deref.call(null,inst_30623);var inst_30631 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30629,inst_30630,inst_30613);var inst_30632 = om.core.update_BANG_.call(null,inst_30622,inst_30631);var state_30644__$1 = (function (){var statearr_30660 = state_30644;(statearr_30660[(11)] = inst_30632);
(statearr_30660[(12)] = inst_30628);
return statearr_30660;
})();var statearr_30661_30689 = state_30644__$1;(statearr_30661_30689[(2)] = true);
(statearr_30661_30689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30645 === (8)))
{var inst_30615 = (state_30644[(8)]);var inst_30618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30615);var state_30644__$1 = state_30644;var statearr_30662_30690 = state_30644__$1;(statearr_30662_30690[(2)] = inst_30618);
(statearr_30662_30690[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30666[(0)] = state_machine__9111__auto__);
(statearr_30666[(1)] = (1));
return statearr_30666;
});
var state_machine__9111__auto____1 = (function (state_30644){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30644);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30667){if((e30667 instanceof Object))
{var ex__9114__auto__ = e30667;var statearr_30668_30691 = state_30644;(statearr_30668_30691[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30667;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30692 = state_30644;
state_30644 = G__30692;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30644){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
})();var state__9127__auto__ = (function (){var statearr_30669 = f__9126__auto__.call(null);(statearr_30669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (_30606){var self__ = this;
var _30606__$1 = this;return self__.meta30605;
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.t30604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function (_30606,meta30605__$1){var self__ = this;
var _30606__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30604(self__.component_spec,self__.component_filter_rq_chan,self__.map30531,self__.owner,self__.output_schema30533,self__.G__30537,self__.data,self__.input_checker30535,self__.filter_spec,self__.input_schema30534,self__.constructor30529,self__.map30532,self__.validate__6034__auto__,self__.id,self__.output_checker30536,self__.ufv__,meta30605__$1));
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30604 = ((function (owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536){
return (function __GT_t30604(component_spec__$1,component_filter_rq_chan__$1,map30531__$1,owner__$1,output_schema30533__$1,G__30537__$1,data__$1,input_checker30535__$1,filter_spec__$1,input_schema30534__$1,constructor30529__$1,map30532__$1,validate__6034__auto____$1,id__$1,output_checker30536__$1,ufv____$1,meta30605){return (new clustermap.components.filters.tag_checkboxes_filter.t30604(component_spec__$1,component_filter_rq_chan__$1,map30531__$1,owner__$1,output_schema30533__$1,G__30537__$1,data__$1,input_checker30535__$1,filter_spec__$1,input_schema30534__$1,constructor30529__$1,map30532__$1,validate__6034__auto____$1,id__$1,output_checker30536__$1,ufv____$1,meta30605));
});})(owner,component_filter_rq_chan,map30532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30604(component_spec,component_filter_rq_chan,map30531,owner,output_schema30533,G__30537,data,input_checker30535,filter_spec,input_schema30534,constructor30529,map30532,validate__6034__auto__,id,output_checker30536,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30693 = output_checker30536.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30693))
{var error__6036__auto___30694 = temp__4126__auto___30693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30529","constructor30529",1959194163,null),cljs.core.pr_str.call(null,error__6036__auto___30694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30694,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30533,input_schema30534,input_checker30535,output_checker30536))
,schema.core.make_fn_schema.call(null,output_schema30533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30534], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30673){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30528,p__30670){var vec__30672 = p__30670;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30672,(0),null);return component_fnk__7881__auto___30673.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30528,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30528,var_args){
var p__30670 = null;if (arguments.length > 2) {
  p__30670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30528,p__30670);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30695){
var data__7882__auto__ = cljs.core.first(arglist__30695);
arglist__30695 = cljs.core.next(arglist__30695);
var owner30528 = cljs.core.first(arglist__30695);
var p__30670 = cljs.core.rest(arglist__30695);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30528,p__30670);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30673))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30530){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30530);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30530){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
