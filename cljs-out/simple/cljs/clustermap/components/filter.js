// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.external_filter');
goog.require('clustermap.components.filters.tag_filter');
goog.require('plumbing.core');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('schema.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('sablono.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('clustermap.components.filters.external_filter');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.components.filters.tag_filter');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
/**
* delegate to filter-component type parsers for each fragment param
* which matches a component id
*/
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30006){var map__30008 = p__30006;var map__30008__$1 = ((cljs.core.seq_QMARK_.call(null,map__30008))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);var filter_spec = map__30008__$1;var component_descrs = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30009){var map__30011 = p__30009;var map__30011__$1 = ((cljs.core.seq_QMARK_.call(null,map__30011))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);var filter_spec = map__30011__$1;var component_descrs = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30012,component_filter_rq_chan){var map__30017 = p__30012;var map__30017__$1 = ((cljs.core.seq_QMARK_.call(null,map__30017))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);var component_spec = map__30017__$1;var type = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30018 = cljs.core._EQ_;var expr__30019 = type;if(cljs.core.truth_(pred__30018.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30019)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30018.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30019)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30018.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30019)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30018.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30019)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30018.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30019)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30019))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30021,component_filter_rq_chan){var map__30023 = p__30021;var map__30023__$1 = ((cljs.core.seq_QMARK_.call(null,map__30023))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);var component_spec = map__30023__$1;var visible = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
});
clustermap.components.filter.update_component_filter_rq_chans = (function update_component_filter_rq_chans(component_filter_rq_chans,component_ids){var existing_ids = cljs.core.set.call(null,cljs.core.keys.call(null,component_filter_rq_chans));var required_ids = cljs.core.set.call(null,component_ids);var new_ids = clojure.set.difference.call(null,required_ids,existing_ids);var dead_ids = clojure.set.difference.call(null,existing_ids,required_ids);var changing_ids = clojure.set.union.call(null,new_ids,dead_ids);return cljs.core.reduce.call(null,((function (existing_ids,required_ids,new_ids,dead_ids,changing_ids){
return (function (chs,id){if(cljs.core.truth_(new_ids.call(null,id)))
{var ch = cljs.core.async.chan.call(null);return cljs.core.assoc.call(null,chs,id,ch);
} else
{if(cljs.core.truth_(dead_ids.call(null,id)))
{var ch = cljs.core.get.call(null,chs,id);cljs.core.dissoc.call(null,chs,id);
return cljs.core.async.close_BANG_.call(null,ch);
} else
{return null;
}
}
});})(existing_ids,required_ids,new_ids,dead_ids,changing_ids))
,component_filter_rq_chans,changing_ids);
});
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30025 = schema.core.Any;var input_schema30026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30024","map30024",-125932419,null))], null);var input_checker30027 = schema.core.checker.call(null,input_schema30026);var output_checker30028 = schema.core.checker.call(null,output_schema30025);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function render_STAR_(G__30029){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30029], null);var temp__4126__auto___30047 = input_checker30027.call(null,args__6035__auto___30046);if(cljs.core.truth_(temp__4126__auto___30047))
{var error__6036__auto___30048 = temp__4126__auto___30047;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30048)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30048,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30046,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30026,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30024 = G__30029;while(true){
if(cljs.core.map_QMARK_.call(null,map30024))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30024)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30024,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30024,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30024,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function iter__30038(s__30039){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function (){var s__30039__$1 = s__30039;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30039__$1);if(temp__4126__auto__)
{var s__30039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30039__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30039__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30041 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30040 = (0);while(true){
if((i__30040 < size__4376__auto__))
{var map__30044 = cljs.core._nth.call(null,c__4375__auto__,i__30040);var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var component_spec = map__30044__$1;var id = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30041,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30049 = (i__30040 + (1));
i__30040 = G__30049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),iter__30038.call(null,cljs.core.chunk_rest.call(null,s__30039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),null);
}
} else
{var map__30045 = cljs.core.first.call(null,s__30039__$2);var map__30045__$1 = ((cljs.core.seq_QMARK_.call(null,map__30045))?cljs.core.apply.call(null,cljs.core.hash_map,map__30045):map__30045);var component_spec = map__30045__$1;var id = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30038.call(null,cljs.core.rest.call(null,s__30039__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30050 = output_checker30028.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30050))
{var error__6036__auto___30051 = temp__4126__auto___30050;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30051,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30025,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
,schema.core.make_fn_schema.call(null,output_schema30025,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30026], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30388 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30058 = schema.core.Any;var input_schema30059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30055","map30055",-555156224,null))], null);var input_checker30060 = schema.core.checker.call(null,input_schema30059);var output_checker30061 = schema.core.checker.call(null,output_schema30058);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function constructor30053(G__30062){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30389 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30062], null);var temp__4126__auto___30390 = input_checker30060.call(null,args__6035__auto___30389);if(cljs.core.truth_(temp__4126__auto___30390))
{var error__6036__auto___30391 = temp__4126__auto___30390;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30053","constructor30053",-638510205,null),cljs.core.pr_str.call(null,error__6036__auto___30391)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30391,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30389,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30059,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30055 = G__30062;while(true){
if(cljs.core.map_QMARK_.call(null,map30055))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30055)));
}
var map30057 = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30057,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30056 = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30056,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30056,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30224 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30224 = (function (map30057,map30055,G__30062,constructor30053,owner,input_schema30059,component_specs,filter_spec,output_checker30061,output_schema30058,history,map30056,input_checker30060,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,meta30225){
this.map30057 = map30057;
this.map30055 = map30055;
this.G__30062 = G__30062;
this.constructor30053 = constructor30053;
this.owner = owner;
this.input_schema30059 = input_schema30059;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_checker30061 = output_checker30061;
this.output_schema30058 = output_schema30058;
this.history = history;
this.map30056 = map30056;
this.input_checker30060 = input_checker30060;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30225 = meta30225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30224.cljs$lang$type = true;
clustermap.components.filter.t30224.cljs$lang$ctorStr = "clustermap.components.filter/t30224";
clustermap.components.filter.t30224.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30224");
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30224.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30224.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_,p__30227,___$1){var self__ = this;
var map__30228 = p__30227;var map__30228__$1 = ((cljs.core.seq_QMARK_.call(null,map__30228))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);var next_props = map__30228__$1;var map__30229 = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30229__$1 = ((cljs.core.seq_QMARK_.call(null,map__30229))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);var next_filter_spec = map__30229__$1;var map__30230 = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30230__$1 = ((cljs.core.seq_QMARK_.call(null,map__30230))?cljs.core.apply.call(null,cljs.core.hash_map,map__30230):map__30230);var next_url_components = map__30230__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_EQ_.call(null,next_url_components,self__.url_components);
} else
{return and__3627__auto__;
}
})()))
{var token = self__.history.getToken();var encoded_filter = clustermap.filters.filter_url_param_value.call(null,next_url_components);var new_token = clustermap.formats.url.add_param_to_token.call(null,token,self__.id,encoded_filter);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TOKEN-CHANGE",token,new_token], null)));
return self__.history.setToken(new_token);
} else
{return null;
}
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30224.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30224.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30231_30392 = cljs.core.seq.call(null,chs);var chunk__30232_30393 = null;var count__30233_30394 = (0);var i__30234_30395 = (0);while(true){
if((i__30234_30395 < count__30233_30394))
{var vec__30235_30396 = cljs.core._nth.call(null,chunk__30232_30393,i__30234_30395);var component_id_30397 = cljs.core.nth.call(null,vec__30235_30396,(0),null);var ch_30398 = cljs.core.nth.call(null,vec__30235_30396,(1),null);cljs.core.async.close_BANG_.call(null,ch_30398);
{
var G__30399 = seq__30231_30392;
var G__30400 = chunk__30232_30393;
var G__30401 = count__30233_30394;
var G__30402 = (i__30234_30395 + (1));
seq__30231_30392 = G__30399;
chunk__30232_30393 = G__30400;
count__30233_30394 = G__30401;
i__30234_30395 = G__30402;
continue;
}
} else
{var temp__4126__auto___30403 = cljs.core.seq.call(null,seq__30231_30392);if(temp__4126__auto___30403)
{var seq__30231_30404__$1 = temp__4126__auto___30403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30231_30404__$1))
{var c__4408__auto___30405 = cljs.core.chunk_first.call(null,seq__30231_30404__$1);{
var G__30406 = cljs.core.chunk_rest.call(null,seq__30231_30404__$1);
var G__30407 = c__4408__auto___30405;
var G__30408 = cljs.core.count.call(null,c__4408__auto___30405);
var G__30409 = (0);
seq__30231_30392 = G__30406;
chunk__30232_30393 = G__30407;
count__30233_30394 = G__30408;
i__30234_30395 = G__30409;
continue;
}
} else
{var vec__30236_30410 = cljs.core.first.call(null,seq__30231_30404__$1);var component_id_30411 = cljs.core.nth.call(null,vec__30236_30410,(0),null);var ch_30412 = cljs.core.nth.call(null,vec__30236_30410,(1),null);cljs.core.async.close_BANG_.call(null,ch_30412);
{
var G__30413 = cljs.core.next.call(null,seq__30231_30404__$1);
var G__30414 = null;
var G__30415 = (0);
var G__30416 = (0);
seq__30231_30392 = G__30413;
chunk__30232_30393 = G__30414;
count__30233_30394 = G__30415;
i__30234_30395 = G__30416;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30224.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (state_30332){var state_val_30333 = (state_30332[(1)]);if((state_val_30333 === (7)))
{var inst_30323 = (state_30332[(2)]);var state_30332__$1 = state_30332;if(cljs.core.truth_(inst_30323))
{var statearr_30334_30417 = state_30332__$1;(statearr_30334_30417[(1)] = (25));
} else
{var statearr_30335_30418 = state_30332__$1;(statearr_30335_30418[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (20)))
{var inst_30242 = (state_30332[(7)]);var inst_30243 = (state_30332[(8)]);var inst_30293 = (state_30332[(9)]);var inst_30300 = (state_30332[(10)]);var inst_30249 = (state_30332[(11)]);var inst_30284 = (state_30332[(12)]);var inst_30293__$1 = cljs.core.first.call(null,inst_30284);var inst_30294 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30295 = cljs.core.get.call(null,inst_30243,inst_30293__$1);var inst_30296 = ["FILTER",inst_30242,inst_30293__$1,inst_30295];var inst_30297 = (new cljs.core.PersistentVector(null,4,(5),inst_30294,inst_30296,null));var inst_30298 = cljs.core.clj__GT_js.call(null,inst_30297);var inst_30299 = console.log(inst_30298);var inst_30300__$1 = cljs.core.get.call(null,inst_30249,inst_30293__$1);var state_30332__$1 = (function (){var statearr_30336 = state_30332;(statearr_30336[(9)] = inst_30293__$1);
(statearr_30336[(10)] = inst_30300__$1);
(statearr_30336[(13)] = inst_30299);
return statearr_30336;
})();if(cljs.core.truth_(inst_30300__$1))
{var statearr_30337_30419 = state_30332__$1;(statearr_30337_30419[(1)] = (22));
} else
{var statearr_30338_30420 = state_30332__$1;(statearr_30338_30420[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (27)))
{var inst_30328 = (state_30332[(2)]);var state_30332__$1 = state_30332;var statearr_30339_30421 = state_30332__$1;(statearr_30339_30421[(2)] = inst_30328);
(statearr_30339_30421[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (1)))
{var state_30332__$1 = state_30332;var statearr_30340_30422 = state_30332__$1;(statearr_30340_30422[(2)] = null);
(statearr_30340_30422[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (24)))
{var inst_30284 = (state_30332[(12)]);var inst_30309 = (state_30332[(2)]);var inst_30310 = cljs.core.next.call(null,inst_30284);var inst_30256 = inst_30310;var inst_30257 = null;var inst_30258 = (0);var inst_30259 = (0);var state_30332__$1 = (function (){var statearr_30344 = state_30332;(statearr_30344[(14)] = inst_30309);
(statearr_30344[(15)] = inst_30259);
(statearr_30344[(16)] = inst_30256);
(statearr_30344[(17)] = inst_30258);
(statearr_30344[(18)] = inst_30257);
return statearr_30344;
})();var statearr_30345_30423 = state_30332__$1;(statearr_30345_30423[(2)] = null);
(statearr_30345_30423[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (4)))
{var inst_30239 = (state_30332[(19)]);var inst_30239__$1 = (state_30332[(2)]);var state_30332__$1 = (function (){var statearr_30346 = state_30332;(statearr_30346[(19)] = inst_30239__$1);
return statearr_30346;
})();if(cljs.core.truth_(inst_30239__$1))
{var statearr_30347_30424 = state_30332__$1;(statearr_30347_30424[(1)] = (5));
} else
{var statearr_30348_30425 = state_30332__$1;(statearr_30348_30425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (15)))
{var inst_30259 = (state_30332[(15)]);var inst_30256 = (state_30332[(16)]);var inst_30258 = (state_30332[(17)]);var inst_30257 = (state_30332[(18)]);var inst_30280 = (state_30332[(2)]);var inst_30281 = (inst_30259 + (1));var tmp30341 = inst_30256;var tmp30342 = inst_30258;var tmp30343 = inst_30257;var inst_30256__$1 = tmp30341;var inst_30257__$1 = tmp30343;var inst_30258__$1 = tmp30342;var inst_30259__$1 = inst_30281;var state_30332__$1 = (function (){var statearr_30349 = state_30332;(statearr_30349[(15)] = inst_30259__$1);
(statearr_30349[(16)] = inst_30256__$1);
(statearr_30349[(20)] = inst_30280);
(statearr_30349[(17)] = inst_30258__$1);
(statearr_30349[(18)] = inst_30257__$1);
return statearr_30349;
})();var statearr_30350_30426 = state_30332__$1;(statearr_30350_30426[(2)] = null);
(statearr_30350_30426[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (21)))
{var inst_30313 = (state_30332[(2)]);var state_30332__$1 = state_30332;var statearr_30351_30427 = state_30332__$1;(statearr_30351_30427[(2)] = inst_30313);
(statearr_30351_30427[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (13)))
{var inst_30243 = (state_30332[(8)]);var inst_30271 = (state_30332[(21)]);var inst_30264 = (state_30332[(22)]);var inst_30273 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30274 = cljs.core.get.call(null,inst_30243,inst_30264);var inst_30275 = [inst_30264,inst_30274];var inst_30276 = (new cljs.core.PersistentVector(null,2,(5),inst_30273,inst_30275,null));var inst_30277 = cljs.core.async.put_BANG_.call(null,inst_30271,inst_30276);var state_30332__$1 = state_30332;var statearr_30352_30428 = state_30332__$1;(statearr_30352_30428[(2)] = inst_30277);
(statearr_30352_30428[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (22)))
{var inst_30243 = (state_30332[(8)]);var inst_30293 = (state_30332[(9)]);var inst_30300 = (state_30332[(10)]);var inst_30302 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30303 = cljs.core.get.call(null,inst_30243,inst_30293);var inst_30304 = [inst_30293,inst_30303];var inst_30305 = (new cljs.core.PersistentVector(null,2,(5),inst_30302,inst_30304,null));var inst_30306 = cljs.core.async.put_BANG_.call(null,inst_30300,inst_30305);var state_30332__$1 = state_30332;var statearr_30353_30429 = state_30332__$1;(statearr_30353_30429[(2)] = inst_30306);
(statearr_30353_30429[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (6)))
{var state_30332__$1 = state_30332;var statearr_30354_30430 = state_30332__$1;(statearr_30354_30430[(2)] = null);
(statearr_30354_30430[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (25)))
{var state_30332__$1 = state_30332;var statearr_30355_30431 = state_30332__$1;(statearr_30355_30431[(2)] = null);
(statearr_30355_30431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (17)))
{var state_30332__$1 = state_30332;var statearr_30356_30432 = state_30332__$1;(statearr_30356_30432[(2)] = null);
(statearr_30356_30432[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (3)))
{var inst_30330 = (state_30332[(2)]);var state_30332__$1 = state_30332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30332__$1,inst_30330);
} else
{if((state_val_30333 === (12)))
{var inst_30318 = (state_30332[(2)]);var state_30332__$1 = state_30332;var statearr_30357_30433 = state_30332__$1;(statearr_30357_30433[(2)] = inst_30318);
(statearr_30357_30433[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (2)))
{var state_30332__$1 = state_30332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30332__$1,(4),filter_rq_sub);
} else
{if((state_val_30333 === (23)))
{var state_30332__$1 = state_30332;var statearr_30358_30434 = state_30332__$1;(statearr_30358_30434[(2)] = null);
(statearr_30358_30434[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (19)))
{var inst_30284 = (state_30332[(12)]);var inst_30288 = cljs.core.chunk_first.call(null,inst_30284);var inst_30289 = cljs.core.chunk_rest.call(null,inst_30284);var inst_30290 = cljs.core.count.call(null,inst_30288);var inst_30256 = inst_30289;var inst_30257 = inst_30288;var inst_30258 = inst_30290;var inst_30259 = (0);var state_30332__$1 = (function (){var statearr_30359 = state_30332;(statearr_30359[(15)] = inst_30259);
(statearr_30359[(16)] = inst_30256);
(statearr_30359[(17)] = inst_30258);
(statearr_30359[(18)] = inst_30257);
return statearr_30359;
})();var statearr_30360_30435 = state_30332__$1;(statearr_30360_30435[(2)] = null);
(statearr_30360_30435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (11)))
{var inst_30256 = (state_30332[(16)]);var inst_30284 = (state_30332[(12)]);var inst_30284__$1 = cljs.core.seq.call(null,inst_30256);var state_30332__$1 = (function (){var statearr_30361 = state_30332;(statearr_30361[(12)] = inst_30284__$1);
return statearr_30361;
})();if(inst_30284__$1)
{var statearr_30362_30436 = state_30332__$1;(statearr_30362_30436[(1)] = (16));
} else
{var statearr_30363_30437 = state_30332__$1;(statearr_30363_30437[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (9)))
{var inst_30320 = (state_30332[(2)]);var state_30332__$1 = (function (){var statearr_30364 = state_30332;(statearr_30364[(23)] = inst_30320);
return statearr_30364;
})();var statearr_30365_30438 = state_30332__$1;(statearr_30365_30438[(2)] = true);
(statearr_30365_30438[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (5)))
{var inst_30242 = (state_30332[(7)]);var inst_30243 = (state_30332[(8)]);var inst_30239 = (state_30332[(19)]);var inst_30242__$1 = cljs.core.nth.call(null,inst_30239,(0),null);var inst_30243__$1 = cljs.core.nth.call(null,inst_30239,(1),null);var inst_30244 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30245 = ["FILTER-RQ",inst_30242__$1,inst_30243__$1];var inst_30246 = (new cljs.core.PersistentVector(null,3,(5),inst_30244,inst_30245,null));var inst_30247 = cljs.core.clj__GT_js.call(null,inst_30246);var inst_30248 = console.log(inst_30247);var inst_30249 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30250 = cljs.core.keys.call(null,inst_30243__$1);var inst_30255 = cljs.core.seq.call(null,inst_30250);var inst_30256 = inst_30255;var inst_30257 = null;var inst_30258 = (0);var inst_30259 = (0);var state_30332__$1 = (function (){var statearr_30366 = state_30332;(statearr_30366[(7)] = inst_30242__$1);
(statearr_30366[(8)] = inst_30243__$1);
(statearr_30366[(11)] = inst_30249);
(statearr_30366[(15)] = inst_30259);
(statearr_30366[(16)] = inst_30256);
(statearr_30366[(17)] = inst_30258);
(statearr_30366[(18)] = inst_30257);
(statearr_30366[(24)] = inst_30248);
return statearr_30366;
})();var statearr_30367_30439 = state_30332__$1;(statearr_30367_30439[(2)] = null);
(statearr_30367_30439[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (14)))
{var state_30332__$1 = state_30332;var statearr_30368_30440 = state_30332__$1;(statearr_30368_30440[(2)] = null);
(statearr_30368_30440[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (26)))
{var state_30332__$1 = state_30332;var statearr_30369_30441 = state_30332__$1;(statearr_30369_30441[(2)] = null);
(statearr_30369_30441[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (16)))
{var inst_30284 = (state_30332[(12)]);var inst_30286 = cljs.core.chunked_seq_QMARK_.call(null,inst_30284);var state_30332__$1 = state_30332;if(inst_30286)
{var statearr_30370_30442 = state_30332__$1;(statearr_30370_30442[(1)] = (19));
} else
{var statearr_30371_30443 = state_30332__$1;(statearr_30371_30443[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (10)))
{var inst_30242 = (state_30332[(7)]);var inst_30243 = (state_30332[(8)]);var inst_30249 = (state_30332[(11)]);var inst_30271 = (state_30332[(21)]);var inst_30259 = (state_30332[(15)]);var inst_30264 = (state_30332[(22)]);var inst_30257 = (state_30332[(18)]);var inst_30264__$1 = cljs.core._nth.call(null,inst_30257,inst_30259);var inst_30265 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30266 = cljs.core.get.call(null,inst_30243,inst_30264__$1);var inst_30267 = ["FILTER",inst_30242,inst_30264__$1,inst_30266];var inst_30268 = (new cljs.core.PersistentVector(null,4,(5),inst_30265,inst_30267,null));var inst_30269 = cljs.core.clj__GT_js.call(null,inst_30268);var inst_30270 = console.log(inst_30269);var inst_30271__$1 = cljs.core.get.call(null,inst_30249,inst_30264__$1);var state_30332__$1 = (function (){var statearr_30372 = state_30332;(statearr_30372[(21)] = inst_30271__$1);
(statearr_30372[(25)] = inst_30270);
(statearr_30372[(22)] = inst_30264__$1);
return statearr_30372;
})();if(cljs.core.truth_(inst_30271__$1))
{var statearr_30373_30444 = state_30332__$1;(statearr_30373_30444[(1)] = (13));
} else
{var statearr_30374_30445 = state_30332__$1;(statearr_30374_30445[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (18)))
{var inst_30316 = (state_30332[(2)]);var state_30332__$1 = state_30332;var statearr_30375_30446 = state_30332__$1;(statearr_30375_30446[(2)] = inst_30316);
(statearr_30375_30446[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30333 === (8)))
{var inst_30259 = (state_30332[(15)]);var inst_30258 = (state_30332[(17)]);var inst_30261 = (inst_30259 < inst_30258);var inst_30262 = inst_30261;var state_30332__$1 = state_30332;if(cljs.core.truth_(inst_30262))
{var statearr_30376_30447 = state_30332__$1;(statearr_30376_30447[(1)] = (10));
} else
{var statearr_30377_30448 = state_30332__$1;(statearr_30377_30448[(1)] = (11));
}
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
}
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30381[(0)] = state_machine__9111__auto__);
(statearr_30381[(1)] = (1));
return statearr_30381;
});
var state_machine__9111__auto____1 = (function (state_30332){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30332);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30382){if((e30382 instanceof Object))
{var ex__9114__auto__ = e30382;var statearr_30383_30449 = state_30332;(statearr_30383_30449[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30332);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30450 = state_30332;
state_30332 = G__30450;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30332){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
})();var state__9127__auto__ = (function (){var statearr_30384 = f__9126__auto__.call(null);(statearr_30384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_30226){var self__ = this;
var _30226__$1 = this;return self__.meta30225;
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.t30224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function (_30226,meta30225__$1){var self__ = this;
var _30226__$1 = this;return (new clustermap.components.filter.t30224(self__.map30057,self__.map30055,self__.G__30062,self__.constructor30053,self__.owner,self__.input_schema30059,self__.component_specs,self__.filter_spec,self__.output_checker30061,self__.output_schema30058,self__.history,self__.map30056,self__.input_checker30060,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30225__$1));
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
clustermap.components.filter.__GT_t30224 = ((function (owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061){
return (function __GT_t30224(map30057__$1,map30055__$1,G__30062__$1,constructor30053__$1,owner__$1,input_schema30059__$1,component_specs__$1,filter_spec__$1,output_checker30061__$1,output_schema30058__$1,history__$1,map30056__$1,input_checker30060__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30225){return (new clustermap.components.filter.t30224(map30057__$1,map30055__$1,G__30062__$1,constructor30053__$1,owner__$1,input_schema30059__$1,component_specs__$1,filter_spec__$1,output_checker30061__$1,output_schema30058__$1,history__$1,map30056__$1,input_checker30060__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30225));
});})(owner,history,filter_rq_pub,map30056,url_components,components,component_specs,id,filter_spec,map30057,validate__6034__auto__,ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
;
}
return (new clustermap.components.filter.t30224(map30057,map30055,G__30062,constructor30053,owner,input_schema30059,component_specs,filter_spec,output_checker30061,output_schema30058,history,map30056,input_checker30060,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30451 = output_checker30061.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30451))
{var error__6036__auto___30452 = temp__4126__auto___30451;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30053","constructor30053",-638510205,null),cljs.core.pr_str.call(null,error__6036__auto___30452)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30452,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30058,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30058,input_schema30059,input_checker30060,output_checker30061))
,schema.core.make_fn_schema.call(null,output_schema30058,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30059], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30388){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30052,p__30385){var vec__30387 = p__30385;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30387,(0),null);return component_fnk__7881__auto___30388.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30052),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30052,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30052,var_args){
var p__30385 = null;if (arguments.length > 2) {
  p__30385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30052,p__30385);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30453){
var data__7882__auto__ = cljs.core.first(arglist__30453);
arglist__30453 = cljs.core.next(arglist__30453);
var owner30052 = cljs.core.first(arglist__30453);
var p__30385 = cljs.core.rest(arglist__30453);
return filter_component__delegate(data__7882__auto__,owner30052,p__30385);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30388))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30054){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30054);
});
__GT_filter_component = function(cursor__7850__auto__,m30054){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
