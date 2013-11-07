"use strict";

/* @Author: Zakeria Hassan <zak.hassan1010@gmail.com>
 * @Date: Nov. 6, 2013
 * @Usage: Generally StorageIO uses IndexedDB http://www.w3.org/TR/IndexedDB/.  
 * If IndexedDB isn't isn't supported then it use as an alternative 
 * WebSQL http://www.w3.org/TR/webdatabase/.
 * 
 * The MIT License (MIT)
 * Copyright (c) 2013 Zakeria Hassan
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *  
 *  Dependencies:
 *  require.js  - http://requirejs.org/docs/release/2.1.9/comments/require.js
 *  backbone.js - http://backbonejs.org/
 *  underscore.js - http://underscorejs.org/
 *  
 */

/* 
 * @parm global : 'this' object
 * @parm runner : 'callback' function
 */
(function (global, runner) {

  if (typeof exports === 'object' && typeof require === 'function') {
    module.exports = runner(require("underscore"), require("backbone"));
  } else if (typeof define === "function" && define.amd) {
    define(["underscore", "backbone"], function (_, Backbone) {
      return runner(_ || global._, Backbone || global.Backbone);
    });
  } else {
    // RequireJS isn't being used. Make sure underscore and backbone are loaded in script tags
    runner(_, Backbone);
  }
})(this, function (_, Backbone) {
  var global = this;
  // Use Backbone and RequireJS to improve code  
  var StorageIO = function (_dbname) {
      if (global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB) {
        return {
          indexedDB: global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB,
          IDBTransaction: global.IDBTransaction || global.webkitIDBTransaction || global.msIDBTransaction,
          IDBKeyRange: global.IDBKeyRange || global.webkitIDBKeyRange || global.msIDBKeyRange,
          req: null,
          result: null,
          dbName: _dbname || "test",
          error: function (event) {
            // Should do some error handling
            // TODO: This code is not complete.. Will finish soon
            console.log("request failed!");
          },
          success: function (event) {
            this.result = this.req.result;
          },
          read: function () {
            //TODO:This code is not complete.. Will finish soon
          },
          rm: function () {
            //TODO:This code is not complete.. Will finish soon
          },
          /**
           *  @param {Object} has three keys and looks like this: {      "key" : string, 
           *                                                           "value" : string, 
           *                                                        "isUnique" : bool   }
           * Establishs a database connection and if this is a a new database
           * It creates the columns that will be used. It sets up the functions
           * that are executed if the req's fail or succeed
           */
          open: function (columns) {
            this.req = this.indexedDB.open(this.dbname);
            this.req.onerror = this.error;
            this.req.success = this.success;
            // Comment: the "onupgradeneeded" is triggered when a new database is created and   
            // TODO: Must be able to write key value pairs to the indexedDB.
            // TODO: This code is not complete.. Will finish soon
            this.req.onupgradeneeded = function (event) {
              try {
                var st = event.currentTarget.result.createObjectStore(this.dbname, {
                  keypath: 'id',
                  autoIncrement: true
                });
                if (!columns) throw new Error("Error code: 999 - Missing column variable in open function");
                // Setting columns up
                for (var i = 0; i < obj.length; i++) {
                  st.createIndex(columns[i]["key"], columns[i]["value"], {
                    unique: columns[i]["isUnique"]
                  });
                }
              } catch (e) {
                  // TODO: Must handle exception 
              } finally {
                  // TODO: clean up 
              }
            }
            return this;
          },
          /**
           * @param {Object} has three keys and looks like this: { "key":string, value":string, "isUnique":bool}
           */
          write: function (obj) {


          },
          close: function () {};
        };
      } else {
        /*
         * As a fallback solution to acheive cross browser compatibility 
         * I've included a Web SQL Backed solution.
         * TODO:This code is not complete.. Will finish soon
         */
        return {
          read: function () {},
          write: function () {},
          rm: function () {}
        }
      }

    };


  global.StorageIO = StorageIO;
});