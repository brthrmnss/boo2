function NewLevelAppFileDirectV2() {
    var p = NewLevelAppFileDirectV2.prototype;
    p = this;
    var self = this;
    self.settings = {};
    self.data = {}

    p.init = function initNewLevelAppFileDirectV2(config = {}) {


        if (window.githubLiveMode) {
            window.fxRedirectUrls2 = function fxRedier(url) {
                url = url.after('trash/')
                return url
            }
        }

        if (window.fdCachedMode) {
            window.qlv2 = true;
            /*
          //http://localhost:10110/fonts/glyphicons-halflings-regular.woff2
          //http://localhost:10110/themes/minimal_v0/staticz/fonts/glyphicons-halflings-regular.ttf
          window.urlPreUI
          window.urlPreUI = 'http://127.0.0.1:33037/themes/minimal_v0/'
          window.urlPreUI = '/themes/minimal_v0/'
          */
        } else {
        }

        self.settings = config
        window.setZoomDefaultDisable = true

        let location = window.location.toString()

        let isLocal = false
        if (window.location.toString().includes('localhost')) {
            isLocal = true
        } else if (window.location.toString().includes('192')) {
            isLocal = true
        } else if (location.includes('file:///android_asset/www/index.html')) {
            isLocal = true
        } else {
        }
        if (window.location.toString().includes('https://')) {
            self.settings.isRemoteItem = true
            isLocal = false
        }
        if (isLocal == false
            || window.location.toString().includes(':11200')) {
            if (window.location.toString().includes('liveMode2') != true) {
                self.settings.isRemoteItem = true
                console.log('isremoteitem')
            }
        }
    }

    p.loadNewLevelAppFileDirectV2 = function testNewLevelAppFileDirectV2(config) {
        self.addLoadJSScript()
        self.loadPromiseHelper(self.loadAppFiles)
    }


    p.addLoadJSScript = function addLoadJSScript() {

        loadJS2 = function loadJS2(src, fx, clazzName) {

            if ( clazzName != null && window[clazzName] ){
                console.warn('skip', clazzName, src)
                fx()
                return
            }
            if (window.navigator.userAgent.includes('Macintosh') == true) {
                src = src.replace('192.168.1.179', '127.0.0.1')
            }

            var script = document.createElement('script');
            script.src = src;
            script.onload = function (a) {
                //alert('got js ' + src)
                if (fx != null) {
                    fx(a)
                }
            };
            document.head.appendChild(script);
        };

        window.loadJS2 = loadJS2

        window.debuggerM = true;
    }



    p.loadPromiseHelper = function loadPromiseHelper(fx) {
        let file = "/mnt/db/Dropbox/projects/crypto/mp/testingFramework/PromiseHelperV4.js"
        let src = "http://127.0.0.1:10110/api/fileList?file=" + file
        loadJS2(src, fx, 'PromiseHelperV4')
    }

    p.loadAppFiles = function loadAppFiles() {
        let i = new PromiseHelperV4();
        var config = {};
        i.init(config)


        i.add(self.loadJQuery)
        i.add(self.loadQuickLoaderV4)
        i.add(self.onLoadedQuickLoad)
        i.add(self.loadAppQL)
        i.add(self.makeServerHelperUrls)
        i.add(self.initUserFx)
        i.add(function onf(cb, t) {
            cb()
            console.log('finished loading app newDirect')
            sh.cid(window.fxStartApp)
        })
        i.start()
    }

    p.loadJQuery = function loadJQuery(cb) {
        let url = 'http://192.168.1.179:10110/jquery.js'
        if (self.settings.isRemoteItem) {
            url = '/jquery.js'
        }
        window.loadJS2(url, cb, 'jQuery')
    }

    p.getJSFile = function getJSFile(file, cb, clazzName) {
        let url =
            'http://127.0.0.2:10110/api/fileList?file='
        url += file
        window.loadJS2(url, cb, clazzName)
    }


    p.loadQuickLoaderV4 = function loadQuickLoaderV4(cb) {
        let file =
            ('/mnt/db/Dropbox/projects/crypto/mp/GrammarHelperServer/' +
                'sharedResourcesGrid/js/quick_base/quickloadv4.js')
        self.getJSFile(file, cb, 'QuickLoadV4')
    }

    p.onLoadedQuickLoad = function onLoadedQuickLoad(cb) {
        self.preUrlStuff()
        self.addInitFiles()
        cb()
    }

    p.preUrlStuff = function preUrlStuff(a) {
        window.noSearch = true;
        window.urlPreUI = 'http://127.0.0.1:33037/themes/minimal_v0/'
        window.urlPreUI = '/themes/minimal_v0/'
        window.urlPreUI = 'http://localhost:10110/api/fileList?file=/mnt/db/Dropbox/projects/crypto/mp/Evernote/logViewer/public_html/'

        window.fxRedirectAllUrls = function fxRedirectAllUrls(src) {
            if (window.location.href.includes('android_asset')) {
                if (src.includes('127.0.0.2')) {
                    src = src.gsub('127.0.0.2', '192.168.1.179')
                    src = src.gsub('https://', 'http://')
                } else if (src.includes('localhost')) {
                    src = src.gsub('localhost', '192.168.1.179')
                    src = src.gsub('https://', 'http://')

                } else {
                    if (src.includes('192.168.1.179') == false) {
                        console.log('src', src)
                        debugger
                    }

                }
            }
            return src
        }

        if (window.location.href.includes('android_asset')) {
            window.urlPreUI = window.urlPreUI.replace('localhost', '192.168.1.179')
            window.forceReloaderGH_LoadEval = true
        }


        window.optCompMode = true;
        //window.blockRemoteFailedDebugger = true

        window.qd_hideAll = true;
        window.qd_quickStateMode = true;
        window.testingAppMode = true;
        window.isTest = true;
        // window.testingAppMode = false;

        //window.creditChill();

        //window.QD2_StackMode = true;

        window.noUserAccounts = true

        window.holdStates = true;

        //window.creditChillMode = true;

        window.errorDebuggerUserInfo = false;
        window.fxRemoteFailed = function fxRemoteFailed(a, b, c) {
            if (a) {
                if (a.responseText) {
                    try {


                        let json = JSON.parse(a.responseText)

                        if (json.msg.includes('not logged')) {
                            u.setHash('login')
                            //
                            //window.location.href = 'login.html'
                            //debugger
                            //window.href
                        }
                    } catch (e) {

                        //    console.error('caught rymote erroror', e)

                        console.error(a.responseText)
                    }
                }
            }
        }
    }

    p.addInitFiles = function addInitFiles() {
        window.uv2 = true
    }

    p.loadAppQL = function loadAppQL(cb) {


        if (window.urlGPreUrl == null) {
            window.urlGPreUrl = 'http://localhost:10110/grid/grid/' +
                'G:/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid'// +
            //'/comps
            window.urlGPreUrl = '/mnt/db/Dropbox/projects/crypto/mp/' +
                'GrammarHelperServer/sharedResourcesGrid'// +
            window.urlGPreUrl = 'http://localhost:10110/api/fileList?file=' + (window.urlGPreUrl)
        }


        if (window.location.href.includes('android_asset')) {
            window.urlGPreUrl = window.urlGPreUrl.replace('localhost', '192.168.1.179')
        }


        window.validQApps = ['appInv']



        //window.urlPreUI = ''
        //var instance = new QuickLoadV3();
        var instance = new QuickLoadV4();
        var config = {};

       // window.fdCachedMode=true
        // window.fdCachedMode=false
        if (window.fdCachedMode) {
            config.reloadCache2 = true;
            config.cacheFile = 'http://localhost:10110/api/fileList?file=' + ('/home/user1/trash/storedFiles2_Presentation/react.templates.min.html')
            config.cacheFile = 'http://localhost:10110/api/fileList?file='
                + ('/home/user1/trash/rcPub/themes/cached/react.templates.min.html')
            //  config.cacheFile = ''
            if ( window.fdCachedModeUrl ) {
                config.cacheFile = window.fdCachedModeUrl
            }
        }
        //config.saveFileCache = true


        //config.saveFileCache = true
        instance.init(config)

        if (window.fxUpdateFxToLoadNLAF) {
            window.fxUpdateFxToLoadNLAF(instance)
        } else {
            let dirBase = '/mnt/db/Dropbox/projects/crypto/mp/Evernote/logViewer/public_html/rrr/'
            window.urlPreUI_BaseOverride = dirBase
            //   instance.addDirSubs(dirBase)
        }

        instance.loadAllItems();

        config.fxDone = function () {
            console.log('finished item')
            // window.initApp()
            sh.cid(window.fxInit2)
            sh.cid(window.fxWhenBaseAppLoaded)
            cb()
        }
    }

    p.initApp = function initApp(cb) {
        console.log('...retry reload....')
        // debugger
        if (window.qCX == null) {
            setTimeout(initApp, 250)
            return
        }

        if (window.skipInitQlApp) {
            console.log('window.skipInitQlApp', 'debugger', '')
            return
        }
        if (qCX.waitForCommand(qCX.c.SETUP_APP_AREAS_PLAYR, initApp)) {
            return;
        }
        sh.cid(window.fxApp2Offset)
        if (window.appNLAFD) {
            window.appNLAFD()
            return
        }
        makeSKCV()
        cb()
        //makeMayorMenu()
    }


    p.makeServerHelperUrls = function makeServerHelperUrls(cb) {
        cb()
    }
    p.initUserFx = function initUserFx(cb) {
        cb()
    }

    p.testNewLevelAppFileDirectV2 = function testNewLevelAppFileDirectV2(config) {
    }

    p.proc = function debugLogger() {
        if (self.silent == true) {
            return;
        }
        sh.sLog(arguments);
    };
}


function fxTest_NewLevelAppFileDirectV2() {
    if (window.loaded1x) {
        //  return
        $('style').remove()
        $('link').remove()
        $('style').remove()
        $('div').remove()
    }
    window.redoingDict = {}
    window.loaded1x = true
    let i = new NewLevelAppFileDirectV2();
    var config = {};
    i.init(config)

    i.loadNewLevelAppFileDirectV2();
}

fxTest_NewLevelAppFileDirectV2()