/// <reference path="../defs/tsd.d.ts"/>
/// <reference path="../tasks/modules/interfaces.d.ts"/>
/// <reference path="../defs/csproj2ts/csproj2ts.d.ts" />
exports.decoratorMetadataPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.emitDecoratorMetadata === true &&
            options.experimentalDecorators === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected emitDecoratorMetadata === true and experimentalDecorators === true";
    });
};
exports.decoratorMetadataNotPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.emitDecoratorMetadata === false) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected emitDecoratorMetadata === false";
    });
};
exports.experimentalDecoratorsPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.experimentalDecorators === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected experimentalDecorators === true";
    });
};
exports.noEmitPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.noEmit === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected noEmit === true";
    });
};
exports.noEmitNotPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.noEmit === false) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected noEmit === false";
    });
};
exports.inlineSourcesPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.inlineSources === true &&
            options.sourceMap === false &&
            options.inlineSourceMap === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        var result = JSON.stringify({
            inlineSources: options.inlineSources,
            sourceMap: options.inlineSources,
            inlineSourceMap: options.inlineSourceMap
        });
        throw "expected inlineSources and inlineSourceMap, but not sourceMap.  Got " + result;
    });
};
exports.inlineSourcesAndInlineSourceMapPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.inlineSources === true &&
            options.sourceMap === false &&
            options.inlineSourceMap === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        var result = JSON.stringify({
            inlineSources: options.inlineSources,
            sourceMap: options.inlineSources,
            inlineSourceMap: options.inlineSourceMap
        });
        throw "expected inlineSources and inlineSourceMap, but not sourceMap.  Got " + result;
    });
};
exports.inlineSourceMapPassedWithSourceMap = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.inlineSources === false &&
            options.sourceMap === false &&
            options.inlineSourceMap === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        var result = JSON.stringify({
            inlineSources: options.inlineSources,
            sourceMap: options.inlineSources,
            inlineSourceMap: options.inlineSourceMap
        });
        throw "expected inlineSourceMap only.  Got " + result;
    });
};
exports.inlineSourcesNotPassed = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.inlineSources === false && options.sourceMap === false) {
            resolve({
                code: 0,
                output: ""
            });
        }
        var result = JSON.stringify({
            inlineSources: options.inlineSources,
            sourceMap: options.inlineSources,
            inlineSourceMap: options.inlineSourceMap
        });
        throw "expected inlineSourcesPassed and sourceMap false.  Got " + result;
    });
};
exports.vsproj_test = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.sourceMap === true &&
            options.removeComments === false &&
            options.module === 'commonjs' &&
            options.target.indexOf('vsproj_test') >= 0) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected sourceMap === true, removeComments===" +
            "false, module===commonjs, outDir===vsproj_test.  Was " +
            JSON.stringify([options.sourceMap,
                options.removeComments, options.module, options.outDir]);
    });
};
exports.vsproj_test_config = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.sourceMap === false &&
            options.removeComments === true &&
            options.outDir.indexOf('vsproj_test_config') >= 0) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected sourceMap === false, removeComments===" +
            "true, outDir contains vsproj_test_config.  Was " +
            JSON.stringify([options.sourceMap,
                options.removeComments, options.outDir]);
    });
};
exports.param_newLine_CRLF = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.newLine === "CRLF") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected newLine=CRLF.  Was " +
            JSON.stringify([options.newLine]);
    });
};
exports.param_newLine_LF = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.newLine === "LF") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected newLine=LF.  Was " +
            JSON.stringify([options.newLine]);
    });
};
exports.files_testFilesUsedWithDestAsAFolder = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.outDir === "test/multifile/files_testFilesUsedWithDestAsAJSFolder" &&
            options.out || "not specified" === "not specified") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected --out not specified and outDir=test/multifile/files_testFilesUsedWithDestAsAJSFolder.  Was " +
            JSON.stringify([options.outDir]);
    });
};
exports.files_testFilesUsedWithDestAsAFile = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.out === "test/multifile/files_testFilesUsedWithDestAsAJSFile/testDest.js" &&
            options.outDir || "not specified" === "not specified") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected --outDir not specified and out=test/multifile/files_testFilesUsedWithDestAsAJSFile/testDest.js.  Was " +
            JSON.stringify([options.outDir]);
    });
};
exports.test_systemJS = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.module === "system") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected system.  Was " +
            JSON.stringify([options.module]);
    });
};
exports.test_umd = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.module === "umd") {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected umd.  Was " +
            JSON.stringify([options.module]);
    });
};
exports.test_isolatedModules = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.isolatedModules === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected --isolatedModules.  Got " + JSON.stringify(options);
    });
};
exports.test_noEmitHelpers = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.noEmitHelpers === true) {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected --noEmitHelpers.  Got " + JSON.stringify(options);
    });
};
exports.test_additionalFlags = function (strings, options) {
    return new Promise(function (resolve, reject) {
        if (options.additionalFlags === '--version') {
            resolve({
                code: 0,
                output: ""
            });
        }
        throw "expected --version.  Got " + JSON.stringify(options);
    });
};
//# sourceMappingURL=commandLineAssertions.js.map