var fs = require('fs');

function transverseTopDown(ast, fn, parents) {
    if (ast === null || ast === undefined)
        return ast;
    if (Array.isArray(ast)) {
        var arr_obj = {
            type: '$transverseTopDown$array',
            source: ast,
            results: [],
            idx: 0,
            transverse: function (n, p) {
                return hb.transverseTopDown(n, fn, p || parents);
            }
        }

        var p = [arr_obj].concat(parents ? parents : []);
        for (; arr_obj.idx < arr_obj.source.length; arr_obj.idx++) {
            var itm = arr_obj.source[arr_obj.idx];
            var r = hb.transverseTopDown(itm, fn, p);
            if (itm != null && typeof itm === 'object' && typeof itm.type === 'string') {
                if (r != null)
                    arr_obj.results.push(r);
            } else
                arr_obj.results.push(r);
        };
        ast = arr_obj.results;

    } else if (typeof ast === 'object') {
        if (typeof ast.type === 'string') {
            var result;
            if (fn) {
                var f;
                if (typeof fn === 'function')
                    f = fn;
                else
                    var f = fn[ast.type];
                if (!f)
                    f = fn.default;
                if (f)
                    result = f(ast, parents, function transverse(subnode) {
                        var p = [copia].concat(parents ? parents : []);
                        return hb.transverseTopDown(subnode, fn, p);
                    });
                else
                    result = undefined;
            }

            if (typeof result !== 'undefined')
                return result;
            var copia = ast;
            var p = [copia].concat(parents ? parents : []);
            ast = {};
            for (var prop in copia) {
                var o = copia[prop];
                var r = hb.transverseTopDown(o, fn, p);
                if (o != null && typeof o === 'object' && typeof o.type === 'string') {
                    if (r != null)
                        ast[prop] = r;
                } else
                    ast[prop] = r;
            }
            //            } else if (typeof ast === 'object') {
            //                var copia = ast;
            //                ast = {};
            //                for (var prop in copia) {
            //                    ast[prop] = transverseTopDown(copia[prop], fn, parents);
            //                }
        }
    }
    return ast;
}
