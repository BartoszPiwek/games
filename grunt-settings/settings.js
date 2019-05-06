module.exports = {
    
    // Version { automatic set }
    version                 : null,
    // Lang
    website_locale          : 'pl-PL',
    /* Show information about disable javascript */
    website_info_off_javascript     : true, 
    website_info_old_browser        : true, 

    /* Path */
    pathToPublic            : 'public',
    pathToFrontBoxPlugins   : './../FrontBox-Plugins',

    "pathToMainCSS"         : './css', 
    "pathToMainCSSDev"      : './public/dev', 
    "pathToMainCSSProd"     : './public/prod', 
    "pathToDev"             : "./public/dev",
    "pathToProd"            : "./public/prod",
    "pathToModulesDev"      : "'../css'",
    "pathToModulesProd"     : "'./public/prod/css'",

    "pathToFavicon"         : "src/template/includes/favicon.html",

    /* Prefix */
    "prefixFaviconHTML"     : "/images/favicon/",

    /* Functions */
    "getYear"               : "<%= grunt.template.today('yyyy') %>",

    /* Project type */
    "isWordpress"           : false, 

    /* Framework */
    framework               : false, // false,frontbox
    cssPreprocessor         : 'less', // false,less,sass
    htmlPreprocessor        : 'pug', // false,pug
    jsPreprocessor          : 'browserify', // false,browserify
    jsExtension             : 'ts',

    /**
     * Productive options 
     * css-mqpacker|
     */
    cssTasks                : ['css-mqpacker'],
    jsTasks                 : ['babel', 'strip_code', 'uglify'],

    /* Debug */
    debug                   : false,
    workingWithFrontbox     : false,

};