goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35061 = arguments.length;
var i__4790__auto___35062 = (0);
while(true){
if((i__4790__auto___35062 < len__4789__auto___35061)){
args__4795__auto__.push((arguments[i__4790__auto___35062]));

var G__35064 = (i__4790__auto___35062 + (1));
i__4790__auto___35062 = G__35064;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34577){
var G__34578 = cljs.core.first(seq34577);
var seq34577__$1 = cljs.core.next(seq34577);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34578,seq34577__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34609){
var map__34610 = p__34609;
var map__34610__$1 = (((((!((map__34610 == null))))?(((((map__34610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34610):map__34610);
var src = map__34610__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34610__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34610__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34620 = cljs.core.seq(sources);
var chunk__34621 = null;
var count__34622 = (0);
var i__34623 = (0);
while(true){
if((i__34623 < count__34622)){
var map__34641 = chunk__34621.cljs$core$IIndexed$_nth$arity$2(null,i__34623);
var map__34641__$1 = (((((!((map__34641 == null))))?(((((map__34641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34641):map__34641);
var src = map__34641__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34646){var e_35080 = e34646;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35080);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35080.message)].join('')));
}

var G__35081 = seq__34620;
var G__35082 = chunk__34621;
var G__35083 = count__34622;
var G__35084 = (i__34623 + (1));
seq__34620 = G__35081;
chunk__34621 = G__35082;
count__34622 = G__35083;
i__34623 = G__35084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34620);
if(temp__5735__auto__){
var seq__34620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34620__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34620__$1);
var G__35086 = cljs.core.chunk_rest(seq__34620__$1);
var G__35087 = c__4609__auto__;
var G__35088 = cljs.core.count(c__4609__auto__);
var G__35089 = (0);
seq__34620 = G__35086;
chunk__34621 = G__35087;
count__34622 = G__35088;
i__34623 = G__35089;
continue;
} else {
var map__34649 = cljs.core.first(seq__34620__$1);
var map__34649__$1 = (((((!((map__34649 == null))))?(((((map__34649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34649):map__34649);
var src = map__34649__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34654){var e_35092 = e34654;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35092);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35092.message)].join('')));
}

var G__35093 = cljs.core.next(seq__34620__$1);
var G__35094 = null;
var G__35095 = (0);
var G__35096 = (0);
seq__34620 = G__35093;
chunk__34621 = G__35094;
count__34622 = G__35095;
i__34623 = G__35096;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34666 = cljs.core.seq(js_requires);
var chunk__34667 = null;
var count__34668 = (0);
var i__34669 = (0);
while(true){
if((i__34669 < count__34668)){
var js_ns = chunk__34667.cljs$core$IIndexed$_nth$arity$2(null,i__34669);
var require_str_35102 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35102);


var G__35105 = seq__34666;
var G__35106 = chunk__34667;
var G__35107 = count__34668;
var G__35108 = (i__34669 + (1));
seq__34666 = G__35105;
chunk__34667 = G__35106;
count__34668 = G__35107;
i__34669 = G__35108;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34666);
if(temp__5735__auto__){
var seq__34666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34666__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34666__$1);
var G__35110 = cljs.core.chunk_rest(seq__34666__$1);
var G__35111 = c__4609__auto__;
var G__35112 = cljs.core.count(c__4609__auto__);
var G__35113 = (0);
seq__34666 = G__35110;
chunk__34667 = G__35111;
count__34668 = G__35112;
i__34669 = G__35113;
continue;
} else {
var js_ns = cljs.core.first(seq__34666__$1);
var require_str_35114 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35114);


var G__35117 = cljs.core.next(seq__34666__$1);
var G__35118 = null;
var G__35119 = (0);
var G__35120 = (0);
seq__34666 = G__35117;
chunk__34667 = G__35118;
count__34668 = G__35119;
i__34669 = G__35120;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34671 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34671) : callback.call(null,G__34671));
} else {
var G__34672 = shadow.cljs.devtools.client.env.files_url();
var G__34673 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34674 = "POST";
var G__34675 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34676 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34672,G__34673,G__34674,G__34675,G__34676);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34679){
var map__34680 = p__34679;
var map__34680__$1 = (((((!((map__34680 == null))))?(((((map__34680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34680):map__34680);
var msg = map__34680__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34686 = info;
var map__34686__$1 = (((((!((map__34686 == null))))?(((((map__34686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34686):map__34686);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34686__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34686__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34690(s__34691){
return (new cljs.core.LazySeq(null,(function (){
var s__34691__$1 = s__34691;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34691__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34696 = cljs.core.first(xs__6292__auto__);
var map__34696__$1 = (((((!((map__34696 == null))))?(((((map__34696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34696):map__34696);
var src = map__34696__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34691__$1,map__34696,map__34696__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34686,map__34686__$1,sources,compiled,map__34680,map__34680__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34690_$_iter__34692(s__34693){
return (new cljs.core.LazySeq(null,((function (s__34691__$1,map__34696,map__34696__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34686,map__34686__$1,sources,compiled,map__34680,map__34680__$1,msg,info,reload_info){
return (function (){
var s__34693__$1 = s__34693;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34693__$1);
if(temp__5735__auto____$1){
var s__34693__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34693__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34693__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34695 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34694 = (0);
while(true){
if((i__34694 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34694);
cljs.core.chunk_append(b__34695,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35140 = (i__34694 + (1));
i__34694 = G__35140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34695),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34690_$_iter__34692(cljs.core.chunk_rest(s__34693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34695),null);
}
} else {
var warning = cljs.core.first(s__34693__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34690_$_iter__34692(cljs.core.rest(s__34693__$2)));
}
} else {
return null;
}
break;
}
});})(s__34691__$1,map__34696,map__34696__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34686,map__34686__$1,sources,compiled,map__34680,map__34680__$1,msg,info,reload_info))
,null,null));
});})(s__34691__$1,map__34696,map__34696__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34686,map__34686__$1,sources,compiled,map__34680,map__34680__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34690(cljs.core.rest(s__34691__$1)));
} else {
var G__35144 = cljs.core.rest(s__34691__$1);
s__34691__$1 = G__35144;
continue;
}
} else {
var G__35145 = cljs.core.rest(s__34691__$1);
s__34691__$1 = G__35145;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__34710_35146 = cljs.core.seq(warnings);
var chunk__34711_35147 = null;
var count__34712_35148 = (0);
var i__34713_35149 = (0);
while(true){
if((i__34713_35149 < count__34712_35148)){
var map__34733_35153 = chunk__34711_35147.cljs$core$IIndexed$_nth$arity$2(null,i__34713_35149);
var map__34733_35154__$1 = (((((!((map__34733_35153 == null))))?(((((map__34733_35153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733_35153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733_35153):map__34733_35153);
var w_35155 = map__34733_35154__$1;
var msg_35156__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733_35154__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733_35154__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733_35154__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733_35154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35159)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35157),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35158),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35156__$1)].join(''));


var G__35162 = seq__34710_35146;
var G__35163 = chunk__34711_35147;
var G__35164 = count__34712_35148;
var G__35165 = (i__34713_35149 + (1));
seq__34710_35146 = G__35162;
chunk__34711_35147 = G__35163;
count__34712_35148 = G__35164;
i__34713_35149 = G__35165;
continue;
} else {
var temp__5735__auto___35167 = cljs.core.seq(seq__34710_35146);
if(temp__5735__auto___35167){
var seq__34710_35169__$1 = temp__5735__auto___35167;
if(cljs.core.chunked_seq_QMARK_(seq__34710_35169__$1)){
var c__4609__auto___35170 = cljs.core.chunk_first(seq__34710_35169__$1);
var G__35171 = cljs.core.chunk_rest(seq__34710_35169__$1);
var G__35172 = c__4609__auto___35170;
var G__35173 = cljs.core.count(c__4609__auto___35170);
var G__35174 = (0);
seq__34710_35146 = G__35171;
chunk__34711_35147 = G__35172;
count__34712_35148 = G__35173;
i__34713_35149 = G__35174;
continue;
} else {
var map__34739_35175 = cljs.core.first(seq__34710_35169__$1);
var map__34739_35176__$1 = (((((!((map__34739_35175 == null))))?(((((map__34739_35175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34739_35175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34739_35175):map__34739_35175);
var w_35177 = map__34739_35176__$1;
var msg_35178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_35176__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_35176__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_35176__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_35176__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35181)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35179),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35180),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35178__$1)].join(''));


var G__35182 = cljs.core.next(seq__34710_35169__$1);
var G__35183 = null;
var G__35184 = (0);
var G__35185 = (0);
seq__34710_35146 = G__35182;
chunk__34711_35147 = G__35183;
count__34712_35148 = G__35184;
i__34713_35149 = G__35185;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34745){
var map__34746 = p__34745;
var map__34746__$1 = (((((!((map__34746 == null))))?(((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34746):map__34746);
var src = map__34746__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34752){
var map__34753 = p__34752;
var map__34753__$1 = (((((!((map__34753 == null))))?(((((map__34753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34753):map__34753);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34758){
var map__34759 = p__34758;
var map__34759__$1 = (((((!((map__34759 == null))))?(((((map__34759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34759):map__34759);
var rc = map__34759__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34759__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34678_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34678_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34774){
var map__34775 = p__34774;
var map__34775__$1 = (((((!((map__34775 == null))))?(((((map__34775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34775):map__34775);
var msg = map__34775__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34775__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34782 = cljs.core.seq(updates);
var chunk__34784 = null;
var count__34785 = (0);
var i__34786 = (0);
while(true){
if((i__34786 < count__34785)){
var path = chunk__34784.cljs$core$IIndexed$_nth$arity$2(null,i__34786);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34848_35227 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34852_35228 = null;
var count__34853_35229 = (0);
var i__34854_35230 = (0);
while(true){
if((i__34854_35230 < count__34853_35229)){
var node_35231 = chunk__34852_35228.cljs$core$IIndexed$_nth$arity$2(null,i__34854_35230);
var path_match_35232 = shadow.cljs.devtools.client.browser.match_paths(node_35231.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35232)){
var new_link_35233 = (function (){var G__34865 = node_35231.cloneNode(true);
G__34865.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35232),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34865;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35232], 0));

goog.dom.insertSiblingAfter(new_link_35233,node_35231);

goog.dom.removeNode(node_35231);


var G__35234 = seq__34848_35227;
var G__35235 = chunk__34852_35228;
var G__35236 = count__34853_35229;
var G__35237 = (i__34854_35230 + (1));
seq__34848_35227 = G__35234;
chunk__34852_35228 = G__35235;
count__34853_35229 = G__35236;
i__34854_35230 = G__35237;
continue;
} else {
var G__35238 = seq__34848_35227;
var G__35239 = chunk__34852_35228;
var G__35240 = count__34853_35229;
var G__35241 = (i__34854_35230 + (1));
seq__34848_35227 = G__35238;
chunk__34852_35228 = G__35239;
count__34853_35229 = G__35240;
i__34854_35230 = G__35241;
continue;
}
} else {
var temp__5735__auto___35242 = cljs.core.seq(seq__34848_35227);
if(temp__5735__auto___35242){
var seq__34848_35243__$1 = temp__5735__auto___35242;
if(cljs.core.chunked_seq_QMARK_(seq__34848_35243__$1)){
var c__4609__auto___35244 = cljs.core.chunk_first(seq__34848_35243__$1);
var G__35245 = cljs.core.chunk_rest(seq__34848_35243__$1);
var G__35246 = c__4609__auto___35244;
var G__35247 = cljs.core.count(c__4609__auto___35244);
var G__35248 = (0);
seq__34848_35227 = G__35245;
chunk__34852_35228 = G__35246;
count__34853_35229 = G__35247;
i__34854_35230 = G__35248;
continue;
} else {
var node_35249 = cljs.core.first(seq__34848_35243__$1);
var path_match_35250 = shadow.cljs.devtools.client.browser.match_paths(node_35249.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35250)){
var new_link_35251 = (function (){var G__34870 = node_35249.cloneNode(true);
G__34870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35250),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34870;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35250], 0));

goog.dom.insertSiblingAfter(new_link_35251,node_35249);

goog.dom.removeNode(node_35249);


var G__35256 = cljs.core.next(seq__34848_35243__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__34848_35227 = G__35256;
chunk__34852_35228 = G__35257;
count__34853_35229 = G__35258;
i__34854_35230 = G__35259;
continue;
} else {
var G__35260 = cljs.core.next(seq__34848_35243__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__34848_35227 = G__35260;
chunk__34852_35228 = G__35261;
count__34853_35229 = G__35262;
i__34854_35230 = G__35263;
continue;
}
}
} else {
}
}
break;
}


var G__35264 = seq__34782;
var G__35265 = chunk__34784;
var G__35266 = count__34785;
var G__35267 = (i__34786 + (1));
seq__34782 = G__35264;
chunk__34784 = G__35265;
count__34785 = G__35266;
i__34786 = G__35267;
continue;
} else {
var G__35268 = seq__34782;
var G__35269 = chunk__34784;
var G__35270 = count__34785;
var G__35271 = (i__34786 + (1));
seq__34782 = G__35268;
chunk__34784 = G__35269;
count__34785 = G__35270;
i__34786 = G__35271;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34782);
if(temp__5735__auto__){
var seq__34782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34782__$1);
var G__35278 = cljs.core.chunk_rest(seq__34782__$1);
var G__35279 = c__4609__auto__;
var G__35280 = cljs.core.count(c__4609__auto__);
var G__35281 = (0);
seq__34782 = G__35278;
chunk__34784 = G__35279;
count__34785 = G__35280;
i__34786 = G__35281;
continue;
} else {
var path = cljs.core.first(seq__34782__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34875_35283 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34878_35284 = null;
var count__34879_35285 = (0);
var i__34880_35286 = (0);
while(true){
if((i__34880_35286 < count__34879_35285)){
var node_35287 = chunk__34878_35284.cljs$core$IIndexed$_nth$arity$2(null,i__34880_35286);
var path_match_35289 = shadow.cljs.devtools.client.browser.match_paths(node_35287.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35289)){
var new_link_35290 = (function (){var G__34892 = node_35287.cloneNode(true);
G__34892.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35289),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34892;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35289], 0));

goog.dom.insertSiblingAfter(new_link_35290,node_35287);

goog.dom.removeNode(node_35287);


var G__35291 = seq__34875_35283;
var G__35292 = chunk__34878_35284;
var G__35293 = count__34879_35285;
var G__35294 = (i__34880_35286 + (1));
seq__34875_35283 = G__35291;
chunk__34878_35284 = G__35292;
count__34879_35285 = G__35293;
i__34880_35286 = G__35294;
continue;
} else {
var G__35295 = seq__34875_35283;
var G__35296 = chunk__34878_35284;
var G__35297 = count__34879_35285;
var G__35298 = (i__34880_35286 + (1));
seq__34875_35283 = G__35295;
chunk__34878_35284 = G__35296;
count__34879_35285 = G__35297;
i__34880_35286 = G__35298;
continue;
}
} else {
var temp__5735__auto___35299__$1 = cljs.core.seq(seq__34875_35283);
if(temp__5735__auto___35299__$1){
var seq__34875_35300__$1 = temp__5735__auto___35299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35300__$1)){
var c__4609__auto___35301 = cljs.core.chunk_first(seq__34875_35300__$1);
var G__35302 = cljs.core.chunk_rest(seq__34875_35300__$1);
var G__35303 = c__4609__auto___35301;
var G__35304 = cljs.core.count(c__4609__auto___35301);
var G__35305 = (0);
seq__34875_35283 = G__35302;
chunk__34878_35284 = G__35303;
count__34879_35285 = G__35304;
i__34880_35286 = G__35305;
continue;
} else {
var node_35306 = cljs.core.first(seq__34875_35300__$1);
var path_match_35307 = shadow.cljs.devtools.client.browser.match_paths(node_35306.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35307)){
var new_link_35308 = (function (){var G__34897 = node_35306.cloneNode(true);
G__34897.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35307),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34897;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35307], 0));

goog.dom.insertSiblingAfter(new_link_35308,node_35306);

goog.dom.removeNode(node_35306);


var G__35311 = cljs.core.next(seq__34875_35300__$1);
var G__35312 = null;
var G__35313 = (0);
var G__35314 = (0);
seq__34875_35283 = G__35311;
chunk__34878_35284 = G__35312;
count__34879_35285 = G__35313;
i__34880_35286 = G__35314;
continue;
} else {
var G__35315 = cljs.core.next(seq__34875_35300__$1);
var G__35316 = null;
var G__35317 = (0);
var G__35318 = (0);
seq__34875_35283 = G__35315;
chunk__34878_35284 = G__35316;
count__34879_35285 = G__35317;
i__34880_35286 = G__35318;
continue;
}
}
} else {
}
}
break;
}


var G__35319 = cljs.core.next(seq__34782__$1);
var G__35320 = null;
var G__35321 = (0);
var G__35322 = (0);
seq__34782 = G__35319;
chunk__34784 = G__35320;
count__34785 = G__35321;
i__34786 = G__35322;
continue;
} else {
var G__35323 = cljs.core.next(seq__34782__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__34782 = G__35323;
chunk__34784 = G__35324;
count__34785 = G__35325;
i__34786 = G__35326;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34924){
var map__34928 = p__34924;
var map__34928__$1 = (((((!((map__34928 == null))))?(((((map__34928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34928):map__34928);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34928__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34942,done){
var map__34943 = p__34942;
var map__34943__$1 = (((((!((map__34943 == null))))?(((((map__34943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34943):map__34943);
var msg = map__34943__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34943__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34943__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34943__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34943__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34947){
var map__34948 = p__34947;
var map__34948__$1 = (((((!((map__34948 == null))))?(((((map__34948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34948):map__34948);
var src = map__34948__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34948__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34950){var e = e34950;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34951,done){
var map__34952 = p__34951;
var map__34952__$1 = (((((!((map__34952 == null))))?(((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34952):map__34952);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34970){
var map__34971 = p__34970;
var map__34971__$1 = (((((!((map__34971 == null))))?(((((map__34971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34971):map__34971);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35015,done){
var map__35016 = p__35015;
var map__35016__$1 = (((((!((map__35016 == null))))?(((((map__35016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35016):map__35016);
var msg = map__35016__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35022_35343 = type;
var G__35022_35344__$1 = (((G__35022_35343 instanceof cljs.core.Keyword))?G__35022_35343.fqn:null);
switch (G__35022_35344__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35030 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35031 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35032 = "POST";
var G__35033 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35034 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35030,G__35031,G__35032,G__35033,G__35034);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35044 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35043 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35043.cljs$core$IFn$_invoke$arity$1 ? fexpr__35043.cljs$core$IFn$_invoke$arity$1(G__35044) : fexpr__35043.call(null,G__35044));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35052){var e = e35052;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35369 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35369)){
var s_35373 = temp__5735__auto___35369;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35373.onclose = (function (e){
return null;
}));

s_35373.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
