goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35876){
var map__35877 = p__35876;
var map__35877__$1 = (((((!((map__35877 == null))))?(((((map__35877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35877):map__35877);
var m = map__35877__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35879_36182 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35880_36183 = null;
var count__35881_36184 = (0);
var i__35882_36185 = (0);
while(true){
if((i__35882_36185 < count__35881_36184)){
var f_36186 = chunk__35880_36183.cljs$core$IIndexed$_nth$arity$2(null,i__35882_36185);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36186], 0));


var G__36187 = seq__35879_36182;
var G__36188 = chunk__35880_36183;
var G__36189 = count__35881_36184;
var G__36190 = (i__35882_36185 + (1));
seq__35879_36182 = G__36187;
chunk__35880_36183 = G__36188;
count__35881_36184 = G__36189;
i__35882_36185 = G__36190;
continue;
} else {
var temp__5735__auto___36192 = cljs.core.seq(seq__35879_36182);
if(temp__5735__auto___36192){
var seq__35879_36194__$1 = temp__5735__auto___36192;
if(cljs.core.chunked_seq_QMARK_(seq__35879_36194__$1)){
var c__4609__auto___36196 = cljs.core.chunk_first(seq__35879_36194__$1);
var G__36197 = cljs.core.chunk_rest(seq__35879_36194__$1);
var G__36198 = c__4609__auto___36196;
var G__36199 = cljs.core.count(c__4609__auto___36196);
var G__36200 = (0);
seq__35879_36182 = G__36197;
chunk__35880_36183 = G__36198;
count__35881_36184 = G__36199;
i__35882_36185 = G__36200;
continue;
} else {
var f_36203 = cljs.core.first(seq__35879_36194__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36203], 0));


var G__36204 = cljs.core.next(seq__35879_36194__$1);
var G__36205 = null;
var G__36206 = (0);
var G__36207 = (0);
seq__35879_36182 = G__36204;
chunk__35880_36183 = G__36205;
count__35881_36184 = G__36206;
i__35882_36185 = G__36207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36208], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36208)))?cljs.core.second(arglists_36208):arglists_36208)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35894_36212 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35895_36213 = null;
var count__35896_36214 = (0);
var i__35897_36215 = (0);
while(true){
if((i__35897_36215 < count__35896_36214)){
var vec__35913_36216 = chunk__35895_36213.cljs$core$IIndexed$_nth$arity$2(null,i__35897_36215);
var name_36217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913_36216,(0),null);
var map__35916_36218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913_36216,(1),null);
var map__35916_36219__$1 = (((((!((map__35916_36218 == null))))?(((((map__35916_36218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35916_36218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35916_36218):map__35916_36218);
var doc_36220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916_36219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916_36219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36217], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36221], 0));

if(cljs.core.truth_(doc_36220)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36220], 0));
} else {
}


var G__36222 = seq__35894_36212;
var G__36223 = chunk__35895_36213;
var G__36224 = count__35896_36214;
var G__36225 = (i__35897_36215 + (1));
seq__35894_36212 = G__36222;
chunk__35895_36213 = G__36223;
count__35896_36214 = G__36224;
i__35897_36215 = G__36225;
continue;
} else {
var temp__5735__auto___36226 = cljs.core.seq(seq__35894_36212);
if(temp__5735__auto___36226){
var seq__35894_36227__$1 = temp__5735__auto___36226;
if(cljs.core.chunked_seq_QMARK_(seq__35894_36227__$1)){
var c__4609__auto___36228 = cljs.core.chunk_first(seq__35894_36227__$1);
var G__36229 = cljs.core.chunk_rest(seq__35894_36227__$1);
var G__36230 = c__4609__auto___36228;
var G__36231 = cljs.core.count(c__4609__auto___36228);
var G__36232 = (0);
seq__35894_36212 = G__36229;
chunk__35895_36213 = G__36230;
count__35896_36214 = G__36231;
i__35897_36215 = G__36232;
continue;
} else {
var vec__35918_36233 = cljs.core.first(seq__35894_36227__$1);
var name_36234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918_36233,(0),null);
var map__35921_36235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918_36233,(1),null);
var map__35921_36236__$1 = (((((!((map__35921_36235 == null))))?(((((map__35921_36235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35921_36235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35921_36235):map__35921_36235);
var doc_36237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36234], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36238], 0));

if(cljs.core.truth_(doc_36237)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36237], 0));
} else {
}


var G__36239 = cljs.core.next(seq__35894_36227__$1);
var G__36240 = null;
var G__36241 = (0);
var G__36242 = (0);
seq__35894_36212 = G__36239;
chunk__35895_36213 = G__36240;
count__35896_36214 = G__36241;
i__35897_36215 = G__36242;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35923 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35924 = null;
var count__35925 = (0);
var i__35926 = (0);
while(true){
if((i__35926 < count__35925)){
var role = chunk__35924.cljs$core$IIndexed$_nth$arity$2(null,i__35926);
var temp__5735__auto___36247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36247__$1)){
var spec_36248 = temp__5735__auto___36247__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36248)], 0));
} else {
}


