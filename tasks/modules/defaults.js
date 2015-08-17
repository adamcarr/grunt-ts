var utils = require('./utils');
exports.TypeScriptDefaults = {
    allowBool: false,
    allowImportModule: false,
    amdloader: null,
    compile: true,
    declaration: false,
    emitDecoratorMetadata: false,
    experimentalDecorators: false,
    mapRoot: '',
    module: null,
    noImplicitAny: false,
    noResolve: false,
    comments: null,
    removeComments: null,
    sourceMap: true,
    sourceRoot: '',
    target: null,
    verbose: false,
    fast: null,
    watch: null,
    compiler: '',
    html: null,
    htmlModuleTemplate: null,
    htmlVarTemplate: null,
    htmlOutputTemplate: null,
    htmlOutDir: null,
    htmlOutDirFlatten: false,
    failOnTypeErrors: true,
    noEmitOnError: false,
    preserveConstEnums: false,
    suppressImplicitAnyIndexErrors: false,
    noEmit: false,
    inlineSources: false,
    inlineSourceMap: false,
    newLine: utils.eol,
    isolatedModules: false,
    noEmitHelpers: false,
    additionalFlags: '',
    templateCache: null,
    targetName: ''
};
exports.GruntTSDefaults = applyGruntTSDefaults(exports.TypeScriptDefaults);
function applyGruntTSDefaults(options) {
    options.sourceMap = true;
    options.target = 'es5';
    options.htmlModuleTemplate = '<%= filename %>';
    options.htmlVarTemplate = '<%= ext %>';
    options.fast = 'watch';
    return options;
}
//# sourceMappingURL=defaults.js.map