// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.api');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
clustermap.components.map.event_handler_keys = cljs.core.atom.call(null,(0));
clustermap.components.map.event_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clustermap.components.map.next_event_handler_key = (function next_event_handler_key(){return cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handler_keys,cljs.core.inc);
});
/**
* register's an event handler function, returns a key
*/
clustermap.components.map.register_event_handler = (function register_event_handler(f){if(cljs.core.fn_QMARK_.call(null,f))
{var k = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.next_event_handler_key.call(null)));cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.assoc,k,f);
return k;
} else
{return null;
}
});
/**
* remove's an event handler with key k
*/
clustermap.components.map.remove_event_handler = (function remove_event_handler(k){if(cljs.core.truth_(k))
{cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.dissoc,k);
} else
{}
return null;
});
/**
* find's an event handler with key k
*/
clustermap.components.map.find_event_handler = (function find_event_handler(k){if(cljs.core.truth_(k))
{return cljs.core.get.call(null,cljs.core.deref.call(null,clustermap.components.map.event_handlers),k);
} else
{return null;
}
});
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = w;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = n;if(cljs.core.truth_(and__3627__auto____$2))
{return e;
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32208 = config;var G__32208__$1 = (((G__32208 == null))?null:G__32208.components);var G__32208__$2 = (((G__32208__$1 == null))?null:G__32208__$1.map);var G__32208__$3 = (((G__32208__$2 == null))?null:G__32208__$2.api_key);return G__32208__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32209){var map__32211 = p__32209;var map__32211__$1 = ((cljs.core.seq_QMARK_.call(null,map__32211))?cljs.core.apply.call(null,cljs.core.hash_map,map__32211):map__32211);var api_key = cljs.core.get.call(null,map__32211__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32211__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32211__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32211__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
m.addLayer(lmcg);
if(zoom_control)
{m.addControl(zoom);
} else
{}
clustermap.components.map.locate_map.call(null,m,(function (){var or__3639__auto__ = bounds;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return initial_bounds;
}
})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671),lmcg,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__32212){
var m = cljs.core.first(arglist__32212);
var all_bounds = cljs.core.rest(arglist__32212);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32213,location_sites){var map__32215 = p__32213;var map__32215__$1 = ((cljs.core.seq_QMARK_.call(null,map__32215))?cljs.core.apply.call(null,cljs.core.hash_map,map__32215):map__32215);var location_spec = map__32215__$1;var marker_render_fn = cljs.core.get.call(null,map__32215__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32220(s__32221){return (new cljs.core.LazySeq(null,(function (){var s__32221__$1 = s__32221;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32221__$1);if(temp__4126__auto__)
{var s__32221__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32221__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32221__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32223 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32222 = (0);while(true){
if((i__32222 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32222);cljs.core.chunk_append.call(null,b__32223,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32224 = (i__32222 + (1));
i__32222 = G__32224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32223),iter__32220.call(null,cljs.core.chunk_rest.call(null,s__32221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32223),null);
}
} else
{var site = cljs.core.first.call(null,s__32221__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32220.call(null,cljs.core.rest.call(null,s__32221__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,location_sites);
})()))+"</ul>");
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32225){var map__32230 = p__32225;var map__32230__$1 = ((cljs.core.seq_QMARK_.call(null,map__32230))?cljs.core.apply.call(null,cljs.core.hash_map,map__32230):map__32230);var map__32231 = cljs.core.get.call(null,map__32230__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32231__$1 = ((cljs.core.seq_QMARK_.call(null,map__32231))?cljs.core.apply.call(null,cljs.core.hash_map,map__32231):map__32231);var location_spec = map__32231__$1;var item_click_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32232 = location_sites;var G__32232__$1 = (((G__32232 == null))?null:cljs.core.first.call(null,G__32232));var G__32232__$2 = (((G__32232__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32232__$1));var G__32232__$3 = (((G__32232__$2 == null))?null:cljs.core.reverse.call(null,G__32232__$2));var G__32232__$4 = (((G__32232__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32232__$3));return G__32232__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.addLayer(leaflet_marker);
} else
{leaflet_map.addLayer(leaflet_marker);
}
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32233_32234 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32233_32234,sb__4579__auto__,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32233_32234,sb__4579__auto__,temp__4124__auto__,map__32230,map__32230__$1,map__32231,map__32231__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32233_32234;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32235){var map__32241 = p__32235;var map__32241__$1 = ((cljs.core.seq_QMARK_.call(null,map__32241))?cljs.core.apply.call(null,cljs.core.hash_map,map__32241):map__32241);var marker = map__32241__$1;var click_handler_keys = cljs.core.get.call(null,map__32241__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32241__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32242 = cljs.core.seq.call(null,click_handler_keys);var chunk__32243 = null;var count__32244 = (0);var i__32245 = (0);while(true){
if((i__32245 < count__32244))
{var chk = cljs.core._nth.call(null,chunk__32243,i__32245);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32246 = seq__32242;
var G__32247 = chunk__32243;
var G__32248 = count__32244;
var G__32249 = (i__32245 + (1));
seq__32242 = G__32246;
chunk__32243 = G__32247;
count__32244 = G__32248;
i__32245 = G__32249;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32242);if(temp__4126__auto__)
{var seq__32242__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32242__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32242__$1);{
var G__32250 = cljs.core.chunk_rest.call(null,seq__32242__$1);
var G__32251 = c__4408__auto__;
var G__32252 = cljs.core.count.call(null,c__4408__auto__);
var G__32253 = (0);
seq__32242 = G__32250;
chunk__32243 = G__32251;
count__32244 = G__32252;
i__32245 = G__32253;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32242__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32254 = cljs.core.next.call(null,seq__32242__$1);
var G__32255 = null;
var G__32256 = (0);
var G__32257 = (0);
seq__32242 = G__32254;
chunk__32243 = G__32255;
count__32244 = G__32256;
i__32245 = G__32257;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32258,location_sites,p__32259){var map__32263 = p__32258;var map__32263__$1 = ((cljs.core.seq_QMARK_.call(null,map__32263))?cljs.core.apply.call(null,cljs.core.hash_map,map__32263):map__32263);var marker = map__32263__$1;var click_handler_keys = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32264 = p__32259;var map__32264__$1 = ((cljs.core.seq_QMARK_.call(null,map__32264))?cljs.core.apply.call(null,cljs.core.hash_map,map__32264):map__32264);var map__32265 = cljs.core.get.call(null,map__32264__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32265__$1 = ((cljs.core.seq_QMARK_.call(null,map__32265))?cljs.core.apply.call(null,cljs.core.hash_map,map__32265):map__32265);var location_spec = map__32265__$1;var item_click_fn = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32263,map__32263__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32264,map__32264__$1,map__32265,map__32265__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32263,map__32263__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32264,map__32264__$1,map__32265,map__32265__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32266){var map__32268 = p__32266;var map__32268__$1 = ((cljs.core.seq_QMARK_.call(null,map__32268))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);var marker = map__32268__$1;var click_handler_keys = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,opts){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__32273 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32274 = null;var count__32275 = (0);var i__32276 = (0);while(true){
if((i__32276 < count__32275))
{var k = cljs.core._nth.call(null,chunk__32274,i__32276);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32277 = seq__32273;
var G__32278 = chunk__32274;
var G__32279 = count__32275;
var G__32280 = (i__32276 + (1));
seq__32273 = G__32277;
chunk__32274 = G__32278;
count__32275 = G__32279;
i__32276 = G__32280;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32273);if(temp__4126__auto__)
{var seq__32273__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32273__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32273__$1);{
var G__32281 = cljs.core.chunk_rest.call(null,seq__32273__$1);
var G__32282 = c__4408__auto__;
var G__32283 = cljs.core.count.call(null,c__4408__auto__);
var G__32284 = (0);
seq__32273 = G__32281;
chunk__32274 = G__32282;
count__32275 = G__32283;
i__32276 = G__32284;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32273__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32285 = cljs.core.next.call(null,seq__32273__$1);
var G__32286 = null;
var G__32287 = (0);
var G__32288 = (0);
seq__32273 = G__32285;
chunk__32274 = G__32286;
count__32275 = G__32287;
i__32276 = G__32288;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32292 = cljs.core._EQ_;var expr__32293 = n;if(cljs.core.truth_(pred__32292.call(null,(0),expr__32293)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32292.call(null,(1),expr__32293)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32292.call(null,(2),expr__32293)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32295,geotag,geotag_agg){var map__32298 = p__32295;var map__32298__$1 = ((cljs.core.seq_QMARK_.call(null,map__32298))?cljs.core.apply.call(null,cljs.core.hash_map,map__32298):map__32298);var geotag_agg_spec = map__32298__$1;var colorchooser_fn = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32299 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32299))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32299)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32299))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32300,geotag,geotag_agg){var map__32302 = p__32300;var map__32302__$1 = ((cljs.core.seq_QMARK_.call(null,map__32302))?cljs.core.apply.call(null,cljs.core.hash_map,map__32302):map__32302);var geotag_agg_spec = map__32302__$1;var click_fn = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32302,map__32302__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32302,map__32302__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32303,p__32304,geotag,geotag_agg){var map__32307 = p__32303;var map__32307__$1 = ((cljs.core.seq_QMARK_.call(null,map__32307))?cljs.core.apply.call(null,cljs.core.hash_map,map__32307):map__32307);var geotag_agg_spec = map__32307__$1;var click_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32308 = p__32304;var map__32308__$1 = ((cljs.core.seq_QMARK_.call(null,map__32308))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308):map__32308);var marker = map__32308__$1;var click_handler_key = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32309 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32310 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32309);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32310);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32311,points_showing_QMARK_){var map__32317 = p__32311;var map__32317__$1 = ((cljs.core.seq_QMARK_.call(null,map__32317))?cljs.core.apply.call(null,cljs.core.hash_map,map__32317):map__32317);var geotag_agg_spec = map__32317__$1;var geotag_agg_data = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var or__3639__auto__ = points_showing_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,show_at_zoom_fn__$1.call(null,zoom));
}
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32317,map__32317__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32318 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32319 = null;var count__32320 = (0);var i__32321 = (0);while(true){
if((i__32321 < count__32320))
{var k = cljs.core._nth.call(null,chunk__32319,i__32321);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32322 = seq__32318;
var G__32323 = chunk__32319;
var G__32324 = count__32320;
var G__32325 = (i__32321 + (1));
seq__32318 = G__32322;
chunk__32319 = G__32323;
count__32320 = G__32324;
i__32321 = G__32325;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32318);if(temp__4126__auto__)
{var seq__32318__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32318__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32318__$1);{
var G__32326 = cljs.core.chunk_rest.call(null,seq__32318__$1);
var G__32327 = c__4408__auto__;
var G__32328 = cljs.core.count.call(null,c__4408__auto__);
var G__32329 = (0);
seq__32318 = G__32326;
chunk__32319 = G__32327;
count__32320 = G__32328;
i__32321 = G__32329;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32318__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32330 = cljs.core.next.call(null,seq__32318__$1);
var G__32331 = null;
var G__32332 = (0);
var G__32333 = (0);
seq__32318 = G__32330;
chunk__32319 = G__32331;
count__32320 = G__32332;
i__32321 = G__32333;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geotag_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32334,geohash_agg){var map__32337 = p__32334;var map__32337__$1 = ((cljs.core.seq_QMARK_.call(null,map__32337))?cljs.core.apply.call(null,cljs.core.hash_map,map__32337):map__32337);var geohash_agg_spec = map__32337__$1;var colorchooser_fn = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32338 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32338))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32338)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32338))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32340 = content;if(cljs.core.map_QMARK_.call(null,attrs32340))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32340)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32340))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32341){var map__32346 = p__32341;var map__32346__$1 = ((cljs.core.seq_QMARK_.call(null,map__32346))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);var geohash_agg = map__32346__$1;var bounds = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32347 = bounds;var vec__32348 = cljs.core.nth.call(null,vec__32347,(0),null);var south = cljs.core.nth.call(null,vec__32348,(0),null);var west = cljs.core.nth.call(null,vec__32348,(1),null);var vec__32349 = cljs.core.nth.call(null,vec__32347,(1),null);var north = cljs.core.nth.call(null,vec__32349,(0),null);var east = cljs.core.nth.call(null,vec__32349,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32350,geohash_agg){var map__32352 = p__32350;var map__32352__$1 = ((cljs.core.seq_QMARK_.call(null,map__32352))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);var geohash_agg_spec = map__32352__$1;var click_fn = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32352,map__32352__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32352,map__32352__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32353,p__32354,geohash_agg){var map__32357 = p__32353;var map__32357__$1 = ((cljs.core.seq_QMARK_.call(null,map__32357))?cljs.core.apply.call(null,cljs.core.hash_map,map__32357):map__32357);var geohash_agg_spec = map__32357__$1;var click_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32358 = p__32354;var map__32358__$1 = ((cljs.core.seq_QMARK_.call(null,map__32358))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);var marker = map__32358__$1;var click_handler_key = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32359 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32360 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32361 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32359);
leaflet_marker.setIcon(icon_32360);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32361);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32362,points_showing_QMARK_){var map__32368 = p__32362;var map__32368__$1 = ((cljs.core.seq_QMARK_.call(null,map__32368))?cljs.core.apply.call(null,cljs.core.hash_map,map__32368):map__32368);var geohash_agg_spec = map__32368__$1;var geohash_agg_data = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,geohash_agg_data));var markers = cljs.core.deref.call(null,geohash_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,points_showing_QMARK_);if(and__3627__auto__)
{return show_at_zoom_fn__$1.call(null,zoom);
} else
{return and__3627__auto__;
}
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32368,map__32368__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32369 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32370 = null;var count__32371 = (0);var i__32372 = (0);while(true){
if((i__32372 < count__32371))
{var k = cljs.core._nth.call(null,chunk__32370,i__32372);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32373 = seq__32369;
var G__32374 = chunk__32370;
var G__32375 = count__32371;
var G__32376 = (i__32372 + (1));
seq__32369 = G__32373;
chunk__32370 = G__32374;
count__32371 = G__32375;
i__32372 = G__32376;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32369);if(temp__4126__auto__)
{var seq__32369__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32369__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32369__$1);{
var G__32377 = cljs.core.chunk_rest.call(null,seq__32369__$1);
var G__32378 = c__4408__auto__;
var G__32379 = cljs.core.count.call(null,c__4408__auto__);
var G__32380 = (0);
seq__32369 = G__32377;
chunk__32370 = G__32378;
count__32371 = G__32379;
i__32372 = G__32380;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32369__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32381 = cljs.core.next.call(null,seq__32369__$1);
var G__32382 = null;
var G__32383 = (0);
var G__32384 = (0);
seq__32369 = G__32381;
chunk__32370 = G__32382;
count__32371 = G__32383;
i__32372 = G__32384;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geohash_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into leaflet bounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32393 = cljs.core.js__GT_clj.call(null,envelope);var map__32393__$1 = ((cljs.core.seq_QMARK_.call(null,map__32393))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);var clj_envelope = map__32393__$1;var vec__32394 = cljs.core.get.call(null,map__32393__$1,"coordinates");var vec__32395 = cljs.core.nth.call(null,vec__32394,(0),null);var vec__32396 = cljs.core.nth.call(null,vec__32395,(0),null);var miny0 = cljs.core.nth.call(null,vec__32396,(0),null);var minx0 = cljs.core.nth.call(null,vec__32396,(1),null);var vec__32397 = cljs.core.nth.call(null,vec__32395,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32397,(0),null);var minx1 = cljs.core.nth.call(null,vec__32397,(1),null);var vec__32398 = cljs.core.nth.call(null,vec__32395,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32398,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32398,(1),null);var vec__32399 = cljs.core.nth.call(null,vec__32395,(3),null);var miny3 = cljs.core.nth.call(null,vec__32399,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32399,(1),null);var vec__32400 = cljs.core.nth.call(null,vec__32395,(4),null);var miny4 = cljs.core.nth.call(null,vec__32400,(0),null);var minx4 = cljs.core.nth.call(null,vec__32400,(1),null);var inner = vec__32395;var coords = vec__32394;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32401,p__32402){var map__32405 = p__32401;var map__32405__$1 = ((cljs.core.seq_QMARK_.call(null,map__32405))?cljs.core.apply.call(null,cljs.core.hash_map,map__32405):map__32405);var fill_color = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32406 = p__32402;var map__32406__$1 = ((cljs.core.seq_QMARK_.call(null,map__32406))?cljs.core.apply.call(null,cljs.core.hash_map,map__32406):map__32406);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
{return highlighted;
} else
{return and__3627__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));

}
}
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.create_path = (function() { 
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32407,p__32408){var map__32412 = p__32407;var map__32412__$1 = ((cljs.core.seq_QMARK_.call(null,map__32412))?cljs.core.apply.call(null,cljs.core.hash_map,map__32412):map__32412);var path_attrs = map__32412__$1;var selected = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32413 = p__32408;var map__32414 = cljs.core.nth.call(null,vec__32413,(0),null);var map__32414__$1 = ((cljs.core.seq_QMARK_.call(null,map__32414))?cljs.core.apply.call(null,cljs.core.hash_map,map__32414):map__32414);var opts = map__32414__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32412,map__32412__$1,path_attrs,selected,vec__32413,map__32414,map__32414__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32412,map__32412__$1,path_attrs,selected,vec__32413,map__32414,map__32414__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32407,var_args){
var p__32408 = null;if (arguments.length > 5) {
  p__32408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32407,p__32408);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32415){
var comm = cljs.core.first(arglist__32415);
arglist__32415 = cljs.core.next(arglist__32415);
var leaflet_map = cljs.core.first(arglist__32415);
arglist__32415 = cljs.core.next(arglist__32415);
var boundaryline_id = cljs.core.first(arglist__32415);
arglist__32415 = cljs.core.next(arglist__32415);
var js_boundaryline = cljs.core.first(arglist__32415);
arglist__32415 = cljs.core.next(arglist__32415);
var p__32407 = cljs.core.first(arglist__32415);
var p__32408 = cljs.core.rest(arglist__32415);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32407,p__32408);
});
create_path.cljs$core$IFn$_invoke$arity$variadic = create_path__delegate;
return create_path;
})()
;
/**
* create leaflet paths for every boundaryline in boundaryline-index
* @param {...*} var_args
*/
clustermap.components.map.fetch_create_path = (function() { 
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32416){var vec__32419 = p__32416;var map__32420 = cljs.core.nth.call(null,vec__32419,(0),null);var map__32420__$1 = ((cljs.core.seq_QMARK_.call(null,map__32420))?cljs.core.apply.call(null,cljs.core.hash_map,map__32420):map__32420);var opts = map__32420__$1;var filter_spec = cljs.core.get.call(null,map__32420__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32416 = null;if (arguments.length > 6) {
  p__32416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32416);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32421){
var comm = cljs.core.first(arglist__32421);
arglist__32421 = cljs.core.next(arglist__32421);
var leaflet_map = cljs.core.first(arglist__32421);
arglist__32421 = cljs.core.next(arglist__32421);
var boundaryline_id = cljs.core.first(arglist__32421);
arglist__32421 = cljs.core.next(arglist__32421);
var tolerance = cljs.core.first(arglist__32421);
arglist__32421 = cljs.core.next(arglist__32421);
var js_boundaryline = cljs.core.first(arglist__32421);
arglist__32421 = cljs.core.next(arglist__32421);
var path_attrs = cljs.core.first(arglist__32421);
var p__32416 = cljs.core.rest(arglist__32421);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32416);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32422){var vec__32425 = p__32422;var map__32426 = cljs.core.nth.call(null,vec__32425,(0),null);var map__32426__$1 = ((cljs.core.seq_QMARK_.call(null,map__32426))?cljs.core.apply.call(null,cljs.core.hash_map,map__32426):map__32426);var opts = map__32426__$1;var filter_spec = cljs.core.get.call(null,map__32426__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32422 = null;if (arguments.length > 6) {
  p__32422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32422);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32427){
var comm = cljs.core.first(arglist__32427);
arglist__32427 = cljs.core.next(arglist__32427);
var leaflet_map = cljs.core.first(arglist__32427);
arglist__32427 = cljs.core.next(arglist__32427);
var boundaryline_id = cljs.core.first(arglist__32427);
arglist__32427 = cljs.core.next(arglist__32427);
var old_path = cljs.core.first(arglist__32427);
arglist__32427 = cljs.core.next(arglist__32427);
var js_boundaryline = cljs.core.first(arglist__32427);
arglist__32427 = cljs.core.next(arglist__32427);
var path_attrs = cljs.core.first(arglist__32427);
var p__32422 = cljs.core.rest(arglist__32427);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32422);
});
replace_path.cljs$core$IFn$_invoke$arity$variadic = replace_path__delegate;
return replace_path;
})()
;
/**
* update a Leaflet path for a boundaryline
* @param {...*} var_args
*/
clustermap.components.map.update_path = (function() { 
var update_path__delegate = function (comm,leaflet_map,p__32428,tolerance,js_boundaryline,path_attrs,p__32429){var map__32433 = p__32428;var map__32433__$1 = ((cljs.core.seq_QMARK_.call(null,map__32433))?cljs.core.apply.call(null,cljs.core.hash_map,map__32433):map__32433);var path = map__32433__$1;var boundaryline_id = cljs.core.get.call(null,map__32433__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32434 = p__32429;var map__32435 = cljs.core.nth.call(null,vec__32434,(0),null);var map__32435__$1 = ((cljs.core.seq_QMARK_.call(null,map__32435))?cljs.core.apply.call(null,cljs.core.hash_map,map__32435):map__32435);var opts = map__32435__$1;var filter_spec = cljs.core.get.call(null,map__32435__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32428,tolerance,js_boundaryline,path_attrs,var_args){
var p__32429 = null;if (arguments.length > 6) {
  p__32429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32428,tolerance,js_boundaryline,path_attrs,p__32429);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32436){
var comm = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var leaflet_map = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var p__32428 = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var tolerance = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var js_boundaryline = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var path_attrs = cljs.core.first(arglist__32436);
var p__32429 = cljs.core.rest(arglist__32436);
return update_path__delegate(comm,leaflet_map,p__32428,tolerance,js_boundaryline,path_attrs,p__32429);
});
update_path.cljs$core$IFn$_invoke$arity$variadic = update_path__delegate;
return update_path;
})()
;
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
/**
* @param {...*} var_args
*/
clustermap.components.map.update_paths = (function() { 
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32437){var vec__32453 = p__32437;var map__32454 = cljs.core.nth.call(null,vec__32453,(0),null);var map__32454__$1 = ((cljs.core.seq_QMARK_.call(null,map__32454))?cljs.core.apply.call(null,cljs.core.hash_map,map__32454):map__32454);var opts = map__32454__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32455 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32455,(0),null);var notifychan = cljs.core.nth.call(null,vec__32455,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32456){var vec__32457 = p__32456;var k = cljs.core.nth.call(null,vec__32457,(0),null);var tolerance = cljs.core.nth.call(null,vec__32457,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32457,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32458 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32458,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32458,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32459){var vec__32460 = p__32459;var k = cljs.core.nth.call(null,vec__32460,(0),null);var tolerance = cljs.core.nth.call(null,vec__32460,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32460,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32461 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32461,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32461,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32462 = cljs.core.seq.call(null,delete_path_keys);var chunk__32463 = null;var count__32464 = (0);var i__32465 = (0);while(true){
if((i__32465 < count__32464))
{var k = cljs.core._nth.call(null,chunk__32463,i__32465);var temp__4124__auto___32468 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32468))
{var path_32469 = temp__4124__auto___32468;clustermap.components.map.delete_path.call(null,leaflet_map,path_32469);
} else
{}
{
var G__32470 = seq__32462;
var G__32471 = chunk__32463;
var G__32472 = count__32464;
var G__32473 = (i__32465 + (1));
seq__32462 = G__32470;
chunk__32463 = G__32471;
count__32464 = G__32472;
i__32465 = G__32473;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32462);if(temp__4126__auto__)
{var seq__32462__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32462__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32462__$1);{
var G__32474 = cljs.core.chunk_rest.call(null,seq__32462__$1);
var G__32475 = c__4408__auto__;
var G__32476 = cljs.core.count.call(null,c__4408__auto__);
var G__32477 = (0);
seq__32462 = G__32474;
chunk__32463 = G__32475;
count__32464 = G__32476;
i__32465 = G__32477;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32462__$1);var temp__4124__auto___32478 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32478))
{var path_32479 = temp__4124__auto___32478;clustermap.components.map.delete_path.call(null,leaflet_map,path_32479);
} else
{}
{
var G__32480 = cljs.core.next.call(null,seq__32462__$1);
var G__32481 = null;
var G__32482 = (0);
var G__32483 = (0);
seq__32462 = G__32480;
chunk__32463 = G__32481;
count__32464 = G__32482;
i__32465 = G__32483;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32466){var map__32467 = p__32466;var map__32467__$1 = ((cljs.core.seq_QMARK_.call(null,map__32467))?cljs.core.apply.call(null,cljs.core.hash_map,map__32467):map__32467);var path = map__32467__$1;var id = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32455,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32453,map__32454,map__32454__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32437 = null;if (arguments.length > 7) {
  p__32437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32437);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32484){
var comm = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var fetch_boundarylines_fn = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var leaflet_map = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var paths_atom = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var path_selections_atom = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var new_path_highlights = cljs.core.first(arglist__32484);
arglist__32484 = cljs.core.next(arglist__32484);
var new_selection_paths = cljs.core.first(arglist__32484);
var p__32437 = cljs.core.rest(arglist__32484);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32437);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32487){var vec__32488 = p__32487;var tz = cljs.core.nth.call(null,vec__32488,(0),null);var collection = cljs.core.nth.call(null,vec__32488,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32489,owner){var map__32733 = p__32489;var map__32733__$1 = ((cljs.core.seq_QMARK_.call(null,map__32733))?cljs.core.apply.call(null,cljs.core.hash_map,map__32733):map__32733);var cursor_data = map__32733__$1;var map__32734 = cljs.core.get.call(null,map__32733__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32734__$1 = ((cljs.core.seq_QMARK_.call(null,map__32734))?cljs.core.apply.call(null,cljs.core.hash_map,map__32734):map__32734);var cursor = map__32734__$1;var data = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32735 = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32735__$1 = ((cljs.core.seq_QMARK_.call(null,map__32735))?cljs.core.apply.call(null,cljs.core.hash_map,map__32735):map__32735);var controls = map__32735__$1;var colorchooser = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32733__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32733__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32736 = (function (colorchooser,initial_bounds,location,map__32735,owner,data,zoom,map_options,map__32734,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32733,threshold_colors,bounds,boundaryline_collection,show_points,p__32489,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,meta32737){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.map__32735 = map__32735;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.map__32734 = map__32734;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.map__32733 = map__32733;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.p__32489 = p__32489;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32737 = meta32737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32736.cljs$lang$type = true;
clustermap.components.map.t32736.cljs$lang$ctorStr = "clustermap.components.map/t32736";
clustermap.components.map.t32736.cljs$lang$ctorPrWriter = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32736");
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32736.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32739 = om.core.get_state.call(null,self__.owner);var map__32739__$1 = ((cljs.core.seq_QMARK_.call(null,map__32739))?cljs.core.apply.call(null,cljs.core.hash_map,map__32739):map__32739);var map__32740 = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32740__$1 = ((cljs.core.seq_QMARK_.call(null,map__32740))?cljs.core.apply.call(null,cljs.core.hash_map,map__32740):map__32740);var path_selections = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32736.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32741,p__32742){var self__ = this;
var map__32743 = p__32741;var map__32743__$1 = ((cljs.core.seq_QMARK_.call(null,map__32743))?cljs.core.apply.call(null,cljs.core.hash_map,map__32743):map__32743);var next_cursor_data = map__32743__$1;var map__32744 = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32744__$1 = ((cljs.core.seq_QMARK_.call(null,map__32744))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);var next_cursor = map__32744__$1;var next_data = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32745 = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32745__$1 = ((cljs.core.seq_QMARK_.call(null,map__32745))?cljs.core.apply.call(null,cljs.core.hash_map,map__32745):map__32745);var next_colorchooser = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32746 = p__32742;var map__32746__$1 = ((cljs.core.seq_QMARK_.call(null,map__32746))?cljs.core.apply.call(null,cljs.core.hash_map,map__32746):map__32746);var map__32747 = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32747__$1 = ((cljs.core.seq_QMARK_.call(null,map__32747))?cljs.core.apply.call(null,cljs.core.hash_map,map__32747):map__32747);var next_markers = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32748 = om.core.get_shared.call(null,self__.owner);var map__32748__$1 = ((cljs.core.seq_QMARK_.call(null,map__32748))?cljs.core.apply.call(null,cljs.core.hash_map,map__32748):map__32748);var path_marker_click_fn = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32749 = om.core.get_state.call(null,self__.owner);var map__32749__$1 = ((cljs.core.seq_QMARK_.call(null,map__32749))?cljs.core.apply.call(null,cljs.core.hash_map,map__32749):map__32749);var map__32750 = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32750__$1 = ((cljs.core.seq_QMARK_.call(null,map__32750))?cljs.core.apply.call(null,cljs.core.hash_map,map__32750):map__32750);var path_selections = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_zoom;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,self__.zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_bounds;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_boundaryline_agg,self__.boundaryline_agg)) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32773){var state_val_32774 = (state_32773[(1)]);if((state_val_32774 === (5)))
{var inst_32771 = (state_32773[(2)]);var state_32773__$1 = state_32773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32773__$1,inst_32771);
} else
{if((state_val_32774 === (4)))
{var state_32773__$1 = state_32773;var statearr_32775_32977 = state_32773__$1;(statearr_32775_32977[(2)] = null);
(statearr_32775_32977[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32774 === (3)))
{var inst_32763 = (state_32773[(7)]);var inst_32765 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32766 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32767 = (new cljs.core.PersistentVector(null,1,(5),inst_32765,inst_32766,null));var inst_32768 = om.core.update_BANG_.call(null,self__.cursor,inst_32767,inst_32763);var state_32773__$1 = state_32773;var statearr_32776_32978 = state_32773__$1;(statearr_32776_32978[(2)] = inst_32768);
(statearr_32776_32978[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32774 === (2)))
{var inst_32763 = (state_32773[(7)]);var inst_32763__$1 = (state_32773[(2)]);var state_32773__$1 = (function (){var statearr_32777 = state_32773;(statearr_32777[(7)] = inst_32763__$1);
return statearr_32777;
})();if(cljs.core.truth_(inst_32763__$1))
{var statearr_32778_32979 = state_32773__$1;(statearr_32778_32979[(1)] = (3));
} else
{var statearr_32779_32980 = state_32773__$1;(statearr_32779_32980[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32774 === (1)))
{var inst_32751 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32752 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32753 = leaflet_map.getZoom();var inst_32754 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32753);var inst_32755 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32756 = om.core._value.call(null,next_filter);var inst_32757 = leaflet_map.getBounds();var inst_32758 = clustermap.components.map.bounds_array.call(null,inst_32757);var inst_32759 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32760 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32761 = fetch_aggregation_data_fn.call(null,inst_32751,inst_32752,inst_32754,inst_32755,inst_32756,inst_32758,inst_32759,inst_32760);var state_32773__$1 = state_32773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32773__$1,(2),inst_32761);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32783 = [null,null,null,null,null,null,null,null];(statearr_32783[(0)] = state_machine__9111__auto__);
(statearr_32783[(1)] = (1));
return statearr_32783;
});
var state_machine__9111__auto____1 = (function (state_32773){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32773);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32784){if((e32784 instanceof Object))
{var ex__9114__auto__ = e32784;var statearr_32785_32981 = state_32773;(statearr_32785_32981[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32784;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32982 = state_32773;
state_32773 = G__32982;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32786 = f__9126__auto__.call(null);(statearr_32786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32976);
return statearr_32786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32976,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32834){var state_val_32835 = (state_32834[(1)]);if((state_val_32835 === (7)))
{var inst_32801 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32802 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32803 = (new cljs.core.PersistentVector(null,6,(5),inst_32801,inst_32802,null));var state_32834__$1 = state_32834;var statearr_32836_32984 = state_32834__$1;(statearr_32836_32984[(2)] = inst_32803);
(statearr_32836_32984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (1)))
{var inst_32793 = (state_32834[(7)]);var inst_32787 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32788 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32789 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32790 = om.core._value.call(null,next_filter);var inst_32791 = leaflet_map.getBounds();var inst_32792 = clustermap.components.map.bounds_array.call(null,inst_32791);var inst_32793__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32834__$1 = (function (){var statearr_32837 = state_32834;(statearr_32837[(8)] = inst_32787);
(statearr_32837[(7)] = inst_32793__$1);
(statearr_32837[(9)] = inst_32790);
(statearr_32837[(10)] = inst_32788);
(statearr_32837[(11)] = inst_32789);
(statearr_32837[(12)] = inst_32792);
return statearr_32837;
})();if(cljs.core.truth_(inst_32793__$1))
{var statearr_32838_32985 = state_32834__$1;(statearr_32838_32985[(1)] = (3));
} else
{var statearr_32839_32986 = state_32834__$1;(statearr_32839_32986[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (4)))
{var state_32834__$1 = state_32834;var statearr_32840_32987 = state_32834__$1;(statearr_32840_32987[(2)] = "!location");
(statearr_32840_32987[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (13)))
{var state_32834__$1 = state_32834;var statearr_32841_32988 = state_32834__$1;(statearr_32841_32988[(2)] = null);
(statearr_32841_32988[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (6)))
{var inst_32798 = (state_32834[(13)]);var state_32834__$1 = state_32834;var statearr_32842_32989 = state_32834__$1;(statearr_32842_32989[(2)] = inst_32798);
(statearr_32842_32989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (3)))
{var inst_32793 = (state_32834[(7)]);var state_32834__$1 = state_32834;var statearr_32843_32990 = state_32834__$1;(statearr_32843_32990[(2)] = inst_32793);
(statearr_32843_32990[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (12)))
{var inst_32824 = (state_32834[(14)]);var inst_32826 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32827 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32828 = (new cljs.core.PersistentVector(null,1,(5),inst_32826,inst_32827,null));var inst_32829 = om.core.update_BANG_.call(null,self__.cursor,inst_32828,inst_32824);var state_32834__$1 = state_32834;var statearr_32844_32991 = state_32834__$1;(statearr_32844_32991[(2)] = inst_32829);
(statearr_32844_32991[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (2)))
{var inst_32824 = (state_32834[(14)]);var inst_32824__$1 = (state_32834[(2)]);var state_32834__$1 = (function (){var statearr_32845 = state_32834;(statearr_32845[(14)] = inst_32824__$1);
return statearr_32845;
})();if(cljs.core.truth_(inst_32824__$1))
{var statearr_32846_32992 = state_32834__$1;(statearr_32846_32992[(1)] = (12));
} else
{var statearr_32847_32993 = state_32834__$1;(statearr_32847_32993[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (11)))
{var inst_32787 = (state_32834[(8)]);var inst_32790 = (state_32834[(9)]);var inst_32788 = (state_32834[(10)]);var inst_32797 = (state_32834[(15)]);var inst_32789 = (state_32834[(11)]);var inst_32792 = (state_32834[(12)]);var inst_32805 = (state_32834[(16)]);var inst_32819 = (state_32834[(2)]);var inst_32820 = [inst_32788,inst_32789,inst_32790,inst_32792,inst_32797,inst_32805,inst_32819,(1000)];var inst_32821 = cljs.core.PersistentHashMap.fromArrays(inst_32787,inst_32820);var inst_32822 = fetch_point_data_fn.call(null,inst_32821);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32834__$1,(2),inst_32822);
} else
{if((state_val_32835 === (9)))
{var inst_32806 = (state_32834[(17)]);var state_32834__$1 = state_32834;var statearr_32848_32994 = state_32834__$1;(statearr_32848_32994[(2)] = inst_32806);
(statearr_32848_32994[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (5)))
{var inst_32798 = (state_32834[(13)]);var inst_32797 = (state_32834[(2)]);var inst_32798__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32834__$1 = (function (){var statearr_32849 = state_32834;(statearr_32849[(13)] = inst_32798__$1);
(statearr_32849[(15)] = inst_32797);
return statearr_32849;
})();if(cljs.core.truth_(inst_32798__$1))
{var statearr_32850_32995 = state_32834__$1;(statearr_32850_32995[(1)] = (6));
} else
{var statearr_32851_32996 = state_32834__$1;(statearr_32851_32996[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (14)))
{var inst_32832 = (state_32834[(2)]);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32834__$1,inst_32832);
} else
{if((state_val_32835 === (10)))
{var inst_32809 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32810 = ["!latest_turnvoer"];var inst_32811 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32812 = ["desc"];var inst_32813 = cljs.core.PersistentHashMap.fromArrays(inst_32811,inst_32812);var inst_32814 = [inst_32813];var inst_32815 = cljs.core.PersistentHashMap.fromArrays(inst_32810,inst_32814);var inst_32816 = [inst_32815];var inst_32817 = (new cljs.core.PersistentVector(null,1,(5),inst_32809,inst_32816,null));var state_32834__$1 = state_32834;var statearr_32852_32997 = state_32834__$1;(statearr_32852_32997[(2)] = inst_32817);
(statearr_32852_32997[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32835 === (8)))
{var inst_32806 = (state_32834[(17)]);var inst_32805 = (state_32834[(2)]);var inst_32806__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32834__$1 = (function (){var statearr_32853 = state_32834;(statearr_32853[(17)] = inst_32806__$1);
(statearr_32853[(16)] = inst_32805);
return statearr_32853;
})();if(cljs.core.truth_(inst_32806__$1))
{var statearr_32854_32998 = state_32834__$1;(statearr_32854_32998[(1)] = (9));
} else
{var statearr_32855_32999 = state_32834__$1;(statearr_32855_32999[(1)] = (10));
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
});})(c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32859[(0)] = state_machine__9111__auto__);
(statearr_32859[(1)] = (1));
return statearr_32859;
});
var state_machine__9111__auto____1 = (function (state_32834){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32834);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32860){if((e32860 instanceof Object))
{var ex__9114__auto__ = e32860;var statearr_32861_33000 = state_32834;(statearr_32861_33000[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32860;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33001 = state_32834;
state_32834 = G__33001;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32834){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32862 = f__9126__auto__.call(null);(statearr_32862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32983);
return statearr_32862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32983,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33002 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32876){var state_val_32877 = (state_32876[(1)]);if((state_val_32877 === (5)))
{var inst_32874 = (state_32876[(2)]);var state_32876__$1 = state_32876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32876__$1,inst_32874);
} else
{if((state_val_32877 === (4)))
{var state_32876__$1 = state_32876;var statearr_32878_33003 = state_32876__$1;(statearr_32878_33003[(2)] = null);
(statearr_32878_33003[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32877 === (3)))
{var inst_32866 = (state_32876[(7)]);var inst_32868 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32869 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32870 = (new cljs.core.PersistentVector(null,3,(5),inst_32868,inst_32869,null));var inst_32871 = om.core.update_BANG_.call(null,self__.cursor,inst_32870,inst_32866);var state_32876__$1 = state_32876;var statearr_32879_33004 = state_32876__$1;(statearr_32879_33004[(2)] = inst_32871);
(statearr_32879_33004[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32877 === (2)))
{var inst_32866 = (state_32876[(7)]);var inst_32866__$1 = (state_32876[(2)]);var state_32876__$1 = (function (){var statearr_32880 = state_32876;(statearr_32880[(7)] = inst_32866__$1);
return statearr_32880;
})();if(cljs.core.truth_(inst_32866__$1))
{var statearr_32881_33005 = state_32876__$1;(statearr_32881_33005[(1)] = (3));
} else
{var statearr_32882_33006 = state_32876__$1;(statearr_32882_33006[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32877 === (1)))
{var inst_32863 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32864 = fetch_geotag_data_fn.call(null,inst_32863);var state_32876__$1 = state_32876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32876__$1,(2),inst_32864);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32886 = [null,null,null,null,null,null,null,null];(statearr_32886[(0)] = state_machine__9111__auto__);
(statearr_32886[(1)] = (1));
return statearr_32886;
});
var state_machine__9111__auto____1 = (function (state_32876){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32876);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32887){if((e32887 instanceof Object))
{var ex__9114__auto__ = e32887;var statearr_32888_33007 = state_32876;(statearr_32888_33007[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33008 = state_32876;
state_32876 = G__33008;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32876){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32889 = f__9126__auto__.call(null);(statearr_32889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33002);
return statearr_32889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33002,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$2))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33009 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32908){var state_val_32909 = (state_32908[(1)]);if((state_val_32909 === (5)))
{var inst_32906 = (state_32908[(2)]);var state_32908__$1 = state_32908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32908__$1,inst_32906);
} else
{if((state_val_32909 === (4)))
{var state_32908__$1 = state_32908;var statearr_32910_33010 = state_32908__$1;(statearr_32910_33010[(2)] = null);
(statearr_32910_33010[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32909 === (3)))
{var inst_32897 = (state_32908[(7)]);var inst_32899 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32900 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32901 = (new cljs.core.PersistentVector(null,3,(5),inst_32899,inst_32900,null));var inst_32902 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32897);var inst_32903 = om.core.update_BANG_.call(null,self__.cursor,inst_32901,inst_32902);var state_32908__$1 = state_32908;var statearr_32911_33011 = state_32908__$1;(statearr_32911_33011[(2)] = inst_32903);
(statearr_32911_33011[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32909 === (2)))
{var inst_32897 = (state_32908[(7)]);var inst_32897__$1 = (state_32908[(2)]);var state_32908__$1 = (function (){var statearr_32912 = state_32908;(statearr_32912[(7)] = inst_32897__$1);
return statearr_32912;
})();if(cljs.core.truth_(inst_32897__$1))
{var statearr_32913_33012 = state_32908__$1;(statearr_32913_33012[(1)] = (3));
} else
{var statearr_32914_33013 = state_32908__$1;(statearr_32914_33013[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32909 === (1)))
{var inst_32890 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32891 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32892 = [next_filter];var inst_32893 = cljs.core.PersistentHashMap.fromArrays(inst_32891,inst_32892);var inst_32894 = cljs.core.merge.call(null,inst_32890,inst_32893);var inst_32895 = fetch_geotag_agg_data_fn.call(null,inst_32894);var state_32908__$1 = state_32908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32908__$1,(2),inst_32895);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32918 = [null,null,null,null,null,null,null,null];(statearr_32918[(0)] = state_machine__9111__auto__);
(statearr_32918[(1)] = (1));
return statearr_32918;
});
var state_machine__9111__auto____1 = (function (state_32908){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32908);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32919){if((e32919 instanceof Object))
{var ex__9114__auto__ = e32919;var statearr_32920_33014 = state_32908;(statearr_32920_33014[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33015 = state_32908;
state_32908 = G__33015;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32921 = f__9126__auto__.call(null);(statearr_32921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33009);
return statearr_32921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33009,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_bounds;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_geohash_aggs;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);if(cljs.core.truth_(and__3627__auto____$2))
{var and__3627__auto____$3 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$3))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$3;
}
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32942){var state_val_32943 = (state_32942[(1)]);if((state_val_32943 === (5)))
{var inst_32940 = (state_32942[(2)]);var state_32942__$1 = state_32942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32942__$1,inst_32940);
} else
{if((state_val_32943 === (4)))
{var state_32942__$1 = state_32942;var statearr_32944_33017 = state_32942__$1;(statearr_32944_33017[(2)] = null);
(statearr_32944_33017[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32943 === (3)))
{var inst_32931 = (state_32942[(7)]);var inst_32933 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32934 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32935 = (new cljs.core.PersistentVector(null,3,(5),inst_32933,inst_32934,null));var inst_32936 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32931);var inst_32937 = om.core.update_BANG_.call(null,self__.cursor,inst_32935,inst_32936);var state_32942__$1 = state_32942;var statearr_32945_33018 = state_32942__$1;(statearr_32945_33018[(2)] = inst_32937);
(statearr_32945_33018[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32943 === (2)))
{var inst_32931 = (state_32942[(7)]);var inst_32931__$1 = (state_32942[(2)]);var state_32942__$1 = (function (){var statearr_32946 = state_32942;(statearr_32946[(7)] = inst_32931__$1);
return statearr_32946;
})();if(cljs.core.truth_(inst_32931__$1))
{var statearr_32947_33019 = state_32942__$1;(statearr_32947_33019[(1)] = (3));
} else
{var statearr_32948_33020 = state_32942__$1;(statearr_32948_33020[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32943 === (1)))
{var inst_32922 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32923 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32924 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32925 = inst_32924.call(null,next_zoom);var inst_32926 = [next_filter,next_bounds,inst_32925];var inst_32927 = cljs.core.PersistentHashMap.fromArrays(inst_32923,inst_32926);var inst_32928 = cljs.core.merge.call(null,inst_32922,inst_32927);var inst_32929 = fetch_geohash_agg_data_fn.call(null,inst_32928);var state_32942__$1 = state_32942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32942__$1,(2),inst_32929);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32952 = [null,null,null,null,null,null,null,null];(statearr_32952[(0)] = state_machine__9111__auto__);
(statearr_32952[(1)] = (1));
return statearr_32952;
});
var state_machine__9111__auto____1 = (function (state_32942){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32942);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32953){if((e32953 instanceof Object))
{var ex__9114__auto__ = e32953;var statearr_32954_33021 = state_32942;(statearr_32954_33021[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33022 = state_32942;
state_32942 = G__33022;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32942){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32955 = f__9126__auto__.call(null);(statearr_32955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33016);
return statearr_32955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33016,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_colorchooser;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_data;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,self__.colorchooser));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var vec__32956_33023 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33024 = cljs.core.nth.call(null,vec__32956_33023,(0),null);var selection_path_colours_33025 = cljs.core.nth.call(null,vec__32956_33023,(1),null);var update_paths_invocation_33026 = ((function (vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33025,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33024,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33024);
} else
{}
var temp__4126__auto___33027 = update_paths_invocation_33026.call(null);if(cljs.core.truth_(temp__4126__auto___33027))
{var notify_chan_33028 = temp__4126__auto___33027;var c__9125__auto___33029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32961){var state_val_32962 = (state_32961[(1)]);if((state_val_32962 === (2)))
{var inst_32958 = (state_32961[(2)]);var inst_32959 = update_paths_invocation_33026.call(null);var state_32961__$1 = (function (){var statearr_32963 = state_32961;(statearr_32963[(7)] = inst_32958);
return statearr_32963;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32961__$1,inst_32959);
} else
{if((state_val_32962 === (1)))
{var state_32961__$1 = state_32961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32961__$1,(2),notify_chan_33028);
} else
{return null;
}
}
});})(c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32967 = [null,null,null,null,null,null,null,null];(statearr_32967[(0)] = state_machine__9111__auto__);
(statearr_32967[(1)] = (1));
return statearr_32967;
});
var state_machine__9111__auto____1 = (function (state_32961){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32961);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32968){if((e32968 instanceof Object))
{var ex__9114__auto__ = e32968;var statearr_32969_33030 = state_32961;(statearr_32969_33030[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33031 = state_32961;
state_32961 = G__33031;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32961){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32970 = f__9126__auto__.call(null);(statearr_32970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33029);
return statearr_32970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33029,notify_chan_33028,temp__4126__auto___33027,vec__32956_33023,new_threshold_colors_33024,selection_path_colours_33025,update_paths_invocation_33026,map__32748,map__32748__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32749,map__32749__$1,map__32750,map__32750__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32743,map__32743__$1,next_cursor_data,map__32744,map__32744__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32745,map__32745__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32746,map__32746__$1,map__32747,map__32747__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)) || (cljs.core.not_EQ_.call(null,next_location,self__.location)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,(cljs.core.truth_(new cljs.core.Keyword(null,"cluster","cluster",535175621).cljs$core$IFn$_invoke$arity$1(next_location))?leaflet_marker_cluster_group:null),next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),next_location], null));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(self__.geohash_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geohash_markers.call(null,leaflet_map,next_geohash_markers,next_geohash_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32736.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32971 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32971__$1 = ((cljs.core.seq_QMARK_.call(null,map__32971))?cljs.core.apply.call(null,cljs.core.hash_map,map__32971):map__32971);var map = map__32971__$1;var path = cljs.core.get.call(null,map__32971__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32971__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32971__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32972 = om.core.get_shared.call(null,self__.owner);var map__32972__$1 = ((cljs.core.seq_QMARK_.call(null,map__32972))?cljs.core.apply.call(null,cljs.core.hash_map,map__32972):map__32972);var path_marker_click_fn = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;var current_dims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null);var props = om.core.get_props.call(null,self__.owner);var use_bounds = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)], null));if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),current_dims)))
{console.log("window size changed !");
leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.deref.call(null,last_dims)))
{} else
{console.log("first map show !");
if(cljs.core.truth_(use_bounds))
{clustermap.components.map.locate_map.call(null,leaflet_map,use_bounds);
} else
{}
}
return cljs.core.reset_BANG_.call(null,last_dims,current_dims);
} else
{return null;
}
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32973 = e;var G__32973__$1 = (((G__32973 == null))?null:G__32973.target);var G__32973__$2 = (((G__32973__$1 == null))?null:domina.attr.call(null,G__32973__$1,"data-boundaryline-id"));var G__32973__$3 = (((G__32973__$2 == null))?null:path_marker_click_fn.call(null,G__32973__$2));return G__32973__$3;
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32971,map__32971__$1,map,path,markers,leaflet_map,map__32972,map__32972__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.om$core$IRender$ = true;
clustermap.components.map.t32736.prototype.om$core$IRender$render$arity$1 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32738){var self__ = this;
var _32738__$1 = this;return self__.meta32737;
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32738,meta32737__$1){var self__ = this;
var _32738__$1 = this;return (new clustermap.components.map.t32736(self__.colorchooser,self__.initial_bounds,self__.location,self__.map__32735,self__.owner,self__.data,self__.zoom,self__.map_options,self__.map__32734,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.map__32733,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.p__32489,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32737__$1));
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32736 = ((function (map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32736(colorchooser__$1,initial_bounds__$1,location__$1,map__32735__$2,owner__$1,data__$1,zoom__$1,map_options__$1,map__32734__$2,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32733__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__32489__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32737){return (new clustermap.components.map.t32736(colorchooser__$1,initial_bounds__$1,location__$1,map__32735__$2,owner__$1,data__$1,zoom__$1,map_options__$1,map__32734__$2,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32733__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__32489__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32737));
});})(map__32733,map__32733__$1,cursor_data,map__32734,map__32734__$1,cursor,data,point_data,boundaryline_collections,map__32735,map__32735__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32736(colorchooser,initial_bounds,location,map__32735__$1,owner,data,zoom,map_options,map__32734__$1,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32733__$1,threshold_colors,bounds,boundaryline_collection,show_points,p__32489,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