var G__36249 = seq__35923;
var G__36250 = chunk__35924;
var G__36251 = count__35925;
var G__36252 = (i__35926 + (1));
seq__35923 = G__36249;
chunk__35924 = G__36250;
count__35925 = G__36251;
i__35926 = G__36252;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35923);
if(temp__5735__auto____$1){
var seq__35923__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35923__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35923__$1);
var G__36253 = cljs.core.chunk_rest(seq__35923__$1);
var G__36254 = c__4609__auto__;
var G__36255 = cljs.core.count(c__4609__auto__);
var G__36256 = (0);
seq__35923 = G__36253;
chunk__35924 = G__36254;
count__35925 = G__36255;
i__35926 = G__36256;
continue;
} else {
var role = cljs.core.first(seq__35923__$1);
var temp__5735__auto___36259__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36259__$2)){
var spec_36262 = temp__5735__auto___36259__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36262)], 0));
} else {
}


var G__36263 = cljs.core.next(seq__35923__$1);
var G__36264 = null;
var G__36265 = (0);
var G__36266 = (0);
seq__35923 = G__36263;
chunk__35924 = G__36264;
count__35925 = G__36265;
i__35926 = G__36266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36268 = cljs.core.ex_cause(t);
via = G__36267;
t = G__36268;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35998 = datafied_throwable;
var map__35998__$1 = (((((!((map__35998 == null))))?(((((map__35998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35998):map__35998);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35998__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35998__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35998__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36006 = cljs.core.last(via);
var map__36006__$1 = (((((!((map__36006 == null))))?(((((map__36006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36006):map__36006);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36007 = data;
var map__36007__$1 = (((((!((map__36007 == null))))?(((((map__36007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36007):map__36007);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36008 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36008__$1 = (((((!((map__36008 == null))))?(((((map__36008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36008):map__36008);
var top_data = map__36008__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36028 = phase;
var G__36028__$1 = (((G__36028 instanceof cljs.core.Keyword))?G__36028.fqn:null);
switch (G__36028__$1) {
case "read-source":
var map__36033 = data;
var map__36033__$1 = (((((!((map__36033 == null))))?(((((map__36033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36033):map__36033);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36033__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36033__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36039 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36039);
var G__36039__$2 = (cljs.core.truth_((function (){var fexpr__36040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36040.cljs$core$IFn$_invoke$arity$1 ? fexpr__36040.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36040.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36039__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36039__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36039__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36045 = top_data;
var G__36045__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36045,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36045);
var G__36045__$2 = (cljs.core.truth_((function (){var fexpr__36046 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36046.cljs$core$IFn$_invoke$arity$1 ? fexpr__36046.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36046.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36045__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36045__$1);
var G__36045__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36045__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36045__$2);
var G__36045__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36045__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36045__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36045__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36045__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36047 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(3),null);
var G__36050 = top_data;
var G__36050__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36050);
var G__36050__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36050__$1);
var G__36050__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36050__$2);
var G__36050__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36050__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36050__$4;
}

break;
case "execution":
var vec__36063 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35986_SHARP_){
var or__4185__auto__ = (p1__35986_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36077 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36077.cljs$core$IFn$_invoke$arity$1 ? fexpr__36077.cljs$core$IFn$_invoke$arity$1(p1__35986_SHARP_) : fexpr__36077.call(null,p1__35986_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36079 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36079__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36079,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36079);
var G__36079__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36079__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36079__$1);
var G__36079__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36079__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36079__$2);
var G__36079__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36079__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36079__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36079__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36079__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36028__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36096){
var map__36097 = p__36096;
var map__36097__$1 = (((((!((map__36097 == null))))?(((((map__36097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36097):map__36097);
var triage_data = map__36097__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36101 = phase;
var G__36101__$1 = (((G__36101 instanceof cljs.core.Keyword))?G__36101.fqn:null);
switch (G__36101__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36102 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36103 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36104 = loc;
var G__36105 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36112_36280 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36113_36281 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36114_36282 = true;
var _STAR_print_fn_STAR__temp_val__36115_36283 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36114_36282);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36115_36283);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36094_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36094_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36113_36281);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36112_36280);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36102,G__36103,G__36104,G__36105) : format.call(null,G__36102,G__36103,G__36104,G__36105));

break;
case "macroexpansion":
var G__36135 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36136 = cause_type;
var G__36137 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36138 = loc;
var G__36139 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36135,G__36136,G__36137,G__36138,G__36139) : format.call(null,G__36135,G__36136,G__36137,G__36138,G__36139));

break;
case "compile-syntax-check":
var G__36142 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36143 = cause_type;
var G__36144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36145 = loc;
var G__36146 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36142,G__36143,G__36144,G__36145,G__36146) : format.call(null,G__36142,G__36143,G__36144,G__36145,G__36146));

break;
case "compilation":
var G__36149 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36150 = cause_type;
var G__36151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36152 = loc;
var G__36153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36149,G__36150,G__36151,G__36152,G__36153) : format.call(null,G__36149,G__36150,G__36151,G__36152,G__36153));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36154 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36155 = symbol;
var G__36156 = loc;
var G__36157 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36159_36285 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36160_36286 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36162_36287 = true;
var _STAR_print_fn_STAR__temp_val__36163_36288 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36162_36287);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36163_36288);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36160_36286);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36159_36285);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36154,G__36155,G__36156,G__36157) : format.call(null,G__36154,G__36155,G__36156,G__36157));
} else {
var G__36168 = "Execution error%s at %s(%s).\n%s\n";
var G__36169 = cause_type;
var G__36170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36171 = loc;
var G__36172 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36168,G__36169,G__36170,G__36171,G__36172) : format.call(null,G__36168,G__36169,G__36170,G__36171,G__36172));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36101__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
