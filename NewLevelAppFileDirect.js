function NewLevelAppFileDirect() {
    var p = NewLevelAppFileDirect.prototype;
    p = this;
    var self = this;
    self.settings = {};
    self.data = {}

    p.init = function initNewLevelAppFileDirect(config = {}) {
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


    p.loadQuickLoader = function loadQuickLoader(a) {
        let url = 'http://192.168.1.179:10110'
            + '/grid/grid/G:/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base/quickloadv2.js'
        if (self.settings.isRemoteItem) {
            url = 'quickloadv2.js'
             url =  '/grid/grid/G:/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base/quickloadv2.js'

        }
        if (window.QuickLoadV2 == null) {
            window.loadJS2(url, self.onLoadedQuickLoad)
        } else {
            self.onLoadedQuickLoad()
        }
    }

    p.loadNewLevelAppFileDirect = function testNewLevelAppFileDirect(config) {
        self.createLoadMethod()
        p.loadJQuery()
    }

    p.createLoadMethod = function createLoadMethod() {

        loadJS = function (src) {
            var jsLink = $("<script type='text/javascript' src='" + src + "'>");
            $("head").append(jsLink);
        };


        loadJS2 = function loadJS2(src, fx) {

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

        function sdfsdf() {
            function loadJS2(src, fx) {
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

            //http://192.168.1.179:10110/api/fileDirect/mnt/db/Dropbox/projects/crypto/mp/cordova/test1/CordovaProject/www/index2.html
            //  src = 'http://192.168.1.179:10110/api/fileDirect/mnt/db/Dropbox/projects/crypto/mp/cordova/test1/CordovaProject/www/index2.html'
            let src = 'http://192.168.1.179:10110/api/'
                + '/grid/grid/G:/Dropbox/projects/crypto/mp/GrammarHelperServer/sharedResourcesGrid/js/quick_base/quickloadv2.js'
            loadJS2(src)

        }

        //sdfsdf()


        window.debuggerM = true;
    }

    p.loadJQuery = function loadJQuery(a) {
        let url = 'http://192.168.1.179:10110/jquery.js'
        //debugger
        if (self.settings.isRemoteItem) {
            url = '/jquery.js'
        }
        window.loadJS2(url, self.loadQuickLoader)
    }

    p.onLoadedQuickLoad = function onLoadedQuickLoad() {
        self.preUrlStuff()
        self.addInitFiles()
        self.loadAppQL()
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
        window.initApp = function initApp() {
            console.log('...retry reload....')
            // debugger
            if (window.qCX == null) {
                setTimeout(initApp, 250)
                return
            }


            if ( window.skipInitQlApp ) {
                console.log('window.skipInitQlApp', 'debugger', '')
                return
            }


            //console.log('...wha is this?....')
            if (qCX.waitForCommand(qCX.c.SETUP_APP_AREAS_PLAYR, initApp)) {
                return;
            }

            sh.cid(window.fxApp2Offset)

            if (window.appNLAFD) {
                window.appNLAFD()
                return
            }
            makeSKCV()
            //makeMayorMenu()
            return;
        }

        window.uv2 = true
    }

    p.loadAppQL = function loadAppQL() {


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
        var instance = new QuickLoadV2();
        var config = {};
        if (window.fdCachedMode) {
            config.cacheFile = 'http://localhost:10110/api/fileList?file=' + ('/home/user1/trash/storedFiles2_Presentation/react.templates.min.html')
        }
        //config.saveFileCache = true
        instance.init(config)

        // return

        /*  instance.addDir2(dirBase + 'dialog/')
          instance.addDir2(dirBase + 'actions/')
*/


        if (window.fxUpdateFxToLoadNLAF) {
            window.fxUpdateFxToLoadNLAF(instance)
        } else {
            let dirBase = '/mnt/db/Dropbox/projects/crypto/mp/Evernote/logViewer/public_html/rrr/'
            window.urlPreUI_BaseOverride = dirBase
            instance.addDirSubs(dirBase)
        }

        instance.loadStuff();

        config.fxDone = function () {

            console.log('finished item')
            window.initApp()

            sh.cid(window.fxInit2)
            sh.cid(window.fxWhenBaseAppLoaded)
        }


    }


    p.testNewLevelAppFileDirect = function testNewLevelAppFileDirect(config) {
    }

    p.proc = function debugLogger() {
        if (self.silent == true) {
            return;
        }
        sh.sLog(arguments);
    };
}


function fxTest_NewLevelAppFileDirect() {
    if (window.loaded1x) {
        return
    }
    window.loaded1x = true
    let i = instance = new NewLevelAppFileDirect();
    var config = {};
    i.init(config)
    i.loadNewLevelAppFileDirect();
}

fxTest_NewLevelAppFileDirect()