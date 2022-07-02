(function () {

        let vsr = `
            _Quick, return const
            function, define module
            Dropbox, import('
            console., case:
            window, .css()
            C:\\, .<anonymous>()
            user1, Prototype
            $, fetch
            e, {{7}}}
            i, {{99}}}
            u, {{66}}}   
            localhost, ReactDOM.render     
        `
        vsr = `
             _Quick, return const   
             function, define ()module
             localhost, ReactDOM.render
             10110, 7xx893f79
             ui_utils, 6xx11ac3f79
             Dropbox, i_mport('
             crypto, _z00x6875ba('
             Grammar, _2x56f4a('
             window, .css()
             $, fetch
             user1, Prototype
             .html, _44xeef4a('
             https://, __urZxff('
             ritv2, _4xe24a('
             code-yeti, _bxe5555a('
             code-yeti, _bxe5555a('
             Dialog., _ff51ce+0x55c'
             uiUtils, _453#67?'
             Dialog, _0xcece54---;;                         
             shelpers, _0xc222b6776_"                          
             sh., _nnn>>??'   
             videoproject, r5Ghhhk'   
             e, 322'                          
              
        `
        if (typeof window === 'undefined') {
            global.vsr = vsr
            return
        }
        //{{@@date@@}}
        window.vsr = vsr
        window.QuickLoad = true
        window.quickloadv2 = true;


        function cid(fx) {
            var args = Array.prototype.slice.call(arguments, 0);
            args = args.slice(1, args.length)

            if (fx == undefined)
                return args[0];

            if (fx == null) {
                return;
            }

            if ($.isFunction(fx) == false) {
                return;
            }

            // console.debug('args', tojson(args))
            return fx.apply(null, args)
            //return;
        }

        window.callIfDefined = cid;


        if (window.qlv2) {

            window.fxHeadAppend = function fxHeadAppend(script, fx) {
                console.log('fxHeadAppend', 'redirect to ql', script.src)
                $.ajax({
                    url: script.src,
                    success: function on(a, b, c) {
                        l('fxHeadAppend-loaded', script.src)
                        eval(a)
                        script.onload()
                    }
                    ,
                    fxDone: function on() {
                        l('oook')
                    },
                    fxError: function onasdf() {
                        console.error('on error')
                        script.onerror()
                    }
                })
                return true
            }


        }


        window.dirsRead = {}
        window.qlv2Rip = function qlv2Rip() {

            let url = window.location.toString();
            if (url.includes('?')) {
                url = url.split('?')[0] + '?'
            }
            window.location = url + '&qlv2Rip=true'
            window.location.reload()
        }

        window.qlv2Recall2 = function qlv2Recall2() {
            let url = window.location.toString();
            if (url.includes('?')) {
                url = url.split('?')[0] + '?'
            }
            window.location = url + '&qlv2Recall2=true'
            window.location.relosad()
        }


        window.qlv2Recall = function qlv2Recall() {
            let url = window.location.toString();
            if (url.includes('?')) {
                url = url.split('?')[0] + '?'
            }
            window.location = url + '&qlv2Recall=true'
            window.location.reload()
        }

        /* var sh = require('shelpers').shelpers;
         var shelpers = require('shelpers');
         */

        function QuickLoadV2() {
            var p = QuickLoadV2.prototype;
            p = this;
            var self = this;
            window.qlv2Loader = self;

            self.data = {};
            self.data.dirs = [];
            self.data.files = [];
            self.data.qDirs = {}

            self.data.recallUrls = []
            self.data.recallUrlsFailed = []
            p.onCached = function onCached() {
                sh.each(self.data.cache, function (k, v) {
                    console.log(k)
                })
            }

            //ql.onCachedUpdateKeys()


            p.ql_updatePrototypes = function ql_updatePrototypes(){


                String.prototype.afterFirst = function afterFirst(value) {
                    if (this.includes(value)) {
                        return this.split(value).slice(1).join(value)
                    }
                    return this
                }



                String.prototype.gsub = function gsub(from, to) {
                    let split = this.split(from)
                    split = split.join(to)
                    return split;
                }




                String.prototype.after = function after(value) {
                    if (this.includes(value)) {
                        let split = this.split(value)
                        let val = split[1]
                        return val;
                        //return this.split(value)[1].toString()
                    }
                    return this.toString()
                }
                String.prototype.before = function before(value) {
                    if (this.includes(value)) {
                        let split = this.split(value)
                        let val = split[0]
                        return val;
                    }
                    return this.toString()
                }


            }
            self.ql_updatePrototypes()



            p.addAutilityMethodsToSH = function addAutilityMethodsToSH() {




                if (window.sh == null) {
                    window.sh = {}
                }

                sh.each = function each(object, callback, args) {

                    var name, i = 0, length = object.length;

                    if (args) {
                        if (length === undefined) {
                            for (name in object)
                                if (callback.apply(object[name], args) === false)
                                    break;
                        } else
                            for (; i < length;)
                                if (callback.apply(object[i++], args) === false)
                                    break;

                        // A special, fast, case for the most common use of each
                    } else {
                        if (length === undefined) {
                            for (name in object)
                                if (callback.call(object[name], name, object[name]) === false)
                                    break;
                        } else
                            for (var value = object[0];
                                 i < length && callback.call(value, i, value) !== false; value = object[++i]) {
                            }
                    }

                    return object;
                }


                sh.ensureEndsWith = function removeWhitespace(str, char) {
                    if (str.endsWith(char) == false) {
                        str += char
                    }
                    return str;
                }


                sh.removeWhitespace = function removeWhitespace(str) {
                    str = str.replace(/\s/g, '')
                    return str;
                }



            }
            self.addAutilityMethodsToSH()

            function onsdf() {

                /* p = ql;
                 self = p*/
                p.convertCachedKey = function convertCachedKey(k, dbg) {

                    //dropbox
                    if (k.includes('G:') && k.includes('Dropbox')) {
                        function onPuddi(k) {

                            k = sh.fs.slash(k)
                            let url2 = k
                            let pre
                            if (k.includes('file=')) {
                                pre = k.before('file=')
                                post = k.after('Dropbox/')
                                url2 = pre + 'file=' + '/mnt/db/Dropbox/' + post
                                l(url2)
                                //console.log(key2)
                            }

                            /*  if (k.includes('/grid/grid/')) {
                                  debugger
                                  pre = k.before('file=')
                                  post = k.after('Dropbox/')
                                  url2 = pre + 'file=' + '/mnt/db/Dropbox/' + post
                                  l(url2)
                                  //console.log(key2)
                              }
  */

                            return url2
                        }

                        // onPuddi(url)
                        k = onPuddi(k)

                    }

                    k = k.replace('127.0.0.2', 'localhost')

                    //if ( window.location.host.includes(':'))
                    k = k.replace(window.location.host, 'localhost:10110')
                    //https://localhost:10110
                    return k

                    k = k.replace('127.0.0.1:33031', 'localhost:10110')

                    let key2 = k

                    if (k.includes('quickload')) {
                        //debugger
                    }
                    if (k.includes('comps/a')) {
                        //debugger
                    }
                    if (key2.includes('Dropbox')) {
                        let parts = []
                        /*if ( key.includes('=')) {
                            parts = [k.before('='), '=', k.after('Dropbox')]
                            parts = parts.join('')
                            parts = parts.split('\\').join('/')
                            key2 = parts
                        } else {
                            parts = [  k.after('Dropbox')]
                            parts = parts.join('')
                            parts = parts.split('\\').join('/')
                            key2 = parts
                        }*/

                        parts = [k.after('Dropbox')]
                        parts = parts.join('')
                        parts = parts.split('\\').join('/')
                        key2 = parts

                        //console.log(key2)
                    }


                    /*if (key2.includes('Dropbox') && key2.includes('=')) {
                        let parts = []
                        parts = [k.before('='), '=', k.after('Dropbox')]
                        parts = parts.join('')
                        parts = parts.split('\\').join('/')
                        key2 = parts
                        //console.log(key2)
                    }*/
                    if (self.adjustKeysToCache != true) {
                        console.warn('skip this', k, 'to', key2)
                        //return k
                    }

                    return key2
                }

                p.onCachedUpdateKeysTest = function onCachedUpdateKeysTest() {
                    let index = 0
                    sh.each(self.data.cache, function (k, v) {
                        index++
                        console.log(index, '')
                        debugger
                        console.log(k)
                        let key2 = k
                        key2 = p.convertCachedKey(k)
                        if (key2 != k) {
                            console.log(key2)
                        }

                        /*if (key2.includes('Dropbox') && key2.includes('=')) {
                            let parts = []
                            parts = [k.before('='), '=', k.after('Dropbox')]
                            parts = parts.join('')
                            parts = parts.split('\\').join('/')
                            key2 = parts
                            console.log(key2)
                        }*/

                    })
                }


               p.dbg_find =  p.findCachedItem = p.showAllCachedItems = function showAllCachedItems(str, showResults, str2) {
                    if (str != null) {
                        console.log('searching for ', str)
                    }
                    sh.each(self.data.cache, function onEach(k, v) {
                        if (str && k.toLowerCase().includes(str.toLowerCase()) == false) {
                            return
                        }

                        if (str2 && k.toLowerCase().includes(str2.toLowerCase()) == false) {
                            return
                        }


                        console.log(k)
                        if (showResults) {
                            console.log(self.data.cache[k])
                            return false;
                        }
                    })
                }
                //self.showAllCachedItems()


                p.fixCachedKeysToRemoveURI = function fixCachedKeysToRemoveURI() {
                    if (self.adjustKeysToCache != true) {
                        console.warn('skip this')
                        return
                    }

                    let index = 0

                    // for (self.data.cache, function (k, v) {
                    //  for (var k in self.data.cache) {
                    sh.each(self.data.cache, function (k, v) {
                        //let v = self.data.cache[k]
                        index++
                        console.log(index, '')
                        console.log(k)
                        let key2 = k
                        key2 = self.convertCachedKey(k)
                        if (key2 != k) {
                            console.log('convert', k, 'to', key2)
                            self.data.cache[key2] = v
                            delete self.data.cache[k]
                        }

                    })
                }

                p.debugCachedUrls = function debugCachedUrls() {
                    let index = 0
                    sh.each(self.data.cache, function (k, v) {
                        //let v = self.data.cache[k]
                        index++
                        console.log(index, '')
                        console.log(k)
                    })
                }

                p.getUrlFromCache = function getUrlFromCache(url) {
                    // console.log('url', url)
                    //debugger

                    //if ( oldContents == null ) {
                    if (self.settings.ql_removeProtcols != false) {
                        url = self.utils.adjustAllKeys(url)
                    }

                    let leaf = url.split('/').slice(-1)[0]
                    if (url.includes('dir=') == false && leaf.includes('.') == false) {
                        console.warn('not real file', url)
                        return null
                    }
                    //  }

                    let origUrl = url
                    url = self.convertCachedKey(url)

                    let skipLoading = false
                    if (self.settings.fxQLv2Override) {
                        skipLoading = self.settings.fxQLv2Override(url, origUrl)
                    }
                    if (skipLoading) {
                        return
                    }
                    url = url
                    if (url.includes('jumpToWebstormLine')) {
                        return
                    }
                    if (window.nextSh == true) {
                        window.nextSh = false
                        sh.jw = function jw(fx) {
                            if (fx)
                                fx()
                        }
                    }
                    if (url.includes('ui_utils')) {
                        window.nextSh = true
                    }
                    let oldContents = self.data.cache[url] // self.data.cache[cfg.url]

                    if (oldContents == null) {
                        oldContents = self.data.cache[url + '/']
                    }
                    if (oldContents == null && url.endsWith('/')) {
                        oldContents = self.data.cache[url.slice(0, -1)]
                    }

                    if (oldContents == null) {
                        if (url.includes('http://')) {
                            let url2 = url.replace('http://', 'https://')
                            oldContents = self.data.cache[url2]
                        }
                    }


                    if (oldContents == null && url.includes('actions')) {
                        // debugger
                    }

                    let url2
                    if (oldContents == null &&
                        url.includes('?file=')) {
                        if (url.endsWith('.js') || url.endsWith('.html')) {
                            url2 = url.gsub(u.urls.getHost(window.location.toString()), 'https://localhost:10110')
                            oldContents = self.data.cache[url2]
                            if (oldContents == null) {
                                url2 = u.urls.makeHttps(url2)
                                //url.gsub(u.urls.getHost(window.location.toString()), 'https://localhost:10110')
                                oldContents = self.data.cache[url2]

                                if (oldContents == null) {
                                    url2 = url2.replace('http://', 'https://')
                                    oldContents = self.data.cache[url2]
                                }

                                if (oldContents == null) {
                                    debugger
                                }
                            }
                        }

                        //hmmm
                    }
                    if (oldContents != null && oldContents.startsWith('>>')) {
                        debugger
                    }
                    if (oldContents == null && u.urls.getPath(url).includes('.')) {

                        if (self.settings.dbgLoading != false) {
                            console.warn('cannot find', url)
                            console.warn('self.showAllCachedItems(url)?')

                        }


                        if (window.ql2_debugOnMissedUrl) {
                            debugger
                        }

                    }

                    if (oldContents == null) {
                        /*  for   (var k in self.data.cache) {
                              let v = self.data.cache[k]
                              if (k.endsWith(url)) {
                                  //debugger
                                  oldContents = v;
                                  break
                              }
                          }*/
                        sh.each(self.data.cache, function z(k, v) {
                            if (k.endsWith(url)) {
                                //debugger
                                oldContents = v;
                                return false;
                            }
                            if (k.endsWith(url + '/')) {
                                //debugger
                                oldContents = v;
                                return false;
                            }
                        })
                    }

                    if (oldContents == null) {
                        let cfgUrl = url;
                        if (cfgUrl.includes('grid/grid/')) {
                            cfgUrl = cfgUrl.split('grid/grid/')[1]
                            // debugger
                        }
                        sh.each(self.data.cache, function z(k, v) {
                            if (k.endsWith(cfgUrl)) {
                                oldContents = v;
                                //debugger
                                return false;
                            }
                        })
                    }

                    if (oldContents == null) {
                        if (self.settings.skipMissingQlFiles == true) {
                            self.data.missingQLFiles.push(url)
                            // oldContents = ''
                            if (url.includes('fileList?dir=')) {

                                let urlAlt = url
                                urlAlt = urlAlt.replace('http:', 'https:')
                                oldContents = self.data.cache [urlAlt]


                                if (oldContents == null) {
                                    if (urlAlt.endsWith('/')) {
                                        urlAlt = urlAlt.slice(0, -1)
                                    }else {
                                        urlAlt += '/'
                                    }
                                    oldContents = self.data.cache [urlAlt]
                                }
                                //  debugger


                                if (oldContents == null)       {
                                    if (window.skipLoadFilesOrDir3) {
                                        let skip = window.skipLoadFilesOrDir3(url)
                                            oldContents = skip
                                    }
                                }
                                if (oldContents == null) {
                                    console.error('broken', url)
                                    window.skipLoadFilesOrDir3
                                    debugger
                                }




                                // oldContents = JSON.stringify({files: []})
                            }
                        }
                    }

                    /*if ( url.endsWith('themes/minimal_v0/js/playr/comps')  ) {
                        debugger
                    }
                    if ( url.includes('CreateItemRenderers')  ) {
                        debugger
                    }*/
                    if (oldContents == null) {
                        console.warn('cannot find', url)
                        if (url.includes('/api/') == false && url.includes('/getCryptoPrices') == false
                            && url.includes('/getUserInfo') == false
                            && url.includes('/mLists/') == false) {
                            if (window.ql2_debugOnMissedUrl) {
                                debugger
                            }
                        }
                    }

                    return oldContents
                }


                /* ql.onCachedUpdateKeys()*/
            }

            onsdf()


            p.init = function init(config) {


                self.settings = config


                if (window.fxQLv2Override) {
                    self.settings.fxQLv2Override = window.fxQLv2Override
                }
                if (window.debugQLv2Loading != null) {
                    self.settings.dbgLoading = window.debugQLv2Loading
                }
                if (window.skipMissingQlFiles != null) {
                    self.settings.skipMissingQlFiles = window.skipMissingQlFiles
                }
                self.data.missingQLFiles = []

                var css = `
    br {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE/Edge */
        user-select: none;
        cursor: default;
    }                
                
                `
                let head
                head = document.head || document.getElementsByTagName('head')[0]
                let style = document.createElement('style');

                head.appendChild(style);


                function onRun() {

                    let html =
                        `
<div id="topMenu" style="position:fixed; top:0px; left:0px; right:0px">
</div>
<br/>
<div id="quickNavHolder" style="
position:absolute;  
top:75px; left:0px; right:0px; bottom:0px;
overflow: auto; overflow-x:hidden;
min-height: 300px;
">
    <div id="quickNavDemo2Area" style="width:100%; height:100%;"></div>
</div>
</div>
`
                    if ($('#quickNavHolder').length == 0 && self.settings.addQLDiv == true) {
                        html = $(html)
                        $('body').append(html)
                    }

                }

                onRun()
                if (config == null) {
                    config = {}
                }
                self.settings = config
                window.ip = '127.0.0.1'
                if (window.urlGPreUrl == null) {
                    window.urlGPreUrl = 'http://localhost:10110/grid/grid/' +
                        '/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid'// +
                    //'/comps
                    window.urlGPreUrl = 'https://localhost:10110/api/fileList?file=' +
                        '/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid'// +
                    if (window.location.toString().startsWith('http://')) {
                        window.urlGPreUrl = 'http://localhost:10110/api/fileList?file=' +
                            '/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid'// +

                    }
                }


                window.urlGPreUrl = self.utils.unlocalize(window.urlGPreUrl)
                window.urlPreUI = self.utils.unlocalize(window.urlPreUI)

                let url = window.location.toString();

                if (url.includes('qlv2Recall=true')) {
                    self.settings.saveFileCache = false
                    self.settings.reloadCache = true;

                }

                if (url.includes('qlv2Recall2=true') || window.qlv2 === true) {
                    window.showLogDirectionsAll = true
                    if (window.qlv2) {
                        console.log('what is this.....forced')

                    }
                    let reloader = {}
                    reloader.clazzLoadedOnce = true
                    reloader.reloadBlockFx = function () {
                    }
                    reloader.clazzLoadedOnce = function () {
                    }
                    window.reloader = reloader
                    self.settings.saveFileCache = false
                    self.settings.reloadCache2 = true;


                    window.skipJumpErrors = true

                    window.rr = reloader
                    window.rr.ir = function () {
                    }
                    window.rr.instantReload = function () {
                    }
                }


                if (url.includes('qlv2Rip=true')) {
                    self.settings.saveFileCache = true
                    self.data.cache = {}
                    window.cacheDD = self.data.cache;
                    $(document).ajaxSuccess(function (event, request, settings) {
                        if (settings.url && settings.type == 'GET') {
                            //debugger
                            // console.log(request, event, settings)
                            console.log('save-->', settings.url)
                            self.data.cache[settings.url] = request.responseText
                        } else {
                            if (settings.type == "POST") {

                            } else {
                                console.log(settings.url, settings.type)
                                console.log(settings)
                                debugger
                            }

                        }

                    });
                }
            }

            p.loadStuff = function loadStuff(okY) {

                if (okY == null && self.settings.reloadCache) {

                    let url2 = 'themes/cached/c.js';
                    let data = {}
                    //debugger
                    // data.file = file
                    jQuery.ajax({
                        url: url2,
                        dataType: "text",
                        success: onGotJ, data: data
                    })

                    function onGotJ(data) {
                        let dbg = [$, jQuery]
                        // debugger
                        debugger
                        //eval(data)
                        //debugger
                        /* self.loadStuff(true)
                         if (fxDone) {
                         fxDone()
                         }*/
                    }

                    return;
                }


                if (okY == null && self.settings.reloadCache2) {

                    let urlCacheFile = 'themes/cached/'


                    let cacheFile = null
                    if (self.settings.cacheFile == null) {
                        cacheFile = 'cacheY.json' + '.min.json.txt'
                    }
                    // url2 = 'themes/cached/cachedY.json';

                    urlCacheFile += self.settings.cacheFile

                    // asdsfd.g
                    let data = {}


                    if ( window.fxRedirectUrls2 ) {
                        urlCacheFile = window.fxRedirectUrls2(urlCacheFile)
                    }


                    jQuery.ajax({
                        url: urlCacheFile,
                        // dataType: "json",
                        success: onGotJ, data: data
                    })

                    function onGotJ(data) {
                        $.oldAjax = $.ajax


                        function onRun2() {
                            let cfg = {}
                            cfg.strs = window.vsr


                            p.ql_updateSh = function ql_updateSh(){

                                sh.lines2 = function strLines(strInput) {
                                    let str = strInput.trim().split('\n')
                                    let minSpace = null;
                                    let strs = [];
                                    sh.each(str, function on_proc(k, v) {
                                        if (v.trim() == '') {
                                            return
                                        }
                                        v = v.trim()
                                        return strs.push(v)
                                    })
                                    return strs;
                                }


                                sh.gsubBulk = function gsubBulk(cfg) {
                                    let lines = sh.lines2(cfg.strs)
                                    if (cfg.rev) {
                                        lines = lines.reverse()
                                    }
                                    //debugger
                                    sh.each(lines, function onEach(k, v) {
                                        let splits = v.split(', ')
                                        let from = splits[0]
                                        let to = splits[1]
                                        if (cfg.rev) {
                                            to = splits[0]
                                            from = splits[1]
                                        }


                                        cfg.text = cfg.text.gsub(from, to)

                                    })

                                    return cfg.text
                                }
                            }


                            self.ql_updateSh()


                            cfg.text = data;
                            cfg.rev = true
                            let ttt = sh.gsubBulk(cfg)


                            if ( ttt.includes('/themes/minimal_v0/staticz/fonts/')) {
                                ttt = ttt.gsub('/themes/minimal_v0/staticz/fonts/',
                                    '/fonts/')

                                ttt = ttt.gsub('/themes/minimal_v0/staticz/font/',
                                    '/fonts/')

                                 self.settings.ql_overrideFontUrlBase  = '/fonts'


                            } else {
                                throw(new Error('what is wrong? '))
                            }

                            data = JSON.parse(ttt)

                        }

                        onRun2()

                        //self.data.cache = data;
                        self.data.cache = {}
                        sh.each(data, function onEach(k, v) {
                            let key = k
                            if (self.settings.ql_removeProtcols != false) {
                                key = self.utils.adjustAllKeys(k)
                            }

                            self.data.cache[key] = v
                        })

                        self.fixCachedKeysToRemoveURI(self.data.cache)


                        $.ajax = function ajax() {
                            var args = Array.prototype.slice.call(arguments, 0);
                            let cfg = args[0]


                            if (cfg.url == null) {
                                cfg = {url: cfg}
                                //debugger
                            }
                            cfg.urlOrig = cfg.url
                            let isFileRequest = cfg.urlOrig.includes('.')

                            //  debugger
                            if (cfg.url.includes('reloaderG')) {
                                debugger
                            }
                            /*  if (cfg.url.includes('fonts.css')) {
                                  //  http://127.0.0.1:33031/themes/cached/public_html/styles2/fonts.css
                                  cfg.url = '/themes/cached/public_html/' + cfg.url.after('styles2', true)
                              }
  */
                            cfg.url = cfg.url.split('//').join('/')
                            cfg.url = cfg.url.split('http:/').join('http://')
                            cfg.url = cfg.url.split('https:/').join('https://')
                            cfg.url = self.convertCachedKey(cfg.url)


                            let isGReq = cfg.urlOrig.includes(':10110')

                            if (self.settings.dbgLoading != false) {
                                console.log('run local', cfg.url)
                            }


                            if (cfg.url) {
                                if (cfg.url.includes('.woff')) {
                                    //http://127.0.0.1:33031/themes/minimal_v0/staticz/onts/glyphicons-halflings-regular.woff2
                                    //http://127.0.0.1:33031/themes/minimal_v0/staticz/fonts/glyphicons-halflings-regular.woff2
                                }
                            }


                            self.data.recallUrls.push(cfg.url)
                            if (isFileRequest == false && isGReq == false) {
                                console.log('cfg?', cfg)
                            } else {
                                if (cfg.type == 'get' && cfg.dataType == "script") {
                                    let oldContents = self.getUrlFromCache(cfg.url)
                                    //self.data.cache[cfg.url]
                                    if (cfg.url.includes('layouts.css')) {
                                        debugger
                                    }

                                    if (oldContents == null && cfg.url.includes('socket.io-1')) {
                                        oldContents = self.data.cache['http://localhost:10110/g/js/libHide/socket.io-1.2.0.js.ignore']
                                    }
                                    if (oldContents == null) {

                                        if (self.settings.dbgLoading != false) {
                                            console.warn('what hapend on url?', cfg.url, oldContents)
                                        }
                                        self.data.recallUrlsFailed.push(cfg.url)
                                    } else {
                                        if (self.data.dbgUrl)
                                            console.warn('\t', '<<<', cfg.url)
                                        //eval(oldContents)
                                        //window["eval"].call(window, oldContents);
                                        if (cfg.url.includes('quickload.js') && self.data.allowReloader) {
                                            //skip thing
                                            console.warn('warn....')
                                            window.reloader = {}
                                            window.reloader.clazzLoadedOnce = function () {

                                            }
                                            window.reloader.reloadBlockFx = function () {

                                            }
                                        } else {
                                            $.globalEval(oldContents)
                                        }

                                        let y = {}
                                        y.done = function setDone(fxDone) {
                                            y.fxDone = fxDone;
                                            return y
                                        }

                                        y.always = function setDone(fxAlways) {
                                            y.fxAlways = fxAlways;
                                            return y
                                        }

                                        y.fail = function setDone(fxFail) {
                                            y.fxFail = fxFail;
                                            return y
                                        }

                                        setTimeout(function fixLater() {
                                            window.callIfDefined(y.fxAlways)
                                            window.callIfDefined(y.fxDone)
                                        }, 10)
                                        return y;
                                    }

                                }

                                // let isHTMLReq =

                                if (cfg.type == null) {
                                    cfg.type = 'get'
                                }

                                if (cfg.type == 'get' || cfg.datattype == 'html') {
                                    let oldContents = self.getUrlFromCache(cfg.url)


                                    if (window.dbgQLV2Urls) {
                                        console.log('---')
                                        console.log('urlScript', window.urlScriptCount, cfg.url)
                                    }
                                    /*if ( oldContents == null) {
                                     sh.each(self.data.cache, function z(k,v) {
                                     if ( k.endsWith(cfg.url)) {
                                     oldContents = v;
                                     //debugger
                                     return false;
                                     }
                                     })
                                     }*/


                                    if (oldContents == null) {
                                        console.warn('what happened', cfg.url)
                                        self.data.recallUrlsFailed.push(cfg.url)
                                        //www.cnn.com
                                    } else {
                                        if (self.data.dbgUrl)
                                            console.warn('\t', '<<<', cfg.url)
                                        //debugger
                                        // $.globalEval(oldContents)
                                        let y = {}
                                        y.done = function setDone(fxDone) {
                                            y.fxDone = fxDone;
                                            return y
                                        }

                                        y.always = function setDone(fxAlways) {
                                            y.fxAlways = fxAlways;
                                            return y
                                        }

                                        y.fail = function setDone(fxFail) {
                                            y.fxFail = fxFail;
                                            return y
                                        }

                                        function cid(fx) {
                                            var args = Array.prototype.slice.call(arguments, 0);
                                            args = args.slice(1, args.length)

                                            if (fx == undefined) {
                                                return args[0];
                                            }

                                            if (fx == null) {
                                                return;
                                            }

                                            if ($.isFunction(fx) == false) {
                                                return;
                                            }

                                            // console.debug('args', tojson(args))
                                            return fx.apply(null, args)
                                            //return;
                                        }

                                        window.callIfDefined = cid;

                                        let result = oldContents
                                        if (cfg.script == 'json') {
                                            result = JSON.parse(oldContents)
                                        }
                                        if (cfg.url.includes('fileList?dir')) {
                                            //debugger
                                            result = JSON.parse(oldContents)
                                        }
                                        if (cfg.url.includes('.css')) {
                                            // debugger
                                        }
                                        setTimeout(function fixLater() {
                                            let yy = cfg.url.includes('fileList?dir')

                                            let debg = [yy, result]
                                            cid(y.fxAlways)
                                            cid(y.fxDone, result)
                                            cid(cfg.success, result)
                                        }, 10)
                                        return y;
                                    }

                                }


                            }

                            if (cfg.url.includes('.css') == false) {
                                if (self.settings.dbgLoading != false) {
                                    console.log('url',
                                        cfg.url)
                                }
                                //  debugger
                            } else {
                                if (self.settings.dbgLoading != false) {
                                    console.log('log', cfg.url)
                                }
                            }

                            if (cfg.url.includes('layouts.css')) {
                                debugger
                            } else if (cfg.url.includes('.ttf')) {
                                let file = cfg.url.split('/').slice(-1)[0];
                                //http://192.168.1.178:33031/themes/minimal_v0/font/droidsans.ttf
                                // debugger
                                cfg.url = '/themes/minimal_v0/font/fonts/' + file;
                                debugger
                                args[0] = cfg.url;
                                //  debugger
                            } else {
                                console.log('--', cfg.url)
                                // debugger
                            }

                            if (self.settings.dbgLoading != false) {
                                console.log('what is this? url request', cfg.url)
                            }
                            cfg.url = callIfDefined(window.fxRedirectPublicUrl, cfg.url)
                            //console.log('what is this?', cfg)

                            let url = cfg.url.after('://')
                            if (url.split('/').length > 2) {
                                if (url.includes('/api/')) {
                                } else {
                                    if ( window.debugMissFs != false )
                                    debugger
                                }
                            }
                            return $.oldAjax.apply(null, args)
                        }
                        self.loadStuff(true)
                        return;
                        debugger
                        console.log(data.length)
                        let dbg = [$, jQuery]
                        // eval(data)
                    }

                    return;
                }


                window.quickLoaderLoaded = false
                var scripts2 = [
                    //'/js/list.js',
                    'http://localhost:10110/ui_utils.js',
                    //'/js/JSONFileHelper.js',
                    'http://localhost:10110/lib/jquery.timeago.js',
                    //  'http://localhost:10110/lib/js.cookie.js',
                    //'http://localhost:10110/lib/jquery-ui-1.12.1.js',
                    //'http://localhost:10110/lib/jquery-ui-1.12.1.js',
                    // 'http://localhost:10110/lib/jquery-ui.min.js',
                    //  'http://localhost:10110/jquery-ui.js',
                    //'/js/plugins/jquery.timeago.js',
                    "http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base/quickload.js",
                    "http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base_a/QueueHelper.js",
                    "http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base_a/CountDownTo0Helper.js",
                    //"http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base/reload.quickload.js",
                    //'js/reload.quickload.js',
                    'http://localhost:10110/g/js/libHide/socket.io-1.2.0.js',

                    //   'https://127.0.0.2:14002/socket.io-1.2.0.js',
                    //  'http://localhost:10110/grid/grid/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/js/libHide/socket.io-1.2.0.js',

                    //'test3/socket.io-1.2.0.js.ignore'
                    'http://localhost:10110/PromiseHelperV3.js',
                    /* 'dialogTransport.js',
                     'dialogSearchTests.js',
                     'TestCSVConvertor.js',
                     'TestCSV.js',*/
                ]


                if (self.settings.reloadCache2 != true) {
                    let url = "http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick3/reload.quickload.js"
                    scripts2.push(url)
                }

                if (self.data.addFiles) {
                    sh.each(self.data.addFiles, function (k, v) {
                        scripts2.push('')
                    })
                }
                self.loadScript2(scripts2.concat(), self.loadStuff2);
            }

            p.loadStuff2 = function loadStuff2(config) {

                window.noSearch = true;
                window.u = uiUtils;
                window.gUtils = uiUtils;
                if (window.urlPreUI == null) {
                    window.urlPreUI = 'http://127.0.0.1:33037/themes/minimal_v0/'
                    window.urlPreUI = '/themes/minimal_v0/'
                    // debugger
                }

                //window.blockRemoteFailedDebugger = true

//            debugger
                self.loadStuff3();
            }


            function defineLoadUrls() {

                p.loadCSS2 = function loadCSS2(fileCss, fxDone) {

                    if (self.settings.reloadCache2) {
                        if (self.data.dbgUrl) {
                            console.warn('>>>', fileCss)
                        }
                        self.utils.downloadX(fileCss, function doneWith() {
                            if (fxDone) {
                                fxDone()
                            }
                        })
                        return;
                    }


                    let urlCss = fileCss;


                    if (fileCss.base) {
                        urlCss = fileCss.base + fileCss.path;
                    }
                    urlCss = self.utils.unlocalize(urlCss)
                    let s = document.createElement("link");
                    s.type = "text/css";
                    s.rel = "stylesheet"
                    s.href = urlCss;

                    s.onerror = function error(a, b, c) {
                        // console.error('loadJSFile.css', 'fail', listItem, urlScript)
                        // console.error('loadJSFile', a,b,c)
                    }
                    s.onload = function asdf(a, b, c) {
                        fxDone()
                    }
                    $("head").append(s);


                }
                //window.loadCSS2
                p.loadScript2 = function loadScript2(_scripts2, fxDone) {

                    if (_scripts2.length == 0) {
                        console.log('finished');
                        if (fxDone) fxDone();
                        return;
                    }
                    var url = _scripts2.shift();
                    /*
                                        if ( window.location.toString().includes('https://')) {
                                            url = url.split('http://').join( 'https://')
                                        }*/

                    url = self.utils.goSecure(url)


                    var debug = false;
                    // debug = true;
                    if (debug) {
                        console.log('downloading', url)
                    }

                    function loadNextScript() {
                        loadScript2(_scripts2, fxDone);
                    }


                    if (url.endsWith('.css')) {
                        self.loadCSS2(url, function onDone() {
                            setTimeout(loadNextScript, 50)
                        })
                        return;
                    }

                    url = self.utils.unlocalize(url)
                    jQuery.getScript(url)
                        .done(function onLoaded() {
                        })
                        .always(function doneLoadingFile() {
                            if (debug) {
                                console.error('what is window tests?', url, window.tests);
                            }

                            setTimeout(loadNextScript, 50)

                        })
                        .fail(function (a, b, c, d) {
                            console.error('failed to load', url, a == null, b, c, d)
                            console.error(c.stack)
                        });
                }

            }

            defineLoadUrls();

            p.loadStuff3 = function loadStuff3(config) {

                if (self.settings.loadDefaultsStyles == false) {
                    self.loadStuff4()
                    return;
                }
                var scripts2 = [
                    'http://localhost:10110/lib/bootstrap.min.css',
                    //'http://localhost:10110/lib/jquery-ui.css',
                    'http://localhost:10110/styles/qstyles.css',
                    'http://localhost:10110/styles/login.css',
                    'http://localhost:10110/styles/better.css',
                    'http://localhost:10110/styles/list_styles.css',
                ]

                if (window.githubLiveMode!=true){
                    scripts2.push('http://localhost:10110/styles/fonts.css')
                }


                /*scripts2 = [
                    'http://localhost:10110/lib/bootstrap.min.css',
                    //'http://localhost:10110/lib/jquery-ui.css',
                    'http://localhost:10110/styles2/qstyles.css',
                    'http://localhost:10110/styles2/login.css',
                    'http://localhost:10110/styles2/better.css',
                    'http://localhost:10110/styles2/fonts.css',
                    'http://localhost:10110/styles2/list_styles.css',
                ]*/

             /*   sh.each(scripts2, function onEach(k,v){
                    scripts2[k]
                })*/

                self.loadScript2(scripts2.concat(), self.loadStuff4);
            }
            p.loadStuff4 = function loadStuff4(config) {
                /*
                 }
                 var newStyle = document.createElement('style');
                 newStyle.appendChild(document.createTextNode("\
                 @font-face {\
                 font-family: " + yourFontName + ";\
                 src: url('" + yourFontURL + "') uixkdoem('yourFontuixkdoem');\
                 }\
                 "));

                 document.head.appendChild(newStyle);*/


              /*  let droidSans = {}
                droidSans.name = 'Droid Sans'
                droidSans.fontUrl = 'droidsans.ttf'
                droidSans.urlFontBase =
                    'http://localhost:10110/styles2/font'
                self.addFont(droidSans)

                droidSans = {}
                droidSans.name = 'Droid Sans'
                droidSans.localName = 'Droid Sans Bold'
                droidSans.fontWeightStr = '700'
                droidSans.fontUrl = 'droidsans-700.ttf'
                droidSans.urlFontBase =
                    'http://localhost:10110/styles2/font'
                self.addFont(droidSans)
*/

                self.loadStuff_FinishedBeforeLoadingUserComponents()

                //  self.loadStuff5();
            }

            p.addFont = function addFont(fontObj) {


                asdadsf.g

                if ( window.location.toString().includes('sktype') ){
                    console.warn('skiptype skip')
                    return
                }
                if ( self.settings.ql_overrideFontUrlBase  ) {
                    fontObj
                     .urlFontBase =
                        self.settings.ql_overrideFontUrlBase
                }

                /*
                 @font-face {
                 font-family: 'Droid Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Droid Sans'), local('DroidSans'),
                 url("/themes/minimal_v0/font/droidsans.ttf") format('truetype'),
                 url("/themes/minimal_v0/font/droidsans.woff") format('woff');
                 }*/
                fontObj.fontWeightStr = sh.dv(fontObj.fontWeightStr, 400)
                fontObj.fontWeightStr = 'font-weight: ' + fontObj.fontWeightStr;
                fontObj.fontStyle = sh.dv(fontObj.fontStyle, 'normal')
                fontObj.fontSrcs = sh.dv(fontObj.fontSrcs, [])
                fontObj.fontSrcs.push(fontObj.name);
               // debugger
                let yyy = []
                //let urlFontBase

                fontObj.urlFontBase = self.utils.unlocalize(fontObj.urlFontBase)


                fontObj.urlFontBase = sh.ensureEndsWith(fontObj.urlFontBase, '/')
                sh.throwIf(fontObj.urlFontBase, 'need a font base')
                let urlFont = fontObj.urlFontBase + fontObj.fontUrl

                //let fontFaceStr1 = ' url("/themes/minimal_v0/font/droidsans.ttf") format("truetype"),'


                fontObj.fontNames = sh.dv(fontObj.fontNames, [])
                if (fontObj.fontNames.length == 0) {
                    fontObj.fontNames.push(fontObj.name)
                    let noSpaces = sh.removeWhitespace(fontObj.name)
                    if (noSpaces != fontObj.name) {
                        fontObj.fontNames.push(noSpaces)
                    }
                }


                let fontFacesStr = [];
                sh.each(fontObj.fontNames, function asdf(k, v) {
                    let fontFormatStr = ''
                    if (fontObj.fontUrl.endsWith('.ttf')) {
                        let fontType = 'trueType'
                        fontFormatStr = `format("${fontType}")`
                    }
                    let fontFaceStr1 = `\turl("${urlFont}") ${fontFormatStr}`
                    fontFacesStr.push(fontFaceStr1)
                })

                fontObj.fontSrcsStr = fontFacesStr.join(',\n\t\t\t\t\t\t ') + ';'

                fontObj.localNames = sh.dv(fontObj.localNames, [])
                if (fontObj.localNames.length == 0) {
                    if (fontObj.localName) {
                        fontObj.localNames.push(fontObj.localName)
                    } else {
                        fontObj.localNames.push(fontObj.name)
                    }

                    let fontName_noSpaces = sh.removeWhitespace(fontObj.name)
                    if (fontName_noSpaces != fontObj.name) {
                        fontObj.localNames.push(fontName_noSpaces)
                    }
                }


                let localNamesStrs = []
                sh.each(fontObj.localNames, function addLocalNameSrc(k, localName) {
                    let localNameStr = ['local(', sh.q(localName), ')'].join('')
                    localNamesStrs.push(localNameStr)
                })

                //  let fontNames = fontObj.fontNames
                fontObj.localNamesStr = localNamesStrs.join(', ')
                //fontFacesStr
                let fontFaceStr =
                    `
                @font-face {
                        font-family: '${fontObj.name}';
                        font-style: ${fontObj.fontStyle};
                        ${fontObj.fontWeightStr};
                        src: ${fontObj.localNamesStr},
                        ${fontObj.fontSrcsStr}
                    }
                `
                if ( self.settings.dbgFonts )
                console.log('fontFace', fontFaceStr)
                var newStyle = document.createElement('style');
                newStyle.appendChild(document.createTextNode(fontFaceStr))
                if ( self.settings.dbgFonts )
                console.log('fontFace.newStyle', newStyle)

                document.head.appendChild(newStyle);
            }


            p.loadStuff_FinishedBeforeLoadingUserComponents = function loadStuff_FinishedBeforeLoadingUserComponents() {


                sh.each(self.data.addSubDirsList, function onEach(k, v) {
                    //self.addDirSubs__(v)
                    //debugger
                })


                let cfg = {}
                cfg.fx = self.addDirSubs__
                cfg.fx = function fineDirsOnly(a, b) {
                    /* debugger
                     if ( a.includes('.') ){
                         b()
                         return
                     }*/
                    self.addDirSubs__(a, b, true)
                }

                cfg.list = self.data.addSubDirsList
                cfg.fxDone = function onsf() {
                    self.loadStuff5()
                }
                sh.asyncQuick(cfg)


                //self.loadStuff5()
            }
            p.addDir2 = function addDir2(config, onlyMatches, loadSkipMatches) {
                let info = {}
                //   cfg.urlPath = urlPath;
                if (config.urlPath) {
                    info = config;
                } else {
                    info.urlPath = config;
                    info.onlyMatches = onlyMatches;
                    info.loadSkipMatches = loadSkipMatches;
                }
                self.data.dirs.push(info)
            }


            self.data.addSubDirsList = []

            p.addDirSubs = function addDirSubs(dir, fxDone) {
                self.data.addSubDirsList.push(dir)
                self.data.listDir = dir
            }


            self.data.addSubDirsListForce = []
            p.forceLoadPost = function forceLoadPost(dir) {
                self.data.addSubDirsListForce.push(dir)
            }

            p.addDirSubs__ = function addDirSubs__(dir, fxDone, skipLikelyFiles) {
                let dirOrig = dir;

                let cfg = {}
                if (dirOrig.urlPath) {
                    cfg = dirOrig
                    dir = dirOrig.urlPath;
                }


                dir = sh.deos(dir)
                //  debugger


                let urlPath = dir


                cfg.urlFL = 'http://localhost:10110/api/fileList?dir='

                cfg.urlPath = urlPath;
                cfg.processEachFile = function processEachFile(urlFile, preUrl, cfgF) {
                    //http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/quickForm/QuickFormInner_Checkbox.js
                    if (skipLikelyFiles) {
                        // return false;
                    }

                    if (skipLikelyFiles && urlFile.includes('.')) {
                        //  console.error(sh.t, 'skip it', urlFile)
                        return false;
                    }
                    if (skipLikelyFiles) {
                        //  console.error('dl skip', urlFile)

                        // debugger
                    }

                    self.addDir2(dir + urlFile + '/')


                    return false;
                    return converted;
                }


                cfg.fxDone2 = function on(a) {
                    //http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/quickForm/QuickFormInner_Checkbox.js
                    if (skipLikelyFiles) {
                    }
                    sh.cid(fxDone)
                }
                /*  onlyMatches = sh.dv(dir.onlyMatches, onlyMatches)
                  loadSkipMatches = sh.dv(dir.loadSkipMatches, loadSkipMatches)
                  if (cfg.urlPath.endsWith('code-yeti/themes/minimal_v0/js/playr/')) {
                      //debugger
                  }
                  if (onlyMatches) {
                      // debugger
                  }
                  if (cfg.onlyMatches == null)
                      cfg.onlyMatches = onlyMatches
                  if (cfg.loadSkipMatches == null)
                      cfg.loadSkipMatches = loadSkipMatches
                  cfg.before = '/js/'*/
                cfg.before = '/js/'

                // debugger
                loadJSFiles(cfg)

                return cfg


            }
            p.add_qDirsReload = function add_qDirsReload(config) {
                if (window.qDirsReload == null) {
                    window.qDirsReload = [];
                }
                window.qDirsReload.push(config)
            }
            p.addFileLL = function addFileLL(file) {
                self.data.files.push(file)
                //   onLoad_QuickBasics_LoadDirZ(file )
                //'/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/a')
            }
            p.loadStuff5 = function loadStuff5(config) {
                function loadSt9f() {
                    if (self.settings.loadDefaults != false) {
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/a')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base_a')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick2')

                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps_base')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/quickForm')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/user')
                        //G:\Dropbox\projects\crypto\mp\GrammarHelperServer\sharedResourcesGrid\comps\quickForm\quickFormInner_TextInput.html
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps2')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps3')
                        onLoad_QuickBasics_LoadDirZ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/frameworkV2')
                    }
                    if (window.quickLoad_loadDirs) {
                        sh.each(window.quickLoad_loadDirs, function on(k, v) {
                            onLoad_QuickBasics_LoadDirZ(v)
                        })
                    }
                    //window.validQApps = ['appInv'];


                    /*   let dirBase = '/mnt/db/Dropbox/projects/crypto/mp/Generators/public_html/js/'
                     dirBase = '/mnt/db/Dropbox/projects/ritv2/videoproject/' +
                     'Code/code-yeti/themes/minimal_v0/js/'
                     onLoad_QuickBasics_LoadDir(dirBase + 'playr/actions/')
                     onLoad_QuickBasics_LoadDir(dirBase + 'playr/comps/')
                     onLoad_QuickBasics_LoadDir(dirBase + 'playr/inv_comps/')
                     // onLoad_QuickBasics_LoadDir(dirBase + 'playr/' )//, 'contact')
                     onLoad_QuickBasics_LoadDir(dirBase + 'playr/', null, ['loginZDialog2'])//, 'contact2F_Test')
                     */
                    if (self.settings.dbDirs) {
                        let dirBase = self.settings.dbDirsBase;
                        $.each(self.settings.dbDirs, function asdf(k, v) {
                            onLoad_QuickBasics_LoadDirZ(dirBase + v)
                        })
                        /*                 onLoad_QuickBasics_LoadDir(dirBase + 'playr/actions/')
                         onLoad_QuickBasics_LoadDir(dirBase + 'playr/comps/')
                         onLoad_QuickBasics_LoadDir(dirBase + 'playr/inv_comps/')
                         // onLoad_QuickBasics_LoadDir(dirBase + 'playr/' )//, 'contact')
                         onLoad_QuickBasics_LoadDir(dirBase + 'playr/', null, ['loginZDialog2'])//, 'contact2F_Test')
                         */
                    }
                    if (self.data.dirs) {
                        $.each(self.data.dirs, function asdf(k, v) {
                            onLoad_QuickBasics_LoadDirZ(v)
                        })
                    }

                    if (self.data.files) {
                        $.each(self.data.files, function asdf(k, v) {
                            let split = v.split('/')
                            let dir = split.slice(0, -1).join('/')
                            let file = split.slice(-1)[0]
                            // debugger
                            onLoad_QuickBasics_LoadDirZ(dir, file)
                        })
                    }

                    if (self.settings.fxDbDirs) {
                        self.settings.fxDbDirs(self, onLoad_QuickBasics_LoadDirZ)
                    }

                    //loadCSS({base:'http://localhost:10110/grid/grid/'
                    //          path:'/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/red/zjs/quickUIService.css'})
                    /*loadCSS({
                     base: 'http://localhost:10110/grid/grid/',
                     path: '/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/public_html/lib/bootstrap.min.css'
                     })*/
                    onLoad_QuickBasics_CSSDir('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/styles')
                    window.queueHelper.settings.fxDone = function fxDone(_self) {

                        window.saveCache = function saveCache() {
                            self.file.storeFile('cacheY.json',
                                JSON.stringify(self.data.cache, '\t', '\t')
                            )
                        }

                        //debugger
                        window.uiCompUrlBase = self.utils.unlocalize(window.uiCompUrlBase)

                        window.urlPreUI_BaseOverride = self.utils.unlocalize(window.urlPreUI_BaseOverride)

                        window.quickLoaderLoaded = true



                        StartScrolling()
                        sh.cid(self.settings.fxDone)
                        if (window.startApp) {
                            window.startApp();
                        }
                        return; //....
                    }
                }

                loadSt9f()
            }





            p.utils = {}


            p.utils.adjustAllKeys = function adjustAllKeys(key) {
                // return key
                //key = key.replace('https://', '')
                // key = key.replace('https://', 'http://')
                key = key.replace(':10111', ':10110')
                return key
            }



            p.utils.unlocalize = function unlocalize(url) {
                /* if ( url == null ) {
                     console.warn('url is null', url)
                     return
                 }
 */




                if (url == null) {
                    debugger
                    console.warn('url is null', url)
                    console.error('url is null', url)
                    return
                }
                if (window.quickloadv2DebugLocal) {
                    debugger
                }


                // debugger

                if (window.x7) {
                    console.warn('url is...', url)
                }

                if (window.doNotRedirectFromLocalhost != false && url.includes('localhost')) {
                    if (url.includes('localhost')) {
                        if (window.fix127HostMode2) {

                            if (url.startsWith('http:')) {
                                url = url.replace('localhost', window.location.hostname)
                            } else {
                                url = url.after('localhost')
                                if (url.includes(':')) {
                                    url = url.afterFirst('/')
                                }
                                url = 'http://' + host + '/' + url
                                // url = url.replace('localhost/',  host)
                            }

                        } else {
                            let host = window.location.host
                            host = window.location.host


                            url = url.after('localhost')
                            if (url.includes(':')) {
                                url = url.afterFirst('/')
                            }
                            if (window.localhostIs) {
                                host = window.localhostIs
                            }

                            if (window.location.href.includes('android_asset')) {
                                host = '192.168.1.179:10110'
                            }


                            url = 'http://' + host + '/' + url
                            // url = url.replace('localhost/',  host)
                        }

                    }


                    if (url.includes('127.0.0.2')) {
                        debugger
                        if (window.location.href.includes('android_asset')) {
                            url = url.gusb('127.0.0.2', '192.168.1.179')
                        }
                    }
                }

                //  debugger


                if (window.non10110) {
                    url = url.after('http://localhost:10110')
                }
                // debugger
                if (window.x7) {
                    console.warn(sh.t, url)
                }


                url = self.utils.goSecure(url)

                if (window.httpLocalIfPossible) {
                    /*   if (u.urls.isLocal(url)) {
                           u.urls.gotoNonHttps = function gotoNonHttps(url) {
                               return url.gsub('https://', 'http://')
                           }
                           url = u.urls.gotoNonHttps(url)
                       }
                       url = url.after('http://localhost:10110')*/

                    url = url.replace('https://', 'http://')

                    url = url.replace('127.0.0.1', '127.0.0.2')
                    url = url.replace('localhost', '127.0.0.2')

                    //https://192.168.1.179:33031/api/fileList?file=G:/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid//comps2/glh.html
                    if (url.includes('/api/fileList?')) {
                        url = url.replace(window.location.hostname, '127.0.0.2')
                    }


                    /*
                    if (url.includes('127.0.0.1') && url.includes('localhost')) {
                       /!* u.urls.gotoNonHttps = function gotoNonHttps(url) {
                            return url.gsub('https://', 'http://')
                        }*!/
                        //url = u.urls.gotoNonHttps(url)
                        url = url.gsub('https://', 'http://')
                    }*/
                    //    url = url.after('http://localhost:10110')
                }


                if (window.navigator.userAgent.includes('Macintosh') == true) {
                    url = url.replace('127.0.0.2', '127.0.0.1')
                }

                url = p.utils.adjustAllKeys(url)

                return url
            }


            p.utils.goSecure = function goSecure(url) {
                let loc = window.location.toString()

                if (loc.includes('3v2')) {
                    if (loc.includes('localhost') || loc.includes('127.0.0.1')) {
                        return url
                    }

                }

                if (window.location.toString().includes('https://')) {
                    url = url.split('http://').join('https://')
                }
                return url
            }


            window.urlScriptCount = 0
            //debugger
            p.utils.downloadX = function downloadX(urlScript, fxDone) {
                //what is this?
                if (urlScript.includes('reloaderG')) {
                    debugger
                }
                if (window.dbgQLV2Urls) {
                    window.urlScriptCount++
                    console.log('urlScript', window.urlScriptCount, urlScript)
                    window.exports2 = window.exports
                    window.exports = undefined
                    window.module = undefined
                }
                //$("<style type='text/css'> .redbold{ color:#f00; font-weight:bold;} </style>").appendTo("head");
                if (urlScript.endsWith('.js')) {
                    if (urlScript.includes('reloaderG')) {
                        debugger
                    }
                    jQuery.getScript(urlScript)
                        .done(function onLoaded() {
                        })
                        .always(function doneLoadingFile() {
                            window.exports = window.exports2
                            if (fxDone) {
                                fxDone()
                            }
                        })
                        .fail(function (a, b, c, d) {
                            console.error('failed to load', url, a == null, b, c, d)
                            console.error(c.stack)
                        });
                } else {
                    jQuery.ajax(urlScript)
                        .done(function onLoaded(data) {
                            //debugger
                            if (urlScript.endsWith('.css')) {
                                if (data == null) {
                                    debugger
                                }
                                $("<style type='text/css'> " + data + " </style>")
                                //.appendTo("head");
                                    .appendTo("body");
                                // debugger
                            }
                        })
                        .always(function doneLoadingFile() {
                            if (fxDone) {
                                fxDone()
                            }
                        })
                        .fail(function (a, b, c, d) {
                            console.error('failed to load', urlScript, a == null, b, c, d)
                            console.error(c.stack)
                        });
                }
            }


            function defineLoadingFx() {
                function loadJSFiles(cfg) {
                    if ($.isFunction(cfg.fxDone) == false) {
                    }
                    if (cfg.url == null && cfg.urlFl) {
                        console.warn('not ready', cfg)
                        return;
                    }

                    //console.log('zz', cfg)
                    if (cfg.urlFL) {
                        cfg.url = cfg.urlFL + cfg.urlPath
                    } else {
                        let urlPre = cfg.url.split('themes')[1]
                        urlPre = 'themes' + urlPre + '/'
                    }


                    if (cfg.before) {
                        urlPre = cfg.url.split(cfg.before)[1];
                        urlPre = cfg.before + urlPre + '/';
                        // urlPre = 'themes' + urlPre + '/'
                    }
                    urlPre = urlPre.split('//').join('/')
                    var instance = new window.CountDownTo0Helper();
                  //  debugger
                    let cfgQueue = {};
                    cfgQueue.debug = false;
                    cfgQueue.fxDone = function onFinishedLoadingAllQueueItems() {
                        if (cfg == null) {
                        }
                        if ($.isFunction(cfg.fxDone) == false) {
                        }
                        if (cfg.fxDone)
                            cfg.fxDone()
                    }
                    instance.initQueueHelper(cfgQueue)


                    window.cTo0 = instance
                    //console.log('loadJSFiles', __url);
                    // console.log('loadJSFiles',  dbg2.id, urlPre);

                    cfg.url = self.utils.unlocalize(cfg.url)


                    if ( window.skipLoadFilesOrDir2 ) {
                        let skip = window.skipLoadFilesOrDir2( cfg)
                        if ( skip ==false ) {
                            setTimeout(function (){
                                sh.cid(cfg.fxDone)
                                sh.cid(cfg.fxDone2)
                            }, 20)
                            return
                        }
                    }

                    console.log('---', cfg.url)
                  //  debugger
                    uiUtils.getUrl(cfg.url, function onGotUrl(list) {
                        //debugger
                        let dbgModeListingUrl = false
                        /*  if ( cfg.url == 'http://localhost:10110/api/fileList?dir=/mnt/db/Dropbox/projects/ritv2/videoproject/Code/code-yeti/themes/minimal_v0/js/playr/comps') {

                              u.cc()
                              dbgModeListingUrl = true
                              debugger
                          }*/
                        if ($.isString(list)) {
                            list = JSON.parse(list)
                        }

                        window.dirsRead[cfg.url] = list

                        if (list.files.length == 0) {
                            sh.cid(cfg.fxDone)
                            return;
                        }

                        if (cfg.url.includes('inv_comp')) {
                            //debugger
                        }
                        //console.log('files', list.files)
                        $.each(list.files, function appendScript(k, listItem) {
                            let dbg = [list.files, cfg.url]


                            let urlScript = urlPre + listItem;

                            if (dbgModeListingUrl) {
                                console.log(sh.t, urlScript)
                                debugger
                            }

                            self.data.qDirs[cfg.url] = list.files

                            if ( self.data.addSubDirsListForce.includes(cfg.urlPath) ) {
                                urlScript = cfg.urlPath +'/'+ listItem;
                                //debugger
                            } else {

                                if (cfg.processEachFile) {
                                    urlScript = cfg.processEachFile(listItem, cfg.url, cfg)
                                }

                                if (urlScript == null || urlScript == false) {
                                    console.warn('skipped', listItem, cfg)
                                    return
                                }



                            }


                            if (listItem == 'ADialog.js') {
                                //console.log('loadJSFiles.2', __url);
                                //console.log('loadJSFiles.2',  dbg2.id, urlPre);
                                //debugger
                                return;
                            }
                            if (listItem.includes('.') == false) {
                                if (cfg.dbgFile) {
                                    console.log('not a file', listItem)
                                }
                                return
                            }
                            if (listItem.includes('.bak')) {
                                if (cfg.dbgFile) {
                                    console.log('not a file .bak', listItem)
                                }

                                return
                            }
                            if (listItem.includes('.html')) {
                                if (cfg.dbgFile) {
                                    console.log('not a file .html', listItem)
                                }

                                return
                            }
                            if (listItem.includes('_tmp_')) {
                                if (cfg.dbgFile) {
                                    console.log('not a file', listItem)
                                }

                                return
                            }
                            if (cfg.onlyMatches && !listItem.includes(cfg.onlyMatches)) {
                                return;
                            }
                            let skipX = false;
                            if (cfg.loadSkipMatches) {
                                // debugger
                                sh.each(cfg.loadSkipMatches, function skipItem(k, v) {
                                    //console.log('---', listItem, v)
                                    if (listItem.includes(v)) {
                                        skipX = true
                                        // debugger
                                        return false
                                    }
                                })
                            }
                            if (skipX) {
                                console.log('skip', listItem)
                                return;
                            }
                            if (cfg.skipUrls) {
                                $.each(cfg.skipUrls, function onSkip(k, skipUrl) {
                                    if (listItem == skipUrl) {
                                        return;
                                    }
                                })
                            }

                            sh.tab = '\t'

                            // urlScript = urlScript.replace('//', '/')
                            urlScript = self.utils.unlocalize(urlScript)

                            //  instance.addCountDownItem(urlScript)
                            /* let h  = {}; //handle this more elegantly by adding to addCountDownItem
                             h.url = urlScript;
                             h.urlLoaded = false;
                             setTimeout(function ensureLoadingOfScript() {
                             if ( h.urlLoaded == false ) {
                             console.error('did not load', h.url)

                             }
                             }, 3000)
                             */

                            window.lastScript = urlScript


                            if ( window.skipLoadFilesOrDir ) {
                                let skip = window.skipLoadFilesOrDir(listItem, cfg)
                                if ( skip ==false ) {
                                    asd.g
                                    instance.removeCountDownItem(urlScript)
                                    return
                                }
                            }


                            if (self.settings.reloadCache2) {
                                instance.addCountDownItem(urlScript)
                                if (self.data.dbgUrl)
                                    console.warn('>>>', urlScript)
                                self.utils.downloadX(urlScript, function doneWith() {
                                    instance.removeCountDownItem(urlScript)
                                })
                                return;
                            }

                            if (cfg.css === true && urlScript.endsWith('.css')) {
                                if (cfg.dbgFile)
                                    console.log('loadJSFiles-css', listItem, urlScript)
                                // <link rel="stylesheet" href="/themes/minimal_v0/styles/style.css" type="text/css" charset="utf-8"/>
                                let cssFile = document.createElement("link");
                                cssFile.type = "text/css";
                                cssFile.rel = "stylesheet"
                                cssFile.href = urlScript;
                                cssFile.onerror = function error(a, b, c) {
                                    console.error('loadJSFile.css', 'fail', listItem, urlScript)
                                    console.error('loadJSFile', a, b, c)
                                }
                                cssFile.onload = function asdf() {
                                    // console.log('on css')
                                    console.log(sh.tab, 'on.css', urlScript)
                                    instance.removeCountDownItem(urlScript)
                                }
                                if (cfg.dbgFile) {
                                    console.log(sh.tab, 'css', urlScript)
                                }
                                instance.addCountDownItem(urlScript)
                                document.head.appendChild(cssFile);

                                return;
                            }
                            if (urlScript.endsWith('.js') == false) {
                                return;
                            }
                            // debugger
                            if (cfg.dbgFile) {
                                console.log('loadJSFiles', listItem, urlScript)
                            }
                            let script = document.createElement('script');
                            //script.type = "text/javascript";


                            script.src = urlScript;


                            if (cfg.dbgFile) {
                                console.log(sh.tab, 'src', urlScript)
                            }
                            //debugger
                            script.onload = function onload() {
                                if (cfg.dbgFile) {
                                    console.log(sh.tab, 'on.src', urlScript)
                                }
                                //h.urlLoaded = true;
                                instance.removeCountDownItem(urlScript)
                            }
                            script.onerror = function error() {
                                console.error('loadJSFile', 'fail', listItem, urlScript)
                            }
                            instance.addCountDownItem(urlScript)
                            document.head.appendChild(script);

                        })


                        sh.cid(cfg.fxDone2)
                    })


                }

                window.loadJSFiles = loadJSFiles;


                window.onLoad_QuickBasics_CSSDir = function onLoad_QuickBasics_CSSDir(dir) {
                    //dir = dir
                    dir = dir.replace(/\\/gi, "/");
                    let urlPath = dir
                    let cfg = {}
                    cfg.urlFL = 'http://localhost:10110/api/fileList?dir='

                    cfg.urlPath = urlPath;
                    cfg.processEachFile = function processEachFile(urlFile, preUrl, cfgF) {
                        //http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/quickForm/QuickFormInner_Checkbox.js
                        let converted = 'http://localhost:10110/grid/grid/' +
                            cfgF.url + urlFile
                        converted = cfgF.urlFL
                        converted = converted.replace('dir=', 'file=')
                        converted += cfgF.urlPath
                        converted += '/' + urlFile
                        ///mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/' + url
                        //console.log('convertUrl', cfgF.urlFL, converted)
                        return converted;
                    }
                    cfg.css = true;
                    loadJSFiles(cfg)

                    //loadJSFiles(url, ['ADialog.js'])
                }

            }

            defineLoadingFx();


            p.proc = function debugLogger() {
                if (self.silent == true) {
                    return;
                }
                sh.sLog(arguments);
            };
        }

        window.QuickLoadV2 = QuickLoadV2;

        QuickLoadV2.loadFile = function loadFile(file, skipTimestamp, serverO) {

            let server = sh.dv(serverO, 'http://localhost:10110')
            if (qlv2Loader.settings.reloadCache2) {
                if (file.endsWith('.js') || file.endsWith('.html')) {


                } else {
                    //go to local server instaead
                    server = u.urls.getHost(window.location.toString())
                }


            }
            let url = [server, '/api/fileList?file=', file]
            if (skipTimestamp != true) {
                //   url = url.concat(['?=', Math.random()+Date.now()])
                //  url = url.concat(['&', Math.random()])
            }
            url = url.join('')
            url = qlv2Loader.utils.unlocalize(url)

            return url;
        }

        QuickLoadV2.loadFileJquery = function loadFile(urlScript, fxSrever, skipTimestamp, server) {

            urlScript = QuickLoadV2.loadFile(urlScript)
            jQuery.getScript(urlScript)
                .done(function onLoaded() {
                })
                .always(function doneLoadingFile() {
                    sh.cid(fxSrever)
                })
                .fail(function (a, b, c, d) {
                    console.error('failed to load', url, a == null, b, c, d)
                    console.error(c.stack)
                });
        }


        window.qL2IsReady = function qL2S(fx) {
            if (window.quickLoaderLoaded != true) {


                if (fx) {
                    setTimeout(function sdfsdf() {
                        fx();
                    }, 500)

                }
                return true
            }

        }


        window.onLoad_QuickBasics_LoadDirZ =
            function onLoad_QuickBasics_LoadDirZ(dir, onlyMatches, loadSkipMatches) {
                //dir = dir
                let dirOrig = dir;

                let cfg = {}
                if (dirOrig.urlPath) {
                    cfg = dirOrig
                    dir = dirOrig.urlPath;
                }
                dir = dir.replace(/\\/gi, "/");
                if (dir.includes('/Dropbox/')) {
                    dir = '/mnt/db/Dropbox' + dir.after('Dropbox')
                    ///mnt/db/Dropbox/
                }
                //  debugger


                let urlPath = dir


                cfg.urlFL = 'http://localhost:10110/api/fileList?dir='
                cfg.urlPath = urlPath;
                cfg.processEachFile = function processEachFile(urlFile, preUrl, cfgF) {
                    //http://localhost:10110/grid/grid//mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/comps/quickForm/QuickFormInner_Checkbox.js
                    let converted = 'http://localhost:10110/grid/grid/' +
                        cfgF.url + urlFile
                    converted = cfgF.urlFL
                    converted = converted.replace('dir=', 'file=')
                    converted += cfgF.urlPath
                    converted += '/' + urlFile
                    ///mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/' + url
                    //console.log('convertUrl', cfgF.urlFL, converted)
                    return converted;
                }
                onlyMatches = sh.dv(dir.onlyMatches, onlyMatches)
                loadSkipMatches = sh.dv(dir.loadSkipMatches, loadSkipMatches)
                if (cfg.urlPath.endsWith('code-yeti/themes/minimal_v0/js/playr/')) {
                    //debugger
                }
                if (onlyMatches) {
                    // debugger
                }
                if (cfg.onlyMatches == null)
                    cfg.onlyMatches = onlyMatches
                if (cfg.loadSkipMatches == null)
                    cfg.loadSkipMatches = loadSkipMatches
                cfg.before = '/js/'


                let autoQueueMode = false;
                if (autoQueueMode) {

                } else {
                    if (window.queueHelper == null) {
                        window.loadQueueId = 0
                        var q = new window.QueueHelper()
                        let cfgQueue = {};
                        cfgQueue.fxQueue = loadJSFiles
                        q.initQueueHelper(cfgQueue)

                        window.queueHelper = q;
                    }

                    /*function function(){
                     }
                     window.queueHelper = uiUtils.setOnIfNull({setObj:window, prop:'queueHelper', fxCreate: createQueueHelper})
                     */
                    window.loadQueueId++
                    cfg.id = window.loadQueueId
                    cfg.id += '_' + dir
                    //debugger
                    window.queueHelper.addQueueItem(cfg)
                    // loadJSFiles(cfg)

                    //loadJSFiles(url, ['ADialog.js'])
                }

            }


        if (window.qlInitAppFx) {
            window.qlInitAppFx()
            window.qlInitAppFx = null
        }

    }

    ()


)
;