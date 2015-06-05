// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20989 = p1__6064__6065__auto__;if(G__20989)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20989.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20989.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20989);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20990_SHARP_){return (cljs.core.val.call(null,p1__20990_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__20992 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20992,(0),null);var v = cljs.core.nth.call(null,vec__20992,(1),null);var p = vec__20992;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___20998 = schema.utils.use_fn_validation;var output_schema20993_20999 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20994_21000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20995_21001 = schema.core.checker.call(null,input_schema20994_21000);var output_checker20996_21002 = schema.core.checker.call(null,output_schema20993_20999);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20998,output_schema20993_20999,input_schema20994_21000,input_checker20995_21001,output_checker20996_21002){
return (function unwrap_schema_form_key(G__20997){var validate__6034__auto__ = ufv___20998.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21003 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20997], null);var temp__4126__auto___21004 = input_checker20995_21001.call(null,args__6035__auto___21003);if(cljs.core.truth_(temp__4126__auto___21004))
{var error__6036__auto___21005 = temp__4126__auto___21004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21005,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21003,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20994_21000,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20997;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21006 = output_checker20996_21002.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21006))
{var error__6036__auto___21007 = temp__4126__auto___21006;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21007)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21007,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20993_20999,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20998,output_schema20993_20999,input_schema20994_21000,input_checker20995_21001,output_checker20996_21002))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20993_20999,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20994_21000], null)));
var ufv___21013 = schema.utils.use_fn_validation;var output_schema21008_21014 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21009_21015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21010_21016 = schema.core.checker.call(null,input_schema21009_21015);var output_checker21011_21017 = schema.core.checker.call(null,output_schema21008_21014);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21013,output_schema21008_21014,input_schema21009_21015,input_checker21010_21016,output_checker21011_21017){
return (function explicit_schema_key_map(G__21012){var validate__6034__auto__ = ufv___21013.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21012], null);var temp__4126__auto___21019 = input_checker21010_21016.call(null,args__6035__auto___21018);if(cljs.core.truth_(temp__4126__auto___21019))
{var error__6036__auto___21020 = temp__4126__auto___21019;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21020)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21020,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21018,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21009_21015,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21012;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21021 = output_checker21011_21017.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21021))
{var error__6036__auto___21022 = temp__4126__auto___21021;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21022)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21022,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21008_21014,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21013,output_schema21008_21014,input_schema21009_21015,input_checker21010_21016,output_checker21011_21017))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21008_21014,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21009_21015], null)));
var ufv___21028 = schema.utils.use_fn_validation;var output_schema21023_21029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21024_21030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21025_21031 = schema.core.checker.call(null,input_schema21024_21030);var output_checker21026_21032 = schema.core.checker.call(null,output_schema21023_21029);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21028,output_schema21023_21029,input_schema21024_21030,input_checker21025_21031,output_checker21026_21032){
return (function split_schema_keys(G__21027){var validate__6034__auto__ = ufv___21028.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21027], null);var temp__4126__auto___21034 = input_checker21025_21031.call(null,args__6035__auto___21033);if(cljs.core.truth_(temp__4126__auto___21034))
{var error__6036__auto___21035 = temp__4126__auto___21034;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21035)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21035,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21033,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21024_21030,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21027;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21036 = output_checker21026_21032.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21036))
{var error__6036__auto___21037 = temp__4126__auto___21036;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21037)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21037,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21023_21029,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21028,output_schema21023_21029,input_schema21024_21030,input_checker21025_21031,output_checker21026_21032))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21023_21029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21024_21030], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21041){var vec__21042 = p__21041;var k = cljs.core.nth.call(null,vec__21042,(0),null);var v = cljs.core.nth.call(null,vec__21042,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21043 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21043,(0),null);var ov = cljs.core.nth.call(null,vec__21043,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21044){
var key_project = cljs.core.first(arglist__21044);
arglist__21044 = cljs.core.next(arglist__21044);
var key_combine = cljs.core.first(arglist__21044);
arglist__21044 = cljs.core.next(arglist__21044);
var val_combine = cljs.core.first(arglist__21044);
var maps = cljs.core.rest(arglist__21044);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21052 = schema.utils.use_fn_validation;var output_schema21046_21053 = plumbing.fnk.schema.InputSchema;var input_schema21047_21054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21048_21055 = schema.core.checker.call(null,input_schema21047_21054);var output_checker21049_21056 = schema.core.checker.call(null,output_schema21046_21053);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056){
return (function union_input_schemata(G__21050,G__21051){var validate__6034__auto__ = ufv___21052.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21050,G__21051], null);var temp__4126__auto___21058 = input_checker21048_21055.call(null,args__6035__auto___21057);if(cljs.core.truth_(temp__4126__auto___21058))
{var error__6036__auto___21059 = temp__4126__auto___21058;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21059,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21057,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21047_21054,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21050;var i2 = G__21051;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056){
return (function (p1__21045_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21045_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21045_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056))
,((function (validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056))
,((function (validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21060 = output_checker21049_21056.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21060))
{var error__6036__auto___21061 = temp__4126__auto___21060;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21061)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21061,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21046_21053,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21052,output_schema21046_21053,input_schema21047_21054,input_checker21048_21055,output_checker21049_21056))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21046_21053,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21047_21054], null)));
var ufv___21067 = schema.utils.use_fn_validation;var output_schema21062_21068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21063_21069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21064_21070 = schema.core.checker.call(null,input_schema21063_21069);var output_checker21065_21071 = schema.core.checker.call(null,output_schema21062_21068);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21067,output_schema21062_21068,input_schema21063_21069,input_checker21064_21070,output_checker21065_21071){
return (function required_toplevel_keys(G__21066){var validate__6034__auto__ = ufv___21067.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21066], null);var temp__4126__auto___21073 = input_checker21064_21070.call(null,args__6035__auto___21072);if(cljs.core.truth_(temp__4126__auto___21073))
{var error__6036__auto___21074 = temp__4126__auto___21073;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21074)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21074,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21072,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21063_21069,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21066;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21067,output_schema21062_21068,input_schema21063_21069,input_checker21064_21070,output_checker21065_21071){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21067,output_schema21062_21068,input_schema21063_21069,input_checker21064_21070,output_checker21065_21071))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21075 = output_checker21065_21071.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21075))
{var error__6036__auto___21076 = temp__4126__auto___21075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21076,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21062_21068,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21067,output_schema21062_21068,input_schema21063_21069,input_checker21064_21070,output_checker21065_21071))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21062_21068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21063_21069], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21085(s__21086){return (new cljs.core.LazySeq(null,(function (){var s__21086__$1 = s__21086;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21086__$1);if(temp__4126__auto__)
{var s__21086__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21086__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21086__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21088 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21087 = (0);while(true){
if((i__21087 < size__4376__auto__))
{var vec__21091 = cljs.core._nth.call(null,c__4375__auto__,i__21087);var k = cljs.core.nth.call(null,vec__21091,(0),null);var v = cljs.core.nth.call(null,vec__21091,(1),null);cljs.core.chunk_append.call(null,b__21088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21093 = (i__21087 + (1));
i__21087 = G__21093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21088),iter__21085.call(null,cljs.core.chunk_rest.call(null,s__21086__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21088),null);
}
} else
{var vec__21092 = cljs.core.first.call(null,s__21086__$2);var k = cljs.core.nth.call(null,vec__21092,(0),null);var v = cljs.core.nth.call(null,vec__21092,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21085.call(null,cljs.core.rest.call(null,s__21086__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21102(s__21103){return (new cljs.core.LazySeq(null,(function (){var s__21103__$1 = s__21103;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21103__$1);if(temp__4126__auto__)
{var s__21103__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21103__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21103__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21105 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21104 = (0);while(true){
if((i__21104 < size__4376__auto__))
{var vec__21108 = cljs.core._nth.call(null,c__4375__auto__,i__21104);var k = cljs.core.nth.call(null,vec__21108,(0),null);var v = cljs.core.nth.call(null,vec__21108,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21110 = (i__21104 + (1));
i__21104 = G__21110;
continue;
}
} else
{{
var G__21111 = (i__21104 + (1));
i__21104 = G__21111;
continue;
}
}
} else
{{
var G__21112 = (i__21104 + (1));
i__21104 = G__21112;
continue;
}
}
} else
{{
var G__21113 = (i__21104 + (1));
i__21104 = G__21113;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21105),iter__21102.call(null,cljs.core.chunk_rest.call(null,s__21103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21105),null);
}
} else
{var vec__21109 = cljs.core.first.call(null,s__21103__$2);var k = cljs.core.nth.call(null,vec__21109,(0),null);var v = cljs.core.nth.call(null,vec__21109,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21102.call(null,cljs.core.rest.call(null,s__21103__$2)));
} else
{{
var G__21114 = cljs.core.rest.call(null,s__21103__$2);
s__21103__$1 = G__21114;
continue;
}
}
} else
{{
var G__21115 = cljs.core.rest.call(null,s__21103__$2);
s__21103__$1 = G__21115;
continue;
}
}
} else
{{
var G__21116 = cljs.core.rest.call(null,s__21103__$2);
s__21103__$1 = G__21116;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___21139 = schema.utils.use_fn_validation;var output_schema21117_21140 = schema.core.Any;var input_schema21118_21141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21119_21142 = schema.core.checker.call(null,input_schema21118_21141);var output_checker21120_21143 = schema.core.checker.call(null,output_schema21117_21140);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21139,output_schema21117_21140,input_schema21118_21141,input_checker21119_21142,output_checker21120_21143){
return (function compose_schemata(G__21121,G__21122){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21121,G__21122], null);var temp__4126__auto___21145 = input_checker21119_21142.call(null,args__6035__auto___21144);if(cljs.core.truth_(temp__4126__auto___21145))
{var error__6036__auto___21146 = temp__4126__auto___21145;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21146,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21144,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21118_21141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21133 = G__21121;var vec__21135 = G__21133;var i2 = cljs.core.nth.call(null,vec__21135,(0),null);var o2 = cljs.core.nth.call(null,vec__21135,(1),null);var G__21134 = G__21122;var vec__21136 = G__21134;var i1 = cljs.core.nth.call(null,vec__21136,(0),null);var o1 = cljs.core.nth.call(null,vec__21136,(1),null);var G__21133__$1 = G__21133;var G__21134__$1 = G__21134;while(true){
var vec__21137 = G__21133__$1;var i2__$1 = cljs.core.nth.call(null,vec__21137,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21137,(1),null);var vec__21138 = G__21134__$1;var i1__$1 = cljs.core.nth.call(null,vec__21138,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21138,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21147 = output_checker21120_21143.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21147))
{var error__6036__auto___21148 = temp__4126__auto___21147;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21148)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21148,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21117_21140,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21139,output_schema21117_21140,input_schema21118_21141,input_checker21119_21142,output_checker21120_21143))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21117_21140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21118_21141], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___21227 = schema.utils.use_fn_validation;var output_schema21149_21228 = schema.core.Any;var input_schema21150_21229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21151_21230 = schema.core.checker.call(null,input_schema21150_21229);var output_checker21152_21231 = schema.core.checker.call(null,output_schema21149_21228);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function split_schema(G__21153,G__21154){var validate__6034__auto__ = ufv___21227.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21153,G__21154], null);var temp__4126__auto___21233 = input_checker21151_21230.call(null,args__6035__auto___21232);if(cljs.core.truth_(temp__4126__auto___21233))
{var error__6036__auto___21234 = temp__4126__auto___21233;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21234)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21234,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21232,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21150_21229,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21153;var ks = G__21154;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function iter__21191(s__21192){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function (){var s__21192__$1 = s__21192;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21192__$1);if(temp__4126__auto__)
{var s__21192__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21192__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21192__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21194 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21193 = (0);while(true){
if((i__21193 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21193);cljs.core.chunk_append.call(null,b__21194,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21193,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21194,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function iter__21211(s__21212){return (new cljs.core.LazySeq(null,((function (i__21193,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21194,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function (){var s__21212__$1 = s__21212;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21212__$1);if(temp__4126__auto____$1)
{var s__21212__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21212__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21212__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21214 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21213 = (0);while(true){
if((i__21213 < size__4376__auto____$1))
{var vec__21217 = cljs.core._nth.call(null,c__4375__auto____$1,i__21213);var k = cljs.core.nth.call(null,vec__21217,(0),null);var v = cljs.core.nth.call(null,vec__21217,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21235 = (i__21213 + (1));
i__21213 = G__21235;
continue;
}
} else
{{
var G__21236 = (i__21213 + (1));
i__21213 = G__21236;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21214),iter__21211.call(null,cljs.core.chunk_rest.call(null,s__21212__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21214),null);
}
} else
{var vec__21218 = cljs.core.first.call(null,s__21212__$2);var k = cljs.core.nth.call(null,vec__21218,(0),null);var v = cljs.core.nth.call(null,vec__21218,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21211.call(null,cljs.core.rest.call(null,s__21212__$2)));
} else
{{
var G__21237 = cljs.core.rest.call(null,s__21212__$2);
s__21212__$1 = G__21237;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21193,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21194,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
,null,null));
});})(i__21193,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21194,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21238 = (i__21193 + (1));
i__21193 = G__21238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21194),iter__21191.call(null,cljs.core.chunk_rest.call(null,s__21192__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21194),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21192__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function iter__21219(s__21220){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231){
return (function (){var s__21220__$1 = s__21220;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21220__$1);if(temp__4126__auto____$1)
{var s__21220__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21220__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21220__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21222 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21221 = (0);while(true){
if((i__21221 < size__4376__auto__))
{var vec__21225 = cljs.core._nth.call(null,c__4375__auto__,i__21221);var k = cljs.core.nth.call(null,vec__21225,(0),null);var v = cljs.core.nth.call(null,vec__21225,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21239 = (i__21221 + (1));
i__21221 = G__21239;
continue;
}
} else
{{
var G__21240 = (i__21221 + (1));
i__21221 = G__21240;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21222),iter__21219.call(null,cljs.core.chunk_rest.call(null,s__21220__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21222),null);
}
} else
{var vec__21226 = cljs.core.first.call(null,s__21220__$2);var k = cljs.core.nth.call(null,vec__21226,(0),null);var v = cljs.core.nth.call(null,vec__21226,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21219.call(null,cljs.core.rest.call(null,s__21220__$2)));
} else
{{
var G__21241 = cljs.core.rest.call(null,s__21220__$2);
s__21220__$1 = G__21241;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
,null,null));
});})(in_QMARK_,s__21192__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
;return iter__4377__auto__.call(null,s);
})()),iter__21191.call(null,cljs.core.rest.call(null,s__21192__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21242 = output_checker21152_21231.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21242))
{var error__6036__auto___21243 = temp__4126__auto___21242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21243,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21149_21228,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21227,output_schema21149_21228,input_schema21150_21229,input_checker21151_21230,output_checker21152_21231))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21149_21228,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21150_21229], null)));
var ufv___21274 = schema.utils.use_fn_validation;var output_schema21244_21275 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21245_21276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21246_21277 = schema.core.checker.call(null,input_schema21245_21276);var output_checker21247_21278 = schema.core.checker.call(null,output_schema21244_21275);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21274,output_schema21244_21275,input_schema21245_21276,input_checker21246_21277,output_checker21247_21278){
return (function sequence_schemata(G__21248,G__21249){var validate__6034__auto__ = ufv___21274.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21248,G__21249], null);var temp__4126__auto___21280 = input_checker21246_21277.call(null,args__6035__auto___21279);if(cljs.core.truth_(temp__4126__auto___21280))
{var error__6036__auto___21281 = temp__4126__auto___21280;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21281)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21281,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21279,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21245_21276,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21265 = G__21248;var vec__21267 = G__21265;var i1 = cljs.core.nth.call(null,vec__21267,(0),null);var o1 = cljs.core.nth.call(null,vec__21267,(1),null);var G__21266 = G__21249;var vec__21268 = G__21266;var k = cljs.core.nth.call(null,vec__21268,(0),null);var vec__21269 = cljs.core.nth.call(null,vec__21268,(1),null);var i2 = cljs.core.nth.call(null,vec__21269,(0),null);var o2 = cljs.core.nth.call(null,vec__21269,(1),null);var G__21265__$1 = G__21265;var G__21266__$1 = G__21266;while(true){
var vec__21270 = G__21265__$1;var i1__$1 = cljs.core.nth.call(null,vec__21270,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21270,(1),null);var vec__21271 = G__21266__$1;var k__$1 = cljs.core.nth.call(null,vec__21271,(0),null);var vec__21272 = cljs.core.nth.call(null,vec__21271,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21272,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21272,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__21273 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21273,(0),null);var unused = cljs.core.nth.call(null,vec__21273,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21282 = output_checker21247_21278.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21282))
{var error__6036__auto___21283 = temp__4126__auto___21282;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21283)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21283,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21244_21275,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21274,output_schema21244_21275,input_schema21245_21276,input_checker21246_21277,output_checker21247_21278))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21244_21275,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21245_21276], null)));
