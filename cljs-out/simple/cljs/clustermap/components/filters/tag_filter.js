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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30936_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30936_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30937,value){var map__30939 = p__30937;var map__30939__$1 = ((cljs.core.seq_QMARK_.call(null,map__30939))?cljs.core.apply.call(null,cljs.core.hash_map,map__30939):map__30939);var component_spec = map__30939__$1;var tags = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30940,value){var map__30942 = p__30940;var map__30942__$1 = ((cljs.core.seq_QMARK_.call(null,map__30942))?cljs.core.apply.call(null,cljs.core.hash_map,map__30942):map__30942);var component_spec = map__30942__$1;var tags = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30943,value){var map__30945 = p__30943;var map__30945__$1 = ((cljs.core.seq_QMARK_.call(null,map__30945))?cljs.core.apply.call(null,cljs.core.hash_map,map__30945):map__30945);var component_spec = map__30945__$1;var tags = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30946_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30946_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30947_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30947_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30949 = schema.core.Any;var input_schema30950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30948","map30948",-770052417,null))], null);var input_checker30951 = schema.core.checker.call(null,input_schema30950);var output_checker30952 = schema.core.checker.call(null,output_schema30949);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952){
return (function render_STAR_(G__30953){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30953], null);var temp__4126__auto___30971 = input_checker30951.call(null,args__6035__auto___30970);if(cljs.core.truth_(temp__4126__auto___30971))
{var error__6036__auto___30972 = temp__4126__auto___30971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30972,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30970,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30950,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30948 = G__30953;while(true){
if(cljs.core.map_QMARK_.call(null,map30948))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30948)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30948,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30948,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952){
return (function iter__30962(s__30963){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952){
return (function (){var s__30963__$1 = s__30963;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30963__$1);if(temp__4126__auto__)
{var s__30963__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30963__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30963__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30965 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30964 = (0);while(true){
if((i__30964 < size__4376__auto__))
{var map__30968 = cljs.core._nth.call(null,c__4375__auto__,i__30964);var map__30968__$1 = ((cljs.core.seq_QMARK_.call(null,map__30968))?cljs.core.apply.call(null,cljs.core.hash_map,map__30968):map__30968);var label__$1 = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30965,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30973 = (i__30964 + (1));
i__30964 = G__30973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30965),iter__30962.call(null,cljs.core.chunk_rest.call(null,s__30963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30965),null);
}
} else
{var map__30969 = cljs.core.first.call(null,s__30963__$2);var map__30969__$1 = ((cljs.core.seq_QMARK_.call(null,map__30969))?cljs.core.apply.call(null,cljs.core.hash_map,map__30969):map__30969);var label__$1 = cljs.core.get.call(null,map__30969__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30969__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30962.call(null,cljs.core.rest.call(null,s__30963__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30974 = output_checker30952.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30974))
{var error__6036__auto___30975 = temp__4126__auto___30974;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30975)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30975,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30949,input_schema30950,input_checker30951,output_checker30952))
,schema.core.make_fn_schema.call(null,output_schema30949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30950], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31121 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30981 = schema.core.Any;var input_schema30982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30979","map30979",1774853893,null))], null);var input_checker30983 = schema.core.checker.call(null,input_schema30982);var output_checker30984 = schema.core.checker.call(null,output_schema30981);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function constructor30977(G__30985){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30985], null);var temp__4126__auto___31123 = input_checker30983.call(null,args__6035__auto___31122);if(cljs.core.truth_(temp__4126__auto___31123))
{var error__6036__auto___31124 = temp__4126__auto___31123;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30977","constructor30977",1083565743,null),cljs.core.pr_str.call(null,error__6036__auto___31124)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31124,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31122,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30982,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30979 = G__30985;while(true){
if(cljs.core.map_QMARK_.call(null,map30979))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30979)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30979,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30980 = plumbing.fnk.schema.safe_get.call(null,map30979,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30980,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30979,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31052 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31052 = (function (component_spec,component_filter_rq_chan,output_schema30981,owner,map30979,data,input_schema30982,filter_spec,constructor30977,G__30985,output_checker30984,map30980,input_checker30983,validate__6034__auto__,id,ufv__,meta31053){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema30981 = output_schema30981;
this.owner = owner;
this.map30979 = map30979;
this.data = data;
this.input_schema30982 = input_schema30982;
this.filter_spec = filter_spec;
this.constructor30977 = constructor30977;
this.G__30985 = G__30985;
this.output_checker30984 = output_checker30984;
this.map30980 = map30980;
this.input_checker30983 = input_checker30983;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta31053 = meta31053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31052.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31052.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31052";
clustermap.components.filters.tag_filter.t31052.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31052");
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31052.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (state_31092){var state_val_31093 = (state_31092[(1)]);if((state_val_31093 === (7)))
{var inst_31083 = (state_31092[(2)]);var state_31092__$1 = state_31092;if(cljs.core.truth_(inst_31083))
{var statearr_31094_31125 = state_31092__$1;(statearr_31094_31125[(1)] = (11));
} else
{var statearr_31095_31126 = state_31092__$1;(statearr_31095_31126[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (1)))
{var state_31092__$1 = state_31092;var statearr_31096_31127 = state_31092__$1;(statearr_31096_31127[(2)] = null);
(statearr_31096_31127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (4)))
{var inst_31057 = (state_31092[(7)]);var inst_31057__$1 = (state_31092[(2)]);var state_31092__$1 = (function (){var statearr_31097 = state_31092;(statearr_31097[(7)] = inst_31057__$1);
return statearr_31097;
})();if(cljs.core.truth_(inst_31057__$1))
{var statearr_31098_31128 = state_31092__$1;(statearr_31098_31128[(1)] = (5));
} else
{var statearr_31099_31129 = state_31092__$1;(statearr_31099_31129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (13)))
{var inst_31088 = (state_31092[(2)]);var state_31092__$1 = state_31092;var statearr_31100_31130 = state_31092__$1;(statearr_31100_31130[(2)] = inst_31088);
(statearr_31100_31130[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (6)))
{var state_31092__$1 = state_31092;var statearr_31101_31131 = state_31092__$1;(statearr_31101_31131[(2)] = null);
(statearr_31101_31131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (3)))
{var inst_31090 = (state_31092[(2)]);var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31092__$1,inst_31090);
} else
{if((state_val_31093 === (12)))
{var state_31092__$1 = state_31092;var statearr_31102_31132 = state_31092__$1;(statearr_31102_31132[(2)] = null);
(statearr_31102_31132[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (2)))
{var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31093 === (11)))
{var state_31092__$1 = state_31092;var statearr_31103_31133 = state_31092__$1;(statearr_31103_31133[(2)] = null);
(statearr_31103_31133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (9)))
{var inst_31063 = (state_31092[(8)]);var state_31092__$1 = state_31092;var statearr_31104_31134 = state_31092__$1;(statearr_31104_31134[(2)] = inst_31063);
(statearr_31104_31134[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (5)))
{var inst_31057 = (state_31092[(7)]);var inst_31063 = (state_31092[(8)]);var inst_31060 = cljs.core.nth.call(null,inst_31057,(0),null);var inst_31061 = cljs.core.nth.call(null,inst_31057,(1),null);var inst_31063__$1 = om.core.get_props.call(null,self__.owner);var inst_31064 = cljs.core.seq_QMARK_.call(null,inst_31063__$1);var state_31092__$1 = (function (){var statearr_31105 = state_31092;(statearr_31105[(9)] = inst_31060);
(statearr_31105[(10)] = inst_31061);
(statearr_31105[(8)] = inst_31063__$1);
return statearr_31105;
})();if(inst_31064)
{var statearr_31106_31135 = state_31092__$1;(statearr_31106_31135[(1)] = (8));
} else
{var statearr_31107_31136 = state_31092__$1;(statearr_31107_31136[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (10)))
{var inst_31061 = (state_31092[(10)]);var inst_31069 = (state_31092[(2)]);var inst_31070 = cljs.core.get.call(null,inst_31069,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31071 = cljs.core.get.call(null,inst_31069,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31072 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31073 = ["TAG-FILTER-RQ",self__.id,inst_31061];var inst_31074 = (new cljs.core.PersistentVector(null,3,(5),inst_31072,inst_31073,null));var inst_31075 = cljs.core.clj__GT_js.call(null,inst_31074);var inst_31076 = console.log(inst_31075);var inst_31077 = cljs.core.deref.call(null,inst_31070);var inst_31078 = cljs.core.deref.call(null,inst_31071);var inst_31079 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31077,inst_31078,inst_31061);var inst_31080 = om.core.update_BANG_.call(null,inst_31070,inst_31079);var state_31092__$1 = (function (){var statearr_31108 = state_31092;(statearr_31108[(11)] = inst_31076);
(statearr_31108[(12)] = inst_31080);
return statearr_31108;
})();var statearr_31109_31137 = state_31092__$1;(statearr_31109_31137[(2)] = true);
(statearr_31109_31137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31093 === (8)))
{var inst_31063 = (state_31092[(8)]);var inst_31066 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31063);var state_31092__$1 = state_31092;var statearr_31110_31138 = state_31092__$1;(statearr_31110_31138[(2)] = inst_31066);
(statearr_31110_31138[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31114 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31114[(0)] = state_machine__9111__auto__);
(statearr_31114[(1)] = (1));
return statearr_31114;
});
var state_machine__9111__auto____1 = (function (state_31092){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31092);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31115){if((e31115 instanceof Object))
{var ex__9114__auto__ = e31115;var statearr_31116_31139 = state_31092;(statearr_31116_31139[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31140 = state_31092;
state_31092 = G__31140;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31092){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
})();var state__9127__auto__ = (function (){var statearr_31117 = f__9126__auto__.call(null);(statearr_31117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.t31052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (_31054){var self__ = this;
var _31054__$1 = this;return self__.meta31053;
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.t31052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (_31054,meta31053__$1){var self__ = this;
var _31054__$1 = this;return (new clustermap.components.filters.tag_filter.t31052(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema30981,self__.owner,self__.map30979,self__.data,self__.input_schema30982,self__.filter_spec,self__.constructor30977,self__.G__30985,self__.output_checker30984,self__.map30980,self__.input_checker30983,self__.validate__6034__auto__,self__.id,self__.ufv__,meta31053__$1));
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
clustermap.components.filters.tag_filter.__GT_t31052 = ((function (owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function __GT_t31052(component_spec__$1,component_filter_rq_chan__$1,output_schema30981__$1,owner__$1,map30979__$1,data__$1,input_schema30982__$1,filter_spec__$1,constructor30977__$1,G__30985__$1,output_checker30984__$1,map30980__$1,input_checker30983__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31053){return (new clustermap.components.filters.tag_filter.t31052(component_spec__$1,component_filter_rq_chan__$1,output_schema30981__$1,owner__$1,map30979__$1,data__$1,input_schema30982__$1,filter_spec__$1,constructor30977__$1,G__30985__$1,output_checker30984__$1,map30980__$1,input_checker30983__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31053));
});})(owner,component_filter_rq_chan,map30980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
;
}
return (new clustermap.components.filters.tag_filter.t31052(component_spec,component_filter_rq_chan,output_schema30981,owner,map30979,data,input_schema30982,filter_spec,constructor30977,G__30985,output_checker30984,map30980,input_checker30983,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31141 = output_checker30984.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31141))
{var error__6036__auto___31142 = temp__4126__auto___31141;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30977","constructor30977",1083565743,null),cljs.core.pr_str.call(null,error__6036__auto___31142)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31142,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
,schema.core.make_fn_schema.call(null,output_schema30981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30982], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31121){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30976,p__31118){var vec__31120 = p__31118;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31120,(0),null);return component_fnk__7881__auto___31121.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30976,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30976,var_args){
var p__31118 = null;if (arguments.length > 2) {
  p__31118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30976,p__31118);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31143){
var data__7882__auto__ = cljs.core.first(arglist__31143);
arglist__31143 = cljs.core.next(arglist__31143);
var owner30976 = cljs.core.first(arglist__31143);
var p__31118 = cljs.core.rest(arglist__31143);
return tag_filter_component__delegate(data__7882__auto__,owner30976,p__31118);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31121))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30978){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30978);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30978){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
