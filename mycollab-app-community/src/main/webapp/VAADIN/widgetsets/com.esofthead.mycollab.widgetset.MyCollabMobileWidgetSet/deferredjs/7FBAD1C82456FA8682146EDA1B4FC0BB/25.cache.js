$wnd.com_esofthead_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback25("function NHc(){}\nfunction PHc(){}\nfunction RHc(){}\nfunction ipd(){g$b.call(this)}\nfunction h1b(a,b){return IL(a.G.lo(b))}\nfunction JTd(){KZb.call(this);this.I=NFe;this.a=new o4d}\nfunction qTc(c,a){var b=c;a.notifyChildrenOfSizeChange=a9d(function(){b.Wk()})}\nfunction yTc(b){try{b!=null&&eval('{ var document = $doc; var window = $wnd; '+b+'}')}catch(a){}}\nfunction nTc(b){if(b&&b.iLayoutJS){try{b.iLayoutJS();return true}catch(a){return false}}else{return false}}\nfunction mTc(a,b){var c,d;for(c=J0d(new K0d(a.f));c.a.Ug();){d=IL(P0d(c));if(PL(a.f.lo(d))===PL(b)){return d}}return null}\nfunction rTc(a,b){var c,d;d=mTc(a,b);d!=null&&a.f.oo(d);c=GL(a.a.lo(b),518);if(c){a.a.oo(b);return bd(a,c)}else if(b){return bd(a,b)}return false}\nfunction oTc(a){var b,c,d;d=(rub(),a._b).getElementsByTagName('IMG');for(b=0;b<d.length;b++){c=d[b];pub.Ag(c,_ee)}}\nfunction sTc(a,b){var c,d,e;if((Zt(),b).hasAttribute(dAe)){e=cu(b,dAe);a.e.no(e,b);It(b,'')}else{d=(rub(),Awb(b));for(c=0;c<d;c++){sTc(a,zwb(b,c))}}}\nfunction tTc(a,b,c){var d,e;if(!b){return}d=HL(a.e.lo(c));if(!d&&a.d){throw new kZd('No location '+c+' found')}e=GL(a.f.lo(c),9);if(e==b){return}!!e&&rTc(a,e);a.d||(d=(rub(),a._b));Tc(a,b,(rub(),d));a.f.no(c,b)}\nfunction uTc(a,b){var c,d,e;d=b.Pd();e=GL(a.a.lo(d),518);if(x9b(b.Nd())){if(!e){c=mTc(a,d);bd(a,d);e=new F9b(b,a.b);Sc(a,e,HL(a.e.lo(c)));a.a.no(d,e)}s9b(e.a)}else{if(e){c=mTc(a,d);bd(a,e);Sc(a,d,HL(a.e.lo(c)));a.a.oo(d)}}}\nfunction JHc(c){var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.ok(cmb,JFe,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.ok(cmb,KFe,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.ok(cmb,LFe,d)}\nfunction vTc(){var a;cd.call(this);this.e=new o4d;this.f=new o4d;this.a=new o4d;lb(this,(rub(),Ov($doc)));a=this._b.style;Kx(a,woe,(Qx(),m9d));Kx(a,Iqe,(sB(),Sae));Kx(a,Uqe,Sae);(H3b(),!G3b&&(G3b=new Y3b),H3b(),G3b).a.g&&Kx(a,D9d,(xA(),fae));Gt(this._b,NFe);Hb(this._b,Qye,true)}\nfunction hpd(a){var b,c;if(a.a){return}c=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).c;b=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).b;if(c!=null){b=h1b(a.u,'layouts/'+c+'.html');b==null&&It(bb(GL(Zg(a),242)),'<em>Layout file layouts/'+c+'.html is missing. Components will be drawn for debug purposes.<\\/em>')}b!=null&&pTc(GL(Zg(a),242),b,i1b(a.u));a.a=true}\nfunction pTc(a,b,c){var d;b=lTc(a,b);d=Cbc(c+'/layouts/');b=o$d(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=\"((?![a-z]+:)[^/][^\"]+)\"',MFe+d+'$3\"');b=o$d(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=[^\"]((?![a-z]+:)[^/][^ />]+)[ />]',MFe+d+'$3\"');b=o$d(b,'(<[^>]+style=\"[^\"]*url\\\\()((?![a-z]+:)[^/][^\"]+)(\\\\)[^>]*>)','$1 '+d+'$2 $3');It((rub(),a._b),b);a.e.Ic();sTc(a,a._b);oTc(a);a.c=zub(a._b);!a.c&&(a.c=a._b);qTc(a,a.c);a.d=true}\nfunction lTc(a,b){var c,d,e,f,g,h,i,j;b=o$d(b,'_UID_',a.g+'__');a.i='';d=0;f=b.toLowerCase();h='';i=f.indexOf('<script',0);while(i>0){h+=b.substr(d,i-d);i=f.indexOf('>',i);e=f.indexOf('<\\/script>',i);a.i+=b.substr(i+1,e-(i+1))+';';g=d=e+9;i=f.indexOf('<script',g)}h+=y$d(b,d,b.length-d);f=h.toLowerCase();j=f.indexOf('<body');if(j<0){h=h}else{j=f.indexOf('>',j)+1;c=f.indexOf('<\\/body>',j);c>j?(h=h.substr(j,c-j)):(h=y$d(h,j,h.length-j))}return h}\nvar JFe='childLocations',KFe='templateName',LFe='templateContents',MFe='<$1 $2src=\"',NFe='v-customlayout';Dqb(1791,1,iqe);_.Ie=function MHc(){fKc(this.b,cmb,tlb);XJc(this.b,uue,Wfb);ZJc(this.b,Zab,vue,new NHc);ZJc(this.b,cmb,vue,new PHc);ZJc(this.b,Wfb,vue,new RHc);dKc(this.b,Wfb,sae,new PJc(cmb));dKc(this.b,Wfb,Dae,new PJc(Zab));JHc(this.b);bKc(this.b,cmb,JFe,new QJc(Fve,zL(vL(u9,1),wue,4,0,[new PJc(Xkb),new PJc(tob)])));bKc(this.b,cmb,KFe,new PJc(tob));bKc(this.b,cmb,LFe,new PJc(tob));Vpc((!Opc&&(Opc=new _pc),Opc),this.a.d)};Dqb(1793,1,Fxe,NHc);_.ik=function OHc(a,b){return new vTc};var w8=AYd(Ese,'ConnectorBundleLoaderImpl/25/1/1',1793);Dqb(1794,1,Fxe,PHc);_.ik=function QHc(a,b){return new JTd};var x8=AYd(Ese,'ConnectorBundleLoaderImpl/25/1/2',1794);Dqb(1795,1,Fxe,RHc);_.ik=function SHc(a,b){return new ipd};var y8=AYd(Ese,'ConnectorBundleLoaderImpl/25/1/3',1795);Dqb(242,202,{14:1,11:1,13:1,12:1,24:1,30:1,15:1,26:1,10:1,9:1,242:1,19:1},vTc);_.Hc=function wTc(a){throw new _$d};_.Ic=function xTc(){Nc(this);this.f.Ic();this.a.Ic()};_.Wk=function zTc(){};_.sc=function ATc(a){Ub(this,a);rub();if(mwb((Zt(),a).type)==_ee){i9b(this,true);lwb(a,true)}};_.tc=function BTc(){Vb(this);!!this.c&&(this.c.notifyChildrenOfSizeChange=null,undefined)};_.Jc=function CTc(a){return rTc(this,a)};_.jc=function DTc(a){Gt((rub(),this._b),a);Hb(this._b,Qye,true)};_.d=false;_.i='';var Zab=AYd(uae,'VCustomLayout',242);Dqb(1792,498,{7:1,16:1,120:1,91:1,132:1,25:1,34:1,33:1,31:1,151:1,248:1,32:1,3:1},ipd);_.Nd=function jpd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.zd=function kpd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.yi=function lpd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.Pd=function mpd(){return GL(Zg(this),242)};_.Bd=function npd(){GL(Zg(this),242).b=this.u;GL(Zg(this),242).g=this.w};_.Fi=function opd(){nTc((GL(Zg(this),242),zub(bb(GL(Zg(this),242)))))};_.ke=function ppd(b){var c,d,e,f,g,h;hpd(this);for(d=Zh(this).Pc();d.Ug();){c=GL(d.Vg(),16);e=IL((!this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)).a.lo(c));try{tTc(GL(Zg(this),242),c.Pd(),e)}catch(a){a=Aqb(a);if(!KL(a,38))throw zqb(a)}}for(g=b.a.Pc();g.Ug();){f=GL(g.Vg(),16);if(f.xd()==this){continue}h=f.Pd();h.qc()&&rTc(GL(Zg(this),242),h)}};_.Dd=function qpd(a){_g(this,a);hpd(this);yTc(GL(Zg(this),242).i);GL(Zg(this),242).i=null};_.le=function rpd(a){uTc(GL(Zg(this),242),a)};_.ji=function spd(a,b){};_.a=false;var Wfb=AYd('com.vaadin.client.ui.customlayout',eye,1792);Dqb(387,114,{6:1,41:1,114:1,387:1,3:1},JTd);var cmb=AYd('com.vaadin.shared.ui.customlayout','CustomLayoutState',387);a9d(Vq)(25);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabMobileWidgetSet-25.js\n")