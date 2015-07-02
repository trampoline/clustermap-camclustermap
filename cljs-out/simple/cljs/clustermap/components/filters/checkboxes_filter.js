// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.checkboxes_filter');
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
clustermap.components.filters.checkboxes_filter.make_sequential = (function make_sequential(s){if((s == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,s))
{return s;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
/**
* return a map of options keyed by value
*/
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30700(s__30701){return (new cljs.core.LazySeq(null,(function (){var s__30701__$1 = s__30701;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30701__$1);if(temp__4126__auto__)
{var s__30701__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30701__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30701__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30703 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30702 = (0);while(true){
if((i__30702 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30702);cljs.core.chunk_append.call(null,b__30703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30704 = (i__30702 + (1));
i__30702 = G__30704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30703),iter__30700.call(null,cljs.core.chunk_rest.call(null,s__30701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30703),null);
}
} else
{var o = cljs.core.first.call(null,s__30701__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30700.call(null,cljs.core.rest.call(null,s__30701__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,options);
})());
});
/**
* given a combined filter, extract the set of option ids this represents
*/
clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter = (function extract_option_values_from_filter(options,f){var fs = cljs.core.set.call(null,clustermap.filters.de_or_filters.call(null,f));return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.call(null,((function (fs){
return (function (p1__30705_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30705_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30708 = options;var G__30708__$1 = (((G__30708 == null))?null:cljs.core.filter.call(null,((function (G__30708,values__$1){
return (function (p1__30706_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30706_SHARP_));
});})(G__30708,values__$1))
,G__30708));var G__30708__$2 = (((G__30708__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30708__$1));return G__30708__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30710,values){var map__30712 = p__30710;var map__30712__$1 = ((cljs.core.seq_QMARK_.call(null,map__30712))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);var component_spec = map__30712__$1;var options = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30712,map__30712__$1,component_spec,options,label){
return (function (p1__30709_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30709_SHARP_));
});})(values__$1,map__30712,map__30712__$1,component_spec,options,label))
,options);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* given a seq of option values set the filters.
* returns an updated filter-spec value, but doesn't update the cursor
*/
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30713,values){var map__30715 = p__30713;var map__30715__$1 = ((cljs.core.seq_QMARK_.call(null,map__30715))?cljs.core.apply.call(null,cljs.core.hash_map,map__30715):map__30715);var component_spec = map__30715__$1;var options = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30716){var map__30718 = p__30716;var map__30718__$1 = ((cljs.core.seq_QMARK_.call(null,map__30718))?cljs.core.apply.call(null,cljs.core.hash_map,map__30718):map__30718);var component_spec = map__30718__$1;var options = cljs.core.get.call(null,map__30718__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30718__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30719){var map__30721 = p__30719;var map__30721__$1 = ((cljs.core.seq_QMARK_.call(null,map__30721))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);var component_spec = map__30721__$1;var options = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30722 = schema.core.Any;var input_schema30723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30724 = schema.core.checker.call(null,input_schema30723);var output_checker30725 = schema.core.checker.call(null,output_schema30722);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function render_STAR_(G__30726){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30726], null);var temp__4126__auto___30762 = input_checker30724.call(null,args__6035__auto___30761);if(cljs.core.truth_(temp__4126__auto___30762))
{var error__6036__auto___30763 = temp__4126__auto___30762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30763,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30761,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30723,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30726;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30744 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30744))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30744)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30744))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function iter__30745(s__30746){return (new cljs.core.LazySeq(null,((function (attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (){var s__30746__$1 = s__30746;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30746__$1);if(temp__4126__auto__)
{var s__30746__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30746__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30746__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30748 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30747 = (0);while(true){
if((i__30747 < size__4376__auto__))
{var map__30751 = cljs.core._nth.call(null,c__4375__auto__,i__30747);var map__30751__$1 = ((cljs.core.seq_QMARK_.call(null,map__30751))?cljs.core.apply.call(null,cljs.core.hash_map,map__30751):map__30751);var filter = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30748,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30747,map__30751,map__30751__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30748,s__30746__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30747,map__30751,map__30751__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30748,s__30746__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30764 = (i__30747 + (1));
i__30747 = G__30764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30748),iter__30745.call(null,cljs.core.chunk_rest.call(null,s__30746__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30748),null);
}
} else
{var map__30752 = cljs.core.first.call(null,s__30746__$2);var map__30752__$1 = ((cljs.core.seq_QMARK_.call(null,map__30752))?cljs.core.apply.call(null,cljs.core.hash_map,map__30752):map__30752);var filter = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30752,map__30752__$1,filter,label__$1,value,s__30746__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30752,map__30752__$1,filter,label__$1,value,s__30746__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30745.call(null,cljs.core.rest.call(null,s__30746__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
,null,null));
});})(attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30744),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function iter__30753(s__30754){return (new cljs.core.LazySeq(null,((function (attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (){var s__30754__$1 = s__30754;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30754__$1);if(temp__4126__auto__)
{var s__30754__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30754__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30754__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30756 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30755 = (0);while(true){
if((i__30755 < size__4376__auto__))
{var map__30759 = cljs.core._nth.call(null,c__4375__auto__,i__30755);var map__30759__$1 = ((cljs.core.seq_QMARK_.call(null,map__30759))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);var filter = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30756,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30755,map__30759,map__30759__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30756,s__30754__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30755,map__30759,map__30759__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30756,s__30754__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30765 = (i__30755 + (1));
i__30755 = G__30765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30756),iter__30753.call(null,cljs.core.chunk_rest.call(null,s__30754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30756),null);
}
} else
{var map__30760 = cljs.core.first.call(null,s__30754__$2);var map__30760__$1 = ((cljs.core.seq_QMARK_.call(null,map__30760))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);var filter = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30760,map__30760__$1,filter,label__$1,value,s__30754__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30760,map__30760__$1,filter,label__$1,value,s__30754__$2,temp__4126__auto__,attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30753.call(null,cljs.core.rest.call(null,s__30754__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
,null,null));
});})(attrs30744,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30766 = output_checker30725.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30766))
{var error__6036__auto___30767 = temp__4126__auto___30766;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30767)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30767,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30722,input_schema30723,input_checker30724,output_checker30725))
,schema.core.make_fn_schema.call(null,output_schema30722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30723], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30913 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30773 = schema.core.Any;var input_schema30774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30771","map30771",1235909923,null))], null);var input_checker30775 = schema.core.checker.call(null,input_schema30774);var output_checker30776 = schema.core.checker.call(null,output_schema30773);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function constructor30769(G__30777){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30777], null);var temp__4126__auto___30915 = input_checker30775.call(null,args__6035__auto___30914);if(cljs.core.truth_(temp__4126__auto___30915))
{var error__6036__auto___30916 = temp__4126__auto___30915;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30769","constructor30769",-904874349,null),cljs.core.pr_str.call(null,error__6036__auto___30916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30916,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30914,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30771 = G__30777;while(true){
if(cljs.core.map_QMARK_.call(null,map30771))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30771)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30771,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30772 = plumbing.fnk.schema.safe_get.call(null,map30771,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30772,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30771,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30844 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30844 = (function (component_spec,component_filter_rq_chan,input_schema30774,input_checker30775,map30771,owner,data,output_schema30773,filter_spec,G__30777,map30772,constructor30769,validate__6034__auto__,output_checker30776,id,ufv__,meta30845){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30774 = input_schema30774;
this.input_checker30775 = input_checker30775;
this.map30771 = map30771;
this.owner = owner;
this.data = data;
this.output_schema30773 = output_schema30773;
this.filter_spec = filter_spec;
this.G__30777 = G__30777;
this.map30772 = map30772;
this.constructor30769 = constructor30769;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30776 = output_checker30776;
this.id = id;
this.ufv__ = ufv__;
this.meta30845 = meta30845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30844.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30844.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30844";
clustermap.components.filters.checkboxes_filter.t30844.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30844");
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30844.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (state_30884){var state_val_30885 = (state_30884[(1)]);if((state_val_30885 === (7)))
{var inst_30875 = (state_30884[(2)]);var state_30884__$1 = state_30884;if(cljs.core.truth_(inst_30875))
{var statearr_30886_30917 = state_30884__$1;(statearr_30886_30917[(1)] = (11));
} else
{var statearr_30887_30918 = state_30884__$1;(statearr_30887_30918[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (1)))
{var state_30884__$1 = state_30884;var statearr_30888_30919 = state_30884__$1;(statearr_30888_30919[(2)] = null);
(statearr_30888_30919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (4)))
{var inst_30849 = (state_30884[(7)]);var inst_30849__$1 = (state_30884[(2)]);var state_30884__$1 = (function (){var statearr_30889 = state_30884;(statearr_30889[(7)] = inst_30849__$1);
return statearr_30889;
})();if(cljs.core.truth_(inst_30849__$1))
{var statearr_30890_30920 = state_30884__$1;(statearr_30890_30920[(1)] = (5));
} else
{var statearr_30891_30921 = state_30884__$1;(statearr_30891_30921[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (13)))
{var inst_30880 = (state_30884[(2)]);var state_30884__$1 = state_30884;var statearr_30892_30922 = state_30884__$1;(statearr_30892_30922[(2)] = inst_30880);
(statearr_30892_30922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (6)))
{var state_30884__$1 = state_30884;var statearr_30893_30923 = state_30884__$1;(statearr_30893_30923[(2)] = null);
(statearr_30893_30923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (3)))
{var inst_30882 = (state_30884[(2)]);var state_30884__$1 = state_30884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30884__$1,inst_30882);
} else
{if((state_val_30885 === (12)))
{var state_30884__$1 = state_30884;var statearr_30894_30924 = state_30884__$1;(statearr_30894_30924[(2)] = null);
(statearr_30894_30924[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (2)))
{var state_30884__$1 = state_30884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30884__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30885 === (11)))
{var state_30884__$1 = state_30884;var statearr_30895_30925 = state_30884__$1;(statearr_30895_30925[(2)] = null);
(statearr_30895_30925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (9)))
{var inst_30855 = (state_30884[(8)]);var state_30884__$1 = state_30884;var statearr_30896_30926 = state_30884__$1;(statearr_30896_30926[(2)] = inst_30855);
(statearr_30896_30926[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (5)))
{var inst_30849 = (state_30884[(7)]);var inst_30855 = (state_30884[(8)]);var inst_30852 = cljs.core.nth.call(null,inst_30849,(0),null);var inst_30853 = cljs.core.nth.call(null,inst_30849,(1),null);var inst_30855__$1 = om.core.get_props.call(null,self__.owner);var inst_30856 = cljs.core.seq_QMARK_.call(null,inst_30855__$1);var state_30884__$1 = (function (){var statearr_30897 = state_30884;(statearr_30897[(8)] = inst_30855__$1);
(statearr_30897[(9)] = inst_30853);
(statearr_30897[(10)] = inst_30852);
return statearr_30897;
})();if(inst_30856)
{var statearr_30898_30927 = state_30884__$1;(statearr_30898_30927[(1)] = (8));
} else
{var statearr_30899_30928 = state_30884__$1;(statearr_30899_30928[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (10)))
{var inst_30853 = (state_30884[(9)]);var inst_30861 = (state_30884[(2)]);var inst_30862 = cljs.core.get.call(null,inst_30861,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30863 = cljs.core.get.call(null,inst_30861,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30864 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30865 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30853];var inst_30866 = (new cljs.core.PersistentVector(null,3,(5),inst_30864,inst_30865,null));var inst_30867 = cljs.core.clj__GT_js.call(null,inst_30866);var inst_30868 = console.log(inst_30867);var inst_30869 = cljs.core.deref.call(null,inst_30863);var inst_30870 = cljs.core.deref.call(null,inst_30862);var inst_30871 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30869,inst_30870,inst_30853);var inst_30872 = om.core.update_BANG_.call(null,inst_30863,inst_30871);var state_30884__$1 = (function (){var statearr_30900 = state_30884;(statearr_30900[(11)] = inst_30872);
(statearr_30900[(12)] = inst_30868);
return statearr_30900;
})();var statearr_30901_30929 = state_30884__$1;(statearr_30901_30929[(2)] = true);
(statearr_30901_30929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30885 === (8)))
{var inst_30855 = (state_30884[(8)]);var inst_30858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30855);var state_30884__$1 = state_30884;var statearr_30902_30930 = state_30884__$1;(statearr_30902_30930[(2)] = inst_30858);
(statearr_30902_30930[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30906 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30906[(0)] = state_machine__9111__auto__);
(statearr_30906[(1)] = (1));
return statearr_30906;
});
var state_machine__9111__auto____1 = (function (state_30884){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30884);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30907){if((e30907 instanceof Object))
{var ex__9114__auto__ = e30907;var statearr_30908_30931 = state_30884;(statearr_30908_30931[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30932 = state_30884;
state_30884 = G__30932;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30884){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
})();var state__9127__auto__ = (function (){var statearr_30909 = f__9126__auto__.call(null);(statearr_30909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.t30844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (_30846){var self__ = this;
var _30846__$1 = this;return self__.meta30845;
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.t30844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function (_30846,meta30845__$1){var self__ = this;
var _30846__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30844(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30774,self__.input_checker30775,self__.map30771,self__.owner,self__.data,self__.output_schema30773,self__.filter_spec,self__.G__30777,self__.map30772,self__.constructor30769,self__.validate__6034__auto__,self__.output_checker30776,self__.id,self__.ufv__,meta30845__$1));
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
clustermap.components.filters.checkboxes_filter.__GT_t30844 = ((function (owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776){
return (function __GT_t30844(component_spec__$1,component_filter_rq_chan__$1,input_schema30774__$1,input_checker30775__$1,map30771__$1,owner__$1,data__$1,output_schema30773__$1,filter_spec__$1,G__30777__$1,map30772__$1,constructor30769__$1,validate__6034__auto____$1,output_checker30776__$1,id__$1,ufv____$1,meta30845){return (new clustermap.components.filters.checkboxes_filter.t30844(component_spec__$1,component_filter_rq_chan__$1,input_schema30774__$1,input_checker30775__$1,map30771__$1,owner__$1,data__$1,output_schema30773__$1,filter_spec__$1,G__30777__$1,map30772__$1,constructor30769__$1,validate__6034__auto____$1,output_checker30776__$1,id__$1,ufv____$1,meta30845));
});})(owner,component_filter_rq_chan,map30772,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30844(component_spec,component_filter_rq_chan,input_schema30774,input_checker30775,map30771,owner,data,output_schema30773,filter_spec,G__30777,map30772,constructor30769,validate__6034__auto__,output_checker30776,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30933 = output_checker30776.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30933))
{var error__6036__auto___30934 = temp__4126__auto___30933;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30769","constructor30769",-904874349,null),cljs.core.pr_str.call(null,error__6036__auto___30934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30934,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30773,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30773,input_schema30774,input_checker30775,output_checker30776))
,schema.core.make_fn_schema.call(null,output_schema30773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30774], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30913){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30768,p__30910){var vec__30912 = p__30910;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30912,(0),null);return component_fnk__7881__auto___30913.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30768,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30768,var_args){
var p__30910 = null;if (arguments.length > 2) {
  p__30910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30768,p__30910);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30935){
var data__7882__auto__ = cljs.core.first(arglist__30935);
arglist__30935 = cljs.core.next(arglist__30935);
var owner30768 = cljs.core.first(arglist__30935);
var p__30910 = cljs.core.rest(arglist__30935);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30768,p__30910);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30913))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30770){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30770);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30770){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
